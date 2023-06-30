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
  <body class="bg-base-100">
    <section class=" h-2/3 pt-24">
      <img src="@/assets/images/twitter base trans.png" class="absolute top-7 opacity-10 z-0 lowest-el"/>
    <div>
  
        <div class="flex justify-center items-center">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class=" text-primary text-6xl md:text-9xl font-semibold">Who we are</h1>

          </div>
        </div>
      </div>
    </div>


    <div class="rounded-3xl bg-info z-40">
      <div class=" mt-10 flex justify-center">
        <h1 class=" text-primary p-4 font-bold text-4xl md:text-7xl">Vision</h1>
      </div>
      <div class=" mb-12 flex justify-center">
        <div class=" p-4 md:w-2/3 rounded-3xl h-96">
          <p class="text-xl text-center leading-loose tracking-widest text-l lg:text-2xl">
            At Yuuera we empower people with the ability to fully control their decisions online using blockchain and crypto currency, cutting out unessacry third parties and contributing to making the world a better place.
          </p>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div class="avatar">
            <img src="@/assets/images/shopping cart.png" />
      </div> 
      <div class="flex justify-center items-center mb-12">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class="text-primary font-bold text-4xl md:text-7xl">Company Story</h1>

          </div>
        </div>
      </div>
     
      

      <div class="mt-10 mb-12 flex justify-center">
        <div class=" p-4 md:w-2/3 rounded-3xl ">
          <p class="text-xl text-center leading-loose tracking-widest text-l lg:text-2xl">
            At Yuuera, we transform ideas into cutting-edge software. Since the 2019 crypto craze, we've been pioneers in the crypto space, turning it from a fad into a reality. Through ideation, problem-solving, and legal work, we bring the dream of crypto to life. Join us as we shape the future of technology, one innovative line of code at a time.
          </p>
        </div>
      </div>
    </section>

    <section>
    <div class="">

          <div class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col">
                  <div class="flex rounded">
                    <img src="https://assets.eflorist.com/site/EF-12844/Homepage/Thank%20You%20to%20cust_5.png" />
                  </div>
                  <div class="">
                    <p class="font-medium p-8 text-2xl">Security:</p>
                    <p class="font-medium text-lg">In response to increasing threats in cyber security and the protection of personally identifiable information  in society we are devoted to the security of your transactions and handling your information with respect using blockchain software and cryptography to keep your information away from prying eyes.</p>
                  </div>
            </div>
          
          <div class="flex rounded-3xl bg-info p-4 mb-12 h team-member flex-col">
              <div class="flex rounded">
                <img src="https://assets.eflorist.com/site/EF-12844/Homepage/Thank%20You%20to%20cust_5.png" />
              </div>
              <div>
                <p class="font-medium p-8 text-2xl">Security:</p>
                <p class="font-medium text-lg">In response to increasing threats in cyber security and the protection of personally identifiable information  in society we are devoted to the security of your transactions and handling your information with respect using blockchain software and cryptography to keep your information away from prying eyes.</p>
              </div>
            </div>
            
            <div class="flex rounded-3xl bg-info p-4 team-member flex-col">
              <div class="flex  rounded">
                <img src="https://assets.eflorist.com/site/EF-12844/Homepage/Thank%20You%20to%20cust_5.png" />
              </div>
              <div>
                <p class="font-medium p-8 text-2xl">Security:</p>
                <p class="font-medium text-lg">In response to increasing threats in cyber security and the protection of personally identifiable information  in society we are devoted to the security of your transactions and handling your information with respect using blockchain software and cryptography to keep your information away from prying eyes.</p>
              </div>
            </div>
        </div>
    </section>
    <EmailSignUp class="pt-4 pb-4"></EmailSignUp>
    
    <footer class="footer footer-center p-4 bg-primary text-primary-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
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