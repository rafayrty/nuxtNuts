<template>
  <div class="desktop-menu lg:block hidden pt-1">
    <div class="container">

      <div class="topbar flex justify-between py-4">
        <div class="socials-lang flex items-center">
          <div class="mx-2">
           <a :href="info.insta">

            <svg width="20" height="20"  class="transform transition duration-300 hover:scale-125 " viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0001 0C4.47724 0 0 4.49595 0 10.0419C0 15.0159 3.60522 19.1352 8.33225 19.9329V12.1369H5.91994V9.33139H8.33225V7.26274C8.33225 4.86251 9.79213 3.55453 11.9247 3.55453C12.9461 3.55453 13.8238 3.63095 14.0786 3.66461V6.17349L12.5995 6.17421C11.44 6.17421 11.2165 6.7274 11.2165 7.53946V9.32996H13.9832L13.6223 12.1354H11.2165V20C16.1642 19.3953 20 15.171 20 10.039C20 4.49595 15.5228 0 10.0001 0Z"
                fill="white" />
            </svg>
               </a>
          </div>
          <div class="mx-2">
          <a :href="info.fb" >

            <svg width="20" height="20" class="transform transition duration-300 hover:scale-125 " viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.02892 10.0001C8.02892 11.0869 8.91319 11.971 10 11.971C11.0868 11.971 11.9711 11.0869 11.9711 10.0001C11.9711 8.91319 11.0869 8.02899 10 8.02899C8.91312 8.02899 8.02892 8.91319 8.02892 10.0001Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.7983 12.6138C14.7983 13.8183 13.8183 14.7982 12.6138 14.7982H7.38618C6.18171 14.7983 5.20179 13.8183 5.20179 12.6138V7.38624C5.20179 6.18177 6.18171 5.20179 7.38618 5.20179H12.6137C13.8182 5.20179 14.7982 6.18177 14.7982 7.38624L14.7983 12.6138ZM13.1323 6.11622C12.9329 6.11622 12.7369 6.19696 12.5961 6.33842C12.4546 6.4792 12.3732 6.67518 12.3732 6.87531C12.3732 7.07481 12.4546 7.27072 12.5961 7.41219C12.7369 7.55297 12.9329 7.6344 13.1323 7.6344C13.3324 7.6344 13.5277 7.55297 13.6692 7.41219C13.8106 7.27072 13.8914 7.07474 13.8914 6.87531C13.8914 6.67518 13.8106 6.4792 13.6692 6.33842C13.5284 6.19696 13.3324 6.11622 13.1323 6.11622ZM10 6.99393C8.34235 6.99393 6.9938 8.34249 6.9938 10.0001C6.9938 11.6577 8.34235 13.0062 10 13.0062C11.6576 13.0062 13.0062 11.6577 13.0062 10.0001C13.0062 8.34249 11.6576 6.99393 10 6.99393Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM7.38618 4.16667H12.6137C14.3891 4.16667 15.8334 5.61101 15.8333 7.38624V12.6138C15.8333 14.389 14.3891 15.8333 12.6137 15.8333H7.38618C5.61094 15.8333 4.16667 14.3891 4.16667 12.6138V7.38624C4.16667 5.61101 5.61094 4.16667 7.38618 4.16667Z"
                fill="white" />
            </svg>
               </a>
          </div>
          <div class="mx-2">

            <div class="dropdown inline-block relative">
              <button
                class="bg-transparent border-white border-2 rounded-full text-white font-semibold px-2 inline-flex items-center">
                <span class="mr-1">{{currentLocale}}</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1" style="z-index:3;">

                <nuxt-link
                  class="rounded-t bg-blue-400 hover:bg-blue-800 font-semibold text-white py-2 px-4 block whitespace-no-wrap"
                  v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                  {{ locale.name }}</nuxt-link>
                <!-- <nuxt-link :to="switchLocalePath('he')" class="rounded-t bg-blue-400 hover:bg-blue-800 font-semibold text-white py-2 px-4 block whitespace-no-wrap">Hebrew</nuxt-link>
     
        <nuxt-link :to="switchLocalePath('ar')" class="rounded-t bg-blue-400 hover:bg-blue-800 font-semibold text-white py-2 px-4 block whitespace-no-wrap">Arabic</nuxt-link> -->
              </ul>
            </div>

          </div>

        </div>
        <!-- <nuxt-link :to="switchLocalePath('he')" class="border rounded-l-md pl-4 pr-2 bg-gray-100 text-gray-700 text-sm font-bold shadow">HE</nuxt-link>
          <nuxt-link :to="switchLocalePath('en')" class="border rounded-r-md pr-4 pl-2 bg-blue-600 text-gray-200 text-sm font-bold shadow">EN</nuxt-link> -->
        <div class="top-nav text-white">

          <ul class="flex">
            <li class="mx-2"><nuxt-link :to="localePath('/blog')" >Blog</nuxt-link></li>
            <li class="mx-2"><a href="">{{$t('about')}}</a></li>
            <li class="mx-2"><a href="">{{$t('terms')}}</a></li>
            <li class="mx-2"><a href="">{{$t('contact')}}</a></li>
          </ul>

        </div>
      </div>



      <div class="desktop-headermenu relative rounded-2xl py-6 px-6 shadow-md bg-white">
        <div class="headermenu-container  items-center">

          <div class="logo">

            <nuxt-link :to="localePath('/')">
              <svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.7348 56.2044C14.0166 58.163 11.1816 55.3244 12.8712 53.3658C14.0453 52.0316 15.3912 50.4988 16.8803 48.9943C14.3316 49.1079 11.8116 50.4704 10.6089 53.1671C9.5207 55.5515 9.40616 58.0495 9.06252 60.5191C11.5539 60.1784 14.0739 60.0649 16.4793 58.9862C19.8012 57.5101 21.1184 54.1322 20.5744 51.0949C18.8562 52.6845 17.2525 54.4444 15.7348 56.2044Z"
                  fill="#79C143" />
                <path
                  d="M80.7681 31.5937C81.5126 32.3317 82.429 32.8143 83.4599 33.013C85.8367 33.4955 88.5572 32.6156 90.7335 30.6569C92.7094 28.8686 94.6853 25.6042 93.7403 22.1979C93.7117 22.056 93.6258 21.9424 93.5399 21.8573C93.3394 21.6586 93.0531 21.5734 92.7667 21.6586C92.6808 21.6869 92.5949 21.7153 92.509 21.7437C92.4803 21.4315 92.4231 21.1192 92.3372 20.807C92.2799 20.5799 92.194 20.4096 92.0508 20.296C91.8503 20.0973 91.6213 20.0406 91.3635 19.9838C91.0485 19.8986 90.7049 19.8702 90.3899 19.8135C90.5617 19.5864 90.5903 19.3025 90.4472 19.0754C90.4185 18.9903 90.3613 18.9051 90.2753 18.8483C90.1608 18.7348 90.0462 18.678 89.9031 18.6496C87.469 18.0819 84.6912 18.9051 82.4862 20.807C80.1667 22.8224 78.9067 25.5758 79.1358 28.2157C79.3076 29.4647 79.8803 30.6853 80.7681 31.5937ZM88.6717 21.2612C88.9008 21.2612 89.4735 21.2612 89.9604 21.2612C90.3326 21.2612 90.6476 21.4882 90.7622 21.8573C90.8767 22.1979 90.9912 22.5385 90.9912 22.5669C90.7908 22.6805 90.619 22.794 90.4758 22.9075C89.2158 23.7591 87.9844 24.6959 86.9249 25.5191C86.4381 25.8881 85.9799 26.2571 85.4931 26.6261C85.6935 26.1436 85.8653 25.6894 86.0658 25.2068C86.2663 24.6959 86.4667 24.2133 86.6385 23.7591C87.0394 22.794 87.8126 21.9992 88.6717 21.2612ZM82.8012 22.7088C83.9467 21.4599 85.8081 20.1825 87.8412 19.9838C87.6122 20.1825 87.4117 20.3812 87.2113 20.5515L87.0967 20.665C86.4381 21.2895 85.7222 21.914 85.3499 22.8224C85.1208 23.3333 84.8917 23.8727 84.6912 24.3836C84.4622 24.923 84.2331 25.5191 83.9753 26.0584L83.9181 26.2003C83.4026 27.3642 82.8585 28.5564 81.9994 29.3796C81.8562 29.5215 81.7703 29.7202 81.7703 29.9189C81.7703 30.1176 81.8562 30.3163 81.9994 30.4582C82.2858 30.7421 82.744 30.7705 83.0876 30.515C84.5767 29.2944 86.1231 28.0454 87.6981 26.8248C88.8149 25.9732 90.0176 25.0649 91.249 24.2133L91.3922 24.1281C91.7358 23.9011 92.1081 23.6456 92.4803 23.4469C92.6522 25.0933 92.0508 26.8816 90.7908 28.4428C89.2158 30.3731 86.9249 31.5653 84.7772 31.5653C83.6317 31.5653 82.6008 31.1679 81.8849 30.4298C81.3694 29.9189 81.0544 29.3228 80.8826 28.6131C80.3385 26.399 81.5126 24.0998 82.8012 22.7088Z"
                  fill="#79C143" />
                <path
                  d="M56.7135 36.2206C57.3435 35.0852 57.7158 33.7794 57.859 32.3885C56.5703 30.8556 54.9094 29.6066 52.8476 30.5718C51.3871 31.253 50.0985 32.9278 50.1271 34.5458C50.1558 36.249 52.2176 37.6115 53.764 37.8954C55.1672 38.1792 56.0549 37.3844 56.7135 36.2206Z"
                  fill="#79C143" />
                <path
                  d="M30.998 49.5053C32.6303 48.9943 32.6016 46.5531 31.1698 46.0138C29.8812 45.5596 28.3348 45.9854 26.9603 46.6099C27.6762 48.6821 28.8789 50.1865 30.998 49.5053Z"
                  fill="#79C143" />
                <path
                  d="M99.9831 59.5539C99.9258 58.163 99.5536 56.9708 99.0095 55.9489C99.3245 55.296 99.5249 54.5864 99.6108 53.82C99.7827 52.1736 99.8113 49.6756 98.9808 47.2344C99.9258 45.7867 100.241 43.9984 99.8113 42.2668C99.2386 39.8824 97.9499 36.6464 95.029 34.0633C98.7231 30.3731 100.269 25.2352 99.0095 20.7502C98.7804 19.8986 98.3508 19.1322 97.7781 18.4509L97.4917 17.3723C97.4058 17.0316 97.234 16.691 97.0049 16.4071C96.6613 15.953 96.1745 15.6123 95.6017 15.4136L94.084 14.9311C93.2536 14.1363 92.2513 13.5969 91.1345 13.3414C90.2467 13.1427 89.3017 13.0292 88.3567 13.0292C86.2949 13.0292 84.2617 13.5118 82.3431 14.4201C80.1381 12.5182 76.4726 11.6667 70.8026 11.6667C68.8267 11.6667 66.9653 11.7802 65.7626 11.837C65.3617 11.8654 65.0181 11.8654 64.789 11.8938C62.584 11.9789 60.694 13.1144 59.5771 14.8175C57.458 13.086 54.9667 12.1492 52.4753 12.1492C50.929 12.1492 49.4112 12.5182 47.9508 13.1995C47.6071 13.3698 47.2921 13.5401 46.9771 13.7388C46.9771 13.2563 46.9485 12.8021 46.9485 12.3195C46.9485 11.9789 46.9485 11.6383 46.9485 11.2976C46.9199 9.02676 46.9199 6.18816 45.6599 3.60503C44.6289 1.36253 42.4812 0 40.1044 0C37.8421 0 35.6944 1.19221 34.463 3.12247C33.5466 4.57015 33.2603 6.27332 33.5753 7.89132C33.6326 8.28873 33.7185 8.60097 33.7757 8.82806C33.7757 8.91322 33.7757 8.96999 33.8044 9.05515C33.833 9.25385 33.833 9.42417 33.8617 9.53771C33.9762 10.8719 34.0048 12.2344 34.0048 13.5401C32.7448 10.957 31.4562 8.28873 29.8526 5.76237C28.7357 3.97405 26.5021 2.07218 23.6385 2.07218C21.4048 2.07218 19.4575 3.23601 18.2548 5.25142C16.8803 7.57908 17.138 10.3041 17.3384 12.2912C17.3671 12.6602 17.4244 13.0292 17.4244 13.2563C17.453 14.3066 17.5103 15.3852 17.5675 16.4355C17.7107 19.2457 17.8253 21.914 17.768 24.5823C17.7394 26.1152 17.6821 27.7332 17.6248 29.266C17.4816 32.9562 17.3384 36.7316 17.5389 40.5353C17.3671 40.5353 17.1953 40.5069 17.0234 40.5069C12.1266 40.5069 7.71661 42.6075 4.93888 46.2409C3.04888 48.7105 1.81751 51.7478 1.04433 55.807C0.872512 56.7721 0.786603 57.7088 0.700693 58.5888C0.557511 59.6107 0.471602 60.5474 0.271147 61.2571C-0.301581 63.2157 0.0420563 65.2311 1.21615 66.8208C1.38797 67.0479 1.58842 67.2749 1.81751 67.502C2.99161 68.751 4.62388 69.5458 6.42797 69.5458C7.05798 69.5458 7.68798 69.4607 8.31798 69.262C8.97661 69.0633 9.92161 68.9781 10.8953 68.8929C11.7257 68.8078 12.6134 68.751 13.5012 68.5807C17.7394 67.8427 20.8894 66.5937 23.438 64.6634C25.7289 62.9319 27.3612 60.6326 28.3062 58.0211C28.8503 58.1062 29.3944 58.1346 29.9671 58.1346C31.2844 58.1346 32.5444 57.9075 33.7471 57.4818C33.7757 59.8094 34.0335 62.279 34.5203 64.8054C35.093 67.7859 37.613 69.8581 40.6485 69.8581C42.0803 69.8581 43.5121 69.3755 44.6576 68.5523C45.6599 69.1768 46.8912 69.5174 48.1512 69.5174C50.2703 69.5174 52.1603 68.6091 53.363 67.133C54.394 67.8994 55.654 68.4955 57.2003 68.751C57.7731 68.8646 58.3744 68.8929 58.9471 68.8929C63.3285 68.8929 66.4212 66.1111 68.1967 62.4493C68.3399 63.3009 68.5117 64.1241 68.7122 64.9473C69.4567 67.8143 71.9194 69.7161 74.869 69.7161C76.9308 69.7161 78.9067 68.7794 80.1667 67.1614C80.6535 66.5369 81.0258 65.7989 81.2263 65.0608C82.6581 67.1046 84.7772 68.7226 87.3258 69.5458C88.2995 69.8581 89.3017 70 90.2754 70C92.8813 70 95.3154 68.9497 97.1481 67.0479C99.0667 65.0892 100.098 62.3358 99.9831 59.5539ZM81.8849 20.0406C84.319 17.94 87.4117 17.0316 90.1608 17.6561C90.4758 17.7413 90.7622 17.8832 90.9913 18.1103C91.1345 18.2522 91.249 18.4225 91.3636 18.6212C91.4208 18.7348 91.4495 18.8483 91.4781 18.9619C91.5067 18.9619 91.564 18.9903 91.5926 18.9903C91.8504 19.047 92.3372 19.1606 92.7381 19.558C92.9958 19.8135 93.1676 20.1257 93.2822 20.4947C93.2822 20.5515 93.3108 20.6083 93.3108 20.6367C93.6545 20.6934 93.9408 20.8637 94.1986 21.1192C94.4277 21.3463 94.5708 21.6018 94.6567 21.8856C95.5445 25.0365 94.2558 28.7267 91.3636 31.3098C88.9581 33.4672 85.9226 34.4323 83.2308 33.8929C81.9995 33.6375 80.9113 33.0697 80.0522 32.2182C78.9926 31.1679 78.334 29.7486 78.1908 28.1873C77.9617 25.3204 79.3363 22.2547 81.8849 20.0406ZM30.6544 25.9449C29.1366 22.8792 27.6189 19.8418 26.0725 16.7762C26.1585 18.5361 26.3016 20.2676 26.3016 22.0276C26.3589 27.9603 25.8435 33.8929 25.9866 39.7972C26.0153 40.4501 26.0439 41.4152 26.1585 42.4655C27.5903 41.983 29.0507 41.7275 30.5685 41.8127C34.2912 42.0681 37.0117 45.4177 36.1239 49.0795C35.2648 52.5993 31.3416 54.4444 27.9625 53.309C26.5307 52.8264 25.4425 51.9181 24.6407 50.7826C25.2135 54.6148 24.0107 58.6172 20.7748 61.0584C18.4839 62.7899 15.5916 63.6415 12.7853 64.1241C10.9239 64.4363 8.89071 64.408 7.08661 64.9189C6.22752 65.1744 5.56888 64.8905 5.13934 64.3796C4.65252 63.9538 4.36615 63.2725 4.62388 62.4493C5.19661 60.5758 5.1107 58.4753 5.48297 56.5734C5.99843 53.8767 6.82888 51.0949 8.51843 48.8808C11.4107 45.1338 16.4507 44.1403 20.8034 45.4745C21.3189 45.077 21.863 44.6796 22.4071 44.339C22.2353 43.232 22.1494 42.1533 22.0921 41.1882C21.7198 35.6813 22.178 30.0892 22.2925 24.5823C22.3785 20.7218 22.0921 16.8613 21.9489 13.0008C21.8916 11.4964 21.3189 8.82806 22.1494 7.40876C23.2662 5.50689 25.2421 6.67072 26.1012 8.00487C28.1057 11.1557 29.6521 14.6756 31.313 18.0251C33.6612 22.6805 35.9521 27.3358 38.243 32.0195C38.3289 29.5783 38.3862 27.1371 38.4435 24.6959C38.5294 20.9489 38.5867 17.2019 38.5294 13.455C38.5008 12.0073 38.4721 10.5596 38.3576 9.11192C38.3289 8.85645 38.2144 7.83455 38.2717 8.00487C38.243 7.74939 37.8994 6.78427 38.1857 7.40876C37.0689 5.0811 40.5626 3.06569 41.6794 5.39335C42.653 7.43715 42.5098 10.1338 42.5385 12.3195C42.6244 16.1517 42.5671 19.9554 42.4812 23.7875C42.3667 29.2376 42.1948 34.6594 41.9371 40.1095C41.8512 41.9546 39.1021 43.0049 38.1857 41.1314C35.6657 36.1071 33.1744 31.026 30.6544 25.9449ZM50.3849 63.159C50.0985 65.6853 46.0608 65.7137 46.3471 63.159C46.5762 61.1436 46.6621 59.1281 46.6621 57.1127C46.6621 55.6367 46.8626 50.3001 45.2017 49.6188C43.0826 48.7105 42.338 54.8419 42.3094 56.0908C42.2521 58.3617 42.3953 60.6894 42.8248 62.9035C43.3117 65.4298 39.4171 66.4801 38.9303 63.9538C38.3003 60.6894 38.0139 57.2263 38.4148 53.9051C38.4721 53.3658 38.5867 52.8264 38.7298 52.2587C38.7871 51.4071 38.8444 50.5556 38.873 49.704C38.9017 49.0227 38.9017 48.3131 38.873 47.6318C38.873 47.5466 38.873 47.3195 38.9017 47.206L38.873 47.1776C38.873 47.1776 38.873 47.1776 38.873 47.206V47.1776C37.5557 45.4177 40.2189 43.0049 41.9944 44.6513C42.3953 45.0203 42.653 45.5312 42.7676 46.0989C43.6553 45.6732 44.6862 45.4745 45.8603 45.7015C49.6976 46.3544 50.3276 51.2652 50.5853 54.3593C50.8144 57.2547 50.6999 60.2636 50.3849 63.159ZM51.7308 41.4436C46.6621 39.5134 44.3998 34.3471 47.7789 29.777C50.2989 26.3706 54.1649 25.6042 57.458 27.0803C57.229 26.2003 56.9712 25.3771 56.6276 24.6391C55.8258 22.8792 53.9644 19.7283 51.6449 20.807C50.6999 21.2328 49.9267 22.1411 49.4112 23.0211C48.0653 25.2352 44.5717 23.2198 45.9176 21.0057C46.8626 19.4444 48.2944 17.9968 49.9553 17.2019C53.2199 15.6407 56.3412 17.3155 58.403 19.927C61.7249 24.1281 62.6985 30.2311 61.324 35.369C60.1785 39.7689 56.513 43.2603 51.7308 41.4436ZM65.3903 56.1192C64.9322 59.8378 62.7271 65.2028 57.9449 64.3796C54.1076 63.7267 53.4776 58.8159 53.2199 55.7218C52.9908 52.7981 53.0767 49.8175 53.4203 46.8938C53.7067 44.3674 57.7444 44.339 57.458 46.8938C57.229 48.9092 57.1431 50.9246 57.1431 52.94C57.1431 54.4161 56.9426 59.7526 58.6035 60.4339C60.7226 61.3423 61.4671 55.2109 61.4958 53.9619C61.5531 51.691 61.4099 49.3633 60.9803 47.1492C60.4935 44.6229 64.3881 43.5726 64.8749 46.0989C65.5335 49.3633 65.7912 52.8264 65.3903 56.1192ZM64.5885 39.0024C64.1303 35.5109 66.2208 31.9911 68.1394 29.266C70.2872 26.1719 72.8644 23.4185 75.2413 20.5231C75.184 20.5231 75.1553 20.4947 75.0981 20.4947C74.239 20.4096 73.3799 20.3528 72.5208 20.3244C70.0008 20.2393 67.4808 20.2393 64.9608 20.3244C62.3549 20.4096 62.3835 16.4071 64.9608 16.322C67.7385 16.2368 81.8563 14.8459 80.1094 20.3528C79.7085 21.6302 78.5631 22.7656 77.7326 23.7591C76.4154 25.3204 75.0694 26.8532 73.7522 28.4428C72.0053 30.6002 69.5713 33.4388 68.7981 36.3909C78.1908 34.0633 92.509 31.3098 95.4013 43.3171C96.0027 45.8151 92.1081 46.8938 91.5067 44.3674C89.044 34.1768 73.6376 39.2863 67.1085 40.9327C65.734 41.2733 64.7603 40.2798 64.5885 39.0024ZM81.6558 51.2084C79.9949 51.6342 78.2767 51.8329 76.5299 51.9181C76.2722 55.5231 76.0431 59.3268 76.9308 62.7899C77.5608 65.2879 73.6663 66.3382 73.0363 63.8402C72.0626 60.0649 72.0053 55.9773 72.3203 51.9181C71.3753 51.8897 70.459 51.8329 69.5426 51.8045C66.9653 51.691 66.9367 47.6886 69.5426 47.8021C70.5735 47.8589 71.6331 47.9157 72.7213 47.944C72.9503 45.957 73.2367 43.9984 73.5231 42.1249C73.8953 39.5702 77.7899 40.6772 77.4176 43.1752C77.4176 43.2603 77.389 43.3171 77.389 43.3455C77.389 43.3739 77.389 43.4307 77.3604 43.5442C77.2744 44.1403 77.2172 44.7364 77.1313 45.3041C77.0167 46.1557 76.9308 47.0357 76.8449 47.9157C78.1049 47.8305 79.3649 47.6602 80.5676 47.3479C83.0876 46.6951 84.1758 50.5556 81.6558 51.2084ZM88.7004 65.3163C85.579 64.3228 83.2308 61.1719 83.7176 57.9075C84.0899 55.3528 87.9845 56.4599 87.6122 58.9578C87.469 59.9513 89.2731 61.5126 90.1895 61.541C90.9054 61.5693 91.249 61.2003 91.3922 60.4623C91.564 59.5539 90.9913 59.1281 90.3326 58.5604C87.4404 56.0625 83.2595 52.7697 84.8917 48.3982C86.0658 45.2474 90.6476 43.8848 93.2249 46.2125C95.1149 47.9157 95.4013 50.9813 95.1722 53.3658C95.029 54.7851 93.7117 55.4096 92.5949 55.2393C92.6522 55.296 92.7095 55.3528 92.7667 55.3812C94.1413 56.5166 95.4299 57.8792 95.5158 59.7242C95.659 63.4428 92.3658 66.4801 88.7004 65.3163Z"
                  fill="#79C143" />
                <path
                  d="M91.1058 53.3942C91.2204 52.3723 91.2204 51.2652 90.9626 50.2717C90.6476 49.1079 89.1299 48.3698 88.6145 49.9027C88.099 51.3504 89.7313 52.9684 91.1917 54.1606C91.1058 53.9335 91.0772 53.678 91.1058 53.3942Z"
                  fill="#79C143" />
              </svg>
            </nuxt-link>

          </div>

          <div class="search relative border-green-500 shadow-md rounded-md border-solid border flex h-12">
            <input type="search" name="search" v-model="searchQuery"
              class="w-full h-full block border-none focus:border-none focus:ring-0 placeholder-green-500 placeholder-opacity-60 font-semibold focus:font-normal  rounded-md px-4 py-2  outline-none	"
              @input="startSearch" :placeholder="$t('search')" id="">
            <button type="submit">
              <span class="inset-y-0 right-0 flex items-center pl-2 mr-1">
                <button  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline text-white bg-green-500 rounded-md">
                  <svg  v-if="!loading" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" class="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <svg v-if="loading" class="animate-spin w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
                </button>
              </span>
              <!-- <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.8516 12.1485C9.40195 14.6989 13.5369 14.6989 16.0872 12.1485C18.6376 9.59814 18.6376 5.46316 16.0872 2.91278C13.5369 0.362406 9.40195 0.362406 6.8516 2.91278C4.30124 5.46316 4.30124 9.59814 6.8516 12.1485ZM6.8516 12.1485L0.999991 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> -->
            </button>
            <transition name="slide-fade">

              <div class="search-results absolute bg-white w-full shadow-lg  z-10 top-14 rounded-xl"
                v-if="results.length">
                <div class="search-results-container px-6 p-2  ">
                  <div class="search-result flex py-4 items-center justify-between" v-for="result in results"
                    :key="result.id">
                    <div class="right flex items-center">

                      <div class="search-result-image">
                        <nuxt-link v-on:click.native="openResult" :to="localePath(`/product/${result.id}`)">

                          <img :src="result.image" class="w-20 border-gray-500 border rounded-lg" alt="">
                        </nuxt-link>
                      </div>
                      <h1 class="font-bold text-blue-500 ltr:ml-6 rtl:mr-6 text-lg">
                        <nuxt-link v-on:click.native="openResult" :to="localePath(`/product/${result.id}`)">
                          {{result.name.substring(0, 30)}}
                          <span v-if="result.name.length > 30">...</span></nuxt-link>
                        <p class="font-bold text-green-500 text-md">₪ {{result.price}}</p>
                      </h1>
                    </div>

                    <div class="left">
                      <nuxt-link v-on:click.native="openResult" :to="localePath(`/product/${result.id}`)">

                        <svg class="svg-inline--fa fa-chevron-right w-4 stroke-current rotate-45 text-green-500 "
                          style="transform: rotate(180deg);" aria-hidden="true" focusable="false" data-prefix="fas"
                          data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                          data-fa-i2svg="">
                          <path fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                          </path>
                        </svg>


                      </nuxt-link>
                    </div>

                  </div>
                </div>
                <div class="show-all cursor-pointer bg-blue-300 py-1 text-blue-600 rounded-b-xl">
                  <a @click.prevent="openSearch" class="block font-bold text-md text-center"> {{$t('show_all_results')}}</a>
                </div>


              </div>
            </transition>
          </div>

          <div class="actions flex justify-self-end	 items-center">


            <div class="cart flex items-center">
              <div class="price font-bold text-blue-500">
                ₪ {{totalPrice}}
              </div>

              <div @click="openCart()"
                class="cart-icon relative ltr:ml-6 rtl:mr-6 bg-green-100 cursor-pointer hover:bg-blue-100 transition duration-200 rounded-full p-2 h-10 w-10 flex justify-center items-center">
    <span class="flex h-3 w-3 absolute top-0 left-0" v-if="totalPrice != 0">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
