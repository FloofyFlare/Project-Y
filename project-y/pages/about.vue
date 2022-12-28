<template>
    <div>
      <nav>
        <NuxtLink to="index.vue">Home</NuxtLink>
      </nav>
      <EmailSignUp />
      <body>
        <h1>
            Raymend
        </h1>
        <p>

        </p>
        <h1>    
            Darius
        </h1>
        <p>

        </p>
        <h1>
            Caleb
        </h1>
        <p>

        </p>
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
  
  