<template>
  <head>
    <title> Company name here </title>
  </head>
    
    <body>
      <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-info">
        <a class="navbar-brand" href="#">Company Name or something</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#">Main thing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.vue">About</a>
                </li>
            </ul>
        </div>
        </nav>
      </header>
    </body>
 

  <footer>
        <p>
        (for future referce)
        copyright notice
        link to the privacy policy
        Sitemap
        company email/contact info:
        (mini-logo goes here)
       <EmailSignUp/>
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




