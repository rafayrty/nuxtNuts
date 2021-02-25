<template>
    
            <form action="" @submit.prevent="login">
 <div class="form-group flex flex-col mt-4">
     <label for="email" >{{$t('form.email')}}</label>
     <input type="email" v-model="email"  :class="{'error-input':errors.email}" @input="errors.email = false" name="email" :placeholder="$t('email_placeholder')" id="email">
     <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.email">{{errors.email[0]}}</span>
     </transition>
 </div>
 <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">{{$t('form.password')}}</label>
     <input type="password"  v-model="password"  :class="{'error-input':errors.email}" @input="errors.password = false" name="password" :placeholder="$t('password_placeholder')" id="password">
     <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.password">{{errors.password[0]}}</span>
     </transition>
 </div>
<div class="bottom flex justify-between items-center  mt-4">
<div class="remember">
      <label class="inline-flex items-center ">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ltr:ml-2 rtl:mr-2 text-blue-500">{{$t('remember')}}</span>
            </label>
</div>
<a href="#" class="text-blue-500 underline">
   {{$t('forgot')}}
</a>
</div>

 <div class="submit my-4">
     <button type="submit" :disabled="loading"  class="bg-green-500 flex items-center justify-center py-4 submit-login w-full hover:bg-blue-500 text-white cursor-pointer transition duration-300 font-bold  text-xl">
        {{$t('login')}} <svg v-if="loading" class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
           loading:false,
           errors:[]
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
              this.$axios.setToken(res.access_token, 'Bearer')
            
            this.$emit('close-modal');
            this.$router.push(this.localePath({path:'account/profile'}));

             this.loading = false;
             this.email = "";
             this.password = "";
            document.querySelector('.submit-login').removeAttribute('disabled');
         }).catch(err=>{
                          this.loading = false;
        if(err.response.status == 401){
            this.password = "";
            this.loading = false;
            this.$toast.show('Email Or Password Is Incorrect',{type:'error',duration:3000});
        }else if(err.response.status == 422){

            this.errors = err.response.data.errors;
            this.password = "";
            this.loading = false;
            this.$toast.show('Authentication Error Occurred',{type:'error',duration:3000});
        }else{
            this.$toast.show(`An Unknown Error ${err.response.status} Occurred`,{type:"error",duration:3000});
        }
})
            },
    }
}
</script>