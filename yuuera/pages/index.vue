<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/aboutPage">About</NuxtLink>
      </nav>
      <EmailSignUp />
    </header>
    <body></body>
  </div>
</template>
<script>
import EmailSignUp from '~/components/EmailSignUp.vue'

export default {
  name: 'IndexPage',
  components: { EmailSignUp },
}
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
