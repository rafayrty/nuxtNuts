<template>
    <div class="main py-8">
        <div class="container">

        <div class="header font-semibold">
            <p>Build a gift basket for your beloved ones, We’ll walk you through the process...</p>
        </div>
              <div class="basket-tabs mt-4">
                  <div class="basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>Basket</p>
                  </div>
                  <div class="basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>Content</p>
                  </div>
                <div class="basket-tab mx-2 font-bold inline-block text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>Wrapping</p>
                  </div>
                  
                  </div> 
                <hr class="my-6">
               </div>

<div class="tab1 my-24" v-if="tab1">
<div class="container">

<h1 class="font-bold text-blue-500 text-center text-2xl">Choose your preferred basket base</h1>
<p class="text-red-500 text-center font-semibold">*Basket look and color may vary depending on the content and availability</p>

<div class="baskets my-4 mt-16  grid w-7/12 lg:w-full mx-auto gap-x-6 lg:gap-x-12 lg:grid-cols-4">


  <div class="basket border-gray-500 hover:shadow-2xl cursor-pointer transition duration-300 border pt-6 my-6 lg:py-6 lg:pb-12 rounded-xl">
<div class="basket-radio flex text-center justify-center">
<div class="checked-icon text-white bg-green-500  w-8 p-2 rounded-full ">
<svg class="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><!-- <i class="fas fa-check"></i> -->

</div>

</div>
  <img src="~/assets/images/baskets.png" alt="">
 <div class="basket-info bg-green-500 rounded-full w-full lg:w-9/12 mx-auto">

   <div class="basket-info-header rounded-xl text-white" style="background:#F2994A;">
       <div class="top flex px-4 text-sm lg:text-md pt-2 justify-between items-center">
           <p>Max Products:</p>
           <p class="font-semibold lg:text-lg">6</p>

       </div>
           <div class="bottom flex text-sm lg:text-md mt-2 lg:mt-0 px-4 pb-2 justify-between items-center">
           <p>Basket Price:</p>
           <p class="font-bold lg:text-lg">$ 40.00</p>

       </div>
   
   <div class="basket-name  bg-green-500 rounded-b-lg text-center py-1 text-bold">
       Willow
   </div>

   </div>

  </div>
  </div>
 

  <div class="basket border-gray-500 hover:shadow-2xl cursor-pointer transition duration-300 border pt-6 my-6 lg:py-6 lg:pb-12 rounded-xl">
<div class="basket-radio flex text-center justify-center">
<div class="checked-icon text-white bg-transparent border-gray-500 border  w-8 p-2 rounded-full ">
<svg class="svg-inline--fa fa-check fa-w-16 opacity-0"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><i class="fas fa-check"></i>

</div>

</div>
  <img src="~/assets/images/baskets.png" alt="">
 <div class="basket-info bg-green-500 rounded-full w-full lg:w-9/12 mx-auto">

 <div class="basket-info-header rounded-xl text-white" style="background:#F2994A;">
       <div class="top flex px-4 text-sm lg:text-md pt-2 justify-between items-center">
           <p>Max Products:</p>
           <p class="font-semibold lg:text-lg">6</p>

       </div>
           <div class="bottom flex text-sm lg:text-md mt-2 lg:mt-0 px-4 pb-2 justify-between items-center">
           <p>Basket Price:</p>
           <p class="font-bold lg:text-lg">$ 40.00</p>

       </div>
   
   <div class="basket-name  bg-green-500 rounded-b-lg text-center py-1 text-bold">
       Willow
   </div>

   </div>


  </div>
  </div>
 
</div>

</div>



    </div>
<div class="tab2">


    <div class="tab2-container mx-auto w-10/12 lg:grid gap-x-8 lg:w-11/12 xl:w-10/12" >
<div class="categories">
    <div class="category-search flex justify-between bg-green-500 py-2 px-2 rounded-lg shadow-md">
        <input type="search" class="bg-green-500 w-full text-white outline-none py-1 placeholder-white text-sm border-b border-white" placeholder="Search">
    <div class="search-icon  bg-white flex ml-2 px-2 justify-center items-center rounded-lg">
        
<svg width="15" height="15"  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.47475 9.52533C7.42502 11.4756 10.587 11.4756 12.5373 9.52533C14.4876 7.57505 14.4876 4.413 12.5373 2.46272C10.587 0.512428 7.42502 0.512428 5.47475 2.46272C3.52448 4.413 3.52448 7.57505 5.47475 9.52533ZM5.47475 9.52533L0.999993 14" stroke="#79C143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
    </div>
<p class="text-sm  text-gray-400 mt-6 mb-3">Categories</p>
    <ul class="basket-categories font-semibold flex flex-wrap lg:block">
        <li class="border border-green-500 rounded-lg px-2"><a href="#">All</a></li>
        <li class="px-2"><a href="#">On Sale%</a></li>
        <li class="px-2"><a href="#">Dried Fruits</a></li>
        <li class="px-2"><a href="#">Sweets</a></li>
        <li class="px-2"><a href="#">Uncooked cracking</a></li>

    </ul>
</div>
    
    <div class="basket-products mt-6 lg:mt-0">
          <h2 class="text-xl text-blue-500 text-center font-bold">Good choice, Now pick the products to be mixed in the basket</h2>
    <div class="basket-products-container grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-6 xl:gap-6 mt-6">

    <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>
        <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>
        <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>
        <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>

    <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>
        <div class="basket-product bg-white shadow-md pb-3">
        <div class="basket-product-image border">
            <img src="~assets/images/product1.png" class="w-full" alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                          Extra almonds
                </h3>
                <button class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800">+ Add To Basket</button>
        </div>

    </div>
    </div>

    </div>

    <div class="basket-addition bg-blue-500">

    </div>
    
    </div>


    </div>


    </div>


</template>


<script>
export default {
        transition:{
            name:'main',
              beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
        } ,
    data(){
        return{
            tab1:false,
            tab2:true,
            prevHeight: 0,


        }
    },
    methods:{
          
    }
}
</script>
<style>
.tab2-container{
   grid-template-columns: 12% 70% 22%;
    /* grid-template-columns:.2fr 1fr .22fr; */
}
@media only screen and (max-width:1024px){
   .tab2-container{
   grid-template-columns: 18% 55% 27%;
    /* grid-template-columns:.2fr 1fr .22fr; */
} 
}
</style>