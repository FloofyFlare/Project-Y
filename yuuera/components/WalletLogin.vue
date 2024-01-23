<template>
  <button @click="makeTx">run</button>
  <button  class="m-4 mt-4 btn bg-primary" @click="isWalletCheck">
    <span class=" text-info text-xl font-semibold">Buy Now</span>
    <span v-if="!txSuccuess" class=" text-info text-xl font-semibold">Failed Try Again</span>
  </button>
</template>


<script setup>

  

  import { Blockfrost, Lucid } from "lucid-cardano"; // NPM
  const txSuccuess = ref(true)
  const balance = ref('')
  const isWalletCheck = async () => {
    try {
      const isCardano = window && window.cardano
      const isLaceInstalled = isCardano && window.cardano.lace
      const isLaceEnabled = isLaceInstalled ? await window.cardano.lace.isEnabled() : false
      console.log(isLaceEnabled);
      console.log(cardano.lace.enable())
      makeTx();
    }
    catch {
      console.log('error')
    }
  };

  const makeTx = async () => {
    try {
      const isCardano = window && window.cardano
      const isLaceInstalled = isCardano && window.cardano.lace
      const isLaceEnabled = isLaceInstalled ? await window.cardano.lace.isEnabled() : false
      const walletAPI = await cardano.lace.enable();
      

      const lucid = await Lucid.new(
        new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", "mainnetWCxt9vqB0GuFvyWqMV7rqu9vdR8XUqb6"),
        "Mainnet",
      );
      // Assumes you are in a browser environment
      lucid.selectWallet(walletAPI);

      const tx = await lucid.newTx()
        .payToAddress("addr...", { lovelace: 5000000n })
        .complete();

      const signedTx = await tx.sign().complete();

      const txHash = await signedTx.submit();

      console.log(txHash);
      



    }
    catch {
      txSuccuess.value = false;
      console.log('error')
    }
  };

  const loggedIn = ref(false);

  import { useAuthStore } from '~/store/LoginStore'
  const store = useAuthStore()
  store.refreshAccessToken();

  if (store.accessToken != null){
      loggedIn.value = true
  }
  
</script>