</span>
                <a href="javascript:void(0)">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.46 14.1395C6.46 15.167 5.60934 16 4.56 16C3.51066 16 2.66 15.167 2.66 14.1395C2.66 13.112 3.51066 12.2791 4.56 12.2791C5.60934 12.2791 6.46 13.112 6.46 14.1395Z"
                      fill="#79C143" />
                    <path
                      d="M13.3 14.1395C13.3 15.167 12.4493 16 11.4 16C10.3507 16 9.5 15.167 9.5 14.1395C9.5 13.112 10.3507 12.2791 11.4 12.2791C12.4493 12.2791 13.3 13.112 13.3 14.1395Z"
                      fill="#79C143" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.177252 0.51848C0.386329 0.19563 0.749589 0 1.14 0H9.5C10.1296 0 10.64 0.499775 10.64 1.11628C10.64 1.73278 10.1296 2.23256 9.5 2.23256H2.93776L5.44576 7.44186H10.8671L14.1417 0.640276C14.3299 0.249407 14.7315 0 15.1729 0H17.86C18.4896 0 19 0.499775 19 1.11628C19 1.73278 18.4896 2.23256 17.86 2.23256H15.8958L12.6212 9.03414C12.433 9.42501 12.0313 9.67442 11.59 9.67442H4.72286C4.28155 9.67442 3.87988 9.42501 3.6917 9.03414L0.108843 1.59228C-0.0576366 1.24649 -0.0318247 0.84133 0.177252 0.51848Z"
                      fill="#79C143" />
                  </svg>
                </a>
              </div>


            </div>
            <div v-if="!isLoggedIn" @click.prevent="openAccount()"
              class="user mx-6  bg-green-100 cursor-pointer hover:bg-blue-100 transition duration-200 rounded-full p-2 h-10 w-10 flex justify-center items-center">
              <a href="javascript:void(0)">

                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.85714 4.8125C6.85714 6.02062 7.81653 7 9 7C10.1835 7 11.1429 6.02062 11.1429 4.8125C11.1429 3.60438 10.1835 2.625 9 2.625C7.81653 2.625 6.85714 3.60438 6.85714 4.8125ZM9 0C6.39637 0 4.28571 2.15463 4.28571 4.8125C4.28571 7.47037 6.39637 9.625 9 9.625C11.6036 9.625 13.7143 7.47037 13.7143 4.8125C13.7143 2.15463 11.6036 0 9 0Z"
                    fill="#79C143" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.7143 14.875H4.28571C3.33894 14.875 2.57143 15.6585 2.57143 16.625C2.57143 17.5915 3.33894 18.375 4.28571 18.375H13.7143C14.6611 18.375 15.4286 17.5915 15.4286 16.625C15.4286 15.6585 14.6611 14.875 13.7143 14.875ZM4.28571 12.25C1.91878 12.25 0 14.2088 0 16.625C0 19.0412 1.91878 21 4.28571 21H13.7143C16.0812 21 18 19.0412 18 16.625C18 14.2088 16.0812 12.25 13.7143 12.25H4.28571Z"
                    fill="#79C143" />
                </svg>
              </a>
            </div>
