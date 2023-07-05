<template>
  <header class="fixed opacity-[.98] bg-info text-base-200 z-50">
    <div class="navbar w-screen">
      <div class="flex-1">
        <NuxtLink to="/" class="absolute w-28">
          <img src="@/assets/images/logo.png" class=" w-28 fill-current" />
        </NuxtLink>
      </div>
      <div class="flex-none">
        <div class="pr-4 mt-2">
          <NuxtLink to="/about"><span class="text-primary text-lg font-semibold">About</span></NuxtLink>
        </div>
    </div>
  </div>
  </header>

  <body class="pt-10 bg-base-100">
   
  <section class="rounded-md">
    <div class="bg-info">
      <div class=" hero min-h-screen shadow-2xl">
        <div class="w-full h-full flex justify-center items-center  hero-overlap bg-opacity-60"></div>
        <div class="hero-conte nt text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class=" text-primary text-6xl md:text-9xl font-semibold  ">Buy and sell anything with Crypto as payment</h1>
            
            <div class="mt-16 flex  justify-center md:justify-start">
              <div class="w-2/3 rounded-3xl h-48">  
                <p class=" text-left leading-loose tracking-widest text-xl lg:text-2xl">
                  Discover our cutting-edge crypto e-commerce platform, enabling cost-effective buying and selling with stable coins as payment.
                </p>
              </div>
            </div>
          </div>
          <a href="#next" class="mt-24 btn-outline btn btn-md md:btn-md lg:btn-lg" to="">Learn more</a>
        </div>
        
      </div>
    </div>
    
  </section>

  <section id="next" class="bg-base-100 h-screen rounded-lg">

              <div class=" mt-4 avatar">
                    <img src="@/assets/images/shopping cart.png" class="z-10"/>
              </div> 

              <div class=" flex justify-center">
                <div class="w-96 rounded-2xl">
                  <p class="text-primary text-center leading-loose tracking-widest text-3xl p-4 font-semibold lg:text-2xl">
                    Goodbye unnessacary Fees. Hello lower prices
                  </p>
                </div>
              </div>

              <div class=" mb-12 flex justify-center">
                <div class="w-3/3 rounded-2xl">
                  <p class="text-center leading-loose tracking-widest text-md lg:text-2xl">
                    Our marketplace is powered by the cardano blockchain helping you to take control of your transactions avoiding unnessacary fees and data collection.

                  </p>
                </div>
              </div>

              </section>
                <ClientOnly>
                  <EmailSignUp></EmailSignUp>
                </ClientOnly>
    <section class="bg-info rounded-md">
      <div class="mt-24">
          <div class=" carousel rounded-box">
            <div class="carousel-item w-screen flex flex-col justify-center">
              <div class="w-screen flex justify-center">
                <img src="@/assets/images/cardano-logo.png"  class="rounded-box w-1/2 h-auto" />
              </div>
              <h1 class="font-semibold text-3xl p-4">End to end security</h1>
              <p class="p-4">Leveraging the Cardano blockchain our transactions are done via smart contracts on Cardano, this minimizes the amount of user data we store significantly when compared to traditional e-commerce marketplaces.</p>
            </div> 
            
            <div class="carousel-item justify-center w-screen flex-col">
              <div class="w-screen flex justify-center">
                <img src="@/assets/images/handshake.png" class="rounded-box w-1/2 h-auto " />
              </div>
              <h1 class="font-semibold text-3xl p-4">Borderless payments</h1>
              <p class="p-4">Borderless e-commerce for a global economy. Lets us help you expand your access to markets around the world. No more cross border fees affecting the price of your purchases</p>
            </div> 
            <div class="carousel-item justify-center  w-screen flex-col">
              <div class="w-screen flex justify-center">
                <img src="@/assets/images/books.png"
                class="rounded-box w-1/2 h-auto " />
              </div>
              
              <h1 class="font-semibold text-3xl p-4">Serving communities for the greater good</h1>
              <p class="p-4">We are committed to making a positive impact by giving 10 percent of our profits to provide technology and educational benefits to underserved communities.</p>
            </div> 
          </div>
          <div class="flex justify-center w-full  py-2 gap-6">
            <a href="#item1" class="btn btn-xs"></a> 
            <a href="#item2" class="btn btn-xs"></a> 
            <a href="#item3" class="btn btn-xs"></a>
          </div>
      </div>
    </section>
    <section class="rounded-lg">
    <div class="h-screen ">
      <div class="mt-24 mb-6">
          <h3 class="text-primary font-bold text-4xl md:text-6xl">FAQ</h3>
      </div>
      
      <div class="mt-10 mb-10 flex justify-center pl-4 pr-4">
        <div class="flex flex-row bg-neutral w-3/3 rounded-3xl h-48 shadow-lg">
          <h3 class="text-primary font-bold text-l lg:text-xl p-2">Consumer Focused: </h3>
          <p class="text-info leading-loose text-l lg:text-2xl">
              Providing great products and services 
              is one thing. Creating products that you value is success.
          </p>
        </div>
      </div>

      <div class="mb-10 flex justify-center pl-4 pr-4">
        <div class="flex flex-row bg-neutral w-3/3 rounded-3xl h-48 shadow-lg">
          <h3 class="text-primary font-bold text-l lg:text-xl p-2">Privacy: </h3>  
          <p class="text-info leading-loose text-l lg:text-2xl">
              Secure peer to peer transacitons on without
              reliance on third part organizations or entities. EVEN US!
          </p>
        </div>
      </div>

      <div class="mb-16 flex justify-center pl-4 pr-4">
        <div class="flex flex-row bg-neutral w-3/3 rounded-3xl h-48 shadow-lg">
          <h3 class="text-primary font-bold text-l lg:text-xl p-2">Community: </h3>  
          <p class="text-info leading-loose text-l lg:text-2xl">
              Blockchain is internet freedom for us, providing
              the space for tomorrows creativity, innovation, and experiences.
          </p>
        </div>
      </div>
    </div>
    <EmailSignUp class="mb-4"></EmailSignUp>
    </section>
  

    <footer class="footer footer-center p-10 bg-primary text-primary-content">
  <div class="">
    
    <p class="font-bold">
      Yuuera LLC <br/>
    </p> 
    <p>YuueraOffical@gmail.com</p>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="https://twitter.com/YuueraOfficial"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
    </div>
  </div>
</footer>
</body>
  </template>
  <script>
  </script>
  
  <style scoped lang="scss">
  @import 'assets/scss/appStyles.scss';
  </style>