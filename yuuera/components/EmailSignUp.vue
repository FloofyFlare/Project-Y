<template>
  <div class="hello">
    <h1 class="text-primary font-bold text-2xl">Stay Informed!</h1>
    <div class="form-control ">
      <div class="text-input-button input-group flex justify-center pt-6">
        <form @submit.prevent="handleSubmit">
          <input
            v-model="signUpEmail"
            placeholder="example@gmail.com"
            type="text"
            class="input input-bordered mb-2"
            @keyup.enter="handleSubmit"
          />
          <button type="submit" class=" btn button no-animation bg-primary " @click="handleSubmit">
            <p class="md:hidden">Sign up</p><p class="hidden md:flex">Join the Future</p>
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
</style>
