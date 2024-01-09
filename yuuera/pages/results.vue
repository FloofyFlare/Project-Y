<template>
  
  <header class="fixed opacity-[.98] bg-base-100 text-base-200 z-50">
      <div class="navbar">
  <div class="flex-1 mr-96">
    <NuxtLink to="/" class="absolute w-28">
            <nuxt-img
              alt="Yuuera logo"
              src="/images/logo.png"
              class="w-28 fill-current"
              format="webp"
            />
          </NuxtLink>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search Yuuera" class="input input-wide input-bordered bg-info ml-96 mr-52 w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end ml-80 pl-80">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full mg">
          <img src="data:image/jpeg;base64,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" alt="Account settings/Orders" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-info rounded-box w-52">
        <li>
          <NuxtLink to="/sellersinfo" class="justify-between">
            Profile
          </NuxtLink>
        </li>
        <li><NuxtLink to="/accountsettings" >Settings</NuxtLink></li>
      </ul>
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
              <p class="mt-7 text-3xl text-base-100">
                Brand: example brand
              </p>
              <p class="mt-7 text-3xl text-base-100">
                Used (button here y/n)
              </p>
              <p class="mt-7 text-3xl text-base-100">
                Other Consumer Reviews
              </p>
            </div>
            <div class="columns-1">
              <button class="btn btn-sm btn-primary bg-info text-base-100">4 stars</button>
              <button class="btn btn-sm btn-primary bg-info text-base-100">3 stars</button>
              <button class="btn btn-sm btn-primary bg-info text-base-100">2 stars</button>
              <button class="btn btn-sm btn-primary bg-info text-base-100">1 star</button>
            </div>
            </div>
          </div>
        </div>
      </section>
        <section class="flex bg-info justify-center">
          <div class="columns-2 flex justify-center bg-base-100 border-rounded">
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/house.png"
                      class="w-80 h-80 flex bg-base-100"
                      format="webp"
                />
          </div>
          <p class="text-2xl mt-24 text-secondary"> 
            random information
          </p>
        </section>
        <section class="flex mt-6 bg-info justify-center mb-24">
          <div class="columns-2 flex justify-center bg-base-100 border-rounded">
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/house.png"
                      class="w-80 h-80 flex bg-base-100"
                      format="webp"
                />
          </div>
          <p class="text-2xl mt-24 text-secondary"> 
            random information
          </p>
        </section>
        </main>
    <client-only>
      <footer class="footer footer-center p-10 mt-48 bg-primary text-primary-content">
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
