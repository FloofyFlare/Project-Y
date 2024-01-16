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
      <div class="flex-1  w-full hidden sm:flex ">
        <div class="dropdown w-full">
          <div tabindex="0" role="button" class="flex bg-info btn text-neutral m-1">Categories</div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-primary shadow bg-base-100 rounded-box w-full">
            <li><NuxtLink to="/results" class="font-bold">Apple</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">Samsung</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">Google</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">Motorola</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">OnePlus</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">All Tech</NuxtLink></li>
            <li><NuxtLink to="/results" class="font-bold">Merch</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="flex-1 justify-end">
      <div class="pr-4 ">
        <div >
            <NuxtLink class="m-4 mt-4 w-28 btn bg-primary" to="/Login">
              <span class=" text-info text-xl font-semibold">Log In</span>
            </NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script setup>

import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()
store.refreshAccessToken();

</script>