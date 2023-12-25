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
        </div>
    </header>
    
    <body class="bg-base-100 md:w-full h-screen ">
      <main class="h-full">
        <section>
          <div class="flex justify-center">
            <form @submit.prevent="handleSubmit">
              <div class="flex-col justify-center bg-info mt-40 p-40 rounded-3xl">
                <h1 class="text-neutral mb-14 text-3xl pb-4 font-semibold">Log In</h1>
                <div class="mb-10 flex justify-center pl-4 pr-4">
              <div
                class="flex flex-row border-solid w-3/3 rounded-3xl shadow-lg">
                <h1 class="text-primary font-bold text-l lg:text-xl p-2">
                  <div class="w-16 rounded">
                    <img src="data:image/png;base64,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" alt="Account settings/Orders" />
                  </div>
                </h1>
                <input type="text" placeholder="Email Address" class="input w-full " />
              </div>
            </div>

            <div class="mb-10  flex justify-center pl-4 pr-4">
              <div
                class="flex flex-row border-solid w-3/3 rounded-3xl shadow-lg">
                <h1 class="text-primary font-bold text-l lg:text-xl p-2">
                  <div class="w-16 rounded">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAZlBMVEX39/cAAAD////6+vrm5uY2Njavr6+NjY2RkZHx8fHX19fT09PMzMzd3d3g4ODt7e1kZGRZWVnExMR/f3+jo6MuLi5RUVFqamq3t7c7OzslJSVEREQQEBC+vr4XFxceHh5ycnKbm5t6KXFZAAAErUlEQVR4nO2ca5OqMAyGIcGVi4I3EHTXy///kwfP7koKaIOWlDOn76edWTp5JtimTVI8z8nJycnJ6Z8W3mWb5IEQwMuCZRwniySO0ywCmBwqQPZ13a4r/0eH9eVappMCrd24WVWffkufeVF6U+FECHbnNuFd1+UkOBF3x4eMtfI5gm1GD4PDM8abqo1ld9aO1DHeFFpdmRC2HEjf30b2MNFb8SB9v8isYcKeC+n7K1vehDkfsn7pdijho4syK1b7Wqui6v4vtLEg4TJvYRzDrzio41AdF7N0s1u3MRcWMKFFcVxECL8rDtZ/enH7CfmfJpQKQVVCx1MIGzUqhdKUGCkA62Xv24RAWarOgTAmKDHn8uhdorpYXYR/mRl1ZeE99hEq3nzy4AiCL2o7fuIiDGbkyauoM4G68uOpaVhQr0tOc4wGWKZL1udG0JnK3Ck1hjGhr1zSl9Q9eu+Q7V0RCeB9C5ckTO+0lEoAkFsyFbNLrVllmssFcyRbtj3jeTp/9K43pYhY5ayAEDbPb6UoMWsSBGfO0kJjwFqMMmiMVpzzDMbNgIMYJYkmBccoZmS2SVHSo8SeZRRtUF4bm3OWUSCUUuslPTvyFhZKKbXfoAkNXRD/GUEopdIHcGlsfvEoSeZQKkQC2X7zdmJADsWpFGXR2OSFZSCBXB/3zegFysoCJTlOJI7yLb1HGU/3d2ljjq8HUx4sUA5fL5sBMqv6LT25pZQskbqaN3rZD8FbfIQh+V1eQpZOzYgw/EhwRFDEdJs/ruXxdc7DYCxOCJjFHZbCbJTtMCx6MvpvaP0sU/cyZKk3PFDmEwhKfs+UTAdLDMy+7m+ZrqehyYnTaGeUEpejQPono3lCboF5sJ4nuwcKtf0EL6oySInJSW/wJR0Mnnv7qrdmdDK4ZtL8o1l98s7zPMpB5fpBMjh9HKWjdJQClPsyDuLyon/QHmV+vR0Q8dbVupvpH7dDWST3IxdCuwFmKpRrj1pEj4UpTXmIVIPotbuipkDZscc6zwlT9pxhIkZLoTBlT20XGH2uspSnRXc7i4k+XSNL2bfpxkg/f2Qp877+ZNAv7cKUfQkAmJovDz2JaEYruzBl3wEGNp2rFZYp+wrlnGHClHnnlWPK2BdJR8hOC85rcXVkynapHDacQeKU6gTiTB0blP5pTnbBIS+1ZOPcM/spjGHA2Vvaovxta8X06fUpy5Sru03eqccO5X1pZ9+psUF57y5ij7BBeY8/aj/7xCjvJtlFDQuUp8Yk6J+2RXn5JyhJA2H7jtKEKMk5kjvEAiWp0XIL1fKUx6wZolyemBTlntQ+MZ3qnki58JgV+gFWKJUeYU4qywblSenTYlYFxSlnKTQfskBOws0GZZXEcXLT4qYknOi55xU5SkfpKKdAOVrfBvO2CI/yOhakyRuxzMzUCzob7F7nJMhfU26ygwzG6Gu8yejlfHYSYKjM9oniOM7cG+4SNd8VXOvcU7x8S6MsmcZvFg/4yA9bI1wsxojffsPTfIwPQNVnBBO3E341MxgbFUFsrj34mo52XxfB262O1ew9VcdLOealFO/v9Z4oeE8RdD+/Y174rsZHdHJycnJy+j/0B2QsRlB2hY/xAAAAAElFTkSuQmCC" alt="Account settings/Orders" />
                  </div>
                </h1>
                <input type="text" placeholder="Password" class="input w-full " />
              </div>
            </div>
            <button class="btn btn-wide ">Sign in</button>

              </div>
            </form>
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
