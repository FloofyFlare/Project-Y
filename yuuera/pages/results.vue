<template>
  
  <header class="fixed opacity-[.98] bg-base-100 text-base-200 z-50">
      <div class="navbar">
  <div class="flex-1 mr-96">
    <NuxtLink to="/" class="absolute w-28">
            <nuxt-img
              alt="Yuuera logo"
              src="/images/logo.png"
              class="w-28 fill-current"
              format="webp"
            />
          </NuxtLink>
  </div>
  <div class="flex-none gap-2">
    <div class="flex-1  w-full hidden sm:flex ">
        <div class="flex w-full">
          <input type="text" placeholder="Search Yuuera" class="input input-bordered ml-64 bg-info border-black w-full rounded-r-none" />
          <button class="btn btn-square btn-outline rounded-l-none border-black mr-72 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    <div class="dropdown dropdown-end ml-80 pl-80">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full ml-92">
          <img src="data:image/jpeg;base64,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" alt="Account settings/Orders" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-info rounded-box w-52">
        <li>
          <NuxtLink to="/sellersinfo" class="justify-between">
            Profile
          </NuxtLink>
        </li>
        <li><NuxtLink to="/accountsettings" >Settings</NuxtLink></li>
        <li><NuxtLink to="/cart">Your Shopping Cart</NuxtLink></li>
      </ul>
    </div>
  </div>
