<template>
    <div class="main py-8">
        <div class="container">

        <div class="header font-semibold">
            <p>Build a gift basket for your beloved ones, We’ll walk you through the process...</p>
        </div>
              <div class="basket-tabs mt-4">
                  <div @click="showTab1" v-bind:class="{active:tab1}" class=" cursor-pointer basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('baskets.basket')}}</p>
                  </div>
                  <div  @click="showTab2" v-bind:class="{active:tab2}" class=" cursor-pointer basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('baskets.content')}}</p>
                  </div>
                <div class="basket-tab mx-2 font-bold inline-block text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('baskets.wrapping')}}</p>
                  </div>
                  
                  </div> 
                <hr class="my-6">
               </div>
        <transition-group name="slide-fade" mode="out-in">
<Tab1 key="tab1" ref="tab1" @basket-added="showTab2()" v-show="tab1"/>

<Tab2 :basket="basket"  key="tab2" v-show="tab2"/>
        </transition-group>

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
            tab1:true,
            tab2:false,
            prevHeight: 0,
            basket:{}


        }
    },
    methods:{
        showTab2(){
            if(this.$refs.tab1.selectedBasket==''){
                this.$toast.show('Select A Basket First',{type:'error',duration:1500});
            }else{

            this.basket = this.findElement(this.$refs.tab1.baskets, "id", this.$refs.tab1.selectedBasket);
            this.tab1 = false;
            this.tab2 = true;
         }
            
        },
        showTab1(){
            this.tab1 = true;
            this.tab2 = false;
        },
        findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];

  // will return undefined if not found; you could return a default instead
}
          
    }
}
</script>
<style>
.basket-tab{
    opacity:.6;
}
.basket-tab.active{
    opacity:1;
}
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