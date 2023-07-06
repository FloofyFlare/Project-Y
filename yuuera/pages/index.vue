<template>
  <client-only>
  <header class="fixed opacity-[.98] bg-info text-base-200 z-50">
    <div class="navbar w-screen">
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
          <NuxtLink to="/about">
            <span class="btn bg-primary text-info text-xl font-semibold">About</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <body class=" bg-base-100">
   
  <section class="rounded-md">
    <div class="bg-info">
      <div class=" hero min-h-screen shadow-2xl">
        <div class="w-full h-full flex justify-center items-center md:justify-start md:items-left  hero-overlap bg-opacity-60"></div>
        <div class="text-center md:text-start text-neutral-content">
          <div class="max-w-4xl md:text-left">
            <h1 class="pt-20 text-primary text-6xl md:text-9xl flex font-semibold md:text-left md:justify-start">Buy and sell anything with Crypto as payment</h1>
            
            <div class="md:flex">
            <div class="mt-12 flex justify-center md:justify-start">
              <div class="w-2/3 rounded-3xl md:h-24">  
                <p class=" text-left bg-neutral p-4 rounded-xl md:text-left leading-loose tracking-wide text-xl lg:text-2xl text-info">
                  Discover our cutting-edge crypto e-commerce platform, enabling cost-effective buying and selling with stable coins as payment.
                </p>
              </div>
            </div>

            <div class="  avatar hidden md:inline">
              <nuxt-img
                alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                src="/images/shopping cart.png"
                class="z-10"
                format="webp"
              />
            </div>
          </div>
          </div>
          <a href="#next" class="mt-24 mb-4 text-info bg-primary btn-outline btn btn-md md:btn-md lg:btn-lg" to="">Learn more</a>
        </div>
      </div>
      </div>
    </section>

    <section id="next" class="bg-secondary rounded-xl">
      <div class="mt-4 avatar">
        <nuxt-img
          alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
          src="/images/shopping cart.png"
          class="z-10"
          format="webp"
        />
      </div>

      <div class="flex justify-center">
        <div class="w-96 rounded-2xl">
          <p
            class="text-primary text-center leading-loose tracking-widest text-3xl p-4 pt-0 font-semibold lg:text-2xl"
          >
            Goodbye unnessacary Fees. Hello lower prices
          </p>
        </div>
      </div>

      <div class="mb-12 flex justify-center">
        <div class="w-3/3 rounded-2xl">
          <p
            class="text-center md:pt-12 leading-loose text-xl tracking-widest text-info text-md lg:text-2xl"
          >
            Our marketplace is powered by the cardano blockchain helping you to
            take control of your transactions avoiding unnessacary fees and data
            collection.
          </p>
        </div>
      </div>
    </section>
      <EmailSignUp></EmailSignUp>
    <section class="bg-info pt-4 rounded-md">  
      <div class="md:pt-24 md:mt-80 hidden md:inline ">
        <div class=" mt-10">
            <h1 class=" text-primary text-right p-4 font-bold text-4xl md:text-7xl">Header</h1>
        </div>
        <div class="w-screen flex justify-start">
          <nuxt-img
                alt="Cardano logo"
                src="/images/cardano-logo.png"
                class="rounded-box w-1/2 h-auto"
                format="webp"
              />
        <div class="flex justify-center">
          <div class=" p-4 md:w-2/3 rounded-3xl h-96">
            <p class="text-xl text-neutral text-center leading-loose tracking-widest text-l lg:text-2xl">
              At Yuuera we empower people with the ability to fully control their decisions online using blockchain and crypto currency, cutting out unessacry third parties and contributing to making the world a better place.
            </p>
          </div>
        </div>
        </div>

      </div>
      <div class="mt-2 pb-24 md:hidden ">
        <div class="w-full carousel rounded-box">
          <div
            id="item3"
            class="carousel-item w-screen flex flex-col justify-center"
          >
            <div class="w-screen flex justify-center">
              <nuxt-img
                alt="Cardano logo"
                src="/images/cardano-logo.png"
                class="rounded-box w-1/2 h-auto"
                format="webp"
              />
            </div>
            <h1 class="font-semibold text-3xl p-4">End to end security</h1>
            <p class="p-4 text-xl text-neutral tracking-widest text-md">
              Leveraging the Cardano blockchain our transactions are done via
              smart contracts on Cardano, this minimizes the amount of user data
              we store significantly when compared to traditional e-commerce
              marketplaces.
            </p>
          </div>

          <div
            id="item2"
            class="carousel-item justify-center w-screen flex-col"
          >
            <div class="w-screen flex justify-center">
              <nuxt-img
                alt="an image of 2 hands shaking showing agrement"
                src="/images/handshake.png"
                class="rounded-box w-1/2 h-auto"
                format="webp"
              />
            </div>
            <h1 class="font-semibold text-3xl p-4">Borderless payments</h1>
            <p class="p-4 text-xl text-neutral tracking-widest text-md">
              Borderless e-commerce for a global economy. Lets us help you
              expand your access to markets around the world. No more cross
              border fees affecting the price of your purchases
            </p>
          </div>
          <div
            id="item3"
            class="carousel-item justify-center w-screen flex-col"
          >
            <div class="w-screen flex justify-center">
              <nuxt-img
                alt="A stack of books"
                src="/images/books.png"
                class="rounded-box w-1/2 h-auto"
                format="webp"
              />
            </div>

            <h1 class="font-semibold text-3xl p-4">
              Serving communities for the greater good
            </h1>
            <p class="p-4 text-xl text-neutral tracking-widest text-md">
              We are committed to making a positive impact by giving 10 percent
              of our profits to provide technology and educational benefits to
              underserved communities.
            </p>
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-6">
          <a href="#item1" class="btn btn-xs"></a>
          <a href="#item2" class="btn btn-xs"></a>
          <a href="#item3" class="btn btn-xs"></a>
        </div>
      </div>

    
    </section>
    <section class="rounded-lg">
      <div class="h-screen">
        <div class="mt-12 mb-6">
          <h1 class="text-primary font-bold text-4xl md:text-6xl">FAQ</h1>
        </div>

        <div class="mt-10 mb-10 flex justify-center pl-4 pr-4">
          <div
            class="flex flex-row bg-secondary w-3/3 rounded-3xl h-48 shadow-lg"
          >
            <h1 class="text-primary font-bold text-l lg:text-xl p-2">
              Consumer Focused:
            </h1>
            <p class="text-info leading-loose text-l lg:text-2xl">
              Providing great products and services is one thing. Creating
              products that you value is success.
            </p>
          </div>
        </div>

        <div class="mb-10 flex justify-center pl-4 pr-4">
          <div
            class="flex flex-row bg-secondary w-3/3 rounded-3xl h-48 shadow-lg"
          >
            <h1 class="text-primary font-bold text-l lg:text-xl p-2">
              Privacy:
            </h1>
            <p class="text-info leading-loose text-l lg:text-2xl">
              Secure peer to peer transacitons on without reliance on third part
              organizations or entities. EVEN US!
            </p>
          </div>
        </div>

      <div class="mb-16 flex justify-center pl-4 pr-4
      ">
        <div class=" flex flex-row bg-secondary w-3/3 rounded-3xl h-48 shadow-lg">
          <h3 class="text-primary font-bold text-l lg:text-xl p-2">Community: </h3>  
          <p class="text-info leading-loose text-l lg:text-2xl">
              Blockchain is internet freedom for us, providing
              the space for tomorrows creativity, innovation, and experiences.
          </p>
        </div>
      </div>
    </div>
    <EmailSignUp ></EmailSignUp>
    </section>

    <footer class="footer footer-center p-10 bg-primary text-primary-content">
      <div class="">
        <p class="font-bold">Yuuera LLC <br /></p>
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
  </body>
</client-only>
</template>

<script setup lang="ts">
useHead({
  title: 'Yuuera | Buy and Sell goods online with Crypto currency!',
  meta: [
    {
      name: 'description',
      content:
        ' Discover our cutting-edge crypto e-commerce platform, enabling cost-effective buying and selling with stable coins as payment.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
  {hid: 'favicon', rel: 'icon', type:'image/x-icon', href:'favicon.ico'}
  ]
})
</script>

<style scoped lang="scss">
@import 'assets/scss/appStyles.scss';
</style>