<nuxt-link v-if="isLoggedIn" :to="`${$i18n.locale == 'he' ? '' : $i18n.locale}/account/profile`">

<div  class="user mx-6  bg-green-100 cursor-pointer hover:bg-blue-100 transition duration-200 rounded-full p-2 h-10 w-10 flex justify-center items-center">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.85714 4.8125C6.85714 6.02062 7.81653 7 9 7C10.1835 7 11.1429 6.02062 11.1429 4.8125C11.1429 3.60438 10.1835 2.625 9 2.625C7.81653 2.625 6.85714 3.60438 6.85714 4.8125ZM9 0C6.39637 0 4.28571 2.15463 4.28571 4.8125C4.28571 7.47037 6.39637 9.625 9 9.625C11.6036 9.625 13.7143 7.47037 13.7143 4.8125C13.7143 2.15463 11.6036 0 9 0Z"
                    fill="#79C143" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M13.7143 14.875H4.28571C3.33894 14.875 2.57143 15.6585 2.57143 16.625C2.57143 17.5915 3.33894 18.375 4.28571 18.375H13.7143C14.6611 18.375 15.4286 17.5915 15.4286 16.625C15.4286 15.6585 14.6611 14.875 13.7143 14.875ZM4.28571 12.25C1.91878 12.25 0 14.2088 0 16.625C0 19.0412 1.91878 21 4.28571 21H13.7143C16.0812 21 18 19.0412 18 16.625C18 14.2088 16.0812 12.25 13.7143 12.25H4.28571Z"
                    fill="#79C143" />
                </svg>
            </div>
