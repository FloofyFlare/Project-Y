<template>
  <div class="hidden justify-content-left bg-neutral rounded p-5 mr-5">
    <h1>size</h1>
    <div v-for="size in sizes" :key="size" class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text text-info pr-3">{{ size }}</span>
        <input
          v-model="finalSize"
          type="radio"
          name="radio-10"
          class="radio checked:bg-red-500"
        />
      </label>
    </div>
  </div>

  <div class="hidden justify-content-left bg-neutral rounded p-5 mr-5">
    <h1>colors</h1>
    <div v-for="color in colors" :key="color" class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text text-info pr-3">{{ color }}</span>
        <input
          v-model="finalColor"
          type="radio"
          name="radio-11"
          class="radio checked:bg-red-500"
        />
      </label>
    </div>
  </div>
  <div class="dropdown justify-left mt-6">
    
    <div
      tabindex="0"
      role="button"
      class="btn m-1 h-full bg-primary text-info justify-left"
    >
    <span v-if="paymentMade" class="text-info text-xl font-semibold"
      >Payment successful! You will get an email from YuueraOfficial@gmail.com within than 24 hours with an update on your purchase</span
    >
      <span v-if="!paymentMade" class="text-info text-xl font-semibold">Buy Now</span>
      <span v-if="!txSuccuess" class="text-info text-xl font-semibold"
        >Failed, is this wallet connected?</span
      >
      
      <span v-if="!txFunds" class="text-info text-xl font-semibold"
        >Failed, not enough funds</span
      >
    </div>
    <ul
      v-if="!paymentMade"
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow text-base-100 bg-info rounded-box w-52"
    >
      <li>
        <button class="m-4 mt-4 btn bg-primary" @click="buyItemNami">
          <span class="text-info text-xl font-semibold">Nami</span>
        </button>
      </li>
      <li>
        <button class="m-4 mt-4 btn bg-primary" @click="buyItemEternl">
          <span class="text-info text-xl font-semibold">Eternl</span>
        </button>
      </li>
      <li>
        <button class="m-4 mt-4 btn bg-primary" @click="buyItemLace">
          <span class="text-info text-xl font-semibold">Lace</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const paymentMade = ref(false)
const txSuccuess = ref(true)
const txFunds = ref(true)
const balance = ref('')
const colors = ref([])
const sizes = ref([])
const finalColor = ref('')
const finalSize = ref('')
var prices = []

import { stringToHex } from '../helpers/streingToHex'
import { convertBalanceToAda } from '../helpers/convertBalanceToAda'
import { useAuthStore } from '~/store/LoginStore'
import { useProductStore } from '~/store/Product'
const productStore = useProductStore()
import {
  Address,
  BaseAddress,
  MultiAsset,
  Assets,
  ScriptHash,
  Costmdls,
  Language,
  CostModel,
  AssetName,
  TransactionUnspentOutput,
  TransactionUnspentOutputs,
  TransactionOutput,
  Value,
  TransactionBuilder,
  TransactionBuilderConfigBuilder,
  TransactionOutputBuilder,
  LinearFee,
  BigNum,
  BigInt,
  TransactionHash,
  TransactionInputs,
  TransactionInput,
  TransactionWitnessSet,
  Transaction,
  PlutusData,
  PlutusScripts,
  PlutusScript,
  PlutusList,
  Redeemers,
  Redeemer,
  RedeemerTag,
  Ed25519KeyHashes,
  ConstrPlutusData,
  ExUnits,
  Int,
  NetworkInfo,
  EnterpriseAddress,
  TransactionOutputs,
  hash_transaction,
  hash_script_data,
  hash_plutus_data,
  ScriptDataHash,
  Ed25519KeyHash,
  NativeScript,
  StakeCredential,
} from '@emurgo/cardano-serialization-lib-browser'

