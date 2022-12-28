<template>
  <div>
    <nav>
      <NuxtLink to="about.vue">About</NuxtLink>
    </nav>
    <EmailSignUp />
    <body>
       v
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




