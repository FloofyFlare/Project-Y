<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <EmailSignUp />
    <body>
    </body>
  </div>
</template>
<script lang="ts">
import EmailSignUp from '~/components/EmailSignUp.vue';

export default {
    name: "IndexPage",
    components: { EmailSignUp }
}
</script>

<style scoped lang="scss">
@import "assets/scss/appStyles.scss";
</style>




