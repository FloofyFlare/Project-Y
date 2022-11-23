<template>
  <div class="hello">
    <h1>The sign up button</h1>
    <form id="signup-form" @submit.prevent="handleSubmit">
      <input
        v-model="signUpEmail"
        @keyup.enter="handleSubmit"
        placeholder="email"
        type="email"
        class="email-box"
      />
      <button type="submit" class="submit-button">Join the Future</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const signUpEmail = ref("example@company.com");

const handleSubmit = () => {
  console.log(signUpEmail.value);
  alert("processing");
};
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
}
</style>