</nuxt-link>

          </div>


        </div>
        <hr class="bg-green-500 my-6" style="height:0.05rem;">
        <div class="bottom-menu flex items-center justify-between">
          <div class="left flex items-center">

            <div class="categories">
              <a href="javascript:void(0)" class="flex items-center cursor-pointer" @mouseover="showMenu()">
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H15M1 4H15M1 7H8" stroke="#79C143" stroke-linecap="round" />
                </svg>
                <h5 class="font-bold text-md text-green-500 leading-none px-2">{{$t('categories')}}</h5>
              </a>


            </div>
            <div class="featured-categories rtl:border-r ltr:border-l  border-green-500">
              <ul class="flex ml-2">
                <li class="mx-2 font-semibold hover:text-blue-600"><a href="">Gluten-Free</a></li>
                <li class="mx-2 font-semibold hover:text-blue-600"><a href="">Detox</a></li>
                <li class="mx-2 font-semibold hover:text-blue-600"><a href="">Salted</a></li>
                <li class="mx-2 font-semibold hover:text-blue-600"><a href="">Coffee</a></li>
                <li class="mx-2 font-semibold hover:text-blue-600"><a href="">Tools</a></li>

              </ul>

            </div>

          </div>


          <div class="right ">

            <div class="contact text-blue-500 flex">
              <div class="phone font-semibold">
                <a href="tel:077-4021011">077-4021011</a>
              </div>
              <div
                class="email font-semibold ltr:border-l rtl:border-r border-blue-500 ltr:ml-2 ltr:pl-2 rtl:mr-2 rtl:pr-2">
                <a :href="`mailto:${info.email}`">{{info.email}}</a>

              </div>
            </div>


          </div>


        </div>
        <transition name="slide-fade">

          <div class="category-modal absolute bg-white border-blue-500 border-2 rounded-md w-full left-0 right-0 z-20"
            @mouseleave="showDeskCat = false" v-if="showDeskCat" style="top:68%">

            <div class="categories-menu grid grid-cols-8 ">


              <div
                class="parent ltr:border-r-2 rtl:border-l-2 border-blue-500 ltr:pr-8 rtl:pl-8  p-4 px-6 col-start-1	col-end-3">
                <!-- Categories Heading -->
                <a href="javascript:void(0)" class="flex items-center cursor-pointer">
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H15M1 4H15M1 7H8" stroke="#BDBDBD" stroke-linecap="round" />
                  </svg>
                  <h5 class="font-bold text-md leading-none px-2" style="color:#BDBDBD;">{{$t('categories')}}</h5>
                </a>
                <ul class="categories-list mt-6 pb-4">
                  <li class="category-item mt-2 hover:text-green-500" v-for="category in categories" :key="category.id">

                    <a href="javascript:void(0)" class="flex items-center justify-between">
                      <div class="start flex items-center"> <span  v-html="category.icon"></span>
                      
                      <strong class="font-semibold mx-2" @mouseenter="showChild(category.id)" >{{category.title}}</strong> </div>
                      <span style="transform:rotate(180deg)">

                        <svg width="5" height="8"  viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0.5L4.5 4L1 7.5" stroke="#E0E0E0" stroke-linejoin="round" />
                        </svg>

                      </span>
                    </a>
                  </li>


                </ul>
              </div>
              <div  class="children col-start-3 p-4 px-6 rtl:mr-6 ltr:ml-6 pb-4	col-end-9 flex">
                <transition name="slide-fade">
                <ul v-if="childrenCats.length!=0"  class="children-categories font-semibold mt-6">
                  <li class="mt-2 hover:text-green-500"  v-for="childrenCat in childrenCats" :key="childrenCat.id">
                    
                    <a href="">{{childrenCat.title}}</a>
                    
                    </li>
        

                </ul>
                </transition>


                <div class="blog-menu mt-3	 ltr:ml-auto rtl:mr-auto" style="width:70%">
                  <h1 class="text-green-500 text-2xl font-bold bg-white">Our latest blog tips...</h1>

                  <div class="blog-posts grid grid-cols-2 gap-x-8 bg-white items-center pt-2">
                    <div class="post bg-white">
                      <div class="blog-title bg-white text-blue-500 font-semibold text-md">
                        Sed laoreet laoreet vitae, egestas imperdiet.
                      </div>
                      <div class="blog-image mt-2 bg-white">
                        <img src="~/assets/images/blog.png" class="w-full rounded-lg" alt="">
                      </div>
                    </div>
                    <div class="post bg-white">
                      <div class="blog-title bg-white text-blue-500 font-semibold text-md">
                        Sed laoreet laoreet vitae, egestas imperdiet.
                      </div>
                      <div class="blog-image mt-2 bg-white">
                        <img src="~/assets/images/blog.png" class="w-full rounded-lg" alt="">
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>


          </div>
        </transition>
      </div>



    </div>


  </div>
