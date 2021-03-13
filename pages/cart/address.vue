<template>
    
    <div class="main mt-8  pb-12">
<div class="address mt-4 lg:flex justify-between items-center">
    <div>
    <h1 class="text-2xl font-bold">{{$t('cart.shipping_address')}}

    </h1>
    <p class="text-md font-semibold">{{$t('cart.choose_address')}}</p>
    </div>


    <nuxt-link :to="localePath('/account/address/new')" class="inline-block mt-8 lg:mt-0 font-semibold bg-green-500 text-white border border-green-500 py-2 px-5 hover:bg-white hover:text-green-500 transition duration-300">{{$t('account.new_address')}}</nuxt-link>
</div>

<div class="gift mt-4">
    
<h4 class="text-lg font-bold text-gray-500">{{$t('cart.or')}}</h4>
<transition name="slide-fade" mode="out-in">
<nuxt-link key="0" v-if="!giftAddress" :to="localePath('/cart/gift')">
<button class="mt-4 bg-yellow-500 text-white py-2 px-4 cursor-pointer border font-semibold border-yellow-500 hover:bg-white hover:text-yellow-500 transition duration-200">{{$t('cart.gift')}}</button>
</nuxt-link>

<!-- <button @click="useAddress()" v-if="giftAddress" key="1"  class="group font-bold text-lg transition duration-300 relative flex items-center justify-center py-3 px-10 border border-transparent rounded-md text-white submit-login bg-green-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">

<svg class="h-5 ml-2 ltr:mr-2 w-5 text-white-500 group-hover:text-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

{{$t('cart.user_address')}} 
  </button> -->


</transition>
</div>
<transition name="slide-fade" mode="out-in">
<div class="addresses-list mt-8" key="0" v-if="!giftAddress">
  <transition name="slide-fade" mode="out-in">
      <transition-group class="relative" v-if="addresses.length!=0" name="list"  tag="ul">

<li class="address-list bg-white shadow-lg  transition duration-600"  v-for="(address,index) in addresses" :key="address.id" :class="{'selected-address':selectedAddress == address.id}">
<div class="list-header shadow-md  bg-gray-100 text-blue-500 font-semibold py-1 px-4 lg:px-8 font-xs">
    Address {{index+1}}
</div>
<div class="full-address relative flex justify-between items-center py-5 px-4 lg:px-8">
    <p>
        {{address.first_name}} {{address.last_name}}, {{address.phone}}<br/>
        {{address.address}}
    </p>
    
<input type="radio" class="absolute cursor-pointer opacity-0 w-full h-full" @change="updatePrice()" v-model="selectedAddress" :value="address.id" name="" id="">
    <div class="actions flex items-center z-10">

        <div class="edit">
