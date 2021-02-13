    
    <script>
    import gsap from 'gsap';
    export default {
        props:{
            basket:Object,
        },
        data(){
            return{
                basketProducts:[],
                search:'',
                id:'',
                items:[],
                remaining:0,
                basketMax:0,
                basketMin:0,
                basketName:0,
                basketPrice:0,
                basketImage:'',
                totalSelected:0,
                completed:false
            }
        },
         watch:{
              basket(){
 this.remaining = this.basket.item_limit;
  this.basketMax = this.basket.item_limit;
  if(this.basket.basket_name){
    this.items = [];
    
    // this.basketService.totalCount(6);
      for (let index = 1; index <= this.basketMax; index++) {
        this.items.push({id:index,name:false,image:false,productId:false})
      }
  }

  this.basketMin = this.basket.minimum;
  this.basketName = this.basket.name;
  this.basketPrice = this.basket.price;
  this.basketImage = this.basket.image;
              },
            },
        computed:{

         resultQuery(){
      if(this.search!=''){
      return this.basketProducts.filter((item)=>{
        return this.search.toLowerCase().split(' ').every(v => item.descriptions[0].name.toLowerCase().includes(v))
      })
      }else{
        return this.basketProducts;
      }
    }
        },
        created(){

        },
         async fetch() {
             
      this.basketProducts = await this.$axios.$get(`/api/baskets/products/${this.$i18n.locale}/${this.id}`)
    },
    methods:{
        illusoryId(id){
            return 'product_id'+id;
        },findEmpty(item) {
  return item.name == false;
},
       findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];

  // will return undefined if not found; you could return a default instead
},
addToBasket(e,name,image,id){

let box = document.querySelector('.move');
setTimeout(() => {
    box.children[0].style.display = "none";;
}, 600);
let imgElement = e.target.parentElement.parentElement.children[0].children[1];

let box_X = box.getBoundingClientRect().x;
let box_Y = box.getBoundingClientRect().y;
let img_X = imgElement.getBoundingClientRect().x;
let img_Y = imgElement.getBoundingClientRect().y;
const invert = {
    x: box_X - img_X,
    y:box_Y - img_Y
}
console.log(invert);
imgElement.style.opacity = "1";
imgElement.style.transform = `translate(${invert.x}px,${invert.y}px)`
// gsap.to(imgElement,{x:invert.x,y:invert.y,duration:1000,ease:'power3.easeIn'})

// alert("Clicked");
if(this.findElement(this.items,'productId',id)){
//     swal("{{trans('messages.warning')}}", "{{trans('messages.product_exists')}}",{
//   button: "{{trans('front.ok')}}"

//     });
this.$toast.show(this.$i18n.t('messages.product_exists'),{type:'error',duration:1500});
}else{

let item = this.items.find(this.findEmpty);
if(item){
        
this.$toast.show(this.$i18n.t('messages.product_added'),{type:'success',duration:3000});

  this.totalSelected = this.totalSelected + 1;
if(item.id==this.basketMin){
  this.completed = true;
}
setTimeout(() => {
   item.name = name;
item.image = image;
item.productId = id; 

}, 600);
setTimeout(() => {
    imgElement.style.opacity = "0";
    setTimeout(() => {
        imgElement.style.transform = `translate(0,0)`;
    }, 500);
}, 500);

if(item.id!=this.basketMax+1){
  this.remaining = this.remaining - 1;

}
}
console.log(item);
   
}
}
    }
    }
    </script>
<template>

    
    <div class="tab2">


    <div class="tab2-container mx-auto w-10/12 lg:grid gap-x-8 lg:w-11/12 xl:w-10/12" >
<div class="categories">
    <div class="category-search flex justify-between bg-green-500 py-2 px-2 rounded-lg shadow-md">
        <input type="search" v-model="search" class="bg-green-500 w-full text-white outline-none py-1 placeholder-white text-sm border-b border-white" :placeholder="$t('search')">
    <div class="search-icon  bg-white flex ltr:ml-2 rtl:mr-2 px-2 justify-center items-center rounded-lg">
        
