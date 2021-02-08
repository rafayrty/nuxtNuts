<template>
<div class="main">

<main>

<div class="container py-10">
<div class="product lg:grid grid-cols-2 gap-x-10">

<div class="product-image relative">
    <img :src="product.image" v-shared-element:[illusoryId(product.id)] class="w-full border border-gray-300" alt="">
                                <span v-if="product.kind==0" class="gm-main  bg-green-500 text-white text-sm font-semibold rounded-2xl px-3 py-2 right-2 bottom-2 absolute">100 {{$t('gm')}}</span>
</div>

<div class="product-details mt-4 lg:mt-0 flex flex-col justify-between">
<div class="top">

<h1 class="text-3xl font-bold" >{{product.name}}</h1>
<div class="category text-gray-400">
 Nuts & Crackers > Roasted Nuts
</div>
<div class="tags mt-6">
     

        <a href="">

        <span class="tag mx-3 hover:bg-green-300 cursor-pointer bg-green-200 text-green-500 px-2 py-1 font-bold rounded-full">
        Fresh
    </span>
    </a>
    <a href="">
      <span class="tag mx-3 hover:bg-green-300 cursor-pointer bg-green-200 text-green-500 px-2 py-1 font-bold rounded-full">
        NazNuts Original
    </span>
    </a>
</div>

<div class="tabs mt-8">
 <div class="tab-names border-b border-gray-300 pb-2 font-semibold flex text-gray-400">
     <p class="text-blue-500 ">Description</p>
      <p class="mx-4">Returns</p>
      <p class="mx-4">Bundles</p>

 </div>

<div class="tab text-gray-400 mt-3" id="tab1">
    Integer facilisi condimentum facilisi nunc. Viverra magna odio ac in. Consectetur turpis metus aliquet in congue feugiat. Ac malesuada id pharetra, quis massa quis tristique felis. Ac dolor enim vivamus risus, nulla semper viverra convallis. Diam quam et eget pulvinar consequat lectus nunc. Penatibus ipsum.
</div>

</div>

</div>
<div class="bottom flex flex-col mt-6 lg:mt-0">
    <div class="price flex items-center">
<div class="quantity rounded-lg border-2  border-blue-500 flex items-center">

<a href="#"  @click.prevent="decreaseAmount()" class="px-4 py-3 cursor-pointer" >
<svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L1 1" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
<p class="qty font-bold">{{amount}} <span v-if="product.kind==0">{{$t('kg')}}</span></p>
<a href="#" @click.prevent="increaseAmount()" class="px-4 py-3 cursor-pointer">
    
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H5M5 5H1M5 5V1M5 5V9" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</a>

</div>
<div class="total ml-4">
<p class="text-green-500 font-bold text-2xl"> <span class="text-gray-400 mx-2"> = </span> ₪ {{product.price}}</p>
    </div>

    </div>

    <div class="addToCart">
        <button @click="addToCart" class="font-semibold bg-blue-500 transition duration-300 hover:bg-blue-800 cursor-pointer p-2 px-6 py-3 text-lg flex text-white items-center rounded-lg mt-6 w-full lg:w-8/12 justify-center">
           <!-- <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>  -->
