<template>
  
  <header class=" fixed opacity-[.98] bg-info text-base-200 z-50">
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
      <div class="flex-none">
        <div class="pr-4 mt-2">
          <NuxtLink to="/about"
            ><span class="btn bg-primary text-info text-lg font-semibold"
              >About</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
  <body class="bg-info">
    <main>
    <section class="h-2/3 pt-24">
      <nuxt-img
        src="/images/twitter base trans.png"
        class="absolute top-7 opacity-10 z-0 lowest-el"
        format="webp"
      />
      <div>
        <div class="flex justify-center items-center">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary pb-12 text-6xl md:text-9xl font-semibold">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="flex justify-center">
      <div class="flex justify-center items-center md:w-2/3 md:mt-40 md:mb-12">
        <div class="rounded-3xl bg-secondary z-40">
          <div class="mt-10 flex justify-center">
            <h1 class="text-primary p-4 pt-0 font-bold text-4xl md:text-7xl">
              Vision
            </h1>
          </div>
          <div class="flex justify-center">
            <div class="p-4 md:pb-24 md:w-2/3 rounded-3xl">
              <p
                class="text-xl text-info text-center leading-loose pb-4 md:pb-0tracking-widest text-l lg:text-2xl"
              >
              At Yuuera, we empower individuals with complete control over their online decisions using blockchain technology and cryptocurrency. By eliminating unnecessary third parties, we contribute to creating a better, more efficient world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    
    <section class="lg:w-screen lg:flex lg:justify-center">
      <div class="avatar">
        <nuxt-img format="webp" src="/images/laptopstock.png" class="lg:hidden"/>
      </div>
      <div class="lg:w-2/3 lg:flex lg:justify-center lg:ml-8 lg:mr-8  lg:rounded-3xl">
        <div class="">
          <div class="flex  justify-center items-center">
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-4xl sm:text-left">
                <h1 class="text-primary font-bold text-4xl md:text-7xl">
                  Who We Are
                </h1>
              </div>
            </div>
          </div>
          <div class="mb-24 flex justify-center">
            <div class="md:p-12 p-4  rounded-3xl">
              <p
                class="text-xl text-neutral text-center leading-loose tracking-widest text-l lg:text-2xl"
              >
                We transform ideas into cutting-edge software. Since the 2019 crypto
                craze, we've been pioneers in the crypto space, turning it from a
                fad into a reality. Through ideation, problem-solving, and legal
                work, we bring the dream of crypto to life. Join us as we shape the
                future of technology, one innovative line of code at a time.
              </p>
            </div>
          </div>
        </div>
        <nuxt-img format="webp" src="/images/laptopstock.png" class="hidden w-96 mt-12 h-96 mr-4 bg-info rounded-3xl flex  lg:inline"/>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="w-2/3">
        <div class="flex justify-center items-center mb-12">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary font-bold text-4xl md:text-7xl">
                Our Values
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row border-2 border-slate-600"
          >
            <div class="flex justify-center">
              <nuxt-img
                format="webp"
                src="/images/padlock.png"
                class="margin-left-24px w-full h-auto justify-contents"
              />
            </div>
            <div>
              <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Security:</p>
              <p class="font-medium text-neutral text-lg md:text-2xl">
                We are devoted to the security of your transactions and handling
                your information with respect using blockchain software and
                cryptography to keep your information away from prying eyes and
                keeping it in your hands.
              </p>
            </div>
          </div>

          <div
            class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row border-2 border-slate-600"
          >
            <div class="flex rounded md:hidden">
              <nuxt-img format="webp" src="/images/internet-image.png" />
            </div>
            <div>
              <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Innovation:</p>
              <p class="font-medium text-neutral text-lg md:text-2xl">
                Blockchain is internet freedom for us, providing the space for
                tomorrows creativity, innovation, and experiences. We work to
                make sure it stays that way for all of us.
              </p>
            </div>
            <div class="flex rounded hidden md:inline">
              <nuxt-img format="webp" src="/images/internet-image.png" />
            </div>
          </div>

          <div
            class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row border-2 border-slate-600"
          >
            <div class="flex rounded">
              <nuxt-img format="webp" src="/images/chatbubbles.png" />
            </div>
            <div>
              <p class="font-medium p-8 text-2xl md:text-3xl text-primary">Consumer Focused:</p>
              <p class="font-medium text-neutral text-lg md:text-2xl">
                Providing great products and services is one thing. Creating
                products that you value is success. Were committed to getting
                feedback from our customers and using cutting edge technology to
                create software for the game changers of the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <client-only>
      <EmailSignUp class="pt-4 pb-4"></EmailSignUp>
    <footer class="footer footer-center p-4 bg-primary text-primary-content">
      <div>
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
              ></path></svg
          ></a>
        </div>
      </div>
    </footer>
  </client-only>
  </body>

</template>

<script setup lang="ts">
useHead({
  title: 'Yuuera | About us',
  meta: [
    {
      name: 'description',
      content: 'Hello we are Yuuera a Web 3.0 company built for YUU',
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
