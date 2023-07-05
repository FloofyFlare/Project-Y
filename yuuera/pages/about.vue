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

    <div class="md:flex">
    <div class="rounded-3xl bg-info z-40 md:rounded-xl md:mr- md:ml-16 md:w-2/3 md:pb-8">
      <div class=" mt-10 flex justify-center">
        <h1 class=" text-primary p-4 font-bold text-4xl md:text-7xl">Vision</h1>
      </div>
      <div class="flex justify-center">
        <div class=" p-  rounded-3xl h-96">
          <p class="text-xl text-center leading-loose tracking-widest text-l md:text-2xl">
            At Yuuera we empower people with the ability to fully control their decisions online using blockchain and crypto currency, cutting out unessacry third parties and contributing to making the world a better place.
          </p>
        </div>
      </div>
    </div>
    <div class= "hidden md:block h-96">
    <div class="avatar">
            <img src="@/assets/images/laptopstock.png" />
      </div>
    </div>
  </div>

  </section>

  <section class="hidden md:block mt-40">
    <div>
  
        <div class="flex justify-center items-center">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class=" text-primary text-6xl md:text-9xl font-semibold"> Header</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex">
    <div class="rounded-3xl bg-info z-40">
      <div class=" mt-10 flex justify-center">
        <h1 class=" text-primary p-4 font-bold text-4xl md:text-7xl">AHA</h1>
      </div>
      <div class="flex justify-center">
        <div class=" p-4 md:w-2/3 rounded-3xl h-96">
          <p class="text-xl text-center leading-loose tracking-widest text-l lg:text-2xl">
            At Yuuera we empower people with the ability to fully control their decisions online using blockchain and crypto currency, cutting out unessacry third parties and contributing to making the world a better place.
          </p>
        </div>
      </div>
    </div>
    <div class= "hidden md:block h-96">
    <div class="avatar">
            <img src="@/assets/images/laptopstock.png" />
      </div>
    </div>
  </div>
  </section>

    <section>
      <div class="flex justify-center items-center mt-60 md:mt-40 md:mb-12">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class="text-primary font-bold text-4xl md:text-7xl">Company Story</h1>
              <div class="avatar md:hidden">
                <img src="@/assets/images/laptopstock.png" />
              </div>
          </div>
        </div>
      </div>
     
      

      <div class=" mb-24 flex justify-center">
        <div class=" md:p-12 md:w-2/3 rounded-3xl ">
          <p class="text-xl text-center leading-loose tracking-widest text-l lg:text-2xl">
            At Yuuera, we transform ideas into cutting-edge software. Since the 2019 crypto craze, we've been pioneers in the crypto space, turning it from a fad into a reality. Through ideation, problem-solving, and legal work, we bring the dream of crypto to life. Join us as we shape the future of technology, one innovative line of code at a time.
          </p>
        </div>
      </div>
    </section>

    <section>
    <div>
      <div class="flex justify-center items-center mb-12">
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl sm:text-left">
            <h1 class="text-primary font-bold text-4xl md:text-7xl">Our Values</h1>
          </div>
        </div>
      </div>


      <div class="md:">
      
          <div class="md:flex"></div>
          <div class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row">
            <div class="flex justify-center">
              <img src="@/assets/images/padlock.png" class="margin-left-24px justify-contents" />
            </div>
                  <div>
                    <p class="font-medium p-8 text-2xl">Security:</p>
                    <p class="font-medium text-lg">We are devoted to the security of your transactions and handling your information with respect using blockchain software and cryptography to keep your information away from prying eyes and keeping it in your hands.</p>
                  </div>
          </div>

          <div class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row">
              <div class="flex rounded md:hidden">
                <img src="@/assets/images/internet-image.png" />
              </div>
              <div>
                <p class="font-medium p-8 text-2xl">Community:</p>
                <p class="font-medium text-lg">Blockchain is internet freedom for us, providing the space for tomorrows creativity, innovation, and experiences. We work to make sure it stays that way for all of us.</p>
              </div>
              <div class="flex rounded invisible md:visible">
                <img src="@/assets/images/internet-image.png" />
              </div>
            </div>
            
          <div class="flex rounded-3xl bg-info p-4 mb-12 team-member flex-col md:flex-row">
              <div class="flex  rounded">
                <img src="@/assets/images/chatbubbles.png" />
              </div>
              <div>
                <p class="font-medium p-8 text-2xl">Consumer Focused:</p>
                <p class="font-medium text-lg">Providing great products and services is one thing. Creating products that you value is success. Were commited to getting feedback from our customers and using cutting edge technology to create software for the game changers of the world.</p>
              </div>
            </div>
        </div>
      </div>
    </section>
    <EmailSignUp class="pt-4 pb-4"></EmailSignUp>
    
    <footer class="footer footer-center p-4 bg-primary text-primary-content">
  <div>
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