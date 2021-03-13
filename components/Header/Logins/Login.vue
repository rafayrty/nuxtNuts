<template>
    <div class="login-container">
      <transition name="slide-fade" mode="out-in">
            <form key="0" action="" @submit.prevent="login" v-if="!isForgot">
       
                <div class="rounded-md -space-y-px">
        <div class="form-group">
            
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" v-model="email"  :class="{'error-input':errors.email}" @input="errors.email = false" required class="rounded-t-md" :placeholder="$t('email_placeholder')">
             <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.email">{{errors.email[0]}}</span>
     </transition>
        </div>
        <div class="form-group">
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" v-model="password" required :class="{'error-input':errors.password}" @input="errors.password = false" class="rounded-b-md"  :placeholder="$t('password_placeholder')">
     <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.password">{{errors.password[0]}}</span>
     </transition>
        </div>

        </div>

<div class="bottom flex justify-between items-center  mt-4">
    <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="form-checkbox h-4 w-4 cursor-pointer text-green-500 focus:ring-green-500 border-gray-300 rounded">
          <label for="remember_me" class="ltr:ml-2 rtl:mr-2  block text-sm text-blue-500">
           {{$t('remember')}}
          </label>
        </div>

<a href="javascript:void(0)" @click="isForgot = true" class="text-blue-500 underline">
   {{$t('forgot')}}
</a>
</div>

 <div class="submit my-4">
     <button type="submit" :disabled="loading"  class="group font-bold text-xl transition duration-300 relative w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md text-white submit-login bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
<span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-white-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>

        {{$t('login')}} <svg v-if="loading" class="animate-spin rtl:mr-3 ltr:ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
         </button>
 </div>
  </form>

 <form key="1" action="" @submit.prevent="forgot" v-if="isForgot">
       
<div class="rounded-md -space-y-px">
        <div class="form-group">
            
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" v-model="forgot_email"  :class="{'error-input':forgotErrors.email}" @input="forgotErrors.email = false" required class="rounded-md" :placeholder="$t('email_placeholder')">
             <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="forgotErrors.email">{{forgotErrors.email[0]}}</span>
     </transition>
        </div>


        </div>

<div class="bottom flex justify-between items-center  mt-4">


<a href="javascript:void(0)" @click="isForgot = false" class="text-blue-500 underline">
Login Instead
</a>
</div>

 <div class="submit my-4">
     <button type="submit" :disabled="loading"  class="group font-bold text-xl transition duration-300 relative w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md text-white submit-login bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
<span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-white-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>

           {{$t('reset_btn')}}
 <svg v-if="loading" class="animate-spin rtl:mr-3 ltr:ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
         </button>
 </div>
  </form>

</transition>

</div>











</template>
<script>
export default {
      data(){
        return{
           email:"",
           password:"",
           forgot_email:"",
           loading:false,
           errors:[],
           forgotErrors:[],
           isForgot:false
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

            forgot(){
              let formData = new FormData();
              formData.append('email',this.forgot_email);

              this.$axios.$post('/api/forgot-password',formData).then(res=>{
                console.log(res);
             this.loading = false;
      
            if(res.status=='400'){
              this.forgotErrors ={"email":[res.message]};
          this.$toast.show(res.message, {
                type: 'error',
                duration: 3000
              });
            }else{
                   this.$toast.show(res.message, {
                type: 'success',
                duration: 3000
              });
           
            this.forgot_email = "";
            this.isForgot = false;

            }
          


            }).catch(err=>{
              
            if (err.response.status == 422) {
              this.loading = false;
              this.forgotErrors = err.response.data.errors;
              this.forgot_email = "";
              this.loading = false;
              this.$toast.show('Authentication Error Occurred', {
                type: 'error',
                duration: 3000
              });


            }
            });

        }
    }
}
</script>