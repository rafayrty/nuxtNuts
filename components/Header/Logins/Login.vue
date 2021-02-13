<template>
    
            <form action="" @submit.prevent="login">
 <div class="form-group flex flex-col mt-4">
     <label for="email" >Email Address</label>
     <input type="email" v-model="email" name="email" placeholder="Jenny@dummy.com" id="email">
 </div>
 <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">Password</label>
     <input type="password" v-model="password"  name="password" placeholder="*****" id="password">
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
     <button type="submit" @click="login" value="Login" class="bg-green-500 flex items-center justify-center py-4 submit-login w-full hover:bg-blue-500 text-white cursor-pointer transition duration-300 font-bold  text-xl">
        Login <svg v-if="loading" class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
         </button>
 </div>
  </form>
</template>
<script>
export default {
      data(){
        return{
           email:"",
           password:"",
           loading:false
        }
    },
    methods:{
        login(){
            this.loading = true;
            document.querySelector('.submit-login').setAttribute('disabled',true);
            let formData = new FormData();
            formData.append('email',this.email);
            formData.append('password',this.password);
         this.$store.dispatch('auth/login',formData).then(res=>{
              this.$toast.show('Authenticated',{type:'info',duration:3000})
            this.$emit('close-modal');
             this.loading = false;
             this.email = "";
             this.password = "";
            document.querySelector('.submit-login').removeAttribute('disabled');
         }).catch(err=>{
                          this.loading = false;
           console.log(err.response.data);
                      console.log(err.response.status);

})
            },
    }
}
</script>