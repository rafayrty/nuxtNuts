<template>
<div class="main mt-4  pb-12">


<div class="profile mt-4">
    <h1 class="text-2xl font-bold">{{$t('account.profile')}}</h1>
</div>

<div class="profile-form">

<form action="" @submit.prevent="updateUser()" class="mt-6 lg:mt-0">
    <div class="col lg:flex lg:justify-between">

<div class="form-group mt-2 lg:w-9/12 lg:mt-6">
    <label for="first_name">{{$t('form.first_name')}}</label>
    <input type="text" class="w-full" v-model="user.first_name" :class="{'error-input':errors.first_name}" @input="errors.first_name = false" :placeholder="$t('firstname_placeholder')" name="first_name" id="first_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.first_name">{{errors.first_name[0]}}</span>
     </transition>
     <!-- Error -->
</div>
<div class="form-group mt-2 lg:w-9/12  lg:pl-4 lg:rtl:pr-4 lg:rtl:pl-0 lg:mt-6">
    <label for="last_name">{{$t('form.last_name')}}</label>
    <input type="text" class="w-full" v-model="user.last_name" :class="{'error-input':errors.last_name}" @input="errors.last_name = false" :placeholder="$t('lastname_placeholder')" name="last_name" id="last_name">
    <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.last_name">{{errors.last_name[0]}}</span>
     </transition>
     <!-- Error -->
</div>
    </div>
    <div class="col lg:flex lg:justify-between">

<div class="form-group mt-2 lg:w-9/12 lg:mt-6">
    <label for="email">{{$t('form.email')}}</label>
    <input type="text" class="w-full"  v-model="user.email" :class="{'error-input':errors.email}" @input="errors.email = false" :placeholder="$t('email_placeholder')" name="email" id="email">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.email">{{errors.email[0]}}</span>
     </transition>
     <!-- Error -->
</div>
<div  class="form-group mt-2 lg:w-9/12  lg:pl-4 lg:rtl:pl-0 lg: rtl:pr-4 lg:mt-6">
    <label for="password">{{$t('form.password')}}</label>
    <input type="text" :disabled="user.type != 'normal'" class="w-full"  v-model="password" :class="{'error-input':errors.password}" @input="errors.password = false" :placeholder="$t('password_placeholder')" name="password" id="email">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.password">{{errors.password[0]}}</span>
     </transition>
     <!-- Error -->
</div>


</div>
<div class="form-group mt-2 lg:mt-6">
    <label for="phone">{{$t('form.phone')}}</label>
    <input type="text" class="w-full" :class="{'error-input':errors.phone}"  v-model="user.phone" @input="errors.phone = false" :placeholder="$t('Phone_placeholder')" name="phone" id="email">
     <!-- Error --> 
    <transition name="slide-fade">
     <span class="text-red-500 font-bold text-md" v-if="errors.phone">{{errors.phone[0]}}</span>
     </transition>
     <!-- Error -->
</div>
<div class="form-group mt-4">
    <label for="newsletter">
        {{$t('form.newsletter')}}
    <input type="checkbox" class="text-green-500 focus:ring-green-500 rounded cursor-pointer ring-green-500" name="newsletter" id="newsletter">
</label>
</div>

<div class="submit mt-4 mb-6 lg:mx-auto lg:w-7/12">
    <button type="submit" :disabled="loading" class="w-full flex items-center justify-center bg-green-500 hover:bg-blue-500 cursor-pointer transition duration-200 text-white py-3 font-semibold text-lg px-4">
          <svg v-if="loading" class="animate-spin rtl:ml-3 ltr:mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
        {{$t('form.save')}}
      
        </button>
</div>

</form>

</div>


</div>
</template>
<style>

</style>
<script>
export default {
       transition:{
        name:'main'
    },
    layout:'account',
data(){
    return{
loading:false,
password:'',
errors:[],
    }
},
  async asyncData(context) {
        try {
      // Using the nuxtjs/http module here exposed via context.app
      const user = await context.app.$axios.$get(
        `/api/auth/user`
      )
      return { user }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  },

  methods:{
      updateUser(){
          this.loading = true;
let formData = new FormData();
for ( var key in this.user ) {
    formData.append(key, this.user[key]);
}
if(this.user.password){
formData.append('password',this.password)
}

   this.$axios.$post(`/api/auth/user/update/${this.user.id}`,formData).then(res=>{
this.loading = false;
this.$store.dispatch('auth/updateUserDetails',this.user);
this.$toast.show('User Updated Successfully',{type:'success',duration:3000})
   }).catch(err=>{
         this.loading = false;     
        if(err.response.status == 422){
            
            this.errors = err.response.data.errors;
            this.$toast.show('Authentication Error Occurred',{type:'error',duration:3000});
        }else{
            this.$toast.show(`An Unknown Error ${err.response.status} Occurred`,{type:"error",duration:3000});
        }

   })

      },
  }


     
    }
  

</script>