const walletTransaction = {
  selectedTabId: '1',
  whichWalletSelected: undefined,
  walletFound: false,
  walletIsEnabled: false,
  walletName: undefined,
  walletIcon: undefined,
  walletAPIVersion: undefined,
  wallets: [],

  networkId: undefined,
  Utxos: undefined,
  CollatUtxos: undefined,
  balance: undefined,
  changeAddress: undefined,
  rewardAddress: undefined,
  usedAddress: undefined,

  txBody: undefined,
  txBodyCborHex_unsigned: '',
  txBodyCborHex_signed: '',
  submittedTxHash: '',

  addressBech32SendADA:
    'addr1q937ewsxc200xpsf0qryezjnpg7zpnmn3y475ej87hd53vrn3q6uwfj9mf4xu9gh2ukj524pt2eg647xdwajtv4k56tq3wu4v7',
  lovelaceToSend: 2000000,
  assetNameHex: '446a65644d6963726f555344',
  assetPolicyIdHex: '8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61',
  assetAmountToSend: 1000000,
  addressScriptBech32:
    'addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8',
  datumStr: '12345678',
  plutusScriptCborHex: '4e4d01000033222220051200120011',
  transactionIdLocked: '',
  transactionIndxLocked: 0,
  lovelaceLocked: 3000000,
  manualFee: 900000,
}

import { Buffer } from 'buffer'

const protocolParams = {
  linearFee: {
    minFeeA: '444',
    minFeeB: '155381',
  },
  minUtxo: '34482',
  poolDeposit: '500000000',
  keyDeposit: '2000000',
  maxValSize: 5000,
  maxTxSize: 16384,
  priceMem: 0.0577,
  priceStep: 0.0000721,
  coinsPerUtxoWord: '34482',
}

var enabledWallet = undefined
const loggedIn = ref(false)
const store = useAuthStore()
store.refreshAccessToken()

if (store.accessToken != null) {
  loggedIn.value = true
}

async function getChangeAddress() {
  //makes srue a transaction will be sent to server also
  store.refreshAccessToken()
  try {
    const raw = await enabledWallet.getChangeAddress()
    const changeAddress = Address.from_bytes(
      Buffer.from(raw, 'hex')
    ).to_bech32()
    walletTransaction.changeAddress = changeAddress
    console.log('finished')
  } catch (err) {
    console.log(err)
  }
}
async function initTransactionBuilder() {
  const txBuilder = TransactionBuilder.new(
    TransactionBuilderConfigBuilder.new()
      .fee_algo(
        LinearFee.new(
          BigNum.from_str(protocolParams.linearFee.minFeeA),
          BigNum.from_str(protocolParams.linearFee.minFeeB)
        )
      )
      .pool_deposit(BigNum.from_str(protocolParams.poolDeposit))
      .key_deposit(BigNum.from_str(protocolParams.keyDeposit))
      .coins_per_utxo_word(BigNum.from_str(protocolParams.coinsPerUtxoWord))
      .max_value_size(protocolParams.maxValSize)
      .max_tx_size(protocolParams.maxTxSize)
      .prefer_pure_change(true)
      .build()
  )

  return txBuilder
}

async function getTxUnspentOutputs() {
  let txOutputs = TransactionUnspentOutputs.new()
  for (const utxo of walletTransaction.Utxos) {
    txOutputs.add(utxo.TransactionUnspentOutput)
  }
  return txOutputs
}

