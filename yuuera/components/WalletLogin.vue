<template>
  <div class="dropdown justify-left mt-6">
    <div tabindex="0" role="button" class="btn m-1 bg-primary text-info justify-left">
      <span class=" text-info text-xl font-semibold">Buy Now</span>
      <span v-if="!txSuccuess" class=" text-info text-xl font-semibold">failed, Try Again</span>
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow text-base-100 bg-info rounded-box w-52">
      <li><button  class="m-4 mt-4 btn bg-primary" @click="buyItemNami">
        <span class=" text-info text-xl font-semibold">Nami</span>
      </button></li>
      <li><button  class="m-4 mt-4 btn bg-primary" @click="buyItemEternl">
        <span class=" text-info text-xl font-semibold">Eternl</span>
      </button></li>
      <li><button  class="m-4 mt-4 btn bg-primary" @click="buyItemLace">
        <span class=" text-info text-xl font-semibold">Lace</span>
      </button></li>
    </ul>
  </div>
  
</template>


<script setup>
  const txSuccuess = ref(true)
  const balance = ref('')
  import { stringToHex } from '../helpers/streingToHex'
  import { convertBalanceToAda } from '../helpers/convertBalanceToAda'
  import { useAuthStore } from '~/store/LoginStore'
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
    ScriptDataHash, Ed25519KeyHash, NativeScript, StakeCredential
  } from '@emurgo/cardano-serialization-lib-browser';

  const walletTransaction = {
      selectedTabId: "1",
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
      txBodyCborHex_unsigned: "",
      txBodyCborHex_signed: "",
      submittedTxHash: "",

      addressBech32SendADA: "addr1qyppldq2cdfr79sv9tckfjvzye0h8f8rrxyhcm3lpfksy36w8w53yhygk2r4jtyakzmh3u47tsev6y9sv2nr9k3rlvxs4dtrw5",
      lovelaceToSend: 3000000,
      assetNameHex: "446a65644d6963726f555344",
      assetPolicyIdHex: "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61",
      assetAmountToSend: 2000000,
      addressScriptBech32: "addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8",
      datumStr: "12345678",
      plutusScriptCborHex: "4e4d01000033222220051200120011",
      transactionIdLocked: "",
      transactionIndxLocked: 0,
      lovelaceLocked: 3000000,
      manualFee: 900000,

  }

  import { Buffer } from 'buffer';
  const protocolParams = {
    linearFee: {
        minFeeA: "44",
        minFeeB: "155381",
    },
    minUtxo: "34482",
    poolDeposit: "500000000",
    keyDeposit: "2000000",
    maxValSize: 5000,
    maxTxSize: 16384,
    priceMem: 0.0577,
    priceStep: 0.0000721,
    coinsPerUtxoWord: "24050",
  }
  
  var enabledWallet = undefined;
  const loggedIn = ref(false);
  const store = useAuthStore()
  store.refreshAccessToken();

  if (store.accessToken != null){
      loggedIn.value = true
  }
  
  async function getChangeAddress() {
    try {
        const raw = await enabledWallet.getChangeAddress();
        const changeAddress = Address.from_bytes(Buffer.from(raw, "hex")).to_bech32()
        walletTransaction.changeAddress = changeAddress;
        console.log("finished");
    } catch (err) {
        console.log(err)
    }
  }
  async function initTransactionBuilder() {
    const txBuilder = TransactionBuilder.new(
        TransactionBuilderConfigBuilder.new()
            .fee_algo(LinearFee.new(BigNum.from_str(protocolParams.linearFee.minFeeA), BigNum.from_str(protocolParams.linearFee.minFeeB)))
            .pool_deposit(BigNum.from_str(protocolParams.poolDeposit))
            .key_deposit(BigNum.from_str(protocolParams.keyDeposit))
            .coins_per_utxo_word(BigNum.from_str(protocolParams.coinsPerUtxoWord))
            .max_value_size(protocolParams.maxValSize)
            .max_tx_size(protocolParams.maxTxSize)
            .prefer_pure_change(true)
            .build()
    );

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

    let Utxos = [];

    try {
      const rawUtxos = await enabledWallet.getUtxos();

      for (const rawUtxo of rawUtxos) {
          const utxo = TransactionUnspentOutput.from_bytes(Buffer.from(rawUtxo, "hex"));
          const input = utxo.input();
          const txid = Buffer.from(input.transaction_id().to_bytes(), "utf8").toString("hex");
          const txindx = input.index();
          const output = utxo.output();
          const amount = output.amount().coin().to_str(); // ADA amount in lovelace
          const multiasset = output.amount().multiasset();
          let multiAssetStr = "";

          if (multiasset) {
              const keys = multiasset.keys() // policy Ids of thee multiasset
              const N = keys.len();
              // console.log(`${N} Multiassets in the UTXO`)


              for (let i = 0; i < N; i++){
                  const policyId = keys.get(i);
                  const policyIdHex = Buffer.from(policyId.to_bytes(), "utf8").toString("hex");
                  // console.log(`policyId: ${policyIdHex}`)
                  const assets = multiasset.get(policyId)
                  const assetNames = assets.keys();
                  const K = assetNames.len()
                  // console.log(`${K} Assets in the Multiasset`)

                  for (let j = 0; j < K; j++) {
                      const assetName = assetNames.get(j);
                      const assetNameString = Buffer.from(assetName.name(),"utf8").toString();
                      const assetNameHex = Buffer.from(assetName.name(),"utf8").toString("hex")
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
              TransactionUnspentOutput: utxo
          }
          Utxos.push(obj);
          // console.log(`utxo: ${str}`)
      }
      walletTransaction.Utxos = Utxos;
    } catch (err) {
        console.log(err)
    }
  }

  async function buildSendTokenTransaction(){
    const txBuilder = await initTransactionBuilder();
    const shelleyOutputAddress = Address.from_bech32(walletTransaction.addressBech32SendADA);
    const shelleyChangeAddress = Address.from_bech32(walletTransaction.changeAddress);
    
    let txOutputBuilder = TransactionOutputBuilder.new();
    txOutputBuilder = txOutputBuilder.with_address(shelleyOutputAddress);
    txOutputBuilder = txOutputBuilder.next();

    let multiAsset = MultiAsset.new();
    let assets = Assets.new()
    assets.insert(
        AssetName.new(Buffer.from(walletTransaction.assetNameHex, "hex")), // Asset Name
        BigNum.from_str(walletTransaction.assetAmountToSend.toString()) // How much to send
    );
    multiAsset.insert(
        ScriptHash.from_bytes(Buffer.from(walletTransaction.assetPolicyIdHex, "hex")), // PolicyID
        assets
    );

    txOutputBuilder = txOutputBuilder.with_asset_and_min_required_coin(multiAsset, BigNum.from_str(protocolParams.coinsPerUtxoWord))
    const txOutput = txOutputBuilder.build();

    txBuilder.add_output(txOutput)
    
    // Find the available UTXOs in the wallet and
    // us them as Inputs
    const txUnspentOutputs = await getTxUnspentOutputs();
    txBuilder.add_inputs_from(txUnspentOutputs, 3)

    

    // set the time to live - the absolute slot value before the tx becomes invalid
    // txBuilder.set_ttl(51821456);

    // calculate the min fee required and send any change to an address
    txBuilder.add_change_if_needed(shelleyChangeAddress)

    // once the transaction is ready, we build it to get the tx body without witnesses
    const txBody = txBuilder.build();

    // Tx witness
    const transactionWitnessSet = TransactionWitnessSet.new();

    const tx = Transaction.new(
        txBody,
        TransactionWitnessSet.from_bytes(transactionWitnessSet.to_bytes())
    )

    let txVkeyWitnesses = await enabledWallet.signTx(Buffer.from(tx.to_bytes(), "utf8").toString("hex"), true);
    txVkeyWitnesses = TransactionWitnessSet.from_bytes(Buffer.from(txVkeyWitnesses, "hex"));

    transactionWitnessSet.set_vkeys(txVkeyWitnesses.vkeys());
    
    const signedTx = Transaction.new(
        tx.body(),
        transactionWitnessSet
    );
    
    const submittedTxHash = await enabledWallet.submitTx(Buffer.from(signedTx.to_bytes(), "utf8").toString("hex"));
    console.log(submittedTxHash)
    walletTransaction.submittedTxHash = submittedTxHash;

    // const txBodyCborHex_unsigned = Buffer.from(txBody.to_bytes(), "utf8").toString("hex");
    // this.setState({txBodyCborHex_unsigned, txBody})
  }

  async function buyItemNami() {
    try {
            // Try to get the wallet object that the user is selecting
            //const walletObject = await (window.cardano && window.cardano.lace)

            // If it doesn't exist, we need to throw as error
            //if (!walletObject)
             //   throw {
             //       info: 'You do not have this wallet installed as an extension.',
              //  }

            // Ask user to enable wallet
            enabledWallet = await window.cardano.nami.enable();
            await getChangeAddress();
            await getUtxos();
            buildSendTokenTransaction();
        } catch (err) {
            txSuccuess.value = false
            console.log(err);
        }
  }
  async function buyItemEternl() {
    try {
            // Try to get the wallet object that the user is selecting
            //const walletObject = await (window.cardano && window.cardano.lace)

            // If it doesn't exist, we need to throw as error
            //if (!walletObject)
             //   throw {
             //       info: 'You do not have this wallet installed as an extension.',
              //  }

            // Ask user to enable wallet
            enabledWallet = await window.cardano.eternl.enable();
            await getChangeAddress();
            await getUtxos();
            buildSendTokenTransaction();
        } catch (err) {
            txSuccuess.value = false
            console.log(err);
        }
  }
  async function buyItemLace() {
    try {
            // Try to get the wallet object that the user is selecting
            //const walletObject = await (window.cardano && window.cardano.lace)

            // If it doesn't exist, we need to throw as error
            //if (!walletObject)
             //   throw {
             //       info: 'You do not have this wallet installed as an extension.',
              //  }

            // Ask user to enable wallet
            enabledWallet = await window.cardano.lace.enable();
            await getChangeAddress();
            await getUtxos();
            buildSendTokenTransaction();
        } catch (err) {
            txSuccuess.value = false
            console.log(err);
        }
  }

  

</script>