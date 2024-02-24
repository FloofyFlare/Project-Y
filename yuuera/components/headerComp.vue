<template>
    <header class="fixed opacity-[.98] bg-info text-base-200 z-50">
    <div class="border-b-2 border-slate-600 navbar w-screen">
      <div class="flex-1 pb-24 md:pb-0">
        <NuxtLink to="/" class="absolute ml-24 mt-8 md:mt-0 md:ml-24 w-28">
          <nuxt-img
            alt="Yuuera logo"
            src="/images/logo.png"
            class="w-28 fill-current"
            format="webp"
          />
        </NuxtLink>
      </div>
      <div class="flex-1  w-full pt-12 md:pt-0 sm:flex md:mt-0">
        <div class="dropdown w-full">
          <div tabindex="0" role="button" class="flex bg-info btn text-neutral md:m-1">Categories</div>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 bg-primary shadow bg-base-100 rounded-box w-full">
            <li><a @click="setBrand('Apple')" class="font-bold">Apple</a></li>
            <li><a @click="setBrand('Samsung')" class="font-bold">Samsung</a></li>
            <li class="hidden"><a @click="setBrand('Google')" class="font-bold">Google</a></li>
            <li><a @click="clearFilter(Null)" class="font-bold">All Tech</a></li>
            <li class="hidden"><a @click="setBrand('Merch')" class="font-bold">Merch</a></li>
          </ul>
        </div>
      </div>
      <div class="flex-1 justify-end">
      <div class="pt-12 md:pt-0 ">
        <div class="mt-" >
          <div v-if="loggedIn">
            <NuxtLink to="accountsettings" class="m-4 mt-4 btn bg-primary">
              <span class=" text-info text-xl font-semibold">Settings</span>
            </NuxtLink>
            <button  class="m-4 mt-4 w-32 btn bg-neutral" @click="logOut()">
              <span class=" text-info text-xl font-semibold">Log Out</span>
            </button>
          </div>
            <NuxtLink v-if="!loggedIn" class="m-4 mt-4 w-32 btn bg-primary mt-24" to="Login">
              <span class=" text-info text-xl font-semibold">Log In</span>
            </NuxtLink>
        </div>
      </div>
    </div>
    </div>
  </header>
</template>

<script setup>

const loggedIn = ref('');
import { useFilterStore } from '~/store/Filters'
import { useAuthStore } from '~/store/LoginStore'
const store = useAuthStore()
const filter = useFilterStore()
store.refreshAccessToken();

if (store.accessToken != null){
    loggedIn.value = true
}

function logOut() {
  store.clearTokens();
  window.location.reload();
}

function setBrand(brand){
  console.log(brand);
  filter.setBrand(brand);
  window.location.replace('https://www.yuuera.com/results');
}
function clearFilter() {
  filter.clearFilter();
  window.location.replace('https://www.yuuera.com/results');
}
</script>