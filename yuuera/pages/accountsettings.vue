<template>
  
    <header class="fixed opacity-[.98] bg-info text-base-200 z-50">
      <div class="border-b-2 border-slate-600 navbar w-screen">
        <div class="flex-1">
          <NuxtLink to="/" class="absolute w-28">
            <nuxt-img
              alt="Yuuera logo"
              src="/images/logo.png"
              class="w-28 fill-current"
              format="webp"
            />
          </NuxtLink>
        </div>
        <div class="flex-none">
          <div class="pr-4 mt-2">
            <NuxtLink to="/about">
              <span class="btn bg-primary text-info text-xl font-semibold">About</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>
    
    <body class="bg-base-100 md:w-screen">
        <main>

          
        <section class="rounded-md bg-info">
            <div class="flex h-screen w-full bf-info">
              <div>
                <div>
                        <NuxtLink to="/sellersinfo"
                          
                          class="shadow-lg shadow-orange-200 mb-4 text-info mt-24 bg-primary btn-outline btn btn-md md:btn-md lg:btn-lg"
                          >If you intend to sell Please click this link to sign up for being a seller</NuxtLink>
                      </div>

                  <div class="mt-36 flex justify-center md:justify-center">
                    <div class="w-2/3 rounded-3xl md:h-24">
                      <p
                        class="shadow-xl text-left bg-neutral p-4 rounded-xl md:text-left leading-loose tracking-wide text-xl lg:text-2xl text-info"
                      >
                          Your Cart is empty.
                          Fill it with groceries, clothing, household supplies, electronics, and more.
                          Continue shopping on the Yuuera.com homepage, and learn more about awasome deals.
                      </p>
                      <div  class="justify center mt-12">
                        <div class="lg:pt-24 rounded-2xl">
                        <p class="text-secondary leading-loose tracking-widest text-4xl md:text-4xl p-4 pt-0 font-semibold">
                          Your Items:
                        </p>
                        </div>
                      </div>
                      <div class="bg-secondary ">
                        <a href="#"
                          
                          class="shadow-lg shadow-orange-200 mb-4 text-info mt-6 bg-primary btn-outline btn btn-md md:btn-md lg:btn-lg"
                          to=""
                          >Please connect Your Wallet so you can start shopping</a>
                      </div>
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
          <p>YuueraOffical@gmail.com</p>
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
                ></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </client-only>
    </body>
</template>

<script setup lang="ts">
useHead({
  title: 'Yuuera | Buy and Sell goods online with Crypto currency!',
  meta: [
    {
      name: 'description',
      content:
        ' Discover our utting-edge crypto e-commerce platform, enabling cost-effective buying and selling with stable coins as payment.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
  ],
})
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
