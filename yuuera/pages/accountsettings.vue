<template>
  <HeaderComp />
  <body class="bg-base-100">
    <main>
      <section class="bg-info w-full flex items-center justify-center">
        <form
          class="flex flex-col w-full justify-center pb-48 pt-48 max-w-xs"
          @submit.prevent="handleSubmit"
        >
          <div class="form-control w-full">
            <p
              class="text-secondary leading-loose tracking-widest text-3xl md:text-3xl p-4 pt-0 font-semibold"
            >
              Account Settings
            </p>
            <label class="label">
              <span class="label-text text-primary">First Name</span>
            </label>
            <input
              v-model="firstName"
              type="text"
              placeholder="Ada"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label text-center">
              <span class="label-text text-primary text-center">Last Name</span>
            </label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Lovelace"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
              <span class="label-text text-primary">Street Address</span>
            </label>
            <input
              v-model="street"
              type="text"
              placeholder="1234 Exmaplestreet"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
              <span class="label-text text-primary">City</span>
            </label>
            <input
              v-model="city"
              type="text"
              placeholder="Chicago"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
              <span class="label-text text-primary">State</span>
            </label>
            <input
              v-model="state"
              type="text"
              placeholder="Ohio"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <span v-show="badInputPhone" class="text-error pt-8"
              >Please check your Input (10 characters)</span
            >
            <label class="label">
                <span class="label-text text-lg text-neutral">Email yuueraOfficial@gmail.com for password or email changes. Include your accounts current email and phone number for a quick process.</span>
            </label> 

            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">Update Settings</button>
            </div>
          </form>
        </section>
      </main>
      <client-only>
  <footer class="footer footer-center p-10 bg-primary text-primary-content">
    <div class="">
      <p class="font-bold">Yuuera, LLC <br /></p>
      <p>Questions? Contact us at YuueraOfficial@gmail.com</p>
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

import { ref } from 'vue'
import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()

if(process.client){
  store.refreshAccessToken();
    if (store.accessToken === null){
      window.location.replace('https://www.yuuera.com/')
    }
}

const phoneNumber = ref('');
const firstName = ref('');
const lastName = ref('');
const street = ref('');
const state = ref('');
const city = ref('');
const badInputPhone = ref('');
function handleSubmit() {
  if (validatePhoneNumber(phoneNumber.value)) {
    handleSend()
  }
}

async function handleSend() {


  const data = { phone_number: phoneNumber.value, first_name: firstName.value, last_name: lastName.value, address: (street.value + ", " + city.value + ", " + state.value) };

  try {
  store.refreshAccessToken();
  console.log(store.accessToken)
  // Change the URL to your production server
  await fetch('https://api.yuuera.com/api/auth/account-settings/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.accessToken}`,
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("account updated");
    // Clear tokens only if the fetch was successful
    store.clearTokens();
    window.location.replace('https://www.yuuera.com/Login');
  })
  .catch(error => {
    console.error('Error during PUT request:', error);
  });
  } catch (error) {
    console.error('Error before PUT request:', error);
  }
}

function validatePhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned number is 10 digits long
    if (cleanedNumber.length === 10) {
        // It's a valid 10-digit phone number
        badInputPhone.value = false;
        return true;
    } else {
        // It's not a valid phone number
        badInputPhone.value = true;
        return false;
    }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
