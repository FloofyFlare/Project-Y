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
  <body class="bg-base-100 md:w-screen">
      <main class="justify-center">
        <section class="rounded-md bg-info">
            <div class="flex h-screen w-full bf-info">
                <div class="mx-auto mt-24 max-w-md">
                      <div class="pt-16 flex-col justify-center rounded-2xl">
                        <div class="form-control w-full max-w-xs">
                          <p class="text-secondary leading-loose tracking-widest text-3xl md:text-3xl p-4 pt-0 font-semibold">
                            Enter Your information Below
                          </p>
                          <label class="label">
                              <span class="label-text text-primary">*What is your name (First, Last)?</span>
                          </label>
                          <input type="text" placeholder="First Last" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="form-control mt-12 w-full max-w-xs">
                          <label class="label text-center">
                              <span class="label-text text-primary text-center">*What is your Email address</span>
                          </label>
                          <input type="text" placeholder="example@gmail.com" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="form-control mt-12 w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-primary">*Your current Business Address?</span>
                        </label>
                        <input type="text" placeholder="1234 Exmaplestreet" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="form-control mt-12 mb-12 w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-primary">Phone number</span>
                        </label>
                        <input type="text" placeholder="012-345-6789" class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="dropdown form-control mt-12 mb-12 w-full max-w-xs">
                          <label tabindex="0" class="btn m-1">Zone you live in</label>
                          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>NorthWest Ohio</a></li>
                            <li><a>NorthEast Ohio</a></li>
                            <li><a>SouthWest Ohio</a></li>
                            <li><a>SouthEast Ohio</a></li>
                          </ul>
                        </div>
                      </div>
                </div>

                
          </div>
        </section>
        <section class="bg-info">

            <div class="max-w-4xl justify-center text-center md:text-left">
                <NuxtLink to="/accountsettings">
              <span class="btn bg-primary text-info text-xl font-semibold">Submit</span>
            </NuxtLink>
            </div>
                            
        </section>
      </main>
    <client-only>
      <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div class="">
          <p class="font-bold">Yuuera, LLC <br /></p>
          <p>YuueraOffical@gmail.com</p>
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
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