<a href="javascript:void(0)" @click="editAddress(address.id)">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="26" height="26" rx="5.5" fill="white" stroke="#79C143"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.15384 7.69232C8.90903 7.69232 8.67424 7.78957 8.50113 7.96268C8.32802 8.13579 8.23077 8.37058 8.23077 8.6154V17.8462C8.23077 18.091 8.32802 18.3258 8.50113 18.4989C8.67424 18.672 8.90903 18.7692 9.15384 18.7692H18.3846C18.5058 18.7692 18.6258 18.7454 18.7378 18.699C18.8498 18.6526 18.9516 18.5846 19.0373 18.4989C19.123 18.4132 19.191 18.3114 19.2374 18.1994C19.2838 18.0874 19.3077 17.9674 19.3077 17.8462V10.7692C19.3077 10.4294 19.5832 10.1539 19.923 10.1539C20.2629 10.1539 20.5384 10.4294 20.5384 10.7692V17.8462C20.5384 18.129 20.4827 18.4091 20.3745 18.6704C20.2662 18.9317 20.1076 19.1691 19.9076 19.3692C19.7076 19.5692 19.4701 19.7278 19.2088 19.836C18.9475 19.9443 18.6674 20 18.3846 20H9.15384C8.58261 20 8.03477 19.7731 7.63085 19.3692C7.22692 18.9652 7 18.4174 7 17.8462V8.6154C7 8.04416 7.22692 7.49632 7.63085 7.0924C8.03477 6.68848 8.58261 6.46155 9.15384 6.46155H15.5954C15.9352 6.46155 16.2107 6.73707 16.2107 7.07694C16.2107 7.41681 15.9352 7.69232 15.5954 7.69232H9.15384Z" fill="#79C143"/>
<path d="M22.8438 4.20193C22.7876 4.14018 22.7195 4.09046 22.6435 4.05579C22.5676 4.02111 22.4854 4.00219 22.4019 4.00018C22.3184 3.99817 22.2354 4.0131 22.1579 4.04407C22.0803 4.07505 22.0099 4.12142 21.9507 4.1804L21.475 4.65386C21.4173 4.71155 21.3849 4.78979 21.3849 4.87136C21.3849 4.95293 21.4173 5.03116 21.475 5.08886L21.9111 5.52424C21.9397 5.55296 21.9737 5.57576 22.0111 5.59131C22.0485 5.60686 22.0887 5.61487 22.1292 5.61487C22.1697 5.61487 22.2099 5.60686 22.2473 5.59131C22.2847 5.57576 22.3187 5.55296 22.3473 5.52424L22.8111 5.0627C23.0457 4.82847 23.0677 4.44693 22.8438 4.20193Z" fill="#79C143"/>
<path d="M20.5131 5.61541L13.57 12.5462C13.5279 12.5881 13.4973 12.6401 13.4811 12.6973L13.16 13.6539C13.1523 13.6798 13.1518 13.7074 13.1584 13.7336C13.1651 13.7598 13.1787 13.7838 13.1978 13.8029C13.217 13.8221 13.2409 13.8357 13.2672 13.8424C13.2934 13.849 13.321 13.8485 13.3469 13.8408L14.3027 13.5196C14.3599 13.5035 14.4119 13.4729 14.4538 13.4308L21.3846 6.48694C21.4487 6.42214 21.4847 6.33465 21.4847 6.24348C21.4847 6.15232 21.4487 6.06483 21.3846 6.00002L21.0019 5.61541C20.937 5.5507 20.8491 5.51436 20.7575 5.51436C20.6658 5.51436 20.5779 5.5507 20.5131 5.61541Z" fill="#79C143"/>
</svg>
</a>

        </div>
        <div class="delete mr-4 ltr:ml-4">
<a href="javascript:void(0)" @click="deleteAddress(address.id,index)">
    
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="26" height="26" rx="5.5" fill="white" stroke="#EB5757"/>
<path d="M14.6667 9.42857C14.6667 9.03408 14.3682 8.71428 14 8.71428C13.6318 8.71428 13.3333 9.03408 13.3333 9.42857V19.4286C13.3333 19.8231 13.6318 20.1429 14 20.1429C14.3682 20.1429 14.6667 19.8231 14.6667 19.4286V9.42857Z" fill="#EB5757"/>
<path d="M10.9762 8.71475C11.3442 8.70067 11.6531 9.00885 11.6663 9.40309L11.9996 19.4031C12.0127 19.7973 11.7251 20.1283 11.3571 20.1424C10.9892 20.1565 10.6802 19.8483 10.6671 19.4541L10.3338 9.45407C10.3206 9.05984 10.6083 8.72883 10.9762 8.71475Z" fill="#EB5757"/>
<path d="M17.6662 9.45407C17.6794 9.05984 17.3918 8.72883 17.0238 8.71475C16.6558 8.70067 16.3469 9.00885 16.3338 9.40309L16.0004 19.4031C15.9873 19.7973 16.2749 20.1283 16.6429 20.1424C17.0108 20.1565 17.3198 19.8483 17.3329 19.4541L17.6662 9.45407Z" fill="#EB5757"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 4.78663V5.85714H8.00588C8.00239 5.85711 7.9989 5.85711 7.9954 5.85714H6.66667C6.29848 5.85714 6 6.17694 6 6.57143C6 6.96592 6.29848 7.28571 6.66667 7.28571H7.3737L8.16776 20.8981C8.22567 22.0663 9.04798 23 10.1667 23H17.8333C18.9626 23 19.766 22.058 19.8321 20.9008L19.8321 20.9007L20.6263 7.28571H21.3333C21.7015 7.28571 22 6.96592 22 6.57143C22 6.17694 21.7015 5.85714 21.3333 5.85714H20.0046C20.0011 5.85711 19.9976 5.85711 19.9941 5.85714H17.3333V4.78678C17.3339 4.55216 17.2911 4.31973 17.2076 4.10283C17.124 3.88562 17.0011 3.68826 16.846 3.52211C16.691 3.35596 16.5068 3.22429 16.304 3.13469C16.1016 3.04524 15.8848 2.99947 15.6658 3H12.3342C12.1153 2.99947 11.8984 3.04524 11.696 3.13469C11.4932 3.2243 11.309 3.35596 11.154 3.52211C10.9989 3.68826 10.876 3.88562 10.7924 4.10283C10.7089 4.31969 10.6662 4.55206 10.6667 4.78663ZM12.3314 4.42857C12.2878 4.42844 12.2447 4.43753 12.2044 4.45532C12.1642 4.47312 12.1276 4.49926 12.0968 4.53226C12.066 4.56526 12.0416 4.60445 12.025 4.64759C12.0084 4.69073 11.9999 4.73696 12 4.78363L12 4.78572V5.85714H16V4.78572L16 4.78363C16.0001 4.73696 15.9917 4.69073 15.975 4.64759C15.9584 4.60445 15.934 4.56526 15.9032 4.53226C15.8724 4.49927 15.8359 4.47312 15.7956 4.45532C15.7553 4.43753 15.7122 4.42844 15.6686 4.42857L15.6667 4.42858H12.3333L12.3314 4.42857ZM11.3333 7.28572L11.331 7.28571H8.70964L9.4987 20.8126C9.49886 20.8152 9.499 20.8179 9.49912 20.8205C9.52218 21.3012 9.82006 21.5714 10.1667 21.5714H17.8333C18.1765 21.5714 18.4731 21.3072 18.5012 20.8136L19.2904 7.28571H16.669L16.6667 7.28572L16.6643 7.28571H11.3357L11.3333 7.28572Z" fill="#EB5757"/>
</svg>

