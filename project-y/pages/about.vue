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
                    <a class="nav-link" href="index.vue">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Main thing</a>
                </li>
            </ul>
        </div>
        </nav>
      </header>

        <h1>
            Mission Statement
        </h1>
        <p>
            Providing utility for the future of web 3.0  
        </p>

        <h1>
            About us
        </h1>
        <p>
            Hello, welcome to the Yuuera team we are excited to have you here. Our goal is to utilize the power of
            blockchain and cryptocurrency to create a better future for the internet together. We value the
            decentralization of the internet as key to creating a more vibrant, efficient, and community based tech
            scene. Our mission is to give control back to the community when shopping online and beyond by using
            blockchain technology, instead of relying on centralized big tech. Individuals' actions, creations, and
            perspectives are what we stand for. The internet was not made by one person. Let's keep it that way.
            We would be honored to have you join us in our journey to change the future of the internet bringing
            the power back to the community.
        </p>
        
      </body>
    </div>



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
  
  