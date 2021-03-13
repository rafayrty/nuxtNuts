<template>
    <div class="cart-page-container mt-4">
<h1 class="text-3xl font-bold">{{$t('cart.my')}} <span class="text-sm text-gray-400 font-medium">({{totalItems}} {{$t('cart.items')}}) </span></h1>
<p class="mt-4">{{$t('cart.estimated')}}</p>
<div class="items-list mt-6">



  <div class="cart-item mt-4 p-4 rounded-xl" v-for="cartItem in cartItems" :key="cartItem.name">
     <div class="cart-item-main">

     <div class="left cart-item-grid">
<!-- "w-20 lg:w-28 xl:w-34 xl:w-34  -->
    <div class="cart-item-image">
        <img :src="cartItem.image" class="border w-full  border-gray-500 rounded-md" alt="">
    </div>
    <div class="cart-item-details ltr:ml-4 rtl:mr-4 my-1 flex flex-col justify-between">
        <h3 class="name font-bold text-lg">{{cartItem.name}}</h3>
        <p class="category text-gray-400 text-semibold text-sm">Nuts & Crackers > Roasted Nuts</p>
        <!-- Cart Item Quantitiy -->



<!-- Cart Item Quantitiy  Ends -->
    </div>
            <div class="bottom flex flex-col mt-2 w-full">
    <div class="price flex items-center w-full justify-between">
<div class="quantity rounded-lg border-2 py-1 border-blue-500 flex items-center">

<a href="#" @click.prevent="decreaseAmount(cartItem.id)" class="px-4 py-2 cursor-pointer">
<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 1" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<p class="qty font-bold">{{cartItem.amount}}<span v-if="cartItem.kind==0">{{$t('kg')}}</span></p>
<a href="#"  @click.prevent="increaseAmount(cartItem.id)"  class="px-4 py-2 cursor-pointer">
    
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H5M5 5H1M5 5V1M5 5V9" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</a>

</div>


    </div>


</div>
     <div class="delete-btn flex flex-col items-end justify-between justify-self-end">
       <button @click="deleteProduct(cartItem.id)" class="bg-red-500 focus:outline-none h-10 flex justify-center items-center w-10 rounded-full shadow-xl">
           
<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 1.75C4.5 1.6837 4.52634 1.62011 4.57322 1.57322C4.62011 1.52634 4.6837 1.5 4.75 1.5H7.25C7.3163 1.5 7.37989 1.52634 7.42678 1.57322C7.47366 1.62011 7.5 1.6837 7.5 1.75V3H4.5V1.75ZM9 1.75V3H11.25C11.4489 3 11.6397 3.07902 11.7803 3.21967C11.921 3.36032 12 3.55109 12 3.75C12 3.94891 11.921 4.13968 11.7803 4.28033C11.6397 4.42098 11.4489 4.5 11.25 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790175 4.13968 0 3.94891 0 3.75C0 3.55109 0.0790175 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H3V1.75C3 0.784 3.784 0 4.75 0H7.25C8.216 0 9 0.784 9 1.75ZM2.496 6.675C2.48851 6.57519 2.46111 6.4779 2.41543 6.38884C2.36975 6.29979 2.30671 6.22078 2.23002 6.15647C2.15333 6.09216 2.06455 6.04385 1.9689 6.01438C1.87325 5.98492 1.77266 5.9749 1.67308 5.98491C1.5735 5.99492 1.47692 6.02476 1.38905 6.07268C1.30118 6.12059 1.22379 6.18561 1.16144 6.2639C1.09908 6.34219 1.05303 6.43217 1.02599 6.52853C0.998953 6.6249 0.991476 6.7257 1.004 6.825L1.664 13.425C1.70738 13.8566 1.90952 14.2567 2.23121 14.5478C2.5529 14.8388 2.97121 14.9999 3.405 15H8.595C9.495 15 10.247 14.319 10.336 13.424L10.996 6.824C11.01 6.6292 10.9475 6.43661 10.8217 6.2872C10.6959 6.13779 10.5168 6.04334 10.3225 6.02394C10.1281 6.00453 9.93388 6.06169 9.78103 6.18328C9.62819 6.30486 9.5288 6.48127 9.504 6.675L8.844 13.275C8.8378 13.3367 8.80888 13.3939 8.76286 13.4355C8.71685 13.4771 8.65702 13.5001 8.595 13.5H3.405C3.34298 13.5001 3.28315 13.4771 3.23714 13.4355C3.19112 13.3939 3.1622 13.3367 3.156 13.275L2.496 6.675Z" fill="white"/>
</svg>

       </button>
    <div class="total ltr:ml-4 rtl:mr-4 pb-2">