</a>
        </div>
    </div>
</div>


</li>
      </transition-group>
<div key="1" class="empty-state mt-8" v-if="addresses.length==0">
  <h1 class="text-red-500 font-bold text-2xl text-center">{{$t('account.no_addresses')}}</h1>
</div>
</transition>

</div>


<div class="gift-address mt-8 flex justify-center" key="1" v-else>

<div class="address py-4 w-full lg:w-auto shadow-md cursor-pointer hover:shadow-none transition duration-300 relative inline-block bg-yellow-200">
<a href="#" @click.prevent="useAddress" class="close text-white bg-red-600 absolute flex items-center p-1 hover:bg-red-800 hover:shadow-md transition duration-300 justify-center text-2xl rounded-full h-8 w-8 cursor-pointer">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
    </a>


    
<h1 class="text-2xl px-6 lg:px-12  font-bold">Gift Address</h1>
<hr class="mt-4 bg-black text-black border-black">
<p class="mt-4  px-6 lg:px-12 ">
  {{giftAddress.first_name}}, {{giftAddress.last_name}}<br/>
  {{giftAddress.address}}, {{giftAddress.phone}}
</p>

</div>

</div>

</transition>
</div>




</template>
<style>
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(-50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
  width:100%;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
.address-list:not(:first-child){
    margin-top:2.2rem;
}

</style>
<style lang="scss" scoped>
.selected-address{
    @apply bg-green-500 text-white;
}
.close{
  top:-9%;
  left:-3%;
}

</style>
<script>
export default {
    layout:'cart',
   transition:{
        name:'main'
    },
    middleware:'authenticated',
    data(){

    },
    computed:{
    selectedAddress: {
    get () {
           return this.$store.getters['cart/address'];
    },
    set (value) {
      this.$store.commit('cart/ADD_ADDRESS', value)
    }
  },
       totalPrice(){
           return this.$store.getters['cart/totalPrice'];

        },

        giftAddress(){
          return this.$store.getters['cart/getGift'];
        },

    },
    async asyncData(context){
        try {
      // Using the nuxtjs/http module here exposed via context.app
      const addresses = await context.app.$axios.$get(
        `/api/auth/addresses`
      )
      console.log(addresses);
      return { addresses }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }

   

    },
    methods:{
        
     updatePrice(){
       let loader = this.$loading.show();
        this.$axios.$get(`/api/address/shipping_price/${this.selectedAddress}/${this.totalPrice}`).then(res=>{
        this.$store.dispatch('cart/addShipping',res.price);
        loader.hide();
            }).catch(e=>{
                loader.hide();
                this.$toast.show('An Error Occurred',{type:'error',duration:5000});
                console.log(e);
            });
        },
        editAddress(id){
          this.$router.push(this.localePath({path:`/account/address/edit/${id}`}));
        },
        useAddress(){
          this.$store.dispatch('cart/resetShipping');
        },
      async deleteAddress(id, index) {
      this.$confirm({
          auth: false,
          title: 'Are you sure?',
          message: `You Want To Delete This Address`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
        callback: (confirm) =>{
          if(confirm){
            this.addresses.splice(index, 1);
          }
        }
       
      })
          //  await this.$axios.$get(`/api/auth/address/delete/${id}`);
       }
    }

}
</script>