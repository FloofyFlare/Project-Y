<template>
  
  <HeaderComp/>
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
                <span class="label-text text-primary">*Street Address?</span>
            </label>
            <input type="text" placeholder="1234 Exmaplestreet" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
                <span class="label-text text-primary">*phone number?</span>
            </label>
            <input type="text" placeholder="123-456-7890" class="input input-bordered w-full max-w-xs" />
            </div>
            
            <div class="form-control mt-12 w-full max-w-xs"></div>
            <label class="label">
                <span class="label-text text-primary">*password?</span>
            </label>
            <input type="text" placeholder="pass" class="input input-bordered w-full max-w-xs" />
            

            <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
                <span class="label-text text-primary">*repeat password</span>
            </label>
            <input type="text" placeholder="pass" class="input input-bordered w-full max-w-xs" />
            </div>

            <div class="dropdown form-control mt-4 mb-12 w-full max-w-xs">
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-primary">*Country (Shipping only avaliable in the USA temporarily)</span>
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

const password = ref('');
const password2 = ref('');
const phoneNumber = ref('');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const address = ref('');
const country = ref('');

function handleSubmit() {
  if (validateEmail(email.value)) {
    handleSend()
  }
}

async function handleSend() {
  

  const data = { email: this.email.value, password: password, password2: password2, phone_number: phoneNumber, first_name: firstName, last_name: lastName, address: address, country: country};

  try {
    // Change the URL to your production server
    await fetch('http://127.0.0.1:8000/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log("account created");
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
