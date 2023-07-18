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
              <h1 class="text-primary text-6xl font-semibold">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    
   
    <section class="flex justify-center">
      <div class="flex justify-center items-center md:mb-12">
        <div class="rounded-3xl w-screen  z-40">
          <div class="flex justify-center">
            <div class="p-4 md:pb-12 md:w-3/4 rounded-3xl">
              <div
                class="text-xl text-neutral text-start leading-loose pb-4 md:pb-0 tracking-widest text-l lg:text-2xl"
              >
              <h1 class="text-2xl font-bold mb-4">Yuuera, LLC Privacy Policy Effective Date: 7/7/2023</h1>


              <div class=" rounded-lg  p-6 mb-6">
                <h1 class="text-3xl font-bold mb-4">1. Introduction</h1>
                <p>
                  Welcome to Yuuera, LLC ("we," "us," or "our"). We are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our e-commerce website, mobile applications, and any other services we offer (collectively, the "Services").
                </p>
              </div>
              <div class=" rounded-lg  p-6 mb-6">
                <h1 class="text-3xl font-bold mb-4">1. Information We Collect</h1>

                <h2 class="text-2xl font-bold mb-2">2.1 Personal Information</h2>
                <p>
                  We may collect personal information that you provide to us when you use our Services, such as your name, email address, postal address, phone number, or any other information that could be used to identify you personally. This information is collected during the checkout process when placing an order.
                </p>

                <h2 class="text-2xl font-bold mb-2">2.2 Order Information</h2>
                <p>
                  In addition to personal information, we collect order information necessary for processing your purchases, including the products you order, payment information, and shipping details.
                </p>
              </div>
              <div class=" rounded-lg  p-6 mb-6">
                <h1 class="text-3xl font-bold mb-4">How We Use Your Information</h1>

                <h2 class="text-2xl font-bold mb-2">We may use the information we collect from you for the following purposes:</h2>
                <p>
                  Processing and fulfilling your orders
                  Communicating with you about your orders, including order confirmations and shipping updates
                  Responding to your inquiries and customer service requests
                  Sending you promotional materials, updates, and newsletters if you have opted in to receive them
                  Analyzing and improving our Services, including the user experience and the products we offer
                  Detecting and preventing fraud or other illegal activities
                </p>
              </div>
              <div class=" rounded-lg  p-6 mb-6">
                <h1 class="text-3xl font-bold mb-4">Information Sharing and Disclosure</h1>

                <h2 class="text-2xl font-bold mb-2">
                  We value your privacy and do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information in the following circumstances:</h2>
                <p>
                  With trusted third-party service providers who assist us in operating our Services and conducting our business, such as payment processors, shipping carriers, and email service providers, subject to appropriate confidentiality and security measures.
                  When required by law or in response to a valid legal request.
                  In connection with a merger, acquisition, or sale of our company assets, where your information may be transferred to the acquiring entity.
                </p>
              </div>
              <div class=" rounded-lg  p-6 mb-6">
                <h1 class="text-3xl font-bold m-4">Data Security</h1>
                <p>
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard security protocols, including encryption, to transmit sensitive information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <h1 class="text-3xl font-bold m-4">Your Rights and Choices</h1>
                <p>
                  You have the right to access, update, correct, or delete your personal information. You may also have the right to restrict or object to certain data processing activities. Please contact us using the information provided below to exercise your rights.
                </p>
                <h1 class="text-3xl font-bold m-4">Third-Party Links</h1>
                <p>
                  Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage you to review the privacy policies of those third parties before providing any personal information.
                </p>
                <h1 class="text-3xl font-bold m-4">Updates to this Privacy Policy</h1>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" at the top will reflect the date of the latest revision. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
                </p>
                <h1 class="text-3xl font-bold m-4">Contact Us</h1>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at yuueraofficial@gmail.com or call us at 734-735-2967.
                </p>
              </div>
            </div>
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
