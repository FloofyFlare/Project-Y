<template>
  
    <header class="fixed opacity-[.98] bg-info text-base-200 z-50">
      <div class="border-b-2 border-slate-600 navbar w-screen ">
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
        <div class="flex-none justify-center items-center gap-2 mr-96">
          <div class="form-control">
            <input type="text" placeholder="Search Yuuera" class="input input-bordered justify-center text-base-100 bg-info w-24 md:w-auto"/>
          </div>
          </div>
        </div>
    </header>
    
    <body class="bg-base-100 md:w-full h-screen ">
      <main class="h-full">
        <section class="flex justify-left">
      <div class="w-2/3">
        <div class="flex justify-center items-center mb-12">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary font-bold text-4xl md:text-7xl">
                Product
              </h1>
            </div>
          </div>
        </div>
      </div>
      </section>
      </main>
      <main class="h-full flex">
        <section class="flex mt-24">
          <div class="border-soild rounded">
          <div class="mb-10 flex justify-center pl-24 border-solid rounded-none">
            <div class="flex w-1/3 shadow-lg">
              <div class="flex justify-center">
                    <img 
                    src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                    class=" rounded-xl"
                    />
                  </div>
                </div>
              <div class="ml-12 mr-12 pr-12 w-5/5">
              <p class="text-base-100 leading-loose text-2xl lg:text-2xl">
                Info about product
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <main class="h-full flex">
        <section class="flex mt-24">
          <div class="border-soild rounded">
          <div class="mb-10 flex justify-center pl-24 border-solid rounded-none">
            <div class="flex w-1/3 shadow-lg">
              <div class="flex justify-center">
                    <img 
                    src="https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
                    class=" rounded-xl"
                    />
                  </div>
                </div>
              <div class="ml-12 mr-12 pr-12 w-5/5">
              <p class="text-base-100 leading-loose text-2xl lg:text-2xl">
                Info about product
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

    <client-only>
    <footer class="footer footer-center mt-72 p-10 bg-primary text-primary-content">
        <div class="">
          <p class="font-bold">Yuuera, LLC <br /></p>
          <p>YuueraOffical@gmail.com</p>
          <p><NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
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
