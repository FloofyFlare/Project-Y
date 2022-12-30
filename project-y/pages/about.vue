<template>
    <div>
      <nav>
        <NuxtLink to="index.vue">Home</NuxtLink>
      </nav>
      <EmailSignUp />
      <body>
        <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#">Company Name or something</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#">Something</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.vue">About</a>
                </li>
            </ul>
        </div>
        </nav>
      </header>

        <h1>
            Raymend
        </h1>
        <p>
            something something something somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
        </p>
        <h1>    
            Darius
        </h1>
        <p>
            something something something somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
        </p>
        <h1>
            Caleb
        </h1>
        <p>
            something something something somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
            something somethingsomething somethingsomething somethingsomething something
        </p>
      </body>
    </div>



    <footer>
        <p>

        </p>
    </footer>

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
  
  