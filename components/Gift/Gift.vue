<template>
    
<div>


    <div class="gifts" v-if="gifts.length!=0">

      <!-- Order Starts -->
      <div v-for="gift in gifts" :key="gift.id" class="order-list bg-white border-2 mt-12 pb-6 shadow-lg border-gray-200">
        <div class="order-header bg-gray-100 border border-gray-300 px-4  font-semibold py-1 flex justify-between">
          <p class="order-number text-blue-500">
            {{$t('account.order')}} {{gift.id}}

          </p>
          <p class="text-gray-400">
            {{order.created_at}}
          </p>
        </div>

        <div class="order-top flex justify-between  px-4 py-4 items-center">
          <div class="start">
            <div class="recipient">
              <label class="text-gray-400 text-xs font-semibold">{{$t('account.recipient')}}</label>
              <p class="text-sm font-semibold">{{gift.first_name}} {{gift.last_name}}, {{order.phone}}</p>

            </div>

            <div class="address">
              <label class="text-gray-400 text-xs font-semibold">{{$t('cart.address')}}</label>
              <p class="text-sm font-semibold">{{gift.address}}</p>
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
            <p class="text-lg font-bold" v-if="gift.shipping_status == 0">{{$t('account.awaiting')}}</p>
            <p class="text-lg font-bold" v-if="gift.shipping_status == 1">{{$t('account.confirmed')}}</p>
            <p class="text-lg font-bold" v-if="gift.shipping_status == 2">{{$t('account.out')}}</p>
            <p class="text-lg font-bold" v-if="gift.shipping_status == 3">{{$t('account.delivered')}}</p>
            <p class="text-lg font-bold" v-if="gift.shipping_status == 4">{{$t('account.cancelled')}}</p>

          </div>

          <div class="total">
            <label class="text-gray-400 text-xs font-semibold" for="">{{$t('cart.total')}}</label>
            <p class="text-green-500 font-bold">₪ {{gift.total}}</p>
          </div>
        </div>

        <div class="status-bars px-2 flex mt-3 mb-4">

          <div class="bar bg-gray-300  h-4 w-full" :class="{'bg-gray-300':gift.shipping_status == 0,'bg-yellow-300':gift.shipping_status==1,'bg-yellow-500':gift.shipping_status==2,'bg-green-500':gift.shipping_status==3,'bg-red-500':order.shipping_status==4}"></div>
          <div class="bar bg-gray-300 mx-2 h-4 w-full" :class="{'bg-green-500':gift.shipping_status == 1,'bg-yellow-500':gift.shipping_status==2,'bg-green-500':gift.shipping_status==3,'bg-red-500':gift.shipping_status==4}"></div>
          <div class="bar bg-gray-300   h-4 w-full" :class="{'bg-green-500':gift.shipping_status == 1,'bg-yellow-500':gift.shipping_status==2,'bg-green-500':gift.shipping_status==3,'bg-red-500':gift.shipping_status==4}"></div>
        </div>

        <hr class="bg-gray-400">
        <div class="items px-4 mt-4">
          <p class="text-sm text-gray-400 ">
            {{gift.totalProducts}} {{$t('account.items')}}
          </p>
          <div v-swiper="swiperOption" :instanceName="gift.id" class="items-list mt-3 items-center">
            <div class="swiper-wrapper">
              <div class="swiper-slider" v-for="product in gift.products" :key="product.id">

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
              <div class="swiper-slider" v-for="basket in gift.baskets" :key="basket.id+5000">

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
      <div v-if="gifts.length!=0" class="flex flex-col items-center my-12">
        <div class="flex text-gray-700">
          <!-- <div class="flex h-12 font-medium rounded-full bg-gray-200">
            <div v-for="index in pagination.last_page" :key="index" @click="page(index)"
              :class="{'active-page':pagination.currentOrderPage == index}"
              class="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              {{index}}</div>
          </div> -->

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

<div class="empty-state mt-8" v-else>
<h1 class="text-red-500 font-bold text-2xl text-center">{{$t('account.no_gift')}}</h1>
</div>

</div>

</template>


<script>
export default {
data(){
    return {
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
      gifts:[],
      pagination:{
          currentOrderPage:1,
          from:1,
          last_page:1
      },


    }


},
 async fetch(){

  try{

      const gifts = await this.$axios.$get(`/api/auth/giftsall/${this.$i18n.locale}?page=${this.pagination.currentGiftPage}`)
      this.gifts = gifts.data;
      this.last_page = gifts.last_page;

  }catch(e){
      this.$nuxt.error(e);
  }


 }


}
</script>