async function getUtxos() {
  let Utxos = []

  try {
    const rawUtxos = await enabledWallet.getUtxos()

    for (const rawUtxo of rawUtxos) {
      const utxo = TransactionUnspentOutput.from_bytes(
        Buffer.from(rawUtxo, 'hex')
      )
      const input = utxo.input()
      const txid = Buffer.from(
        input.transaction_id().to_bytes(),
        'utf8'
      ).toString('hex')
      const txindx = input.index()
      const output = utxo.output()
      const amount = output.amount().coin().to_str() // ADA amount in lovelace
      const multiasset = output.amount().multiasset()
      let multiAssetStr = ''

      if (multiasset) {
        const keys = multiasset.keys() // policy Ids of thee multiasset
        const N = keys.len()
        // console.log(`${N} Multiassets in the UTXO`)

        for (let i = 0; i < N; i++) {
          const policyId = keys.get(i)
          const policyIdHex = Buffer.from(policyId.to_bytes(), 'utf8').toString(
            'hex'
          )
          // console.log(`policyId: ${policyIdHex}`)
          const assets = multiasset.get(policyId)
          const assetNames = assets.keys()
          const K = assetNames.len()
          // console.log(`${K} Assets in the Multiasset`)

          for (let j = 0; j < K; j++) {
            const assetName = assetNames.get(j)
            const assetNameString = Buffer.from(
              assetName.name(),
              'utf8'
            ).toString()
            const assetNameHex = Buffer.from(assetName.name(), 'utf8').toString(
              'hex'
            )
            const multiassetAmt = multiasset.get_asset(policyId, assetName)
            multiAssetStr += `+ ${multiassetAmt.to_str()} + ${policyIdHex}.${assetNameHex} (${assetNameString})`
            // console.log(assetNameString)
            // console.log(`Asset Name: ${assetNameHex}`)
          }
        }
      }

      const obj = {
        txid: txid,
        txindx: txindx,
        amount: amount,
        str: `${txid} #${txindx} = ${amount}`,
        multiAssetStr: multiAssetStr,
        TransactionUnspentOutput: utxo,
      }
      Utxos.push(obj)
      // console.log(`utxo: ${str}`)
    }
    walletTransaction.Utxos = Utxos
  } catch (err) {
    console.log(err)
  }
}

async function buildSendTokenTransaction() {
  const price = JSON.parse(productStore.product.price)
  walletTransaction.assetAmountToSend = 1000000 * Number(price)
  const txBuilder = await initTransactionBuilder()
  const shelleyOutputAddress = Address.from_bech32(
    walletTransaction.addressBech32SendADA
  )
  const shelleyChangeAddress = Address.from_bech32(
    walletTransaction.changeAddress
  )

  let txOutputBuilder = TransactionOutputBuilder.new()
  txOutputBuilder = txOutputBuilder.with_address(shelleyOutputAddress)
  txOutputBuilder = txOutputBuilder.next()
  txBuilder.add_output(
    TransactionOutput.new(
      shelleyOutputAddress,
      Value.new(BigNum.from_str(walletTransaction.lovelaceToSend.toString()))
    )
  )
  let multiAsset = MultiAsset.new()
  let assets = Assets.new()
  assets.insert(
    AssetName.new(Buffer.from(walletTransaction.assetNameHex, 'hex')), // Asset Name
    BigNum.from_str(walletTransaction.assetAmountToSend.toString()) // How much to send
  )
  multiAsset.insert(
    ScriptHash.from_bytes(
      Buffer.from(walletTransaction.assetPolicyIdHex, 'hex')
    ), // PolicyID
    assets
  )
  txOutputBuilder = txOutputBuilder.with_asset_and_min_required_coin(
    multiAsset,
    BigNum.from_str(protocolParams.coinsPerUtxoWord)
  )
  try {
    const txOutput = txOutputBuilder.build()

    txBuilder.add_output(txOutput)

    // Find the available UTXOs in the wallet and
    // us them as Inputs
    const txUnspentOutputs = await getTxUnspentOutputs()
    txBuilder.add_inputs_from(txUnspentOutputs, 3)

    // set the time to live - the absolute slot value before the tx becomes invalid
    // txBuilder.set_ttl(51821456);

    // calculate the min fee required and send any change to an address
  } catch (error) {
    if (error === 'UTxO Balance Insufficient') {
      // Handle insufficient balance error gracefully
      txFunds.value = false
      console.error('Error:', error)
      // Show an error message to the user
      // Redirect to a funding page
    } else {
      console.error('Unhandled error:', error)
      // Handle other unforeseen errors
    }
  }
  txBuilder.add_change_if_needed(shelleyChangeAddress)
  // once the transaction is ready, we build it to get the tx body without witnesses
  const txBody = txBuilder.build()

  // Tx witness
  const transactionWitnessSet = TransactionWitnessSet.new()

  const tx = Transaction.new(
    txBody,
    TransactionWitnessSet.from_bytes(transactionWitnessSet.to_bytes())
  )

  let txVkeyWitnesses = await enabledWallet.signTx(
    Buffer.from(tx.to_bytes(), 'utf8').toString('hex'),
    true
  )
  txVkeyWitnesses = TransactionWitnessSet.from_bytes(
    Buffer.from(txVkeyWitnesses, 'hex')
  )

  transactionWitnessSet.set_vkeys(txVkeyWitnesses.vkeys())

  const signedTx = Transaction.new(tx.body(), transactionWitnessSet)

  const submittedTxHash = await enabledWallet.submitTx(
    Buffer.from(signedTx.to_bytes(), 'utf8').toString('hex')
  )
  console.log(submittedTxHash)
  walletTransaction.submittedTxHash = submittedTxHash
  makeOrder(submittedTxHash)

  // const txBodyCborHex_unsigned = Buffer.from(txBody.to_bytes(), "utf8").toString("hex");
  // this.setState({txBodyCborHex_unsigned, txBody})
}
async function makeOrder(txHash) {
  console.log(store.account)
  const data = {
    address: store.account.address,
    account: productStore.product.account,
    sale_price: productStore.product.price,
    transaction: txHash,
    color: productStore.product.color,
    name_of_item: productStore.product.product_name + productStore.product.size,
    buyer: store.account.id,
    product: productStore.product.id,
  }

  try {
    // Change the URL to your production server
    await fetch('https://api.yuuera.com/api/auth/orders/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.accessToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        console.log('Order placed')
      })
      .catch((error) => {
        console.error('Error during POST request:', error)
      })
  } catch (error) {
    console.error('Error before POST request:', error)
  }
}

