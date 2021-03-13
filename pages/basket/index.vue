<template>
    <div class="main py-8">
        <div class="container">

        <div class="header font-semibold">
            <p>Build a gift basket for your beloved ones, We’ll walk you through the process...</p>
        </div>
              <div class="basket-tabs mt-4">
                  <div @click="showTab1" v-bind:class="{active:tab1}" class=" cursor-pointer basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('basket')}}</p>
                  </div>
                  <div  @click="showTab2" v-bind:class="{active:tab2}" class=" cursor-pointer basket-tab mx-2 font-bold inline-block  text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('baskets.content')}}</p>
                  </div>
                <div @click="showTab3" v-bind:class="{active:tab3}" class="cursor-pointer basket-tab mx-2 font-bold inline-block text-white bg-green-500 py-2 px-6 rounded-r-full">
                      <p>{{$t('baskets.wrapping')}}</p>
                  </div>
                  
                  </div> 
                <hr class="my-6">
               </div>
        <transition-group name="slide-fade" mode="out-in">
<Tab1 key="tab1" ref="tab1" @basket-added="showTab2()" v-show="tab1"/>

<Tab2 :basket="basket" ref="tab2" @tab3="showTab3()"  key="tab2" v-show="tab2"/>
<Tab3 key="tab3" @add-to-cart="addToCart()" ref="tab3"  v-show="tab3"/>

        </transition-group>

    </div>


</template>


<script>
import Tab1 from '../../components/Baskets/Tab1'
import Tab2 from '../../components/Baskets/Tab2'
import Tab3 from '../../components/Baskets/Tab3'

export default {
    components:{  

    Tab1,
    Tab2,
    Tab3
    },
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
            tab3:false,
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
            this.tab3 = false;
         }
            
        },
              showTab3(){
            if(this.$refs.tab1.selectedBasket==''){
                this.$toast.show('Select A Basket First',{type:'error',duration:1500});
            }else if(!this.$refs.tab2.completed){
                this.$toast.show('Select Basket Products First',{type:'error',duration:1500});
            }else{
            this.tab1 = false;
            this.tab2 = false;
            this.tab3 = true;
            }

          
         },
        showTab1(){
            this.tab1 = true;
            this.tab2 = false;
            this.tab3 = false;

        },
        addToCart(){
            if(this.$refs.tab3.selectedWrapping){
    let productIds = [];
    let productImages = [];
    this.$refs.tab2.items.forEach(element => {
      if(element.productId!=false){
productIds.push(element.productId)
productImages.push(element.image);
      }     
    });

let add = {'basket_id':this.$refs.tab1.selectedBasket,'title':this.$refs.tab2.basket.name,'basketMax':this.$refs.tab2.basket.item_limit,'product_ids':productIds,'price':this.$refs.tab2.basketPrice,'images':productImages,'wrapping_id':this.$refs.tab3.selectedWrapping,'image':this.$refs.tab2.basketImage};

this.$store.dispatch('cart/addToCartBasket',add);
this.$toast.show("Added To Cart Successfully",{type:'success',duration:3000});

if(add != null){
  this.$refs.tab2.completed=false;
  this.$refs.tab2.selectedBasket = "";
  this.$refs.tab3.selectedWrapping = "";
  this.$refs.tab2.items = [];
  for (let index = 1; index <= this.basketMax; index++) {
    this.items.push({id:index,name:false,image:false,productId:false})
  }
    this.$router.push({path: this.localePath('/')});
}
console.log(add);
            }


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
    color:#Fff !important;
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