<template>


    <HeaderComp></HeaderComp>
    <body class="bg-info md:w-full h-screen">
      <main class="h-full">
        <section class="rounded-xl">
        <span id="next"></span>
        <div class="mb-10 flex justify-end pl-4 pr-4 pt-24">
            <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/house.png"
                      class="w-1/3 flex"
                      format="webp"
                />
            <div
              class="h-1/6 w-2/3 h-60 mt-12 rounded-3xl ml-24"
            >
              <h1 class="text-primary text-left font-bold text-l md:text-5xl p-2">
                Name of product:
              </h1>
              <div>
                <p class="w-full text-left pt-6 text-neutral leading-loose text-md md:text-2xl">
                  Owned by: htershtre
                </p>
              </div>
              <div class="justify-content-left">
                <div class="dropdown justify-left mt-6">
                    <div tabindex="0" role="button" class="btn m-1 bg-primary text-info left-0">Color for: fdsdsf</div>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 text-base-100 shadow bg-info rounded-box w-52">
                      <li><a>Red</a></li>
                      <li><a>White</a></li>
                      <li><a>Blue</a></li>
                      <li><a>Green</a></li>
                    </ul>
                    </div>
                <div class="dropdown justify-left mt-6">
                <div tabindex="0" role="button" class="btn m-1 bg-primary text-info justify-left">Size for: fdsdsf</div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow text-base-100 bg-info rounded-box w-52">
                  <li><a>Small</a></li>
                  <li><a>Medium</a></li>
                  <li><a>Large</a></li>
                  <li><a>Extra Large</a></li>
                </ul>
              </div>
            </div>
            <div class="flex justify-center rounded-2xl  h-24">
          <div class="flex justify-center rounded-2xl w-full h-1/2">
            <p
              class="w-full text-neutral text-left leading-loose text-l md:text-2xl"
            >
            More info about this product: XZ CBcaxsv bxacsxzdv frbhcxzasvd fbxcsdzEFWVR
            </p>
          </div>
        </div>
        <div
              class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl"
            >
              <h1 class="text-primary font-bold text-l md:text-5xl p-2 border-double">

              </h1>
              <div>
                <p class="w-full text-neutral text-left leading-loose text-3xl md:text-6xl">
                 $120
                </p>
              </div>
              <div class="mt-12">
                <WalletLogin></WalletLogin>
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

const validateEmail = (email : string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


</script>
