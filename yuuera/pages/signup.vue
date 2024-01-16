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
      <div class="flex-1 justify-end">
      <div class="pr-4 ">
        <div >
            <NuxtLink class="m-4 mt-4 w-28 btn bg-primary" to="/Login">
              <span class=" text-info text-xl font-semibold">Log In</span>
            </NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </header>
  <body class="bg-base-100">
      <main>
        <section class="bg-info w-full flex items-center justify-center">
          <div class="flex flex-col w-full justify-center pb-48 pt-48 max-w-xs">
            <div class="form-control w-full ">
              <p class="text-secondary leading-loose tracking-widest text-3xl md:text-3xl p-4 pt-0 font-semibold">
                Enter Your information Below
              </p>
              <label class="label">
                  <span class="label-text text-primary">*What is your First Name?</span>
              </label>
              <input type="text" placeholder="First Last" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control mt-12 w-full max-w-xs">
              <label class="label text-center">
                  <span class="label-text text-primary text-center">*What is your Last Name</span>
              </label>
              <input type="text" placeholder="example@gmail.com" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control mt-12 w-full max-w-xs">
              <label class="label text-center">
                  <span class="label-text text-primary text-center">*What is your Email address</span>
              </label>
              <input type="text" placeholder="example@gmail.com" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
                <span class="label-text text-primary">*Address?</span>
            </label>
            <input type="text" placeholder="1234 Exmaplestreet" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control mt-12 mb-12 w-full max-w-xs">
            <label class="label">
                <span class="label-text text-primary">*Phone number</span>
            </label>
            <input type="text" placeholder="012-345-6789" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="dropdown form-control mt-4 mb-12 w-full max-w-xs">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary">*Country</span>
                </label>
                <label class="cursor-pointer label">
                  <span class="label-text text-neutral">United States of America</span>
                  <div>
                    <input type="checkbox" checked="checked" class="checkbox checkbox-error" />
                  </div>
                </label>
              </div>
            </div>
            <NuxtLink to="/results">
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </NuxtLink>
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

<script setup>
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

import { ref } from 'vue'

const signUpEmail = ref('')
const showButton = ref(true)
const showThanks = ref(false)
function handleSubmit() {
  if (validateEmail(signUpEmail.value)) {
    handleSend()
  }
}

async function handleSend() {
  showButton.value = false;
  showThanks.value = true;
  console.log(signUpEmail.value);

  const data = { email: signUpEmail.value };

  try {
    // Change the URL to your production server
    await fetch('https://api.yuuera.com/newsletter/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
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

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
