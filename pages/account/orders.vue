<template>
  <div class="main mt-4  pb-12">

    <div class="top-bar flex text-xl font-bold">
      <p class="text-gray-400 active">{{$t('orders')}}</p>
      <p class="mx-4 text-gray-400">|</p>
      <p class="text-gray-400 ">{{$t('gifts')}}</p>
    </div>

    <div class="orders">

      <!-- Order Starts -->
      <div v-for="order in orders" :key="order.id" class="order-list bg-white border-2 mt-12 pb-6 shadow-lg border-gray-200">
        <div class="order-header bg-gray-100 border border-gray-300 px-4  font-semibold py-1 flex justify-between">
          <p class="order-number text-blue-500">
            Order: {{order.id}}

          </p>
          <p class="text-gray-400">
            {{order.created_at}}
          </p>
        </div>

        <div class="order-top flex justify-between  px-4 py-4 items-center">
          <div class="start">
            <div class="recipient">
              <label class="text-gray-400 text-xs font-semibold">Recipient</label>
              <p class="text-sm font-semibold">{{order.first_name}} {{order.last_name}}, {{order.phone}}</p>

            </div>

            <div class="address">
              <label class="text-gray-400 text-xs font-semibold">Address</label>
              <p class="text-sm font-semibold">{{order.address}}</p>
            </div>
          </div>
          <div class="end">
            <div class="invoice">
              <button
                class="bg-white border-2 border-gray-400 rounded-lg font-bold text-gray-400 px-4 py-1 hover:bg-gray-300 hover:text-black transition duration-300 cursor-pointer text-md">Invoice</button>
            </div>

            <div class="cancel mt-4">
              <button
                class="bg-white border-2 border-red-600 rounded-lg font-bold text-red-600 hover:bg-red-600 hover:text-white transition px-4 py-1 text-md">Cancel</button>
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
            <p class="text-green-500 font-bold">₪ {{order.total}}</p>
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
            {{order.totalProducts}} Items
          </p>
          <div v-swiper="swiperOption" :instanceName="order.id" class="items-list mt-3 items-center">
            <div class="swiper-wrapper">
              <div class="swiper-slider" v-for="product in order.products" :key="product.id">

                <div class="item  flex">
                  <div class="item-image">
                    <img :src="product.image" class="w-20 rounded-lg border  border-gray-300" alt="">
                  </div>
                  <div class="item-text ltr:ml-4 ltr:mr-0 mr-4 my-2 flex flex-col justify-between">
                    <p>{{product.name}}</p>
                    <p class="quantity text-blue-500 font-bold">{{product.amount}}</p>
                  </div>
                </div>
              </div>
              
              <!-- Loop For Baskets --> 
              <div class="swiper-slider" v-for="basket in order.baskets" :key="basket.id+5000">

                <div class="item  flex">
                  <div class="item-image">
                    <img :src="basket.image" class="w-20 rounded-lg border  border-gray-300" alt="">
                  </div>
                  <div class="item-text ltr:ml-4 ltr:mr-0 mr-4 my-2 flex flex-col justify-between">
                    <p>{{basket.name}}</p>
                    <p class="quantity text-blue-500 font-bold">{{basket.total_items}}</p>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>


      </div>

      <!-- Order Ends -->

      <!-- Pagination Begins -->
      <div class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
          <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div v-for="index in pagination.last_page" :key="index" @click="page(index)"
              :class="{'active-page':pagination.currentOrderPage == index}"
              class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              {{index}}</div>
          </div>

        </div>
      </div>
      <!-- Pagination Ends -->

    </div>


  </div>

</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive
  },
  layout: 'account',
  transition: {
    name: 'main'
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      orders:[],
      pagination:{
          currentOrderPage:1,
          from:1,
          last_page:1
      },

    }
  },
  async fetch() {
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const orders = await this.$axios.$get(`/api/auth/ordersall/${this.$i18n.locale}?page=${this.pagination.currentOrderPage}`)
      this.orders = orders.data;
      this.pagination.last_page = orders.last_page;

    } catch (e) {
      this.$nuxt.error(e) // Show the nuxt error page with the thrown error
    }

  },
  methods:{
      page(index){
          this.pagination.currentOrderPage = index;
          this.$fetch();

      }
  }



}
</script>
<style lang="scss">
.active{
    @apply text-green-500 border-b-4 pb-2 border-green-500;

}
.active-page{
    @apply text-white text-xl bg-green-600 font-bold scale-125
}
</style>