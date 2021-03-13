    
    <script>
    export default {
        data(){
            return{
                selectedWrapping:false,
                wrappings:[]
            }
        },
        watch:{
          selectedWrapping(){
                            if(this.selectedWrapping!=false){
              this.$toast.show('Wrapping Selected Successfully',{type:'success',duration:3000})
                            }
}
        },
         async fetch() {
      this.wrappings = await this.$axios.$get(`/api/baskets/wrappings/${this.$i18n.locale}`)
    },
    methods:{
        addToCart(){
            this.$emit('add-to-cart');
        }
    }
    }
    </script>
    <style scoped>
    .radio-btn{
    height: 30px;
    width: 30px;
    cursor:pointer;
    }
    .tab3 .button-add-to-cart{
    text-align:center;
    margin-bottom:1rem;
}
.tab3 .button-add-to-cart button{
     cursor: pointer;
    padding: .9rem 3rem;
    color: #fff;
    outline:none;
    background: #bdbdbd;
    border: none;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 30px;
    box-shadow: 0 0 0 10px #f2f2f2;
    transition:.3s ease-in-out;
}
.tab3 .button-add-to-cart button.active-cart{
        background: #79c143;
        box-shadow: 0 0 0 10px #def0d0;
        animation:scaled .3s ease-in-out forwards;

}
@keyframes scaled{
    0%{
        transform:scale(1);
    }
    50%{
        transform:scale(1.2)
    }
    100%{
        transform:scale(1);
    }
}

    </style>
    <template>

<div class="tab3 my-24">
<div class="container">
<h1 class="font-bold text-blue-500 text-center text-2xl">{{$t('baskets.delightful')}}</h1>
<div class="button-add-to-cart mt-8">
    <button :class="{'active-cart':selectedWrapping}" @click="addToCart()" >{{$t('add_to_cart')}}</button>
</div>
<div class="wrappings my-4 mt-4  grid w-7/12 lg:w-full mx-auto gap-x-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">


  <div v-for="wrapping in wrappings" :key="wrapping.id" class="wrapping relative border-gray-500 hover:shadow-2xl transition duration-300 border pt-6 my-6 lg:py-4 lg:pb-4 rounded-xl" >
<div class="radio-btn-container text-center">

<input type="radio" v-model="selectedWrapping" :value="wrapping.id"  name="wrappingSelected" class="radio-btn">
</div>
  <img :src="wrapping.image" alt="">
   <div class="wrapping-name mx-3 mt-4  bg-green-500 text-white  text-center py-1 font-bold">
       {{wrapping.name}}
  </div>
  </div>
 



 
</div>

</div>



    </div>
        
    </template>
   
    
