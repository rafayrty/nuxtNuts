    
    <script>
    export default {
        data(){
            return{
                selectedBasket:false,
                baskets:[]
            }
        },
        watch:{
          selectedBasket(){
              this.$toast.show('Basket Selected Successfully',{type:'success',duration:3000})
         this.$emit('basket-added');
}
        },
         async fetch() {
      this.baskets = await this.$axios.$get(`/api/baskets/${this.$i18n.locale}`)
    }
    }
    </script>
    <style scoped>
    .radio-btn{
    height: 30px;
    width: 100%;
    cursor:pointer;
    }
    </style>
    <template>

<div class="tab1 my-24">
<div class="container">

<h1 class="font-bold text-blue-500 text-center text-2xl">{{$t('baskets.preferred')}}</h1>
<p class="text-red-500 text-center font-semibold">{{$t('baskets.look')}}</p>

<div class="wrappings my-4 mt-16  grid w-7/12 lg:w-full mx-auto gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">


  <div v-for="basket in baskets" :key="basket.id" class="basket relative border-gray-500 hover:shadow-2xl transition duration-300 border pt-6 my-6 lg:py-6 lg:pb-12 rounded-xl" >
<input type="radio" v-model="selectedBasket" :value="basket.basket_id"  name="basketSelected" class="radio-btn">

  <img :src="basket.image" alt="">
 <div class="basket-info bg-green-500 rounded-full w-full lg:w-9/12 mx-auto">

   <div class="basket-info-header rounded-xl text-white" style="background:#F2994A;">
       <div class="top flex px-4 text-sm lg:text-md pt-2 justify-between items-center">
           <p>{{$t('baskets.max')}}</p>
           <p class="font-semibold lg:text-lg">{{basket.item_limit}}</p>

       </div>
           <div class="bottom flex text-sm lg:text-md mt-2 lg:mt-0 px-4 pb-2 justify-between items-center">
           <p>{{$t('baskets.basket_price')}}</p>
           <p class="font-bold lg:text-lg">₪ {{basket.price}}</p>

       </div>
   
   <div class="basket-name  bg-green-500 rounded-b-lg text-center py-1 text-bold">
       {{basket.basket_name}}
   </div>

   </div>

  </div>
  </div>
 



 
</div>

</div>



    </div>
        
    </template>
    
