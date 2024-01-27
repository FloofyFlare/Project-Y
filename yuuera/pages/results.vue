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
      <div class="flex-1  w-full hidden sm:flex ">
        <div class="flex w-full">
          <input type="text" placeholder="Search" class="input input-bordered bg-info border-black w-full rounded-r-none"/>
          <button class="btn btn-square btn-outline rounded-l-none border-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-1 justify-end">
      <div class="pr-4 ">
        <div >
            <NuxtLink class="m-4 mt-4 w-28 btn bg-primary" to="/Product">
              <span class=" text-info text-xl font-semibold">Log In</span>
            </NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </header>
   
    <body class="bg-info md:w-full h-screen">
      <main class="h-full">
        <section class="flex justify-left">
        <div class="flex justify-center items-center mb-12">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary font-bold text-4xl md:text-7xl mt-24">
                Filters:
              </h1>
              <div class="text-left justify left">
              <p class="mt-6 text-3xl text-base-100">
                By Brand
              </p>
              <input type="text" placeholder="Search" class="input input-bordered bg-info border-black w-full rounded-r-none"/>
              <p class="mt-6 text-3xl text-base-100">
                Price
              </p>
              <button class="btn btn-outline btn-primary btn-md text-">High to low</button> 
              <button class="btn btn-outline btn-primary btn-md text-">Low to High</button>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 bg-info hidden sm:flex justify-center bg-info">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 bg-info hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 bg-info hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden bg-info sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
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
      </div>
    </div>
  </footer>
    </client-only>
    </body>
</template>
<script setup lang="ts">


import { ref } from 'vue'

const signUpEmail = ref('')
const pass = ref('')
function handleSubmit() {
  if (validateEmail(signUpEmail.value)) {
    handleSend()
  }
}

async function handleSend() {
  console.log(signUpEmail.value);

  const data = { 
    email: signUpEmail.value, 
    password: pass.value
  };

  try {
    // Change the URL to your production server
    const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log('Login successful:', responseData);
      
      // Do something with the responseData, such as updating the component state
      return responseData;
    } else {
      // Handle errors for non-2xx status codes
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


</script>
