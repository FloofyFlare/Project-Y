<template>
  <button @click="isWalletCheck">sup</button>
  <button @click="makeTx">run</button>
  <div v-show="loggedIn" class="m-4 mt-4 w-28 btn bg-primary">
    <span class=" text-info text-xl font-semibold">{{ balance }}</span>
  </div>
</template>

<script setup>

  const balance = ref('')
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

  const loggedIn = ref(false);

  import { useAuthStore } from '~/store/LoginStore'
  const store = useAuthStore()
  store.refreshAccessToken();

  if (store.accessToken != null){
      loggedIn.value = true
  }
  
</script>