</template>
<style>
   .search-result h1{
                    white-space: nowrap;
                    overflow: hidden;
            }
</style>
<script>
export default {
      data(){
    return{
      searchQuery:'',
      results:[],
      loading:false,
      showDeskCat:false,
      childrenCats:[],
    }
  }, computed:{
    isLoggedIn(){
return this.$store.getters['auth/isLoggedIn'];
    },
      firstName(){
     if(this.$store.getters['auth/user']){
 return this.$store.getters['auth/user'].first_name;
     }
   },    totalPrice(){
           return this.$store.getters['cart/totalPrice'];

        },
availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
},
info(){
return this.$store.getters['info'];
},

currentLocale(){
  if(this.$i18n.locale=='en'){
    return 'English';
  }else if(this.$i18n.locale=='he'){
    return 'Hebrew';
  }else if(this.$i18n.locale=='ar'){
    return 'Arabic';
  }
  
  },
  categories(){
   return this.$store.getters.categories;
  },
    childCategories(){
   return this.$store.getters.ChildCategories;
  }
  },

  methods:{
    illusoryId(id){
      return "product_"+id;

    },
    startSearch(){
    if(this.searchQuery!=''){
      this.loading = true;
       this.$axios.get(`/searchQuery/${this.searchQuery}`).then(res=>{
 this.results = res.data.result;
 this.loading = false;
})


    }else{
      this.results = [];

    }
    },
    showChild(id){
this.childrenCats = this.childCategories.filter(x => x.parent == id);

    },
    openSearch(){
      this.results = [];
      this.$router.push(this.localePath({path:`/search?search=${this.searchQuery}`}))
    },
    openResult(){
      this.results = [];
    },
    showMenu(){
      this.showDeskCat = true;
      console.log(this.showDeskCat);
    },
    openAccount(){
    this.$emit('open-modal')
    },
    openCart(){
    this.$emit('cart-modal')
    }
  
  }
}
</script>
