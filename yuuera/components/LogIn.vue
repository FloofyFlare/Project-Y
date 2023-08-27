<script lang="js">
 const isWalletCheck = async () => {
    try {
      const isCardano = window && window.cardano
      const isEternlInstalled = isCardano && window.cardano.eternl
      const isEternlEnabled = isEternlInstalled ? await window.cardano.eternl.isEnabled() : false
      cardano.eternl.enable()

      console.log()
    }
    catch {
      console.log('error')
    }
  }

  export default {}

</script>