<svg v-if="!loading" width="34" class="mx-2" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9321 15.5233C19.9321 16.615 19.0117 17.5 17.8764 17.5C16.741 17.5 15.8207 16.615 15.8207 15.5233C15.8207 14.4315 16.741 13.5465 17.8764 13.5465C19.0117 13.5465 19.9321 14.4315 19.9321 15.5233Z" fill="white"/>
<path d="M27.3328 15.5233C27.3328 16.615 26.4124 17.5 25.2771 17.5C24.1417 17.5 23.2213 16.615 23.2213 15.5233C23.2213 14.4315 24.1417 13.5465 25.2771 13.5465C26.4124 13.5465 27.3328 14.4315 27.3328 15.5233Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1344 1.05089C13.3606 0.707857 13.7537 0.5 14.1761 0.5H23.2213C23.9025 0.5 24.4548 1.03101 24.4548 1.68605C24.4548 2.34108 23.9025 2.87209 23.2213 2.87209H16.1212L18.8348 8.40698H24.7005L28.2435 1.18029C28.4471 0.764995 28.8817 0.5 29.3592 0.5H32.2666C32.9478 0.5 33.5 1.03101 33.5 1.68605C33.5 2.34108 32.9478 2.87209 32.2666 2.87209H30.1413L26.5983 10.0988C26.3947 10.5141 25.9601 10.7791 25.4826 10.7791H18.0526C17.5751 10.7791 17.1405 10.5141 16.9369 10.0988L13.0604 2.1918C12.8803 1.8244 12.9082 1.39391 13.1344 1.05089Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.90984 3.15625C6.80617 3.15625 7.53279 3.8698 7.53279 4.75V6.875H9.69672C10.5931 6.875 11.3197 7.58855 11.3197 8.46875C11.3197 9.34895 10.5931 10.0625 9.69672 10.0625H7.53279V12.1875C7.53279 13.0677 6.80617 13.7812 5.90984 13.7812C5.0135 13.7812 4.28689 13.0677 4.28689 12.1875V10.0625H2.12295C1.22662 10.0625 0.5 9.34895 0.5 8.46875C0.5 7.58855 1.22662 6.875 2.12295 6.875H4.28689V4.75C4.28689 3.8698 5.0135 3.15625 5.90984 3.15625Z" fill="white"/>
</svg>
<svg v-if="loading" class="animate-spin ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> 
{{$t('add_to_cart')}}
        </button>
    </div>


</div>



</div>

</div>
   <div class="display-products mt-20 mb-10">
          <div class="display-title">
            <h3>Recently Viewed</h3>
            <p><a href="#">View All ></a></p>
          </div>
          <hr class="bg-green-500" style="height:0.05rem;margin-top: -0.1rem;">
          <div class="products-container">


            <div class="product">

              <div class="product-image">
                <img src="~/assets/images/product1.png"  alt="">
                                <span class="gm">100 {{$t('gm')}}</span>

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                  <h4>Extra Almonds</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>$ 7.00</h4>

                  </div>
                  <div class="addToCart" >
                    <button>

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                  </div>


                </div>


              </div>



            </div>



            <div class="product">

              <div class="product-image">
                <img src="~/assets/images/product1.png"  alt="">
                                <span class="gm">100 {{$t('gm')}}</span>

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                  <h4>Extra Almonds</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>$ 7.00</h4>

                  </div>
                  <div class="addToCart" >
                    <button >

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                  </div>


                </div>


              </div>



            </div>
            

            <div class="product">

              <div class="product-image">
                <img src="~/assets/images/product1.png"  alt="">
                                <span class="gm">100 {{$t('gm')}}</span>

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                  <h4>Extra Almonds</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>$ 7.00</h4>

                  </div>
                  <div class="addToCart" >
                    <button>

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                  </div>


                </div>


              </div>



            </div>
            

            <div class="product">

              <div class="product-image">
                <img src="~/assets/images/product1.png"  alt="">
                                <span class="gm">100 {{$t('gm')}}</span>

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                  <h4>Extra Almonds</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>$ 7.00</h4>

                  </div>
                  <div class="addToCart" >
                    <button>

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                  </div>


                </div>


              </div>



            </div>



          </div>




        </div>

</div>



</main>

</div>

