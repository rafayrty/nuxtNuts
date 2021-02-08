<template>
    
            <form action="" @submit.prevent="login">
                <div class="col">
 <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">First Name</label>
     <input type="text" v-model="first_name" name="first_name" class="outline-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 border border-gray-200 px-2 bg-blue-100" placeholder="Jenny@dummy.com" id="email">
 </div>
  <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">Last Name</label>
     <input type="text" v-model="last_name" name="last_name" class="outline-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 border border-gray-200 px-2 bg-blue-100" placeholder="Jenny@dummy.com" id="email">
 </div>
                </div>
                               <div class="col">
 <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">Email Address</label>
     <input type="email" v-model="email" name="email" class="outline-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 border border-gray-200 px-2 bg-blue-100" placeholder="Jenny@dummy.com" id="email">
 </div>
  <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">Phone</label>
     <input type="tel" v-model="phone" name="phone" class="outline-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent py-2 border border-gray-200 px-2 bg-blue-100" placeholder="Jenny@dummy.com" id="email">
 </div>
                </div>
<div class="col">
     <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">Confirm Password</label>
     <input type="password" v-model="confirm_password" name="confirm_password" class="outline-none py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border border-gray-200 px-2 bg-blue-100"  placeholder="*****" id="password">
 </div>
 <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">Password</label>
     <input type="password" v-model="password"  class="outline-none py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent border border-gray-200 px-2 bg-blue-100" name="password" placeholder="*****" id="password">
 </div>
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
     <input type="submit" @click="login" value="Sign Up" class="bg-green-500 w-full hover:bg-blue-500 text-white cursor-pointer transition duration-300 font-bold py-2 text-lg">
 </div>
  </form>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.col{
    @apply mt-3 lg:mt-0 lg:grid grid-cols-2 gap-x-4;
}

</style>