</div>
    </header>
   
    <body class="bg-info md:w-full h-screen">
      <main class="h-full">
        <section class="flex justify-left">
        <div class="flex justify-center items-center mb-12">
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-4xl sm:text-left">
              <h1 class="text-primary font-bold text-4xl md:text-7xl mt-24">
                Filters:
              </h1>
              <div class="text-left justify left">
              <p class="mt-7 text-3xl text-base-100">
                Brand: example brand
              </p>
              <p class="mt-7 text-3xl text-base-100">
                Used <button class="btn btn-sm bg-info text-base-100">Yes</button> <button class="btn btn-sm bg-info text-base-100">No</button>
              </p>
              <p class="mt-7 text-3xl text-base-100">
                Other Consumer Reviews
              </p>
            </div>
            <div class="flex columns-4">
              <button class="btn btn-sm btn-info btn-glass bg-info text-base-100 pb-6 mb-6"><div class="avatar">
                <div class="w-60 h-10 rounded">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACBCAMAAAAYG1bYAAABWVBMVEX////4lSA8RlL///3//v/1liD///z0liQ9RFQ8RVQ7RlD//f89RVI6R1E6RlP5lR8yPUoqOEU3QU05Rlc/RFEzPknylyb7lBv3lCb39/g6R00+RE3k5uiYnaMmNEL1mSEvP1CIjJPN0dTY296IipNMU1yOlJn2/f8yREw3TU8tQE+vr7PCxcrGx8s9RFjh4+dja3L7kSg1OktbX2dudXw+Q1u2uL1OV18XKDdYZXCys7Tv7O0iMkSjqbNEPVwrPE83T0hRS1PPijSEZEazeD+2gDlvYU5CP0cwRF3ZkCPgjCRZTEeNZUGYcTnZizBKQUKvcEesfkLplTeeaz3YkDbHiTabZ0BnWk1vXkAbQVOAZT6PaUt1gIKpfTjcgi08Q0BYWD9MUUd3WEUjLEW8ejd1WVFgUU7EeUd3aUSSczufbk5lWkHChyu2gzMuPFureEPsnxxRQlcOGjMNqHEKAAAWpUlEQVR4nO1c+1fbSJaWS5YtCakklayHJVuSDSaKMMb4AaENQwdI4phHNmGyhAwJHZrpmd6eTnr3//9hb9lAHjZSMHSyZ1bfOTlJwKW6t+7ru1UlM0yKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpPhqsOz/8/G3G57i3wj3Vm41nC3Vb+dN9dJt3JFlNm41O1NcyX7/aGCZ6oPe9MOzDDO/dqv5s7XybayQKz2Yvc30zA9R8f+CFda8eSabnXJ4dqZnrFdvM3193S1OP57JzWmdmemnz83U1hduMf1doaqJxtTBMMMyZZU0p5+dnWkT7TY5peSJ3tTBALloRcO123jBHaEZyUF52sEzuV5DQtr0wcDWPaSLt1iGSksMOtMOzjL3arqo/TD99HcCNlf1EOLV3pSpMcuUNYRIZ/rM3iYy0jbY3FSD2VxJRQiCYWrxV0B8JDDTTX9XYJkmAStMHww9VQA1vOq0ZqhrSEYEFXNTFSaWqYAVkHEy3eRAkFZBfaStfNemAQiSh0RU0Mm0OaEcUCtAZZhODbatYxGWYYOZjh6UwJUFEWvTVoYVj4ov1b4rTcoxnZbzlx9dvFmegiaxbK6Hsau7SJ6uMmShKjgN3RV5UpzODSqq3P2xSyvDFFakBElCjRp21m/XMt0WVY8/fbgV8XzUu7keLCVIKNreCWQyVYHMQlXQg0ePnwjqdGyxpIlP+k953V2fIhiGBEkknarn8O5U098VmkQ2dpTX/cLmFJUhxxQNhIKB+UwWpguGuqfzu/5LFwnTscV5VXT2lP2+G8zdfHCWvQdVwVtk1oiofb9gYNmq13BFzj84fqYbN6dJEAotPdy2/f8I+61pKkO2TaTwua08Jrq2cGOewrI9FTvy4MXgvstrN6dJQJA8kbRpx4ShZ5iOH9weLNMhcv+NqZjbDUmbIhh6SOePD2zrhYtlyAk3XoeqJ4a7tm9uHQtInMndcDzLzIdu8FrhzMO+q05Dk1axCKEAGYGnwTB9B347VD3sPDMzGe5t4OIpWqeyhsm2xS1bH4z7rRv3DFlmjZejR5aftx5j1Nq4sRV7noudF5Zi5t0CfrB0w9FAkDSJNGkEAFEktXvfhyZBKBhY/WBbZsZ+RcToxgWyqAkuhALHcbbj3HwfAfKhgN/ZJqfktzYLUBnYG+UECIXADbYVzubM/cDdnLuZFbMs2xawNtoPhtbR+06VIVddxwVsKhALylaEBLV4w8wIBAlvcxmwArdzLN94NynXdPXguWVaeY47KtDKcDMrlFSRd/4K4iv5gduAynCTwpKdydYhAtaGc7J14Eqr36kudEjD2LcymUze4raBJt2odWKhKiCkPrVoLPgQDMLNggGogebIu7ZiKhxnvTS6Arqh+PMqovkwk7Et/z83n0Q3CoaZHFMDglQfqpyDYMDfiSbNath1lkexYL2NCjoaVQY2Vpvs1QkjhIK+7S9nqBHMN4EeXfQMbOwRJHv1a+gVwkeKTUPBtI66gnaREuPX8uq3RShqxiAPTqQs+wNSaKyXvnL+0T/qLUTao1aVZRY9rK/GznsngMmzV91xtlRdKXdqpNHft6kaNBxeOTzfPimvVHsfR3yqDvvJ/4tLiwuVDmSB4wMun6cpwX/x7H1ImnMbi7PFCQO+eFxxtr5RaUI+e+bbw9kVf2sTIqszv1BduhxPxb0aQcdmr0gMFf9klb8fvOZsZfgA62/3G/wqFb/0NeJXF+Y7vARV4XIuZlXHRnOuXJ8tfTbmRmucjOHzssXecPlVTdNUgrAuKKY1soL/9tgViEF/Y4A29dneJMpULFV/mG9K8ClVxVgnr6w8tUIGaNJ+1HAwoeMLa3MLi6VJOzPFYqm+UFkjw+kJQt03lj9aRFM50xEiKh1f68zDYhZnPl2H0d/F3ixd/qH4qn4a8k+XuZH4ttml4htU/BoY41rxqfotOj7QMe0VLrGoYXk0vduuLNSXRuPv2ApgfpC/iTwP5CdYwDzP67pxaAJButDjVdjQeVEUkUS18dQaePaVMaj885015K23wHxIpMDi8VtzZIUMZ7+QT/vDH8NigjE9stqpLCzOXkRWb3Zxo9JZNTzNMIgkSTA9xsGueTE7Z/lbfZ0KJQgC2FL1PNymxlgaGbNYmq2XK82aRsUXQHyBFxri+9e2ZV+EsrUX6XpjJP7QF0B8GhmfiS97nnohviAQ8qD+ST1vq+LoNxI1hqdeiH+nJbvE/wzqE17sCqCqS1qBWnj40/YAKuulGluvjp4JQRQQIN9YKjhdB6T5uU2XkWVWHnhD93XwfeyKchhtRs67o0OoCpewds7eOWSzQUIRFfiC7hAwhvdgbtgSZysPqP4NLAp8FzlhGIWhu3v2yDKVCzNwyv5vu44RRkGBb+gY0iNdzPX1Uc7orf7cMmC8+xfeQUPxA/fhT2dPlcvZ89YAxOejKNKJ6zh6t1Dg1VZrHZXY4c6xNhRfGjrJKOTQavOzcl7ttGvq6FPgIxL9VKv1oHPjXjLeDLUWzC/rYRCFp79s759vDUxrmbuygu9blj14evDo8PE7p9sKeOxAilCbRWaoBj0HwPAANwyM8N3R3vOXBwPbsi5dkVrBt2zzYOvN3t8fks0wcly6Y+yVmWxuaMZ5DyGM6TIZrYdneztbg4HpW9xHK3C2aQ4Oznf2jqiRglAXENK9xctU3m7x8EDHMTYNKv4jEP+yJgwjGYTJm08Pzg9fHYH3GETXJQEZtdH1DhaYCKHiI/ByT2rOLywuUe/KfYwF+k+IOEgYaxCIWkA/zWtzM9k7rQ25EhAz5Dx88wiWzwcFON/PcOaVFRQuTw3hZ5atjDnY2tlviDJSOzNDLWihhMQJ6/jLo3/89YViLQPyvmma3NU6cHmTPk0BmAe/7/yzD5/WykxuqAXdffWQdL+7/WjrqZlXLCuT9znFvKxK1Aq+AnbI5M0MjN96/gum3li95M4zxSZ4EX7y687WC9v3bZDeB2p1NbsCAzlr2ffh0eaLrZ3/egfpzWj32EtXnnXpcU57of4Je/hsL/+qeGezUDznIRjQeiWbu+sK3VsNZKf7wTKX6Z4Fl1GsjPLRmYbLRzsgxcwD8bT3IEFrnSu+ArJUVViYZwfwIcXMwJqBvh+HD6PBAlOCWcyMlbF/Koiit3FhhGFxLXuC6PxmQhIb+rBiAUlVPhtOH6goXMb2lbcPsSwYH7emoFQ3W5Ko/6rkQbgMlR4MaH0UH+ygDJUwTT9jKodE4FXIppeLyDIlQrAk0jNBlr0o9tnxIxX6K3r62iE81iq3v/c3yQythh7uL/tWJg7glqa9HSKkdT5yQ2ZoBoIazoH90YMnQoEIMx9GuOEtMJ8cJ7PMhocxWTV9O240AOLxX1H/CRY/7wLvdVqF/uae7X9h/C/Fz/t/2IfHAs2mn+R0llmqQcb36kwSQNNiRxUkbf4O1nwcuV679UTffLRsxqsBcbJ9nxe0ypdkr2pIghBuWWbccIgUa/Cu/0RfX2E+7xeYsqbrz97F25D6tPJ733UD8sWVPTbX0Rw9em3lubjxnJ/P7B+7vNEsfuHIJZfwheTtohxzr6lKf5YRmBkWalzjdHN/2ba4azThhtsRZ+EwHj/TgialWTWQu87LZcgH160EZ2WswUMe69rKZToagVpkwWvIZHdg2dcbwoLy8Pt7F+ny0hdsPcveO2nxTrgN0WblrxVfyXOHxwVdhWz6eb6BpFRTIc3GnvTTRrHYVAUEvOLPupeRhRqn69GhxS1fEw7DdHQWCIJXGb+9mWNmEZHC/taymb9mHS3f9gcu5tGk0KdmgE6xNvCvWUQA1Jvfj7FDpNL4eIY5aUl6tM3Z1yVV6F5Mbu9YENTm+EY1mGEVnNyL2zvOUjpG09HUl1K+AmDnzVM52rtoWSdagft7COloUjyCiEsQ1bh/fr0v29bb+9BEG5PyL1SJFU/Xn/w4uH68sgzp6DSqTbxBzOYqLVfuP7bsa+QHK1h7xw3BOJm8P9xbBTePuwoIlmqrkhBrqVsDklJH093+nsUpE1eCy5hHYUHXJl7gnYFoWEL9hhzuAM0cjyZgKL51oDdk3VicGPYsPW8X9Cf3Bwo3KRjpTx+9l8WoNvn4FbJiReuKweO8xU10JIiE7eOGrp1MPrJhmV5bxZjShmsef2WnP/fIJ8t0Wrhw/NpSxqskTUf5o0DgJxuBgpqBSI66Y5njNd4Grv+U7/JEXbxegLrWwI5zwE0q8cBxd44LiNQmpqOR+JWW6ERntj9eW0D8F9x2hAXt5Lq78EB/1mjlnahfNjssHbzk/fCnH7ux2ZNNEW2+mlBfoWTndyNwhXLcQQO0f90w+mAp+S/NAA669d7RJSPmPkaOqRsiKogHk0LRsg4j3Q3axZjCmCuvdwvRb8vjoym5O4ug/laYmDcSoPaOevrxlRnqJqFvcdAA3fBcS5eCs3EzQCgc6QLvxcTjTBaioRboUrhjjQVD3nqKGxg63pi9l1wOCK/QL8iDCSmJ+3DccKN2LxdzED/swnXyCzfWdgA/ehV1+95c3EW7IQWCujeh+g4jgbYUd9+qTUSF8NK7cSPk8wOdx+SH+KSYheRKULDHjXmzwu2omNQSj9yq7v2/hJMqvPK6gYJm4i2EBZV3/uKPRYPCcY6rG/NJi5jtkGvuN89uItGJyaZ3iyVVKGz7XzojWMHclXBtJl4LeqVNRcGj8fqq+FsGVhPvZ7FMJ+yGBxNiQXkeSZvJ3S2j8uHueEIFK5xB6Y1LZ6PpqxpSJ1UGtojpjdtvdf68qPHkcJIVuDPiqNeWxhHACvMGjg78MZakmLaDSeL7VSyzqrvOBI6VsbdC6Suujy95fPh6eUx+hcsf6k7iXUnK05BWH7cCEOlVIjrf7JWSDfDll5P2c6zXha6XdNeRnen0T8mL8Yyi+PYR5uWk+8+5oofdI4Ub79/NwbH7FTdeFzUUfLC58Qco/wjlzeRb8JUW0ibcXgL3OiHIK/0JW3iTxVBFcjBpP8d6o3bVa9j0Fdii03AemtZ4efQz25hXlxK0YGc9TPYyk6xgnrpiLVH8DRWrL+0JD7C2DKTOJ249rPESmvAOGVgB3NNb/FZWaGPxif3HJK74NOiCGgmr2NP4cHuMpw4v1BxGvJZY3iAjGDsTXDnDmWcSFhNfsusY2BiY9oRYGBQKYTPJCsUaPzFtghXqUDEWvpEVigTj3RHdz3O0CzUVhRudH5thIfmNkKrWDfcVWg3pqY6ZV/J0D43j8pn8y76gJib2eVXc3KKRBA08DF+GvzOj/Tl/j6CEN0KG2RvXMqPj7gw9JMnTgxLOp+3OLwXHTRK/pCJyRSFoq3b1ebbkIWAX38YKS0C4Xy8rHN1zyNvKv/YGdB186ln50wLCSW9hL0Td8Lk1apN83zrf8/O+Ra2Q5572kVpJYhlNIvMDSjTp6ZrlH55beX+4PagoHwKkxZOkXK6HkH50kYIytvVy78Dm8hw9e+Myj4loLCU5kSd++rpEfb50dZpDSVLtG5EkWt3egBPRfWju4PF7J9wbUG+iOeUVkbwEksRUAmxQoknVts4f9lvuBwWiCqyQ95ErtBPeCsrWsLObt4cnEZb/K4mO3720hz2gZR5ENLHHYYad1YbdCmXKvj/Y3gz7rw7o1TIamYfE1apJTqSKV1kzW216qla+OopoEmR8E5IEzWcgBi9pKHP+wXbkOo1C4BwOwJtt2zqMpASSxDJt3nHMjKUsZ/yXR33JkRvRs+c2hBUExjvomxLUKBHsHNl5SELWH2+eBY7Au+HRlgJPtDg7FPj4y98zNHlHOxnL923rxZ7Ou10UOHsDaxn+nz+PXC1+P3T4QqJHKRI9MOl4Ab0TIEMWzdHLysBbJtGnuwc0TYHTeuH7JnewFwauLKkC1t3Gr9QzufOIT3i7KVeUsPuTbf1h+1tHfUwv9oi4ETrndn55WfnnE91LUKOqYXePA0K0/Oa/IwdyAC9Icnh2YJkDX3knNFYT7rCXW+7xQd43LfP1aeBIiAiCzrdeP12GAvc2co1KgvprRNIYusmy1PGIiET4I2niQnF4DvVJnPypYJkaLz8b5K3BHg74gq6JFc3gdawW9s1l8yDk1QQ1oPMWX3OW9fKxEcoS8tY6Xsg3pOi3c7Djc0NPSOzMgobDc5rL3kU/6g3V67Q9Hbt6+PhAUZTf9IaW0HCcEOn+IM+Z+66Kn4SRUTEMQQ9JF+IhP3DdhLvjbLGFyCrwqF5Fo/cZtNqcpyIkrNdW7rG5qiYms4u7AFs0+PCV/2LPIQUkbEqQFEuVVksXnX7hjWk/44V2/AMWW9A0KVuPQ0fXBa8Naz7b1Igj4fDoHBI7H6/GsPMOB+b5USQ5PNE6s+zMSk3DDnINsMNe0Eh4RS67SvgfFfPQIbKIA2O+yBTLrVaXP434fZvbhUCNz4iUB1WY3pymIlHUaiszEBMacV3s1erZEhHVk29Snmc1t7+94wQFiQ+08oidl068gBf0aHfnJ4xwvBobmth/sxfJWCZebWV0n3NxbZ3Hoq6ePWo4sd8EwObYDkHuh1eGLujEa45WvLgghkiS+NPXfyO6Ed/9Fj1BPzp/F7i80FqfGyZ4ZmneU3mEg9OdVzqfwC7qmtgqlwn1f1XdGMVdFXKTDOqsLdZ0svZNXn5e0ZwC6guiHqiV3pXC1CGkht7noVjFJ/Y5FYXvI4FvbKKF7Oh+G/ypr2r8fafvFBokrvvN5or0jmDjvSwQbe0yBbNgB0nTZb0PNcaYj3XGWU9/IkS6Kwda5+LqHdTVoW+jsN9wktrGsiryPP3GAJWUixfis0wVwpneQ0MCItN+HcWNUIZqjEFZr1JiPnnXnJI2AZ/qkCpj1ci2idy9z8tqAwraxxcjc+xKzZNPu6c8qHH96Bmm59FLua6+vlr/eFeFrmNZBYKEhtuacS/6gRNhUSy0vM4sMzIXy9K1nJ3ziCDSFY5nFx0iOrKMVK/8qfoss9j2CNIFLE3/FTNfD/piZ4HnQ60z7vHVNY1+IcHEbd8rQOctYr4Vzo/lrRnwZ1ggPq77zULTJPAQB7XxL2LpzauqLDuiFJfRoPOGVBppzfHqMdvZJCC/Ohe7h7FKBAe31Mp43lpZhXgQv8m7z2yxRnSyfuVIn/wGZF9cBU+F4hVjhSUPi5E23xtXlWWLC0TDfJwaWSCDYAP5h4lJpzS3rgqCWoqzQpNQTjD+9Sc0riCcCWVAMeL3REno0noydiAIiY3SBNH4BiSJ7bUIONLM+G7JKLDrNY2043ZS6ppqVErshN0WSrh7ZdKK635noPNWnYXi5DsaYOMTLYjvfmtEW72GC9NrnG2NGHHldVYjm9QFJ4tfXJA1deqvW/p65Kr/015kJn73yOhC48yK/ODLe22fovzgZOnaDa+hHbwYNVhm1YCieM14+uPZzoO4xF76ubYyrCOThtOf1ld/no05uF550KlSMSY/AOywwRsx098R2JWV+J3fHHOvvBRnhdmE3T62NF4yPv6yOJ94jFJdiJGwupEgPntvZZG93goLi0k7370Y8e8KWSZBiuQb+wkfSHz7JXmGGAnZrxI/juomHUJ9i+8Ng1SU0Bpm499fSTZSwq9zSU+YiV/DpO+ryDLs1F+JOZrhFoNTpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiRIkWKFClSpEiR4t8d/wsGiI2UPTNezwAAAABJRU5ErkJggg==" alt="Account settings/Orders" />
                  </div>
                </div>
              </button>
            </div>
            
            <div class="flex columns-4">
              <button class="btn btn-sm btn-info btn-glass bg-info text-base-100 pb-6 mb-6"><div class="avatar">
                <div class="w-60 h-10 rounded">
                    <img src="data:image/jpeg;base64,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dLx+0JrktWdxKuPZHc965pdP5br83U/9ZZ0jmzN1aFrcm4o6kDIVannKcSpBXPFcaeWccekkc2MCIiBTe+u0VG1mdgStFUXA8Qur+5/pPbLZu0do/dXsbc82bKgjy95/hwk9tt0LYXD3VQdrVdy/fwVXj3Qq8sgAcTnlwxJGBia7YqWtFpjcwzrkvWPGJ6Vte+zVkRXtq7dqo46+6GP5SvFfQ5ka2he3NFHtrqk6sykK+AMnocjuuM44gy75q31jSroUqIjqfdYAj1GeR8xF8dL63HorkvXepRb2WXOuxKdadR1+BCuP7zJpOFu/u7TsTUFIvoqFW0MdWlgCDpbmRjHPw5zuzZLXD2eGezHUBIIHMg4MJU1Z7yLbbRursoXd2qpRXOkcagALHiQNKDkDOuuyNqbWOq5fsbc8QmCvDmNNPmfVz5iS7YO6FrZ4YL2lXrUfBbJ5lRyX4cfMyRgSdo0rS93GubRu3sKz6gBlGKq7Y6A40t/Sw+M4u8e89W4tjaXVFkro6MraSoOMg6lP3eBOCMgy5cTm7W2Lb3aaK1NXHuk8GXzVhxX4Rv8AqNNXc667Wwt35ns1U+qZU/VZ3Jyd39jizo9grsyhnZS2NQDHUVJAAPEnjgc51pDImvf1xTpPUPuIzf7VJmzNDbFl9ooPQ1FRUUqWABIB54zwzjMCoN095Ws6dRKdJqlxVddPMgALw4L3nOWbhw9ZILXdO/2g4rX9VkXmtMY1AeAX7qc+uW8ZNNibuWtmuKSDV7zt3nb1bw8hgTsSZlGlZV919o7Nc1bGoz085angFj/UnJ/UYbhOBvRvMbvsXemadxQZtY46TxRhgNhlOU5Hx5y7MTibc3ZtbwfzEAfGBUTC1B+rHEeRyIif6ade3qB0VxyZVYfEAzNNLZlp2NCnR1FtCKmo8CQoABPngCbshJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//2Q==" alt="Account settings/Orders" />
                  </div>
                </div>
              </button>
            </div>

            <div class="flex columns-4">
              <button class="btn btn-sm btn-info btn-glass bg-info text-base-100 pb-6 mb-6"><div class="avatar">
                <div class="w-60 h-10 rounded">
                    <img src="data:image/jpeg;base64,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EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k=" alt="Account settings/Orders" />
                  </div>
                </div>
              </button>
            </div>

            <div class="flex columns-4">
              <button class="btn btn-sm btn-info btn-glass bg-info text-base-100 pb-6"><div class="avatar">
                <div class="w-60 h-10 rounded">
                    <img src="data:image/jpeg;base64,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" alt="Account settings/Orders" />
                  </div>
                </div>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center bg-info">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-10 hidden sm:flex justify-center">
        <div class="flex justify-center "> 
          <div class="">
            <div class="mb-10 flex justify-end pl-4 pr-4 ">
              <nuxt-img
                        alt="A shopping cart with a Yuuera logo on it with clothes and games in the shopping cart"
                        src="/images/house.png"
                        class="w-60 flex"
                        format="webp"
                  />
              <div class="bg-info  h-1/4 w-2/3 h-60 rounded-3xl shadow-lg border-none border-4 border-sky-500">
                <div>
                  <p class="w-full text-neutral leading-loose mt-12 text-l md:text-3xl">
                    More information about this product goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </main>
    <client-only>

      <footer class="footer footer-center p-10 bg-primary text-primary-content">
    <div class="">
      <p class="font-bold">Yuuera, LLC <br /></p>
      <p>YuueraOffical@gmail.com</p>
      <p><NuxtLink to="/about">about</NuxtLink></p>
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


import { ref } from 'vue'

const signUpEmail = ref('')
const pass = ref('')
function handleSubmit() {
  if (validateEmail(signUpEmail.value)) {
    handleSend()
  }
}

async function handleSend() {
  console.log(signUpEmail.value);

  const data = { 
    email: signUpEmail.value, 
    password: pass.value
  };

  try {
    // Change the URL to your production server
    const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log('Login successful:', responseData);
      
      // Do something with the responseData, such as updating the component state
      return responseData;
    } else {
      // Handle errors for non-2xx status codes
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}


</script>
