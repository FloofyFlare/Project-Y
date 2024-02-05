<template>
  
  <HeaderComp></HeaderComp>
    
  <body class="bg-info md:w-full">
      <main>
      <section class="rounded-md mbg-info">
        <div class="pt-20"></div>
        <div class="hero max-h-[45vh] mt-4 h-screen" :style="backgroundStyle">
        </div>
      </section>

      <section>
        <div class="invisible md:visible">
          <h1
                class="pt-2 lg:pl-2 text-primary text-3xl flex font-semibold md:text-left justify-center"
              >
                Start shopping Web 3.0!
          </h1>
          <div class="flex flex-wrap justify-center">
            <div class="card w-96 h-64 bg-base-100 m-8 shadow-xl">
              <figure class="px-10 pt-10">
                <nuxt-img
                  format="webp"
                  src="/images/apple.jpeg"
                />
              </figure>
              <div class="card-body items-center text-center p-2">
                <h2 class="card-title">Apple</h2>
                <div class="card-actions">
                  <NuxtLink to='/results'><button @click="setBrand('Apple')" class="btn btn-primary">Buy Now</button></NuxtLink>
                </div>
              </div>
            </div>
            <div class="card w-96 h-64 bg-base-100 m-8 shadow-xl">
              <figure class="px-10 pt-10">
                <nuxt-img
                  format="webp"
                  src="/images/samsung.jpeg"
                />
              </figure>
              <div class="card-body items-center text-center p-2">
                <h2 class="card-title">Samsung</h2>
                <div class="card-actions">
                  <NuxtLink to='/results'><button @click="setBrand('Samsung')" class="btn btn-primary">Buy Now</button></NuxtLink>
                </div>
              </div>
            </div>
            <div class="card w-96 h-64 bg-base-100 m-8 shadow-xl">
              <figure class="px-10 pt-10">
                <nuxt-img
                  format="webp"
                  src="/images/google.jpeg"
                />
              </figure>
              <div class="card-body items-center text-center p-2">
                <h2 class="card-title">Google</h2>
                <div class="card-actions">
                  <NuxtLink to='/results'><button @click="setBrand('Google')" class="btn btn-primary">Buy Now</button></NuxtLink>
                </div>
              </div>
            </div>
            <div class="card w-96 h-64 bg-base-100 m-8 shadow-xl">
              <figure class="px-10 pt-10">
                <nuxt-img
                  format="webp"
                  src="/images/otherPhones.jpeg"
                />
              </figure>
              <div class="card-body items-center text-center p-2">
                <h2 class="card-title">Merch</h2>
                <div class="card-actions">
                  <NuxtLink to='/results'><button @click="setBrand('Merch')" class="btn btn-primary">Buy Now</button></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>   
      
        <div class="hero min-h-screen bg-info visible md:hidden">
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
  <div class="hero min-h-screen bg-secondary visible md:hidden">
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
  </div>
  </div>
  </section>

  <section class="pb-10 hidden sm:flex justify-center">
    <div class=""> 
      <h1 class=" flex w-full justify-center text-5xl text-primary font-semibold">Commerce on<nuxt-img
            format="webp"
            src="/images/Cardano-RGB_Logo-Full-Blue.png"
            class="margin-left-24px w-60 h-auto justify-contents"
          />
      </h1>
      <h2
        class="pt-2 lg:pl-2 text-primary text-3xl flex font-semibold md:text-left justify-center"
      >
            Here's how it works!
      </h2>
      <div class="flex justify-center ">
        
        <div class="mt-8">
          
          <div class=" mb-10 flex justify-start pl-4 pr-4">
            <div
              class="bg-info h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-double border-4 border-sky-500"
            >
              <h1 class="text-primary w-full font-bold md:text-5xl p-2">
                Shop
              </h1>
              <div class="flex justify-center">
                <p class="text-neutral leading-loose text-l md:text-2xl">
                  Quality first shopping. Made for crypto enthusiasts.
                </p>
              </div>
            </div>
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/shopping cart.png"
                      class="w-60 flex justify-end"
                      format="webp"
                />
          </div>
          
          <div class="mb-10 flex justify-center pl-4 pr-4">
            <div
              class="bg-info h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-double border-4 border-sky-500"
            >
              <h1 class="text-primary font-bold text-l md:text-5xl p-2">
                We find the deals
              </h1>
              <div>
                <p class="text-neutral leading-loose text-l md:text-2xl">
                  We compare multiple prices to get you the best deals avaliable. When your ready you can pay purely in stablecoins on Cardano. No loopholes. No third party processors. No extra fees.
                </p>
              </div>
            </div>
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/internet-image.png"
                      class="w-60 flex justify-end"
                      format="webp"
                />
          </div>

          <div class="mb-10 flex justify-end pl-4 pr-4">
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/house.png"
                      class="w-60 flex "
                      format="webp"
                />
            <div
              class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-double border-4 border-sky-500"
            >
              <h1 class="text-primary font-bold text-l md:text-5xl p-2">
                Products straight to you
              </h1>
              <div>
                <p class="w-full text-neutral leading-loose text-l md:text-2xl">
                  Your goods are shipped straight to your door.
                </p>
              </div>
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
            ></path></svg>
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

<script setup lang="js">
const imageUrl = '/images/banner.png';

const backgroundStyle = {
  backgroundImage: `url(${imageUrl})`,
};

useHead({
  title: 'Yuuera | Buy and Sell goods online with Crypto currency!',
  meta: [
    {
      name: 'description',
      content:
        'Buy tech with stable coins as payment. Discover our utting-edge shopping experience, a convinent platform for buying tech with crypto. Built by holder for holders.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { hid: 'favicon', rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
  ], 
});



import { ref } from 'vue';

const items = ref([]);

import { useFilterStore } from '~/store/Filters'
const store = useFilterStore()


handleSubmit();

async function handleSubmit() {
  const data = await getItems();
  items.value = data;
  
  console.log('Items:', items.value);
}

function setBrand(brand){
  console.log(brand);
  store.clearFilter();
  store.setBrand(brand);
}

async function getItems() {
  const url = new URL('http://127.0.0.1:8000/api/product-filter/');
  url.searchParams.append('brand', store.brand);
  url.searchParams.append('product_name', '');
  url.searchParams.append('sort_direction', store.sort_direction);
  url.searchParams.append('sort_by_price', store.sort_by_price);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const responseData = await response.json();
    console.log('Login successful');
    items.value = responseData;
  } else {
    console.error('Login failed:', response.statusText);
  }
}

</script>


<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>


<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
