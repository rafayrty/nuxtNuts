<template>
       <div :dir="$dir()">
                   <vue-confirm-dialog></vue-confirm-dialog>

 <HeaderMain/>
<div class="main mt-6">
<div class="container cart-container ">

<div class="content mb-12">


    <Nuxt />



</div>

<aside class="mt-12">
<div class="cart-details px-7 py-6 bg-green-100">
<div class="cart-coupon">
    <form action="" @submit.prevent="applyCoupon">
<transition name="slide-fade">

<div key="0" class="coupon-input" v-if="!couponApplied">  
    <label for="coupon" class="text-md">{{$t('cart.apply_coupon')}}</label>
    <div class="input flex jutsify-center mt-1">
    <input type="text" required v-model="coupon" :placeholder="$t('cart.coupon')" name="coupon" class="w-full px-2" id="">
    <button type="submit" class="bg-green-500 font-semibold py-2 px-4 text-white ml-2 hover:bg-green-800 cursor-pointer">{{$t('cart.apply')}}</button>
    </div>

</div>
<div key="1" class="applied-coupon flex items-center relative justify-between bg-yellow-200 py-4 px-2" v-if="couponApplied">
<a href="#" @click.prevent="removeDiscount" class="close text-white bg-red-600 absolute flex items-center p-1 hover:bg-red-800 hover:shadow-md transition duration-300 justify-center text-2xl rounded-full h-8 w-8 cursor-pointer">
<!-- <svg  viewbox="0 0 16 16" width="16" height="16">
<path d="M-10 12h24" stroke="#fff" stroke-width="3" style="transform: rotate(-45deg);"></path>
<path d="M0 0h24" stroke="#fff" stroke-width="3" style="transform: rotate(45deg);"></path>
 
 </svg> -->
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
    </a>
<p class="text-red-500 text-lg font-bold"> {{couponApplied}}! APPLIED </p>
<p class="text-blue-500 font-semibold">₪ {{discount}} Discount</p>
</div>

</transition>
</form>
<div class="order-summary mt-8">
<h4 class="font-bold text-lg">{{$t('cart.summary')}}</h4>

<div class="list-item flex justify-between mt-2">
    <p class="font-semibold">{{$t('cart.subtotal')}}</p>
    <p>₪ {{subTotalPrice}}</p>
</div>
<transition name="slide-fade">
<div class="list-item flex justify-between mt-2" v-if="shipping != 0">
    <p class="font-semibold">{{$t('cart.shipping')}}</p>
    <p>₪ {{shipping}}</p>
</div>

</transition>
<hr class="bg-green-500 h-1 mt-4">
<div class="total mt-4 flex justify-between">
<h4 class="font-bold">{{$t('cart.total')}} <span class="text-sm text-green-500 font-medium">{{$t('cart.vat')}}</span></h4>

<p>₪ {{totalPrice}}</p>

</div>



</div>


</div>




</div>

<div class="checkout-btn mt-6 mb-6">
    <button class="w-full bg-green-500 text-white font-bold py-3 px-2 text-lg hover:bg-green-800 transition duration-100" @click="next()">{{$t('cart.checkout')}}</button>
</div>

</aside>
</div>




</div>


    <Footer />


</div>


</template>

<style lang="scss" scoped>
.close{
    top:-22%;
    left:-5%;
}
@media only screen and (min-width:1024px){

}

@media only screen and (min-width:1280px){

.cart-container{
display:grid;
grid-template-columns:1fr .44fr;
grid-gap:4rem;
}
}


</style>
<script>
export default {
data(){
return{
    coupon:''
}
},
 computed:{
        discount(){
         return this.$store.getters['cart/discount'];   
        },
        couponApplied(){
         return this.$store.getters['cart/coupon'];   
        },
        cartItems(){
           return this.$store.getters['cart/addedProducts'];
        },
        totalItems(){
           return this.$store.getters['cart/getNumberOfProducts'];

        },basketItems(){
            console.log(this.$store.getters['cart/addedBaskets'])
           return this.$store.getters['cart/addedBaskets'];

        },
        totalPrice(){
           return this.$store.getters['cart/totalPrice'];

        },
        subTotalPrice(){
           return this.$store.getters['cart/subTotalPrice'];
        },
        shipping(){
           return this.$store.getters['cart/shipping'];
        },
  isLoggedin(){
      return this.$store.getters['auth/isLoggedIn'];
  }
 },
 created(){
            console.log(this.$store.getters['cart/discount'])

 },
  methods:{
      next(){
          console.log(this.isLoggedin);
          if(this.isLoggedin){
          if(this.$route.path){
              if(this.$route.path == '/cart'){
              this.$router.push({path:'/cart/address'});
              }else if(this.$route.path == '/cart/address'){
                  this.$router.push({path:'/cart/payment'});
              }
          }
          }else{
              this.$toast.show('Please Login To Continue',{type:'error',duration:3000});
          }
        
      },
      async applyCoupon(){
          
          if(this.coupon!=""){
          let loader = this.$loading.show();
        await this.$axios.$get(`/api/coupons/${this.coupon}`).then(res=>{
                    let keys = Object.keys(res.discount);
let applied = false;
            keys.forEach(discount=>{
  if( this.subTotalPrice >= parseInt(discount)){
    this.$store.dispatch('cart/addDiscount',parseInt(discount));
    this.$store.dispatch('cart/addCoupon',this.coupon);
    applied = true;
  }
            });
            if(!applied){
this.$toast.show(`Your Subtotal Must Be Above ${keys[0]} To Avail A Discount`,{type:"error",duration:3000});
            }
            this.coupon = "";
            loader.hide();

          })
          }
      },
      removeDiscount(){
          this.$store.dispatch('cart/removeDiscount');

      }
  }


}
</script>