<template>
  <div class="hello">
    <h1 v-show="showButton" class="text-primary font-bold text-2xl">Stay Informed!</h1>
    <h2 v-show="showButton" class="w-full pr-12 pl-12">Provide your email to stay updated on any future developments.</h2>
    <div class="form-control">
      <div v-show="showButton" class="text-input-button input-group flex justify-center pt-6">
        <form @submit.prevent="handleSubmit">
          <input
            v-model="signUpEmail"
            placeholder="example@gmail.com"
            type="email"
            class="input input-bordered mb-2"
            @keyup.enter="handleSubmit"
          />
          <button
            type="submit"
            class="btn button no-animation bg-primary"
            @click="handleSubmit"
          >
            <p class="md:hidden">Sign up</p>
            <p class="hidden md:flex">Join the Future</p>
          </button>
        </form>
      </div>
      <div v-show="showThanks" class=" w-full flex justify-center">
        <div>
          <h1 class="text-primary font-bold text-xl">Thank you for your interest 🎉 </h1>
          <h2 class="w-full pr-12 pl-12">Join our <a class="text-secondary" href="https://twitter.com/YuueraOfficial">twitter</a> for our latests updates and to interact with the Yuuera community</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const signUpEmail = ref('')
const showButton = ref(true)
const showThanks = ref(false)
function handleSubmit() {
  if(validateEmail(signUpEmail.value)){
    handleSend();
  }
}
async function handleSend() {
    showButton.value = false;
    showThanks.value = true;
    console.log(signUpEmail.value)

    const data = { email: signUpEmail.value }

    try {
    // Change the URL to your production server
    await fetch('http://0.0.0.0:8000/newsletter/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error(error)
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
</script>
