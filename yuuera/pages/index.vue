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
      </div>
    </header>
    
    <body class="bg-base-100 md:w-full">
      <main>
      <section class=" min-w-screen max-h-screen rounded-md">
        <div class="bg-info">
          <div class="hero min-h-screen ">
            <div class="w-full lg:flex text-center items-center md:text-start text-neutral-content">
              <div class="max-w-4xl xl:max-w-8xl md:text-left">
                <h1
                  class="pt-20 lg:pl-2 text-primary text-5xl lg:text-8xl 3xl:text-9xl flex font-semibold md:text-left md:justify-start"
                >
                  Peer-to-peer commerce powered by crypto
                </h1>

                <div>
                  <div class="mt-12 flex justify-center md:justify-center">
                    <div class="w-2/3 rounded-3xl md:h-24 ">
                      <p
                        class="shadow-xl text-left bg-neutral p-4 rounded-xl md:text-left leading-loose tracking-wide text-xl lg:text-3xl 3xl:text-4xl text-info"
                      >
                      Experience a peer-to-peer marketplace powered by YUU, where trust, transparency, and security converge to transform online commerce.
                      </p>
                    </div>
                  </div>
                  <a
                        href="#next"
                        
                        class="shadow-lg shadow-orange-200 mb-4 text-info mt-12 md:mt-32 3xl:mt-48 3xl:p-4  bg-primary btn-outline btn btn-md md:btn-md lg:btn-lg"
                        to=""
                        >Learn more
                      </a>
                </div>
                
              </div>
              <div class="flex h-full justify-end w-full hidden lg:inline">
                    <nuxt-img
                      alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                      src="/images/shopping cart.png"
                      class="z-10 mt-24 max-w-screen-2xl w-full"
                      format="webp"
                    />
              </div>
            </div>
          </div>
          
      </div>
      </section>
      
      <section class="bg-accent">
        <span id="next"></span>
        <div class="mt-4 m-12 max-w-xl lg:hidden avatar">
          <nuxt-img
          
            alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
            src="/images/shopping cart.png"
            class="shadow-xl z-10 bg-info mt-12 rounded-3xl"
            format="webp"
          />
        </div>
        <div class="lg:flex lg:justify-center lg:p-4 lg:w-full ">
          <div class="lg:w-1/2 lg:flex">
            <div class="hidden h-full flex align-center w-full lg:inline">
              <nuxt-img
                alt="A mockup of a purchase on yuueras website"
                src="/images/hatsale.png"
                width="50vw"
                class="sel f-centershadow-xl z-10 bg-info mt-32 lg:mt-18 rounded-3xl"
                format="webp"
              />
            </div>
            <div>
              <div  class="flex justify-center">
                <div class="lg:pt-24 rounded-2xl">
                  <p
                  class="text-info text-center leading-loose tracking-widest text-4xl md:text-5xl p-4 pt-0 font-semibold"
                  >
                    Buy and sell anything with Cardano!
                  </p>
                </div>
              </div>

              <div class="pb-12 flex justify-center">
                <div class="flex justify-center rounded-2xl">
                  <p
                    class="text-center m-4 md:w-3/4 md:pt-12 leading-loose text-xl tracking-widest text-info text-md lg:text-3xl"
                  >
                    Discover peer-to-peer e-commerce,
                    enabling cost-effective commerce for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section class="bg-info">
        <span id="next"></span>
        <div class="mt-4 m-8 max-w-md avatar">
          <img
            alt="a representation of a smart contract"
            src="/images/contract_v1.png"
            class="shadow-xl z-10 bg-accent mt-12 rounded-3xl"
            format="webp"
          />
        </div>

        <div  class="flex justify-center">
          <div class="lg:pt-12 flex justify-center rounded-2xl">
            <p
             class="md:w-2/3 text-primary text-center leading-loose tracking-widest text-4xl md:text-5xl p-4 pt-0 font-semibold"
            >
              Pay with ADA and stablecoins securely
            </p>
          </div>
        </div>

        <div class="flex justify-center pb-24 ">
          <div class="flex justify-center rounded-2xl">
            <p
              class="text-center m-4  md:w-1/2 md:pt-12 leading-loose text-xl tracking-widest text-neutral text-md lg:text-3xl"
            >
            Harness the power of next-generation payment solutions on Cardano. Our platform supports making payments with ADA and stablecoins to buy the products you love.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-accent">
        <div class="lg:flex lg:justify-center lg:p-4 lg:w-full ">
          <div class="lg:w-1/2">
            <div  class="flex justify-center">
              <div class="lg:pt-12 rounded-2xl">
                <p
                class="text-info text-center leading-loose tracking-widest text-4xl md:text-5xl p-4 pt-0 font-semibold"
                >
                  Commerce <span class="text-primary">Unleashed</span>
                </p>
              </div>
            </div>

            <div class="pb-12 flex justify-center">
              <div class="flex justify-center rounded-2xl">
                <p
                  class="text-center m-4 md:w-3/4 md:pt-12 leading-loose text-xl tracking-widest text-info text-md lg:text-3xl"
                >
                  Join a community of forward-thinkers and experience the future of commerce. 
                  Your journey to a new era of online trading starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmailSignUp></EmailSignUp>
      
      <section class="bg-accent pt-4 rounded-md">
        <div class="divider"></div>
        <div class="mt-2 pb-24 ">
          <div class="w-full carousel rounded-box">
            <div
              id="item1"
              class="carousel-item w-full flex justify-center"
            >
              <div class="lg:w-2/5 max-h-full bg-info border-8 rounded-xl pt-12">
                <div class="w-full flex justify-center">
                  <nuxt-img
                    alt="Cardano logo"
                    src="/images/cardano-logo.png"
                    class="rounded-box w-1/2 md:w-96 h-auto"
                    format="webp"
                  />
                </div>
                <h1 class="font-semibold text-primary text-3xl lg:text-4xl p-4">End to end security</h1>
                <p class="p-4 text-xl lg:text-3xl text-neutral tracking-widest ">
                  Leveraging the Cardano blockchain, our transactions operate seamlessly through
                  smart contracts on Cardano. This minimizes the amount of user
                  data we store significantly when compared to traditional
                  e-commerce marketplaces.
                </p>
                <div class="flex p-4 pb-0">
                  <a href="#item3" class="m-4 btn btn-circle">❮</a> 
                  <a href="#item2" class="m-4 btn btn-circle">❯</a>
                </div>
              </div>
            </div>

            <div
              id="item2"
              class="carousel-item flex justify-center w-full "
            >
            <div class="lg:w-2/5 max-h-full bg-info border-8 rounded-xl pt-4">
              <div class="w-full  flex justify-center">
                <nuxt-img
                  alt="an image of 2 hands shaking showing agrement"
                  src="/images/handshake.png"
                  class="rounded-box w-1/2 md:w-96 h-auto"
                  format="webp"
                />
              </div>
              <h1 class="font-semibold text-primary text-3xl md:text-4xl p-4">Borderless commerce</h1>
              <p class="p-4 text-xl text-neutral md:text-3xl tracking-widest">
                Unlock the realm of borderless e-commerce tailored for a thriving global economy.  Allow us to be your trusted companion
                in the realm of peer-to-peer commerce. Say goodbye to
                extravagant fees affecting the price of commerce as we pave the way for seamless and cost-effective peer-to-peer transactions.
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
            <div class="lg:w-2/5 max-h-full bg-info border-8 rounded-xl pt-4">
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
              <p class="p-4 text-xl md:text-3xl text-neutral tracking-widest">
                We are dedicated to creating a positive impact by directing 10 percent of the fees collected on our platform towards empowering underserved communities. This initiative aims to provide access to technology and educational opportunities
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
    
      <section class="rounded-lg w-full">
        <div class="w-full lg:flex lg:justify-center">
          <div class="lg:w-2/3 ">
            <div class="mt-12 mb-6">
              <h1 class="text-info font-bold text-4xl md:text-6xl">FAQ</h1>
            </div>
            <div class="mb-10 flex justify-center pl-4 pr-4">
              <div
                class="flex p-4 flex-row bg-accent w-3/3 rounded-3xl shadow-lg"
              >
                <h1 class="text-info font-bold text-l lg:text-3xl p-2">
                  How is my information kept?:
                </h1>
                <p class="text-info leading-loose text-l lg:text-3xl">
                  Your information will be securely stored in an anonymous manner within our database. No unnecessary personally identifiable information will ever be asked for, required, or stored.
                </p>
              </div>
            </div>

            <div class="mb-10 flex justify-center pl-4 pr-4">
              <div
                class="flex p-4 flex-row bg-primary w-3/3 rounded-3xl shadow-lg"
              >
                <h1 class="text-warning font-bold text-l lg:text-3xl p-2">
                  Why Cardano?:
                </h1>
                <p class="text-warning leading-loose text-l lg:text-3xl">
                  We found cardano to be the solution that would scale fastest as our platform increases in compexity and size. Cardano has the high levels of security and speed needed for fueling the next generation of commerce.
                </p>
              </div>
            </div>

            <div class="mb-16 flex justify-center pl-4 pr-4">
              <div
                class="flex p-4 flex-row bg-accent w-3/3 rounded-3xl shadow-lg"
              >
                <h3 class="text-info font-bold text-l lg:text-3xl p-2">
                  Supported Currencies?:
                </h3>
                <p class="text-info leading-loose text-l lg:text-3xl">
                  This is still in progress but we plan to focus on $ADA and stablecoins including $DJED and $USDA.
                </p>
              </div>
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
  title: 'Yuuera | Take shopping to the next level on a peer-to-peer marketplace powered by Cardano!',
  meta: [
    {
      name: 'description',
      content:
        'Discover a next-gen shopping platform powered by crypto. Own your digital identity as you shop online.',
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