<p class="text-green-500 font-bold text-xl">₪ {{cartItem.price}}</p>
    </div>
         </div>
      
         </div>



     </div>

 </div>
<!--Baskets -->
  <div class="cart-item mt-4  p-4 rounded-xl" v-for="basketItem in basketItems" :key="basketItem.title">
     <div class="basket-item-main">

     <div class="left cart-item-grid">
<!-- "w-20 lg:w-28 xl:w-34 xl:w-34  -->
    <div class="cart-item-image">
        <img :src="basketItem.image" class="border w-full  border-gray-500 rounded-md" alt="">
    </div>
    <div class="cart-item-details ltr:ml-4 rtl:mr-4 my-1 flex flex-col justify-between">
        <h3 class="name font-bold text-lg">{{basketItem.name}}</h3>
<div class="prd-images flex">
    <img v-for="image in basketItem.images" :key="image"  class="w-6 h-6 object-cover border border-gray-500 rounded-full mx-1" :src="image" alt="">
</div>

        <!-- Cart Item Quantitiy -->



<!-- Cart Item Quantitiy  Ends -->
    </div>
            <div class="bottom flex flex-col mt-2 w-full">
    <div class="price flex items-center w-full justify-between">
<div class="quantity rounded-lg border-2 py-1 border-blue-500 flex items-center">

<a href="#" @click.prevent="decreaseAmountBasket(basketItem.basket_id)" class="px-4 py-2 cursor-pointer">
<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 1" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<p class="qty font-bold">{{basketItem.amount}}</p>
<a href="#"  @click.prevent="increaseAmountBasket(basketItem.basket_id)"  class="px-4 py-2 cursor-pointer">
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H5M5 5H1M5 5V1M5 5V9" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</a>

</div>


    </div>


</div>
     <div class="delete-btn flex flex-col items-end justify-between justify-self-end">
       <button @click="deleteBasket(basketItem.id)" class="bg-red-500 focus:outline-none h-10 flex justify-center items-center w-10 rounded-full shadow-xl">
           
<svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 1.75C4.5 1.6837 4.52634 1.62011 4.57322 1.57322C4.62011 1.52634 4.6837 1.5 4.75 1.5H7.25C7.3163 1.5 7.37989 1.52634 7.42678 1.57322C7.47366 1.62011 7.5 1.6837 7.5 1.75V3H4.5V1.75ZM9 1.75V3H11.25C11.4489 3 11.6397 3.07902 11.7803 3.21967C11.921 3.36032 12 3.55109 12 3.75C12 3.94891 11.921 4.13968 11.7803 4.28033C11.6397 4.42098 11.4489 4.5 11.25 4.5H0.75C0.551088 4.5 0.360322 4.42098 0.21967 4.28033C0.0790175 4.13968 0 3.94891 0 3.75C0 3.55109 0.0790175 3.36032 0.21967 3.21967C0.360322 3.07902 0.551088 3 0.75 3H3V1.75C3 0.784 3.784 0 4.75 0H7.25C8.216 0 9 0.784 9 1.75ZM2.496 6.675C2.48851 6.57519 2.46111 6.4779 2.41543 6.38884C2.36975 6.29979 2.30671 6.22078 2.23002 6.15647C2.15333 6.09216 2.06455 6.04385 1.9689 6.01438C1.87325 5.98492 1.77266 5.9749 1.67308 5.98491C1.5735 5.99492 1.47692 6.02476 1.38905 6.07268C1.30118 6.12059 1.22379 6.18561 1.16144 6.2639C1.09908 6.34219 1.05303 6.43217 1.02599 6.52853C0.998953 6.6249 0.991476 6.7257 1.004 6.825L1.664 13.425C1.70738 13.8566 1.90952 14.2567 2.23121 14.5478C2.5529 14.8388 2.97121 14.9999 3.405 15H8.595C9.495 15 10.247 14.319 10.336 13.424L10.996 6.824C11.01 6.6292 10.9475 6.43661 10.8217 6.2872C10.6959 6.13779 10.5168 6.04334 10.3225 6.02394C10.1281 6.00453 9.93388 6.06169 9.78103 6.18328C9.62819 6.30486 9.5288 6.48127 9.504 6.675L8.844 13.275C8.8378 13.3367 8.80888 13.3939 8.76286 13.4355C8.71685 13.4771 8.65702 13.5001 8.595 13.5H3.405C3.34298 13.5001 3.28315 13.4771 3.23714 13.4355C3.19112 13.3939 3.1622 13.3367 3.156 13.275L2.496 6.675Z" fill="white"/>
</svg>

       </button>
    <div class="total ltr:ml-4 rtl:mr-4 pb-2">
