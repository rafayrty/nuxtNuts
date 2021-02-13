<template>
    <div class="main mt-4  pb-12">

<div class="top-bar flex text-2xl font-bold">
    <p class="text-gray-400">{{$t('orders')}}</p>
    <p class="mx-4 text-gray-400">|</p>
    <p class="text-gray-400 active">{{$t('gifts')}}</p>
</div>

<div class="orders mt-10">


<div class="order-list bg-white border-2 pb-6 shadow-lg border-gray-200">

<div class="order-header bg-gray-100 border border-gray-300 px-4  font-semibold py-1 flex justify-between">
<p class="order-number text-blue-500">
Order: 16403135

</p>
<p class="text-gray-400">
19-2-2020 , 20:14
</p>
</div>

<div class="order-top flex justify-between  px-4 py-4 items-center">
    <div class="start">
<div class="recipient">
    <label class="text-gray-400 text-xs font-semibold">Recipient</label>
    <p class="text-sm font-semibold">Jenny Wilson, (+972) 12-345-6789</p>

</div>

<div class="address">
    <label class="text-gray-400 text-xs font-semibold">Address</label>
    <p class="text-sm font-semibold">6391 Elgin St. Celina, Delaware 10299</p>
</div>
    </div>
<div class="end">
<div class="invoice">
    <button class="bg-white border-2 border-gray-400 rounded-lg font-bold text-gray-400 px-4 py-1 hover:bg-gray-300 hover:text-black transition duration-300 cursor-pointer text-md">Invoice</button>
</div>

<div class="cancel mt-4">
    <button class="bg-white border-2 border-red-600 rounded-lg font-bold text-red-600 hover:bg-red-600 hover:text-white transition px-4 py-1 text-md">Cancel</button>
</div>

</div>

</div>
<div class="order-price-status flex px-4 items-center justify-between">

<div class="status">
    <label class="text-gray-400 text-xs font-semibold" for="">Status</label>
<p class="text-lg font-bold">Available</p>
</div>

<div class="total">
    <label class="text-gray-400 text-xs font-semibold" for="">Total Bill</label>
    <p class="text-green-500 font-bold">$ 57.00</p>
</div>
</div>

<div class="status-bars px-2 flex mt-3 mb-4">

<div class="bar bg-gray-300  h-4 w-full"></div>
<div class="bar bg-gray-300 mx-2 h-4 w-full"></div>
<div class="bar bg-gray-300   h-4 w-full"></div>
</div>

<hr class="bg-gray-400">
<div class="items px-4 mt-4">
<p class="text-sm text-gray-400 ">
    4 Items
</p>
<div class="items-list mt-3 flex items-center">
    <div class="item flex">
   <div class="item-image">
       <img src="~/assets/images/order-1.png" class="w-20 rounded-lg border  border-gray-300" alt="">
   </div>
   <div class="item-text mr-4 my-2 flex flex-col justify-between">  
   <p>Wooden Basket</p>
<p class="quantity text-blue-500 font-bold">6 Products</p>
   </div>
    </div>
</div>

</div>


</div>



</div>


</div>
    
</template>
<style lang="scss">
.active{
    @apply text-green-500 border-b-4 pb-2 border-green-500;

}
</style>
<script>
export default {
        layout:'account',
         transition:{
        name:'main'
    }
     

}
</script>