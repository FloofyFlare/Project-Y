<template>
  <HeaderComp></HeaderComp>
 
  <body class="bg-info md:w-full min-h-screen ">
    <main class="min-h-screen">
      <section class="justify-left h-full fixed hidden sm:block">
        <div class="flex justify-center items-center mb-12">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary font-bold text-4xl md:text-4xl mt-24">
                Filters:
              </h1>
              <div class="text-left justify left">
              <p class="mt-6 text-3xl text-base-100">
                By Brand
              </p>
              <div class="dropdown w-full">
                <div tabindex="0" role="button" class="flex bg-info btn text-neutral m-1">Categories</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-primary shadow bg-base-100 rounded-box w-full">
                  <li><a @click.prevent="setBrand('Apple')" class="font-bold">Apple</a></li>
                  <li><a @click="setBrand('Samsung')" class="font-bold">Samsung</a></li>
                  <li><a @click="setBrand('Google')" class="font-bold">Google</a></li>
                  <li><a @click="clearFilter(Null)" class="font-bold">All Tech</a></li>
                  <li class="hidden"><a @click="setBrand('Merch')" class="font-bold">Merch</a></li>
                </ul>
              </div>
              <div >
                <button @click="highLow('asc')" class="flex-1 btn btn-outline btn-primary btn-md ">Low to High</button> 
                <button @click="lowHigh('desc')" class="flex-1 btn btn-outline btn-primary btn-md ">High to Low</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-24 h-full" id="products">
        <div class="p-24">
          <div v-if="items.length === 0">
            <p class="text-neutral h-screen font-semibold text-xl">No items matching your request</p>
          </div>
          <div v-for="item in items" :key="item.id" class="pb-10 hidden sm:flex w-full justify-center">
              <NuxtLink class="card lg:card-side border-black border-2 bg-base-100 w-1/2 shadow-xl">
                <figure><nuxt-img
                        :alt="`a prouct image`"
                        :src="item.product_image"
                        class="h-48 flex"
                        format="webp"
                      /></figure>
                <div class="card-body">
                  <h2 class="card-title">{{ item.product_name }}</h2>
                  <div class="card-actions justify-end">
                    <button @click="searchProduct(item)" class="btn btn-primary">${{ item.price }} DJED</Button>
                  </div>
                </div>
              </NuxtLink>
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
import { ref } from 'vue';

const items = ref([]);

import { useFilterStore } from '~/store/Filters'
const store = useFilterStore()

import { useProductStore } from '~/store/Product'
const storeProduct = useProductStore()

handleSubmit();

async function handleSubmit() {
const data = await getItems();
}

function setBrand(brand){
console.log(brand);
store.setBrand(brand);
getItems()
}

function searchProduct(object){
  storeProduct.setProduct(object);
  window.location.replace('http://localhost:3001/product-page')
}

function lowHigh(price) {
console.log(`Selected brand: ${price}`);
store.setPrice(price)
getItems()
}

function highLow(price) {
console.log(`Selected brand: ${price}`);
store.setPrice(price)
getItems()
}

function clearFilter() {
store.clearFilter();
getItems()
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