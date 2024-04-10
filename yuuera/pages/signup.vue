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
              Enter Your information Below
            </p>
            <label class="label">
              <span class="label-text text-primary"
                >*What is your First Name?</span
              >
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
              <span class="label-text text-primary text-center"
                >*What is your Last Name</span
              >
            </label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Lovelace"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <span v-show="badInputEmailWrong" class="text-error pt-8"
              >Please check your Input</span
            >
            <span v-show="badInputEmail" class="text-error pt-8"
              >Please check your Input</span
            >
            <label class="label text-center">
              <span class="label-text text-primary text-center"
                >*What is your Email address</span
              >
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="example@gmail.com"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
              <span class="label-text text-primary">*Street Address?</span>
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
              <span class="label-text text-primary">*City?</span>
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
              <span class="label-text text-primary">*State?</span>
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
              <span class="label-text text-primary">*phone number?</span>
            </label>
            <input
              v-model="phoneNumber"
              type="text"
              placeholder="123-456-7890"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="form-control mt-12 w-full max-w-xs"></div>
          <span v-show="badInputPass" class="text-error pt-8"
            >Please follow password guidlines</span
          >
          <label class="label">
            <span class="label-text text-primary">*password?</span>
          </label>
          <input
            v-model="password"
            type="password"
            placeholder="pass"
            class="input input-bordered w-full max-w-xs"
          />
          <span class="text-neutral pt-8">Passwords need to be:</span>
          <ul>
            <li><span class="text-neutral">- 8+ characters</span></li>
            <li>
              <span class="text-neutral"
                >- Has upper and lower case letters</span
              >
            </li>
            <li><span class="text-neutral">- Has a number</span></li>
            <li><span class="text-neutral">- Has a special character</span></li>
          </ul>

          <div class="form-control mt-12 w-full max-w-xs">
            <label class="label">
              <span class="label-text text-primary">*repeat password</span>
            </label>
            <input
              v-model="password2"
              type="password"
              placeholder="pass"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="dropdown form-control mt-4 mb-12 w-full max-w-xs">
            <span v-show="badInputCountry" class="text-error pt-8"
              >Please fill out an option</span
            >
            <div class="form-control">
              <label class="label">
                <span class="label-text text-primary"
                  >*Country (Shipping only avaliable in the USA
                  temporarily)</span
                >
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-neutral"
                  >United States of America</span
                >
                <div>
                  <input
                    v-model="countryIsUSA"
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-error"
                  />
                </div>
              </label>
            </div>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
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
                ></path>
              </svg>
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
import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()

if (process.client) {
  store.refreshAccessToken()
  if (store.accessToken != null) {
    window.location.replace('https://www.yuuera.com/')
  }
}

const password = ref('')
const password2 = ref('')
const phoneNumber = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const street = ref('')
const state = ref('')
const city = ref('')
const countryIsUSA = ref('')
const badInputPass = ref(false)
const badInputEmail = ref(false)
const badInputEmailWrong = ref(false)
const badInputPhone = ref(false)
const badInputCountry = ref(false)

function handleSubmit() {
  if (!validateEmail(email.value)) {
    badInputEmailWrong.value = true
  } else {
    badInputEmailWrong.value = false
  }
  if (!countryIsUSA.value) {
    badInputCountry.value = true
  } else {
    badInputCountry.value = false
  }
  if (validatePassword(password.value, password2.value)) {
    if (
      validateEmail(email.value) &&
      validatePhoneNumber(phoneNumber.value) &&
      validatePassword(password.value, password2.value) &&
      countryIsUSA.value === true
    ) {
      handleSend()
    }
  }
}

async function handleSend() {
  const data = {
    email: email.value,
    password: password.value,
    password2: password2.value,
    phone_number: phoneNumber.value,
    first_name: firstName.value,
    last_name: lastName.value,
    address: street.value + ', ' + city.value + ', ' + state.value,
    country: 'United States of America',
  }

  try {
    // Change the URL to your production server
    await fetch('https://api.yuuera.com/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log('account created')
    logIn()
  } catch (error) {
    badInputEmail.value = false
    console.error(error)
  }
}

async function logIn() {
  console.log(email.value)

  const data = {
    email: email.value,
    password: password.value,
  }

  try {
    // Change the URL to your production server
    const response = await fetch('https://api.yuuera.com/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const responseData = await response.json()
      const tokens = {
        accessToken: responseData.access,
        refreshToken: responseData.refresh,
      }
      store.setTokens(tokens)
      console.log('Login successful:', store.accessToken)
      // Do something with the responseData, such as updating the component state
      await store.getAccount()
      window.location.replace('https://www.yuuera.com/')
      return responseData
    } else {
      // Handle errors for non-2xx status codes
      console.error('Login failed:', response.statusText)
    }
  } catch (error) {
    console.error(error)
  }
}

function validatePassword(password, password2) {
  console.log('pass')
  // Define validation criteria
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)

  // Check if all criteria are met
  const isValid =
    password.length >= minLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar &&
    password === password2

  if (!isValid) {
    badInputPass.value = true
  } else {
    badInputPass.value = false
  }
  return isValid
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

function validatePhoneNumber(phoneNumber) {
  // Remove any non-digit characters
  const cleanedNumber = phoneNumber.replace(/\D/g, '')

  // Check if the cleaned number is 10 digits long
  if (cleanedNumber.length === 10) {
    // It's a valid 10-digit phone number
    badInputPhone.value = false
    return true
  } else {
    // It's not a valid phone number
    badInputPhone.value = true
    return false
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
