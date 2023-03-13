<template>
  <div class="hello">
    <h1 class="text-primary text-6xl font-semibold">
      Ready for a new internet?
    </h1>
    <h2 class="text-primary text-4xl font-semibold">
      sign up for news updates
    </h2>
    <div class="form-control">
      <div class="input-group flex justify-center pt-24">
        <form id="signup-form" @submit.prevent="handleSubmit">
          <input
            v-model="signUpEmail"
            placeholder="example@email.com"
            type="email"
            class="input input-bordered"
            @keyup.enter="handleSubmit"
          />
          <button type="submit" class="btn">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const signUpEmail = ref('')

async function handleSubmit() {
  console.log(signUpEmail.value)
  alert('processing')
  var data = { email: signUpEmail.value }
  await $fetch('http://127.0.0.1:8000/newsletter/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
</script>

<style scoped lang="scss">
.email-box {
  height: 30px;
  width: auto;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  padding: 5px 5px 5px 20px;
}
.submit-button {
  height: 40px;
  width: auto;
  position: relative;
  margin-left: 10px;
  width: auto;
  background-color: rgb(138, 159, 255);
  color: white;
  border-radius: 30px;
  border-style: none;
  padding: 10px;
  &:hover {
    background-color: rgb(117, 135, 218);
  }
  &:active {
    background-color: rgb(80, 91, 141);
  }
}
</style>
