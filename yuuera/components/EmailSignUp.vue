<template>
  <div class="hello">
    <h1>The sign up button</h1>
    <div class="form-control ">
      <div class="text-input-button input-group flex justify-center pt-6">
        <form id="signup-form" @submit.prevent="handleSubmit">
          <input
            v-model="signUpEmail"
            placeholder="example@company.com"
            type="text"
            class="input input-bordered"
            @keyup.enter="handleSubmit"
          />
          <button type="submit" class="btn button no-animation" @click="handleSubmit">
            Join the Future
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const signUpEmail = ref()

const handleSubmit = () => {
  console.log(signUpEmail.value)
  alert('processing')
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
