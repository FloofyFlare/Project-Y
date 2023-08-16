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
        <div class="flex-none">
          <div class="pr-4 mt-2">
            <NuxtLink to="/about">
              <span class="btn bg-primary text-info text-xl font-semibold">About</span>
            </NuxtLink>
          </div>
        </div>
        <div class="flex-none">
        <div class="pr-4 mt-2">
          <NuxtLink to="/accountsettings"
            ><div class="avatar">
                <div class="w-20 rounded">
                <img src="data:image/jpeg;base64,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" alt="Account settings/Orders" />
              </div>
             </div>
             </NuxtLink
          >
        </div>
      </div>
      </div>
    </header>
    
    <body class="bg-base-100 md:w-full">
      <main>
      <section class="rounded-md">
        <div class="bg-info ">
          <div class="hero min-h-screen ">
            <div class="lg:flex text-center items-center md:text-start text-neutral-content">
              <div class="max-w-4xl md:text-left">
                <h1
                  class="pt-20 lg:pl-2 text-primary text-6xl lg:text-8xl flex font-semibold md:text-left md:justify-start"
                >
                  Buy and sell with crypto as payment
                </h1>

                <div>
                  <div class="mt-12 flex justify-center md:justify-center">
                    <div class="w-2/3 rounded-3xl md:h-24">
                      <p
                        class="shadow-xl text-left bg-neutral p-4 rounded-xl md:text-left leading-loose tracking-wide text-xl lg:text-2xl text-info"
                      >
                        Discover our cutting-edge crypto e-commerce platform,
                        enabling cost-effective buying and selling of products using stablecoins as a seamless mode of payment.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="#next"
                  
                  class="shadow-lg shadow-orange-200 mb-4 text-info mt-24 bg-primary btn-outline btn btn-md md:btn-md lg:btn-lg"
                  to=""
                  >Learn more</a
                >
              </div>
              <div class="flex h-full w-full hidden lg:inline">
                    <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/shopping cart.png"
                      class="z-10 mt-24"
                      format="webp"
                    />
              </div>
            </div>
          </div>
          
      </div>
      </section>
      
      <section class="bg-secondary rounded-xl">
        <span id="next"></span>
        <div class="mt-4 m-12 max-w-xl lg:hidden avatar">
          <nuxt-img
          
            alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
            src="/images/shopping cart.png"
            class="shadow-xl z-10 bg-info mt-12 rounded-3xl"
            format="webp"
          />
        </div>

        <div  class="flex justify-center">
          <div class="lg:pt-24 rounded-2xl">
            <p
             class="text-primary text-center leading-loose tracking-widest text-4xl md:text-4xl p-4 pt-0 font-semibold"
            >
              Goodbye unnecessary fees. Hello lower prices.
            </p>
          </div>
        </div>

        <div class="mb-12 flex justify-center">
          <div class="flex justify-center rounded-2xl">
            <p
              class="text-center m-4 md:w-2/3 md:pt-12 leading-loose text-xl tracking-widest text-info text-md lg:text-2xl"
            >
            Embrace our marketplace powered by the Cardano blockchain, empowering you to reclaim control over your transactions while avoiding unnecessary fees and intrusive data collection practices.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-info">
        <span id="next"></span>
        <div class="mt-4 m-8 max-w-md avatar">
          <nuxt-img
          
            alt="a representation of a smart contract"
            src="/images/contract_v1.png"
            class="shadow-xl z-10 bg-accent mt-12 rounded-3xl"
            format="webp"
          />
        </div>

        <div  class="flex justify-center">
          <div class="lg:pt-12 rounded-2xl">
            <p
             class="text-primary text-center leading-loose tracking-widest text-4xl md:text-4xl p-4 pt-0 font-semibold"
            >
              Pay with ADA and stablecoins securely through smart contracts.
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="flex justify-center rounded-2xl">
            <p
              class="text-center m-4 md:w-2/3 md:pt-12 leading-loose text-xl tracking-widest text-neutral text-md lg:text-2xl"
            >
            Harness the power of next-generation payment solutions on Cardano. Our platform allows you to make on-chain payments with ADA or stablecoins to buy the products you love. Spend your hard-earned crypto using smart contracts and avoid the headache of unfamiliar crypto wallets and confusing payment solutions.
            </p>
          </div>
        </div>
      </section>

      <EmailSignUp></EmailSignUp>
      
      <section class="bg-info pt-4 rounded-md">
        <div class="mt-2 pb-24 ">
          <div class="w-full carousel rounded-box">
            <div
              id="item1"
              class="carousel-item w-full flex  justify-center"
            >
              <div class="md:w-2/5 pt-24">
                <div class="w-full flex justify-center">
                  <nuxt-img
                    alt="Cardano logo"
                    src="/images/cardano-logo.png"
                    class="rounded-box w-1/2 md:w-96 h-auto"
                    format="webp"
                  />
                </div>
                <h1 class="font-semibold text-primary text-3xl md:text-4xl p-4">End to end security</h1>
                <p class="p-4 text-xl md:text-2xl text-neutral tracking-widest ">
                  Leveraging the Cardano blockchain, our transactions operate seamlessly through
                  smart contracts on Cardano. This minimizes the amount of user
                  data we store significantly when compared to traditional
                  e-commerce marketplaces.
                </p>
                <div class="flex p-4">
                  <a href="#item3" class="m-4 btn btn-circle">❮</a> 
                  <a href="#item2" class="m-4 btn btn-circle">❯</a>
                </div>
              </div>
            </div>

            <div
              id="item2"
              class="carousel-item flex justify-center w-full "
            >
            <div class="md:w-2/5 pt-4">
              <div class="w-full  flex justify-center">
                <nuxt-img
                  alt="an image of 2 hands shaking showing agrement"
                  src="/images/handshake.png"
                  class="rounded-box w-1/2 md:w-96 h-auto"
                  format="webp"
                />
              </div>
              <h1 class="font-semibold text-primary text-3xl md:text-4xl p-4">Borderless payments</h1>
              <p class="p-4 text-xl text-neutral md:text-2xl tracking-widest">
                Unlock the realm of borderless e-commerce tailored for a thriving global economy.  Allow us to be your trusted companion
                guiding you to new markets across nations. Say goodbye to
                cross-border fees affecting the price of your purchases as we pave the way for seamless and cost-effective international transactions.
              </p>
              <div class="flex p-4">
                <a href="#item1" class="m-4 btn btn-circle">❮</a> 
                <a href="#item3" class="m-4 btn btn-circle">❯</a>
              </div>
            </div>
            </div>
            <div
              id="item3"
              class="carousel-item flex justify-center w-full "
            >
            <div class="md:w-2/5 pt-4">
              <div class="w-full flex justify-center">
                <nuxt-img
                  alt="A stack of books"
                  src="/images/books.png"
                  class="rounded-box w-1/2 md:w-96 h-auto"
                  format="webp"
                />
              </div>

              <h1 class="font-semibold text-primary text-3xl md:text-4xl p-4">
                Serving communities
              </h1>
              <p class="p-4 text-xl md:text-2xl text-neutral tracking-widest">
                We are dedicated to creating a positive impact by directing 10 percent of the fees generated from your purchases towards empowering underserved communities. This initiative aims to provide access to technology and educational opportunities
                and enables others to enhance their lives and opportunities for growth.
              </p>
              <div class="flex p-4">
                <a href="#item2" class="m-4 btn btn-circle">❮</a> 
                <a href="#item1" class="m-4 btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    
      <section class="rounded-lg">
        <div >
          <div class="mt-12 mb-6">
            <h1 class="text-primary font-bold text-4xl md:text-6xl">FAQ</h1>
          </div>

          <div class="dropdown mt-10 mb-10 flex justify-center pl-4 pr-4">
            <div class="flex flex-row bg-secondary w-3/3 rounded-3xl shadow-lg">
              <label tabindex="0" class="dropdown-content btn m-1 z-[1] menu text-secondary font-bold text-l lg:text-xl p-2">Why Cardio:</label>
              <ul class="text-info leading-loose text-l lg:text-2xl">
                <li>We found cardano to be the solution that would scale fastest as cryptocurrency gains adoption while also having the security of UTXO transactions.</li>
              </ul>
            </div>
          </div>

          <div class="mb-10 flex justify-center pl-4 pr-4">
            <div
              class="flex flex-row bg-secondary w-3/3 rounded-3xl shadow-lg"
            >
              <h1 class="text-primary font-bold text-l lg:text-xl p-2">
                How is my information kept?:
              </h1>
              <p class="text-info leading-loose text-l lg:text-2xl">
                Your information will be securely stored in an anonymous manner within our database. No unnecessary personally identifiable information will ever be asked for, required, or stored.
              </p>
            </div>
          </div>

          <div class="mb-16 flex justify-center pl-4 pr-4">
            <div
              class="flex flex-row bg-secondary w-3/3 rounded-3xl shadow-lg"
            >
              <h3 class="text-primary font-bold text-l lg:text-xl p-2">
                What stablecoins will be supported?:
              </h3>
              <p class="text-info leading-loose text-l lg:text-2xl">
                This is still in progress but we plan to focus on fiat backed stablecoins including $USDM and $USDA.
              </p>
            </div>
          </div>
        </div>
        <EmailSignUp></EmailSignUp>
      </section>
    </main>
    <client-only>
      <footer class="footer footer-center p-10 bg-primary text-primary-content">
        <div class="">
          <p class="font-bold">Yuuera, LLC <br /></p>
          <p>YuueraOffical@gmail.com</p>
          <p><NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
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
  title: 'Yuuera | Buy and sell goods online with cryptocurrency!',
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
