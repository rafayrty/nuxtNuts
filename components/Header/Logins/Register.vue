<template>
    
            <form action="" @submit.prevent="submit">
                <div class="col">
 <div class="form-group flex flex-col mt-4">
     <label for="first_name" class="font-semibold text-blue-500">{{$t('form.first_name')}}</label>
     <input type="text" v-model="register.reg_first_name" :class="{'error-input':errors.reg_first_name}" @input="errors.reg_first_name = false" name="first_name" class="outline-none  py-2 border border-gray-200 px-2 bg-blue-100" :placeholder="$t('firstname_placeholder')" id="first_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_first_name">{{errors.reg_first_name[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
  <div class="form-group flex flex-col mt-4">
     <label for="last_name" class="font-semibold text-blue-500">{{$t('form.last_name')}}</label>
     <input type="text" v-model="register.reg_last_name" :class="{'error-input':errors.reg_last_name}" @input="errors.reg_last_name = false"  name="last_name" class="outline-none  py-2 border border-gray-200 px-2 bg-blue-100" :placeholder="$t('lastname_placeholder')" id="last_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_last_name">{{errors.reg_last_name[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
                </div>

                               <div class="col">
 <div class="form-group flex flex-col mt-4">
     <label for="email" class="font-semibold text-blue-500">{{$t('form.email')}}</label>
     <input type="email" v-model="register.reg_email" :class="{'error-input':errors.reg_email}" @input="errors.reg_email = false"  name="email" class="outline-none  py-2 border border-gray-200 px-2 bg-blue-100" :placeholder="$t('email_placeholder')" id="email">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_email">{{errors.reg_email[0]}}</span>
     </transition>
     <!-- Error -->
 </div>
  <div class="form-group flex flex-col mt-4">
     <label for="phone" class="font-semibold text-blue-500">{{$t('form.phone')}}</label>
     <input type="tel" v-model="register.reg_phone" :class="{'error-input':errors.reg_phone}" @input="errors.reg_phone = false" name="phone" class="outline-none  py-2 border border-gray-200 px-2 bg-blue-100" :placeholder="$t('Phone_placeholder')" id="phone">
      <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_phone">{{errors.reg_phone[0]}}</span>
     </transition>
     <!-- Error -->
 
 </div>
                </div>
<div class="col">
     <div class="form-group flex flex-col mt-4">
     <label for="confirm_password" class="font-semibold text-blue-500">{{$t('form.confirm_password')}}</label>
     <input type="password" v-model="register.reg_confirm_password" :class="{'error-input':errors.reg_confirm_password}" @input="errors.reg_confirm_password = false" name="confirm_password" class="outline-none py-2  border border-gray-200 px-2 bg-blue-100"  :placeholder="$t('confirm_password_placeholder')" id="confirm_password">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_confirm_password">{{errors.reg_confirm_password[0]}}</span>
     </transition>
     <!-- Error -->

 </div>
 <div class="form-group flex flex-col mt-4">
     <label for="password" class="font-semibold text-blue-500">{{$t('form.password')}}</label>
     <input type="password" v-model="register.reg_password" :class="{'error-input':errors.reg_password}" @input="errors.reg_password = false"  class="outline-none py-2  border border-gray-200 px-2 bg-blue-100" name="password" :placeholder="$t('password_placeholder')" id="password">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_password">{{errors.reg_password[0]}}</span>
     </transition>
     <!-- Error -->
 
 </div>
</div>

<div class="bottom flex flex-col justify-between mt-6">
<div class="terms">
      <label class="inline-flex items-center ">
                <input type="checkbox" v-model="register.reg_terms" class="form-checkbox h-5 w-5 text-gray-600"><span class="ml-2 rtl:mr-2 text-blue-500">{{$t('form.terms')}}</span>
            </label>
                 <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.reg_terms">{{errors.reg_terms[0]}}</span>
     </transition>
     <!-- Error -->
</div>

<div class="terms">
      <label class="inline-flex items-center ">
                <input type="checkbox" v-model="register.newsletter" class="form-checkbox h-5 w-5 text-gray-600"><span class="ml-2 rtl:mr-2 text-blue-500">{{$t('form.newsletter')}}</span>
            </label>
</div>


</div>

 <div class="submit my-4">
     <button type="submit" :disabled="loading" value="Login" class="bg-green-500 flex items-center justify-center py-4 submit-login w-full hover:bg-blue-500 text-white cursor-pointer transition duration-300 font-bold  text-xl">
        {{$t('form.register')}} <svg v-if="loading" class="animate-spin mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                reg_confirm_password:"",
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