<template>


    <HeaderComp></HeaderComp>
    <body class="bg-info md:w-full h-screen">
      <main class="h-full">
        <section class="rounded-xl">
        <span id="next"></span>
        <div class="mb-10 flex justify-end pl-4 pr-4 pt-24">
            <img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      :src="product.product_image"
                      class="w-1/3 flex"
                      format="webp"
                />
            <div
              class="h-1/6 w-2/3 h-60 mt-12 rounded-3xl ml-24"
            >
              <h1 class="text-primary text-left font-bold text-l md:text-5xl p-2">
                {{ product.product_name }}
              </h1>
              <div>
                <p class="w-full text-left pt-6 text-neutral leading-loose text-md md:text-2xl">
                  
                </p>
              </div>
            <div class="flex">
              
            <div
                  class="flex bg-info  h-1/4 w-2/3 h-60 rounded-3xl"
                >
                  <h1 class="text-primary font-bold text-l md:text-5xl p-2 border-double">

                  </h1>
                  <div>
                    <p class="w-full text-neutral text-left leading-loose text-3xl md:text-6xl">
                    ${{ product.price }} DJED
                    </p>
                  </div>
                  <div class="mt-12">
                    
                  </div>
              </div>
              <div class="flex justify-center rounded-2xl  h-24">
              <div class="flex justify-center rounded-2xl w-full h-1/2">
                <p
                  class="w-2/3 text-neutral flex justify-start text-left leading-loose text-l md:text-2xl"
                >
                Description: {{ product.description }}
                </p>
              </div>
            </div>
            </div>
            <div class="flex">
              <div class="justify-content-left">
                <div class="dropdown justify-left mt-6 mr-4">
                    <div tabindex="0" role="button" class="btn m- bg-primary text-info left-0 text-xl font-semibold">Colors</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 text-base-100 shadow bg-info rounded-box w-52">
                      <li><a>Red</a></li>
                      <li><a>White</a></li>
                      <li><a>Blue</a></li>
                      <li><a>Green</a></li>
                    </ul>
                    </div>
                <div class="dropdown justify-left mt-6">
                <div tabindex="0" role="button" class="btn m-1 bg-primary text-info justify-left text-xl font-semibold">Storage</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow text-base-100 bg-info rounded-box w-52">
                  <li><a>Small</a></li>
                  <li><a>Medium</a></li>
                  <li><a>Large</a></li>
                  <li><a>Extra Large</a></li>
                </ul>
              </div>
            </div>
              <WalletLogin></WalletLogin>
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
<script setup lang="ts">


import { ref } from 'vue'

import { useProductStore } from '~/store/Product'
const storeProduct = useProductStore()
productCheck()
async function productCheck() {
  if (storeProduct.projectIsNULL()){
    await new Promise(resolve => setTimeout(resolve, 3000));
    window.location.replace('http://localhost:3001/Homepage');
  }
}
console.log(storeProduct.product);
const product = ref(storeProduct.product);




</script>