<svg width="15" height="15"  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.47475 9.52533C7.42502 11.4756 10.587 11.4756 12.5373 9.52533C14.4876 7.57505 14.4876 4.413 12.5373 2.46272C10.587 0.512428 7.42502 0.512428 5.47475 2.46272C3.52448 4.413 3.52448 7.57505 5.47475 9.52533ZM5.47475 9.52533L0.999993 14" stroke="#79C143" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
    </div>
<p class="text-sm  text-gray-400 mt-6 mb-3">Categories</p>
    <ul class="basket-categories font-semibold flex flex-wrap lg:block">
        <li class="border border-green-500 rounded-lg px-2"><a href="#">All</a></li>
        <li class="px-2"><a href="#">On Sale%</a></li>
        <li class="px-2"><a href="#">Dried Fruits</a></li>
        <li class="px-2"><a href="#">Sweets</a></li>
        <li class="px-2"><a href="#">Uncooked cracking</a></li>

    </ul>
</div>
    
    <div class="basket-products mt-6 lg:mt-0">
          <h2 class="text-xl text-blue-500 text-center font-bold">{{$t('baskets.choice')}}</h2>
    <div class="basket-products-container">
<transition-group name="slide-fade" class=" grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-6 xl:gap-6 mt-6">

    <div class="basket-product bg-white shadow-md pb-3 flex flex-col justify-between" v-for="product in resultQuery" :key="product.id">
        <div class="basket-product-image border relative">
            <img :src="product.image" class="w-full" alt="">
            <img :src="product.image" style="width:25px;height:25px;z-index:10;" class="absolute opacity-0 transition duration-1000"  alt="">
        </div>
        <div class="basket-product-detail mt-2 px-4">
            <p class="category text-gray-400 text-sm">Roasted Nuts</p>
                <h3 class="basket-product-name text-black font-bold text-lg">
                         {{product.descriptions[0].name}}
                </h3>
                <button @click="addToBasket($event,product.descriptions[0].name,product.image,product.id)" class="bg-blue-500 cursor-pointer w-full text-white font-semibold py-2 mt-2 rounded-md hover:bg-blue-800" >{{$t('baskets.add_to_basket')}}</button>
        </div>

    </div>
   
</transition-group>

    </div>

    </div>

    <div class="basket-addition  shadow-lg rounded-2xl">
        <div class="button">

<button>{{$t('baskets.choose_wrapping')}} </button>

</div>
<div class="text  mt-8">
    <p class="text-red-600 text-center text-sm">You can choose more {{remaining}} products</p>
</div>
        <div class="basket-addition-wrapper">



<div class="add-products" v-if="Object.keys(basket).length > 0">

<div class="add-product" v-for="item in items" :key="item.id" >
    <div class="icon" v-show="!item.image" :class="{move:!item.image}" >

    
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.74292 1.28247V17.7175M0.525391 9.5H16.9604" stroke-width="3" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="image-basket" v-show="item.image">
    <img :src="item.image"  style="width:25;height:25px;"  alt="">
</div>

</div>



</div>



        </div>

<div class="basket-image">
    <img src="~/assets/images/pngwing.png" class="w-full text-center" alt="">
</div>
    </div>
    
    </div>


    </div>
</template>
<style>
.basket-addition{
    position:sticky;
    width:100%;
    top:0;
    background:#fff;
    padding:2rem 0rem;
    margin-left:1rem;
    height:95vh;
}
.basket-addition-wrapper{
    max-width:50%;
    margin:0 auto;
}
.basket-addition .button{
    text-align:center;
    margin-bottom:1rem;
}
.basket-addition .button button{
    cursor: pointer;
    padding: .9rem 2em;
    color: #fff;
    outline:none;
    background: #bdbdbd;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 30px;
    box-shadow: 0 0 0 10px #f2f2f2;
}
.add-products{
    margin-top:3rem;
    display:grid;
    width:100%;
    grid-template-columns:1fr 1fr;
    grid-row-gap:4rem;
    grid-column-gap:2.4rem;
    justify-items: space-between;
}
.add-products .add-product{
    box-shadow: 0 0 0 6px #f2f2f2, 0 0 0 14px #f7f7f7;
    color: #bdbdbd;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 0;
    border-radius:60px;
    justify-self:center;

}

</style>