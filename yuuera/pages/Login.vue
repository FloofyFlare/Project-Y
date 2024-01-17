<template>
  
    <HeaderComp></HeaderComp>
    
    <body class="bg-base-100 md:w-full h-screen ">
      <main class="h-full">
        <section>
          <div class="flex justify-center">
            <div class="hero min-h-screen bg-info">
              <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                  <h1 class="text-neutral text-5xl font-bold">Login now!</h1>
                  <div class="flex-col justify-center">
                    
                      <NuxtLink to="/signup" class="btn mt-8 btn-primary ">Create an account?</NuxtLink>
                    
                  </div>
                </div>
                <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form @submit.prevent="handleSubmit" class="card-body">
                    <span class="text-error" v-show="badInput">Email and/or password is either missing or inccorect</span>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input v-model="signUpEmail" type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                      <label class="label">
                        <span class="label-text">Password</span>
                      </label>
                      <input v-model="pass" type="password" placeholder="password" class="input input-bordered" required />
                      <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div class="form-control mt-6">
                      <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                  </form>
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
import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()


if(process.client){
  store.refreshAccessToken();
    if (store.accessToken != null){
      window.location.replace('http://localhost:3001/Homepage')
    }
}

const signUpEmail = ref('')
const pass = ref('')
const badInput = ref(false)
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
    const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      const responseData = await response.json();
      const tokens = { accessToken: responseData.access, refreshToken: responseData.refresh };
      store.setTokens(tokens);
      console.log('Login successful:', store.accessToken);
      // Do something with the responseData, such as updating the component state
      window.location.replace('http://localhost:3001/Homepage');
      return responseData;
    } else {
      // Handle errors for non-2xx status codes
      console.error('Login failed:', response.statusText);
      badInput.value = true
    }
  } catch (error) {
    badInput.value = true
    console.error(error);
  }
}

const validateEmail = (email: String) => {
  if (typeof email !== 'string') {
    throw new TypeError('Email must be a string');
  }
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

</script>
