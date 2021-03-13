<template>
    
            <form action="" @submit.prevent="submit">
                <!-- <div class="col"> -->
 <div class="form-group flex flex-col">
     <!-- <label for="first_name" class="font-semibold text-blue-500">{{$t('form.first_name')}}</label> -->
     <input type="text" required  v-model="register.reg_first_name" :class="{'error-input':errors.reg_first_name}" @input="errors.reg_first_name = false" name="first_name" class="rounded-t-md" :placeholder="$t('firstname_placeholder')" id="first_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_first_name">{{errors.reg_first_name[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
  <div class="form-group flex flex-col">
     <!-- <label for="last_name" class="font-semibold text-blue-500">{{$t('form.last_name')}}</label> -->
     <input type="text" required v-model="register.reg_last_name" :class="{'error-input':errors.reg_last_name}" @input="errors.reg_last_name = false"  name="last_name"    :placeholder="$t('lastname_placeholder')" id="last_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_last_name">{{errors.reg_last_name[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
                <!-- </div> -->

                               <!-- <div class="col"> -->
 <div class="form-group flex flex-col">
     <!-- <label for="email" class="font-semibold text-blue-500">{{$t('form.email')}}</label> -->
     <input type="email" required v-model="register.reg_email" :class="{'error-input':errors.reg_email}" @input="errors.reg_email = false"  name="email"    :placeholder="$t('email_placeholder')" id="email">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_email">{{errors.reg_email[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
  <div class="form-group flex flex-col">
     <!-- <label for="phone" class="font-semibold text-blue-500">{{$t('form.phone')}}</label> -->
     <input type="tel" required v-model="register.reg_phone" :class="{'error-input':errors.reg_phone}" @input="errors.reg_phone = false" name="phone"  :placeholder="$t('Phone_placeholder')" id="phone">
      <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_phone">{{errors.reg_phone[0]}}</span>
     </transition>
     <!-- Error -->
 
 </div>
                <!-- </div> -->
<!-- <div class="col"> -->
     <div class="form-group flex flex-col">
     <!-- <label for="password" class="font-semibold text-blue-500">{{$t('form.password')}}</label> -->
     <input type="password" required v-model="register.reg_password" :class="{'error-input':errors.reg_password}" @input="errors.reg_password = false"  class="rounded-b-md" name="password" :placeholder="$t('password_placeholder')" id="password">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_password">{{errors.reg_password[0]}}</span>
     </transition>
     <!-- Error -->
 
 </div>
 
     <div class="form-group flex flex-col">
     <!-- <label for="confirm_password" class="font-semibold text-blue-500">{{$t('form.confirm_password')}}</label> -->
     <input type="password" required v-model="register.reg_password_confirmation" :class="{'error-input':errors.reg_password_confirmation}" @input="errors.reg_confirm_password = false" name="confirm_password"  :placeholder="$t('confirm_password_placeholder')" id="confirm_password">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_password_confirmation">{{errors.reg_password_confirmation[0]}}</span>
     </transition>
     <!-- Error -->

 </div>

<!-- </div> -->

<div class="bottom flex flex-col justify-between mt-4">
<div class="terms">
<div class="flex items-center">

          <input required id="terms" name="terms" type="checkbox"  v-model="register.reg_terms" class="form-checkbox h-4 w-4 cursor-pointer text-green-500 focus:ring-green-500 border-gray-300 rounded">
          <label for="terms" class="ltr:ml-2 rtl:mr-2  block text-xs text-blue-500">
         {{$t('form.terms')}}
          </label>
</div>
                 <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_terms">{{errors.reg_terms[0]}}</span>
     </transition>
     <!-- Error -->
</div>

<div class="terms mt-3">

    <div class="flex items-center">
          <input id="newsletter" name="newsletter" type="checkbox"  v-model="register.newsletter" class="form-checkbox h-4 w-4 cursor-pointer text-green-500 focus:ring-green-500 border-gray-300 rounded">
          <label for="newsletter" class="ltr:ml-2 rtl:mr-2  block text-xs text-blue-500">
          {{$t('form.newsletter')}}
          </label>
        </div>

</div>


</div>

 <div class="submit my-4">
     <button type="submit" :disabled="loading" class="group font-bold text-xl transition duration-300 relative w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md text-white submit-login bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
<span class="absolute left-0 inset-y-0 flex items-center pl-3">
    <svg class="h-5 w-5 text-white-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
       <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
   </svg>
</span>
{{$t('form.register')}}
  <svg v-if="loading" class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            loading:false,
            register:{
                reg_first_name:"",
                reg_last_name:"",
                reg_email:"",
                reg_phone:"",
                reg_password_confirmation:"",
                reg_password:"",
                reg_terms:false,
                newsletter:false
            },
            errors:[]
        }
    },
    methods:{
        submit(){

        this.loading = true;
        this.$axios.$post('/api/auth/create',this.register).then(res=>{

        console.log(res);      
        this.loading = false;    
            this.$emit('close-modal');
        this.$toast.show('Account Created Succesfully',{type:'success',duration:3000});


        }).catch(err=>{
         this.loading = false;     
        if(err.response.status == 422){
            this.errors = JSON.parse(err.response.data.detail);
            this.$toast.show('Authentication Error Occurred',{type:'error',duration:3000});
        }else{
            this.$toast.show(`An Unknown Error ${err.response.status} Occurred`,{type:"error",duration:3000});
        }


        })
             

        }
    }
    
}
</script>
<style lang="scss" scoped>
.col{
    @apply mt-3 lg:mt-0 lg:grid grid-cols-2 gap-x-4;
}

</style>