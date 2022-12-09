<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <EmailSignUp />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import EmailSignUp from '~/components/EmailSignUp.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { EmailSignUp }
})
</script>

<style scoped lang="scss">
@import "styles/appStyles.scss";
</style>




