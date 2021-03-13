<template>



  <div class="main">
<!-- <HeaderMain/> -->

    <header>
      <div class="hero">
        <div class="herobg"></div>
   
   <!-- <DesktopMenu/>
   <MobileMenu/> -->

        <div class="container">

        <div class="hero-content mx-auto md:grid md:grid-cols-6 md:gap-x-6 md:justify-between lg:mt-12">

          <div class="left col-start-1	col-end-5">

            <div class="slider shadow-lg	 	bg-white  rounded lg:border-green-500 lg:border-2	">
              <no-ssr>
<flickity ref="flickity" :options="flickityOptions">
  <div class="carousel-cell ">
<div class="grid grid-cols-2 gap-x-6 items-center">

              <div class="slider-image h-full">
                <img  data-flickity-lazyload="https://i.ibb.co/QDnVm87/slider.png" class="w-full  h-full object-cover" alt="">

              </div>

              <div class="slider-text flex h-full flex-col items-start justify-around py-6">

<div>
             <span class="chip cursor-pointer hover:bg-blue-100  inline-block bg-green-200 text-green-500 px-2">
                  <b>Category Name</b>
                </span>
                                <h1 class="font-bold py-4">Pellentesque sem molestie non massa velit et vitae dignissim.</h1>

</div>
   

<button class="bg-blue-500 mt-4 w-full hover:bg-blue-700 transition cursor-pointer text-white p-2 py-3 px-4 font-semibold	">Call to action</button>
              </div>


</div>

</div>
  <div class="carousel-cell ">
<div class="grid grid-cols-2 gap-x-6 items-center">

              <div class="slider-image h-full">
                <img  data-flickity-lazyload="https://i.ibb.co/QDnVm87/slider.png" class="w-full  h-full object-cover" alt="">

              </div>

              <div class="slider-text flex h-full flex-col items-start justify-around py-6">

<div>
             <span class="chip cursor-pointer hover:bg-blue-100  inline-block bg-green-200 text-green-500 px-2">
                  <b>Category Name</b>
                </span>
                                <h1 class="font-bold py-4">Pellentesque sem molestie non massa velit et vitae dignissim.</h1>

</div>
   

<button class="bg-blue-500 mt-4 w-full hover:bg-blue-700 transition cursor-pointer text-white p-2 py-3 px-4 font-semibold	">Call to action</button>
              </div>


</div>

</div>


</flickity>

              </no-ssr>
            </div>


          </div>

          <div class="right mt-8 md:mt-0 col-start-5 col-end-7">

            <div class="banner rounded w-60 h-24 md:w-full md:h-full" style="background:#0F729D">
            </div>


          </div>

        </div>
        </div>


      </div>

    </header>
    <main>
      <div class="container">

        <div class="display-products mt-10">
          <div class="display-title">
            <h3>{{$t('fresh')}}</h3>
            <p><nuxt-link :to="localePath(`/fresh?page=1`)">{{$t('view')}} ></nuxt-link></p>
          </div>
          <hr class="bg-green-500" style="height:0.05rem;margin-top: -0.1rem;">
          <div class="products-container" v-if="freshToday.length">


            <div class="product"  v-for="fresh in freshToday" :key="fresh.id">

              <div class="product-image">
              <nuxt-link :to="localePath(`/product/${fresh.id}`)" >
               <img :src="fresh.image"  v-shared-element:[illusoryId(fresh.id)] alt="">   </nuxt-link>
                <!-- <span class="gm"  v-if="fresh.kind==0">100 {{$t('gm')}}</span> -->
                             

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                  <h4>{{fresh.descriptions[0].name}}</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>₪ {{fresh.price}}</h4>

                  </div>
                  <div class="addToCart" >
              <nuxt-link :to="localePath(`/product/${fresh.id}`)" >
                    <button>

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                    </nuxt-link>
                  </div>


                </div>


              </div>



            </div>



   



          </div>




        </div>





     <div class="display-products mt-10">
          <div class="display-title">
            <h3>{{$t('recently')}}</h3>
            <p><a href="#">{{$t('view')}} ></a></p>
          </div>
          <hr class="bg-green-500" style="height:0.05rem;margin-top: -0.1rem;">
         <div class="products-container" v-if="recentlyProducts.length">


            <div class="product"  v-for="recently in recentlyProducts" :key="recently.id">

              <div class="product-image">
              <nuxt-link :to="localePath(`/product/${recently.id}`)" >
               <img :src="recently.image"  v-shared-element:[illusoryId(recently.id)] alt="">   </nuxt-link>
                <!-- <span class="gm"  v-if="fresh.kind==0">100 {{$t('gm')}}</span> -->
                             

              </div>
              <div class="product-text">

                <div class="product-categories">
                  <span><a href="#">Nuts</a>, <a href="#">Roasted
                      Nuts</a></span>
                </div>
                <div class="product-title">
                <h4>  {{recently.name}}</h4>
                </div>
                <div class="actions">
                  <div class="price">
                    <h4>₪ {{recently.price}}</h4>

                  </div>
                  <div class="addToCart" >
              <nuxt-link :to="localePath(`/product/${recently.id}`)" >
                    <button>

                     
<svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z" fill="white"/>
<path d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z" fill="white"/>
</svg>


                    </button>
                    </nuxt-link>
                  </div>


                </div>


              </div>



            </div>



   



          </div>

        </div>

      </div>

<div class="blog mt-14 w-full pb-20 pt-4 relative">
  <img src="~/assets/images/blogside.png" class="absolute hidden lg:block left-0 bottom-0" style="width:29%;" alt="">
  <div class="container">

  <div class="blog-section-title pt-4 flex items-center justify-center lg:justify-end	 w-full mt-10">
    
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0524 11.3457C21.3091 14.2281 19.7616 16.7589 18.0572 18.9134C16.6288 20.4968 14.584 21.1646 12.5386 21.57C10.5559 22.2452 8.34376 22.0282 6.51478 21.0151C5.8737 20.7485 5.12103 20.6686 4.55125 20.286C2.76629 19.1415 1.7464 17.2313 0.968304 15.3081C-0.0404276 13.5002 -0.110487 11.2887 0.0916312 9.26811C0.22741 8.58177 0.691166 8.00828 0.952184 7.3765C1.40416 6.05778 2.14009 4.91946 3.16495 3.98203C3.65226 3.4941 4.01868 2.85178 4.59279 2.46677C5.16257 2.08423 5.89664 1.99681 6.53772 1.73021C7.16763 1.46857 7.75787 1.06062 8.44234 0.924838C9.10697 0.792779 9.80695 0.990558 10.51 0.990558C11.8957 0.955838 13.2888 1.08232 14.5865 1.47973C15.2276 1.74633 15.6907 2.33533 16.2605 2.71786C16.8346 3.1035 17.4998 3.36266 17.9865 3.85059C18.9804 4.82151 19.8366 5.9654 20.4293 7.22709C20.8323 8.53465 21.0227 9.94824 21.0524 11.3457Z" fill="#DA9F83"/>
<path d="M13.4091 10.7733C14.1389 10.5346 14.9244 10.9351 15.1619 11.6661C15.3999 12.3971 15.0007 13.1832 14.2685 13.4213C13.5362 13.6594 11.8685 13.5459 11.6304 12.815C11.3929 12.0827 12.6763 11.0102 13.4091 10.7733ZM18.7225 10.3567C18.4869 10.6369 18.0684 10.6741 17.7882 10.4379C17.5079 10.2017 17.4713 9.7838 17.7069 9.50294C17.9432 9.22333 18.6456 8.84761 18.9259 9.08321C19.2067 9.31942 18.9587 10.0758 18.7225 10.3567ZM5.08261 6.01671C4.84701 6.29695 4.42851 6.33415 4.14828 6.09793C3.86804 5.86171 3.83146 5.44446 4.06706 5.16298C4.30328 4.88336 5.00573 4.50765 5.28597 4.74324C5.56682 4.97946 5.31883 5.73585 5.08261 6.01671ZM12.5802 4.84244C12.1165 4.54609 11.9794 3.92981 12.2764 3.46605C12.5734 3.00168 13.1897 2.8659 13.654 3.16226C14.1184 3.45923 14.8147 4.43325 14.5183 4.897C14.2207 5.362 13.0446 5.14004 12.5802 4.84244ZM7.66613 8.69695C7.34683 8.03604 7.62645 7.23934 8.28922 6.92129C8.952 6.60323 9.74683 6.88347 10.0649 7.54624C10.3829 8.20963 10.4877 9.80488 9.82495 10.1217C9.16093 10.4404 7.98294 9.36096 7.66613 8.69695ZM8.301 17.4383C8.67424 16.8964 9.41699 16.7587 9.95763 17.1332C10.4995 17.5083 10.6359 18.2498 10.2614 18.7917C9.88695 19.3336 8.69408 20.1228 8.15344 19.749C7.61095 19.3745 7.92653 17.9795 8.301 17.4383ZM14.509 17.1865C14.0831 16.9162 13.9578 16.3508 14.2306 15.9255C14.5022 15.5008 15.067 15.3762 15.4923 15.6483C15.9176 15.9199 16.5556 16.8127 16.2834 17.2368C16.0119 17.6633 14.9343 17.4593 14.509 17.1865ZM2.80599 11.6866C3.27842 11.1577 4.09 11.1124 4.61823 11.5855C5.14647 12.0592 5.19111 12.8695 4.71805 13.3971C4.245 13.9266 2.86303 14.6092 2.33541 14.1355C1.80594 13.6625 2.33231 12.2142 2.80599 11.6866Z" fill="#8A4B38"/>
</svg>
<h1 class="text-blue-500 font-bold ml-4 text-xl lg:text-3xl ">Learn more on our blog</h1>
  </div>
    </div>

  <div class="container">
