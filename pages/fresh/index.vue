<template>
    <div class="main">
 
<div class="container">


<div class="display-products mt-6 lg:mt-8 mb-24">
  <!-- Start Type -->
<div class="type flex mb-4 flex-col lg:flex-row justify-between lg:items-center">

  <div class="start">

    <h1 class="text-lg flex items-center">
      <span class="hidden lg:block">
        {{freshToday.total}} {{$t('sorting.results')}}
      </span>

      <span class="lg:hidden">
        {{freshToday.total}} {{$t('sorting.results_mob')}}
      </span>



      <span class="font-bold ltr:ml-2 rtl:mr-2">
        {{$t('fresh')}}
      </span>
    </h1>

  </div>

  <div class="end  flex items-center mt-4">

    <div class="form-group">
      <select v-model="type" @change="paginate($route.query.page)" name="type" id="type"
        class="py-2 cursor-pointer text-gray-700 border-green-500 border-2 font-bold focus:ring-green-500 focus:ring-offset-2 focus:ring-2">

        <option  value="1">{{$t('sorting.popularity')}}</option>
        <option value="2">{{$t('sorting.latest')}}</option>
        <option value="3">{{$t('sorting.low')}}</option>
        <option value="4">{{$t('sorting.high')}}</option>

      </select>

    </div>

    <p class="text-gray-400 ltr:ml-2 rtl:mr-2 font-semibold text-md">{{$t('sorting.sort')}}</p>






  </div>


</div>


<!-- End Type -->

          <div class="products-container">


            <div class="product" v-for="fresh in freshToday.data" :key="fresh.id">

              <div class="product-image">
                <nuxt-link :to="localePath(`/product/${fresh.id}`)">
                  <img :src="fresh.image" v-shared-element:[illusoryId(fresh.id)] alt="">
                  <span class="gm" v-if="fresh.kind==0"> 100 {{$t('gm')}}</span>
                </nuxt-link>

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
                  <div class="addToCart">
                    <nuxt-link :to="localePath(`/product/${fresh.id}`)">

                      <button>


                        <svg width="29" height="15" viewBox="0 0 29 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.0767 13.2558C17.0767 14.2191 16.2679 15 15.2702 15C14.2724 15 13.4636 14.2191 13.4636 13.2558C13.4636 12.2925 14.2724 11.5116 15.2702 11.5116C16.2679 11.5116 17.0767 12.2925 17.0767 13.2558Z"
                            fill="white" />
                          <path
                            d="M23.5803 13.2558C23.5803 14.2191 22.7715 15 21.7738 15C20.776 15 19.9672 14.2191 19.9672 13.2558C19.9672 12.2925 20.776 11.5116 21.7738 11.5116C22.7715 11.5116 23.5803 12.2925 23.5803 13.2558Z"
                            fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.103 0.486075C11.3018 0.183403 11.6472 0 12.0184 0H19.9672C20.5659 0 21.0511 0.468539 21.0511 1.04651C21.0511 1.62448 20.5659 2.09302 19.9672 2.09302H13.7277L16.1124 6.97674H21.2671L24.3806 0.600259C24.5596 0.233819 24.9415 0 25.3611 0H27.9161C28.5147 0 29 0.468539 29 1.04651C29 1.62448 28.5147 2.09302 27.9161 2.09302H26.0484L22.9349 8.46951C22.7559 8.83595 22.374 9.06977 21.9544 9.06977H15.425C15.0054 9.06977 14.6235 8.83595 14.4446 8.46951L11.0379 1.49276C10.8796 1.16859 10.9042 0.788747 11.103 0.486075Z"
                            fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.7541 2.34375C5.54178 2.34375 6.18033 2.97335 6.18033 3.75V5.625H8.08197C8.86965 5.625 9.5082 6.2546 9.5082 7.03125C9.5082 7.8079 8.86965 8.4375 8.08197 8.4375H6.18033V10.3125C6.18033 11.0892 5.54178 11.7188 4.7541 11.7188C3.96641 11.7188 3.32787 11.0892 3.32787 10.3125V8.4375H1.42623C0.638545 8.4375 0 7.8079 0 7.03125C0 6.2546 0.638545 5.625 1.42623 5.625H3.32787V3.75C3.32787 2.97335 3.96641 2.34375 4.7541 2.34375Z"
                            fill="white" />
                        </svg>


                      </button>
                    </nuxt-link>

                  </div>


                </div>


              </div>



            </div>


          </div>

      <!-- Pagination Begins -->
      <div v-if="freshToday.length!=0 && pagination" class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
          <div class="flex flex-wrap font-medium lg:rounded-full bg-gray-200">
          <div style="padding:.56rem 0;" :class="{'active-page':$route.query.page == index}" v-for="index in pagination.last_page" :key="index" @click="paginate(index)"
              class="w-12 md:flex block justify-center items-center  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
             <span class="block text-center"> {{index}}</span>
              </div>

          </div>

        </div>
      </div>
      <!-- Pagination Ends -->


        </div>


</div>



    </div>
</template>
<script>
export default {
     async asyncData(context) {
       let page = context.query.page ?? 1;
       let type = context.query.type ?? 1;
       //  context.error({statusCode: 404, message: 'Page not found'});
       try {
         const freshToday = await context.app.$axios.$get(`/api/AllfreshToday/${type}/${context.app.i18n.locale}/?page=${page}`)
         console.log(freshToday);
         return {
           freshToday
         }
       } catch (e) {
         context.error(e) // Show the nuxt error page with the thrown error
       }

     },
    data(){
       return{
         pagination:{
           currentPage:1,
           from:1,
           last_page:1
         },
         type:"1",
         
       }
     },
       watch: {
   async $route(to, from) {
      await this.$nuxt.refresh()
      // react to route changes...
    }
  },
     created(){
       this.pagination.last_page = this.freshToday.last_page;
     },
     methods:{
            illusoryId(id){
      return "product_"+id;
    },
    paginate(index){
      //Passing Page index through ?page=1

        this.$router.push(this.localePath({path:`/fresh?page=${index}&type=${this.type}`}));
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
     }

     },

}
</script>