<template>
  <div class="main mt-4  pb-12">

    <div class="top-bar flex text-xl font-bold">
      <p class="text-gray-400 cursor-pointer" @click="currentTab = 'order'" :class="{'active':currentTab == 'order'}">{{$t('orders')}}</p>
      <p class="mx-4 text-gray-400">|</p>
      <p class="text-gray-400 cursor-pointer" @click="currentTab = 'gift'" :class="{'active':currentTab == 'gift'}">{{$t('gifts')}}</p>
    </div>
<transition name="slide-fade" key="0" mode="out-in">
    <div v-if="currentTab=='order' && orders.length!=0" class="orders">

      <!-- Order Starts -->
      <div v-for="order in orders" :key="order.id" class="order-list bg-white border-2 mt-12 pb-6 shadow-lg border-gray-200">
        <div class="order-header bg-gray-100 border border-gray-300 px-4  font-semibold py-1 flex justify-between">
          <p class="order-number text-blue-500">
            {{$t('account.order')}} {{order.id}}

          </p>
          <p class="text-gray-400">
            {{order.created_at}}
          </p>
        </div>

        <div class="order-top flex justify-between  px-4 py-4 items-center">
          <div class="start">
            <div class="recipient">
              <label class="text-gray-400 text-xs font-semibold">{{$t('account.recipient')}}</label>
              <p class="text-sm font-semibold">{{order.first_name}} {{order.last_name}}, {{order.phone}}</p>

            </div>

            <div class="address">
              <label class="text-gray-400 text-xs font-semibold">{{$t('cart.address')}}</label>
              <p class="text-sm font-semibold">{{order.address}}</p>
            </div>
          </div>
          <div class="end flex flex-col items-center">
            <div class="invoice">
              <button
                class="bg-white border-2 border-gray-400 rounded-lg font-bold text-gray-400 px-4 py-1 hover:bg-gray-300 hover:text-black transition duration-300 cursor-pointer text-md">{{$t('account.invoice')}}</button>
            </div>

            <div class="cancel mt-4">
              <button
                class="bg-white border-2 border-red-600 rounded-lg font-bold text-red-600 hover:bg-red-600 hover:text-white transition px-4 py-1 text-md">{{$t('account.cancel')}}</button>
            </div>

          </div>

        </div>
        <div class="order-price-status flex px-4 items-center justify-between">

          <div class="status">
            <label class="text-gray-400 text-xs font-semibold" for="">{{$t('account.status')}}</label>
            <p class="text-lg font-bold" v-if="order.shipping_status == 0">{{$t('account.awaiting')}}</p>
            <p class="text-lg font-bold" v-if="order.shipping_status == 1">{{$t('account.confirmed')}}</p>
            <p class="text-lg font-bold" v-if="order.shipping_status == 2">{{$t('account.out')}}</p>
            <p class="text-lg font-bold" v-if="order.shipping_status == 3">{{$t('account.delivered')}}</p>
            <p class="text-lg font-bold" v-if="order.shipping_status == 4">{{$t('account.cancelled')}}</p>

          </div>

          <div class="total">
            <label class="text-gray-400 text-xs font-semibold" for="">{{$t('cart.total')}}</label>
            <p class="text-green-500 font-bold">₪ {{order.total}}</p>
          </div>
        </div>

        <div class="status-bars px-2 flex mt-3 mb-4">

          <div class="bar bg-gray-300  h-4 w-full" :class="{'bg-gray-300':order.shipping_status == 0,'bg-yellow-300':order.shipping_status==1,'bg-yellow-500':order.shipping_status==2,'bg-green-500':order.shipping_status==3,'bg-red-500':order.shipping_status==4}"></div>
          <div class="bar bg-gray-300 mx-2 h-4 w-full" :class="{'bg-green-500':order.shipping_status == 1,'bg-yellow-500':order.shipping_status==2,'bg-green-500':order.shipping_status==3,'bg-red-500':order.shipping_status==4}"></div>
          <div class="bar bg-gray-300   h-4 w-full" :class="{'bg-green-500':order.shipping_status == 1,'bg-yellow-500':order.shipping_status==2,'bg-green-500':order.shipping_status==3,'bg-red-500':order.shipping_status==4}"></div>
        </div>

        <hr class="bg-gray-400">
        <div class="items px-4 mt-4">
          <p class="text-sm text-gray-400 ">
            {{order.totalProducts}} {{$t('account.items')}}
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
      <div v-if="orders.length!=0" class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
      <div class="flex flex-wrap font-medium lg:rounded-full bg-gray-200">
          <div style="padding:.56rem 0;" :class="{'active-page':pagination.currentOrderPage == index}" v-for="index in pagination.last_page" :key="index" @click="page(index)"
              class="w-12 md:flex block justify-center items-center  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
             <span class="block text-center"> {{index}}</span>
              </div>

          </div>

        </div>
      </div>
      <!-- Pagination Ends -->




    </div>

<div class="empty-state mt-8"  v-if="currentTab=='order' && orders.length==0">
<h1 class="text-red-500 font-bold text-2xl text-center">{{$t('account.no_gift')}}</h1>
</div>


  <Gift v-if="currentTab=='gift'" key="1"/>
</transition>
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
      currentTab:'order',
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
      const orders = await this.$axios.$get(`/api/auth/ordersall/${this.$i18n.locale}?page=${this.pagination.currentOrderPage}`)
      this.orders = orders.data;
      this.pagination.last_page = orders.last_page;

    } catch (e) {
      this.$nuxt.error(e) // Show the nuxt error page with the thrown error
    }

  },
  created(){
console.log(this.currentTab);

  },
  methods:{
  
    changeTab(tab){
      this.currentOrderPage = tab;
    },
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