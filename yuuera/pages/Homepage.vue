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
                    <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/shopping cart.png"
                      class="z-10 mt-24"
                      format="webp"
                    />
            </div>
        </section>

        <section class="">
         <div class="invisible md:visible">
            <h1
                  class="pt-20 lg:pl-2 text-primary text-6xl lg:text-8xl flex font-semibold md:text-left md:justify-start"
                >
                  Whats on sale
                </h1>
            <div class="carousel rounded-box">
                <div class="carousel-item">
                    <nuxt-img format="webp" src="/images/internet-image.png" class="margin-left-24px w-64 h-64 justify-contents" />
                </div> 
                <div class="carousel-item">
                    <nuxt-img format="webp" src="/images/internet-image.png" class="margin-left-24px w-64 h-auto justify-contents" />
                </div> 
                <div class="carousel-item">
                    <nuxt-img format="webp" src="/images/internet-image.png" class="margin-left-24px w-auto h-auto justify-contents" />
                </div> 
                <div class="carousel-item">
                    <nuxt-img format="webp" src="/images/internet-image.png" class="margin-left-24px w-full h-auto justify-contents" />
                </div> 
            </div>

         </div>   
        
        <div class="hero min-h-screen bg-info visible md:invisible">
            <div class="flex w-full">    
            <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
            <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
              </p>
            </div>
          </div>

          <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
          <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
              </p>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section class="">
        <div class="hero min-h-screen bg-secondary">
            <div class="flex w-full">    
            <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
            <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
              </p>
            </div>
          </div>

          <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
          <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
              </p>
            </div>
          </div>
        </div>
        </div>
        </section>

        <section class="">
        <div class="hero min-h-screen bg-accent">
            <h1
                  class="pt-20 lg:pl-2 text-info text-6xl lg:text-8xl flex font-semibold md:text-left md:justify-start"
                >
                  For you
                </h1>
            <div class="flex w-full">    
            <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
            <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
              </p>
            </div>
          </div>

          <div
            class="flex rounded-3xl w-1/2 bg-info p-4 mb-12 team-member flex-col border-2 border-slate-600"
          > 
          <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Best Deal:</p>
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
             
              <p class="font-medium text-neutral text-lg md:text-2xl">
                blah blash exta stuff
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