async function buyItemNami() {
  if (store.accessToken == null) {
    window.location.replace('https://www.yuuera.com/Login')
  }
  try {
    // Try to get the wallet object that the user is selecting
    //const walletObject = await (window.cardano && window.cardano.lace)

    // If it doesn't exist, we need to throw as error
    //if (!walletObject)
    //   throw {
    //       info: 'You do not have this wallet installed as an extension.',
    //  }

    // Ask user to enable wallet
    enabledWallet = await window.cardano.nami.enable()
    await getChangeAddress()
    await getUtxos()
    buildSendTokenTransaction()
    paymentMade.value = true
  } catch (err) {
    txSuccuess.value = false
    console.log(err)
  }
}

async function buyItemEternl() {
  if (store.accessToken == null) {
    window.location.replace('https://www.yuuera.com/Login')
  }
  try {
    // Try to get the wallet object that the user is selecting
    //const walletObject = await (window.cardano && window.cardano.lace)

    // If it doesn't exist, we need to throw as error
    //if (!walletObject)
    //   throw {
    //       info: 'You do not have this wallet installed as an extension.',
    //  }

    // Ask user to enable wallet

    enabledWallet = await window.cardano.eternl.enable()
    await getChangeAddress()
    await getUtxos()
    buildSendTokenTransaction()
    paymentMade.value = true
  } catch (err) {
    txSuccuess.value = false
    console.log(err)
  }
}

async function buyItemLace() {
  if (store.accessToken == null) {
    window.location.replace('https://www.yuuera.com/Login')
  }
  try {
    // Try to get the wallet object that the user is selecting
    //const walletObject = await (window.cardano && window.cardano.lace)

    // If it doesn't exist, we need to throw as error
    //if (!walletObject)
    //   throw {
    //       info: 'You do not have this wallet installed as an extension.',
    //  }

    // Ask user to enable wallet
    enabledWallet = await window.cardano.lace.enable()
    await getChangeAddress()
    await getUtxos()
    buildSendTokenTransaction()
    paymentMade.value = true
  } catch (err) {
    txSuccuess.value = false
    console.log(err)
  }
}
prices = stringtoArray(productStore.product.price)
colors.value = stringtoArray(productStore.product.colors)
sizes.value = stringtoArray(productStore.product.size)
function stringtoArray(colorString) {
  // Split the string into an array of colors using commas as separators
  const colorArray = colorString.split(',')

  // Trim any leading/trailing whitespace from each color
  return colorArray.map((color) => color.trim())
}
</script>
