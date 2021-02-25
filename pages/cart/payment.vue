<template>
    
    <div class="main mt-8 lg:mt-8">
<h2 class="font-bold text-2xl">{{$t('payment.credit')}}</h2>

<button class="bg-green-500 mt-6 text-white py-4 px-16 text-xl hover:bg-green-800 transition duration-300 cursor-pointer">{{$t('form.pay')}}</button>

</div>



</template>

<script>

export default {

    layout:'cart',
    transition:{
        name:'main'
    },
   middleware:'authenticated',
  head() {
    return {
      script: [
      ]
    }
  },created(){
 
        
  }

}
</script>