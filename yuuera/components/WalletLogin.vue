<template>
  <button  class="m-4 mt-4 btn bg-primary" @click="getBalance">
    <span class=" text-info text-xl font-semibold">Buy Now</span>
    <span v-if="!txSuccuess" class=" text-info text-xl font-semibold">Failed Try Again</span>
  </button>
</template>


<script setup>
  var API = undefined;
  const txSuccuess = ref(true)
  const balance = ref('')
  import { stringToHex } from '../helpers/streingToHex'
  import { convertBalanceToAda } from '../helpers/convertBalanceToAda'
  import Web3Token from 'web3-token-cardano/dist/browser'
  async function getBalance() {
    try {
            // Try to get the wallet object that the user is selecting
            //const walletObject = await (window.cardano && window.cardano.lace)

            // If it doesn't exist, we need to throw as error
            //if (!walletObject)
             //   throw {
             //       info: 'You do not have this wallet installed as an extension.',
              //  }

            // Ask user to enable wallet
            const enabledWallet = await window.cardano.eternl.enable();

            // get address from which we will sign message
            const address = await enabledWallet.getChangeAddress()

/*            const token = await Web3Token.sign(() => {
                return enabledWallet.signData(
                    address,
                    stringToHex(
                        'Please sign this message to verify your identity.'
                    )
                )
            }, '7d')

            const response = await fetch(`api/authenticate`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            })

            const result = await response.json()
            if (response.status !== 200) throw { info: result.message }
*/
            const balance = await enabledWallet
                .getBalance()
                .then(convertBalanceToAda)

            console.log(balance)


            console.log('Successfully authenticated wallet.')
        } catch (err) {
            console.log(err);
        }
  }
  

  async function sendPayment(recipientAddress, amount, metadata = {}) {
    console.log(recipientAddress)
    // Check Lace API availability
    if (!window.cardano || !window.cardano.lace) {
      console.error("Cardano wallet extension not available.");
      return;
    }

    try {
      // Connect to the wallet and get API object
      const api = await window.cardano.lace.enable();
      console.log(api)
      // Prepare transaction data
      const transaction = {
        recipient: recipientAddress,
        amount: amount, // In Lovelace (units of ADA)
        metaData: metadata, // Optional transaction metadata
      };

      // Get a change address for the transaction
      const changeAddress = await api.getChangeAddress();
      transaction.changeAddress = changeAddress;

      // Get UTXOs (unspent transaction outputs) for funding the transaction
      const utxos = await api.getUtxos(transaction);

      // Sign the transaction using the wallet
      const signedTx = await api.signTx(transaction, utxos);

      // Submit the signed transaction to the blockchain
      await api.submitTx(signedTx);

      console.log(`Transaction submitted successfully! ID: ${signedTx.id}`);
    } catch (err) {
      console.error(`Error sending payment: ${err}`);
    }
  }
  const loggedIn = ref(false);

  import { useAuthStore } from '~/store/LoginStore'
  const store = useAuthStore()
  store.refreshAccessToken();

  if (store.accessToken != null){
      loggedIn.value = true
  }
  
</script>