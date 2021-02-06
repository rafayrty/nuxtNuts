<template>
       <modal name="account-modal" :width="'400'" :height="'auto'" :adaptive="true">
<div class="forms-container py-8  w-9/12 mx-auto">

<!-- Login -->
<div class="form ">
 <form action="">
 <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">Email Address</label>
     <input type="email" name="email" class="outline-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 border border-gray-200 px-2 bg-blue-100" placeholder="Jenny@dummy.com" id="email">
 </div>
 <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">Password</label>
     <input type="password" class="outline-none py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border border-gray-200 px-2 bg-blue-100" name="password" placeholder="*****" id="password">
 </div>
<div class="bottom flex justify-between items-center  mt-4">
<div class="remember">
      <label class="inline-flex items-center ">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-blue-500">Remember Me</span>
            </label>
</div>
<a href="#" class="text-blue-500 underline">
    Forgot Password
</a>
</div>

 <div class="submit my-4">
     <input type="submit" value="Login" class="bg-green-500 w-full hover:bg-blue-500 text-white cursor-pointer transition duration-300 font-bold py-2 text-lg">
 </div>
  <div class="social-logins flex justify-center my-2">
     <div class="apple mx-2">
         <a href="#">
             <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="4" fill="#272727"/>
<path d="M26.8546 16.149C24.7542 16.149 23.8665 17.0938 22.4037 17.0938C20.9039 17.0938 19.7599 16.1559 17.9397 16.1559C16.1581 16.1559 14.2582 17.1812 13.0517 18.9278C11.3576 21.3909 11.6452 26.0297 14.389 29.9816C15.3704 31.3963 16.6811 32.9828 18.4003 33H18.4315C19.9256 33 20.3694 32.0778 22.4256 32.067H22.4568C24.4823 32.067 24.8886 32.9946 26.3764 32.9946H26.4077C28.1268 32.9774 29.5078 31.2195 30.4893 29.8102C31.1957 28.7967 31.4582 28.288 32 27.1414C28.0309 25.7213 27.3933 20.4176 31.3186 18.3842C30.1204 16.97 28.4367 16.151 26.8494 16.151L26.8546 16.149Z" fill="white"/>
<path d="M26.392 11C25.1418 11.08 23.6831 11.8303 22.8288 12.81C22.0536 13.6978 21.416 15.0147 21.666 16.2919H21.7661C23.0976 16.2919 24.4604 15.5362 25.2564 14.5679C26.0232 13.6462 26.6046 12.34 26.392 11Z" fill="white"/>
</svg>

         </a>
     </div>
       <div class="google mx-2">
         <a href="#">
           

<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="43" height="43" rx="3.5" fill="white" stroke="#F2F2F2"/>
<path d="M16.1999 22.093C16.1999 20.9938 16.5027 19.9641 17.0288 19.0824V15.3425H13.2889C11.8046 17.2703 11 19.6197 11 22.093C11 24.5663 11.8046 26.9158 13.2889 28.8435H17.0288V25.1036C16.5027 24.2219 16.1999 23.1922 16.1999 22.093Z" fill="#FBBD00"/>
<path d="M22.0931 27.9862L19.4932 30.5861L22.0931 33.186C24.5664 33.186 26.9158 32.3815 28.8436 30.8971V27.1612H25.1077C24.2183 27.6892 23.1842 27.9862 22.0931 27.9862Z" fill="#0F9D58"/>
<path d="M17.0288 25.1036L13.2889 28.8435C13.5828 29.2252 13.9028 29.5907 14.2491 29.937C16.3443 32.0322 19.13 33.186 22.093 33.186V27.9862C19.9427 27.9862 18.0581 26.8284 17.0288 25.1036Z" fill="#31AA52"/>
<path d="M33.186 22.093C33.186 21.4181 33.1249 20.742 33.0044 20.0834L32.9069 19.5505H22.093V24.7503H27.3558C26.8447 25.7669 26.0589 26.5964 25.1075 27.1612L28.8435 30.8972C29.2251 30.6033 29.5906 30.2833 29.937 29.937C32.0322 27.8418 33.186 25.0561 33.186 22.093Z" fill="#3C79E6"/>
<path d="M26.2602 17.9259L26.7198 18.3855L30.3967 14.7087L29.9371 14.2491C27.8419 12.1539 25.0562 11 22.0931 11L19.4932 13.5999L22.0931 16.1999C23.6672 16.1999 25.1471 16.8128 26.2602 17.9259Z" fill="#CF2D48"/>
<path d="M22.093 16.1999V11C19.1299 11 16.3442 12.1539 14.249 14.249C13.9027 14.5953 13.5827 14.9608 13.2888 15.3425L17.0287 19.0824C18.058 17.3577 19.9426 16.1999 22.093 16.1999Z" fill="#EB4132"/>
</svg>



         </a>
     </div>
  <div class="facebook mx-2">
         <a href="#">
           
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="4" fill="#1976D2"/>
<path d="M13.7267 11H30.0872C31.591 11 32.814 12.2229 32.814 13.7267V30.0872C32.814 31.591 31.591 32.814 30.0872 32.814L25.997 32.814V25.3154H28.0421L29.4055 21.907H25.997V19.1802C25.997 18.4885 26.5131 18.4925 27.181 18.4976C27.2397 18.4981 27.2996 18.4985 27.3604 18.4985H28.7238V15.0901H25.997C23.7379 15.0901 21.9069 16.9211 21.9069 19.1802V21.907H19.1802V25.3154H21.9069V32.814L13.7267 32.814C12.2229 32.814 11 31.591 11 30.0872V13.7267C11 12.2229 12.2229 11 13.7267 11Z" fill="white"/>
</svg>


         </a>
     </div>
 </div>
 <hr class="bg-gray-500 mt-4" style="height:0.05rem;">
 <a href="#" class="text-lg block mt-4 text-center text-green-500 font-bold">Register</a>
 </form>


</div>
</div>



    </modal>
</template>
<script>
export default {
    methods: {
        show () {
            this.$modal.show('account-modal');
        },
        hide () {
            this.$modal.hide('account-modal');
        }
    },
    mount () {
        this.show()
    }
}
</script>