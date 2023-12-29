<template>
  <button @click="isWalletCheck">sup</button>
  <button @click="makeTx">run</button>
</template>

<script setup>

  const isWalletCheck = async () => {
    try {
      const isCardano = window && window.cardano
      const isLaceInstalled = isCardano && window.cardano.lace
      const isLaceEnabled = isLaceInstalled ? await window.cardano.lace.isEnabled() : false
      console.log(isLaceEnabled);
      console.log(cardano.lace.enable())
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
      
      



    }
    catch {
      console.log('error')
    }
  };

</script>