</template>
<style>
.gm-main{
    opacity:0;
animation:reveal .4s ease-in-out forwards;
    animation-delay:.4s;

}
@keyframes reveal{
    from{
        transform:translateY(10px);
        opacity:0;
    }
    to{
      transform:translateY(0px);
        opacity:1;
    }
}
</style>
<script>
export default {
  data(){
    return{
 originalprice:0,
 loading:false,
 amount:0
}
  },
  async asyncData(context) {
    const id = context.params.slug
        try {
      // Using the nuxtjs/http module here exposed via context.app
      let product = await context.app.$axios.$get(
        `/api/products/${id}/${context.app.i18n.locale}`
      )
      product = product[0];
      console.log(product);
      return { product }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  } ,created(){
    this.$store.dispatch('recently/addRecently',this.product.id);
    if(this.product.kind==0){
  this.amount = 0.1;
}else{
  this.amount = 1;
}
console.log(this.amount);
     this.originalprice = this.product.price;
    },methods:{
    illusoryId(id){
      return "product_"+id;
    },
  
    increaseAmount(){
      // alert("rafay");

          if(this.amount != this.product.maximum){
if(this.product.kind == 1){
  this.amount = this.amount + 1;
this.product.price =  (Math.round(this.amount * this.originalprice)).toFixed(0);

}else{
  this.amount = (parseFloat(this.amount) + parseFloat("0.1")).toFixed(1);
  this.product.price =  (this.originalprice / 100) * (this.amount * 1000);
this.product.price =  (Math.round(this.product.price * 100) / 100).toFixed(0);
}
    }
    },
    decreaseAmount(){
          if(this.product.kind == 1){
      if(this.amount != 1){
          this.amount = this.amount - 1;
this.product.price =  (Math.round(this.amount * this.originalprice)).toFixed(0);

}
  }else{
  if(this.amount != 0.1){
this.amount = (parseFloat(this.amount) - parseFloat("0.1")).toFixed(1);
this.product.price =  (this.originalprice / 100) * (this.amount * 1000);
this.product.price =  (Math.round(this.product.price * 100) / 100).toFixed(0);
}
  }
    },
    addToCart(){
      document.querySelector('.addToCart button').setAttribute('disabled',true);
      this.loading = true;

     const add = {'originalprice':this.originalprice}
Object.entries(add).forEach(([key,value]) => { this.product[key] = value })
this.$store.dispatch('cart/addToCart',{id:this.product.id,amount:this.amount,image:this.product.image,originalprice:this.originalprice,kind:this.product.kind,title:this.product.name,maximum:this.product.maximum,type:"product",price:this.product.price}).then(res=>{
this.showToast();
this.loading = false;
      document.querySelector('.addToCart button').removeAttribute('disabled');

}).catch(e=>{
  this.loading = false;
  document.querySelector('.addToCart button').removeAttribute('disabled');
      if(!e.data){
this.$toast.show(`Product Already Exists`,{type:'error',duration:3000})
      }
})

    //  this.$store.dispatch('cart/addToCart',)
    },
    showToast(){
           this.$toast.show(`
     <svg width="34" class="mx-2" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9321 15.5233C19.9321 16.615 19.0117 17.5 17.8764 17.5C16.741 17.5 15.8207 16.615 15.8207 15.5233C15.8207 14.4315 16.741 13.5465 17.8764 13.5465C19.0117 13.5465 19.9321 14.4315 19.9321 15.5233Z" fill="white"/>
<path d="M27.3328 15.5233C27.3328 16.615 26.4124 17.5 25.2771 17.5C24.1417 17.5 23.2213 16.615 23.2213 15.5233C23.2213 14.4315 24.1417 13.5465 25.2771 13.5465C26.4124 13.5465 27.3328 14.4315 27.3328 15.5233Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1344 1.05089C13.3606 0.707857 13.7537 0.5 14.1761 0.5H23.2213C23.9025 0.5 24.4548 1.03101 24.4548 1.68605C24.4548 2.34108 23.9025 2.87209 23.2213 2.87209H16.1212L18.8348 8.40698H24.7005L28.2435 1.18029C28.4471 0.764995 28.8817 0.5 29.3592 0.5H32.2666C32.9478 0.5 33.5 1.03101 33.5 1.68605C33.5 2.34108 32.9478 2.87209 32.2666 2.87209H30.1413L26.5983 10.0988C26.3947 10.5141 25.9601 10.7791 25.4826 10.7791H18.0526C17.5751 10.7791 17.1405 10.5141 16.9369 10.0988L13.0604 2.1918C12.8803 1.8244 12.9082 1.39391 13.1344 1.05089Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.90984 3.15625C6.80617 3.15625 7.53279 3.8698 7.53279 4.75V6.875H9.69672C10.5931 6.875 11.3197 7.58855 11.3197 8.46875C11.3197 9.34895 10.5931 10.0625 9.69672 10.0625H7.53279V12.1875C7.53279 13.0677 6.80617 13.7812 5.90984 13.7812C5.0135 13.7812 4.28689 13.0677 4.28689 12.1875V10.0625H2.12295C1.22662 10.0625 0.5 9.34895 0.5 8.46875C0.5 7.58855 1.22662 6.875 2.12295 6.875H4.28689V4.75C4.28689 3.8698 5.0135 3.15625 5.90984 3.15625Z" fill="white"/>
</svg>
     Added To Cart`,{type:'info',duration:3000});
    }
  }


}
</script>