<p class="text-green-500 font-bold text-xl">₪ {{basketItem.price}}</p>
    </div>
         </div>
      
         </div>



     </div>

 </div>


</div>

    </div>


</template>
<style lang="scss" scoped>

.cart-page-container .cart-item{
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.1);
}
.cart-page-container .cart-item .delete-btn button{
    transition:.3s ease;
    filter: drop-shadow(0px 6px 10px rgba(229, 40, 54, 0.2));
}
.cart-page-container .cart-item .delete-btn button:hover{
        filter: drop-shadow(0px 0px 0px rgba(229, 40, 54, 0.2));

}
.ps{
    max-height:80vh;
    padding-bottom:3rem;
    overflow-y:scroll;
}
.cart-page-container .close a{
    transition:.3s ease;
}
.cart-page-container .close a:hover{
    transform:rotate(90deg);

}
.cart-page-container .cart-item-grid{
    display:grid;
    grid-template-columns:.32fr .8fr 1fr .4fr;
    grid-template-areas:"img text . delete"
                        "img quantity . delete "
}
.cart-page-container .delete-btn{
    grid-area:delete;
}
.cart-page-container .cart-item-image{
    grid-area:img;
}
.cart-page-container .cart-item-details{
    grid-area:text;
}
.cart-page-container .bottom{
    margin-left:1rem;
    grid-area:quantity;
}
.cart-page-container .bottom:dir(rtl){
    margin-left:0rem;
    margin-right:1rem;
}

.cart-page-container .total{
    grid-area:price;
}
.cart-page-container-window{
    border-radius:20px !important;
}
.cart-item:not(:first-child){
    margin-top:2rem;
}
</style>
<script>
export default {
    layout:'cart',
      transition:{
        name:'main'
    },
        computed:{
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

        }
    },
        methods: {
        increaseAmount(id){
         this.$store.dispatch('cart/addAmountProduct',id);
        },
        decreaseAmount(id){
         this.$store.dispatch('cart/subtractAmountProduct',id);
        },
        increaseAmountBasket(id){
         this.$store.dispatch('cart/addAmountBasket',id);
        },
        decreaseAmountBasket(id){
         this.$store.dispatch('cart/subtractAmountBasket',id);
        },
        deleteProduct(id){

         this.$confirm({
          auth: false,
          title: 'Are you sure?',
          message:"You Want To Delete This Cart Item",
          button: {
            no: 'No',
            yes: 'Yes'
          },
        callback: (confirm) =>{
          if(confirm){
            this.$store.dispatch('cart/deleteProduct',id);
            this.$toast.show( this.$t('messages.cart_delete'),{type:'error',duration:3000});
          }
        }
       
      })
          
        },     
        deleteBasket(id){
        this.$confirm({
          auth: false,
          title: 'Are you sure?',
          message:"You Want To Delete This Cart Item",
          button: {
            no: 'No',
            yes: 'Yes'
          },
        callback: (confirm) =>{
          if(confirm){
             this.$store.dispatch('cart/deleteBasket',id);
             this.$toast.show( this.$t('messages.cart_delete'),{type:'error',duration:3000});
          }
        }
       
      })
        },

    },
}
</script>