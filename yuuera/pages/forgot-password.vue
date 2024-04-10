<template>
  <HeaderComp></HeaderComp>

  <body class="bg-base-100 md:w-full h-screen">
    <main class="h-full">
      <section>
        <div class="flex justify-center">
          <div class="hero min-h-screen bg-info">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div
                class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-24 md:mr-0 p-24"
              >
                <h1 class="text-2xl">Forgot your password? Don't worry.</h1>
                <p class="pt-8">
                  Our support team has your back. Send an email to
                  yuueraOfficial@gmail.com asking for a password reset. Make
                  sure to attach your accounts phone number and email address so
                  we can verify your identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <client-only>
      <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div class="">
          <p class="font-bold">Yuuera, LLC <br /></p>
          <p>Questions? Contact us at YuueraOffical@gmail.com</p>
          <p><NuxtLink to="/about">about</NuxtLink></p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a href="https://twitter.com/YuueraOfficial"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                ></path>
              </svg>
            </a>
            <nuxt-img
              alt="USA flag"
              src="/images/americanFlag.jpeg"
              class="w-14 fill-current"
              format="webp"
            />
          </div>
        </div>
      </footer>
    </client-only>
  </body>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()

if (process.client) {
  store.refreshAccessToken()
  if (store.accessToken != null) {
    window.location.replace('https://www.yuuera.com/')
  }
}
</script>