<div class="blog-posts mt-6 justify-center lg:w-5/6 ml-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6">
<div class="blog-post shadow-2xl bg-white rounded-xl p-4">
<div class="blog-image">
<img src="~/assets/images/blog.png" class="w-full rounded-xl">
</div>
<div class="blog-title">
<h2 class="text-blue-500 text-lg font-bold leading-none mt-4">Sed laoreet laoreet vitae, egestas imperdiet.</h2>
</div>

</div>
<div class="blog-post shadow-2xl bg-white rounded-xl p-4">
<div class="blog-image">
<img src="~/assets/images/blog.png" class="w-full rounded-xl">
</div>
<div class="blog-title">
<h2 class="text-blue-500 text-lg font-bold leading-none mt-4">Sed laoreet laoreet vitae, egestas imperdiet.</h2>
</div>

</div>
<div class="blog-post shadow-2xl bg-white rounded-xl p-4">
<div class="blog-image">
<img src="~/assets/images/blog.png" class="w-full rounded-xl">
</div>
<div class="blog-title">
<h2 class="text-blue-500 text-lg font-bold leading-none mt-4">Sed laoreet laoreet vitae, egestas imperdiet.</h2>
</div>

</div>
</div>


  </div>


</div>



    </main>

  </div>











</template>
<style>
.carousel-cell{
  width:100%;
  height:auto;
}
.flickity-slider {
  transform: none !important;
}
.flickity-page-dots{
    width: auto;
    bottom: 5%;
    left: 4%;
}

.flickity-page-dots .dot{
  background: rgb(15, 114, 157);
}
.carousel-cell {
  left: 0 !important;
  opacity: 0;
  transform:translateX(-10px);
  transition: all 0.3s ease-in-out;
  z-index: -1;
}

.carousel-cell.is-selected {
  opacity: 1;
  transform:translateX(0px);
  z-index: 0
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<script>


export default {
 
   data() {
    return {
      flickityOptions: {
        initialIndex: 1,
        pageDots: true,
        wrapAround: true,
        fade: true,
        adaptiveHeight: true,
        prevNextButtons: false,
        lazyLoad: true


        
        // any options from Flickity can be used
      }
    }
  },
  async asyncData(context) {
        try {
      // Using the nuxtjs/http module here exposed via context.app
      const freshToday = await context.app.$axios.$get(
        `/api/freshToday/${context.app.i18n.locale}`
      )
      return { freshToday }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  },
    created(){
    console.log("recent prds",this.$store.getters['recently/getRecentProducts']);
  },
  computed:{
  recentlyProducts(){
    return this.$store.getters['recently/getRecentProducts'];
  }
  },

  methods:{
    illusoryId(id){
      return "product_"+id;

    },
    
  },
  mounted(){

}

  

}
</script>
