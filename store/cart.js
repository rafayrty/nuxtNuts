
export const state = () => ({
    added: [],
    addedBaskets:[],
    total:0,
    shipping:0,
    subtotal:0,
    discount:0,
    coupon:false,
    address:''
  })
  // getters
  export const getters = {
    addedProducts: state => state.added, // would need action/mutation if data fetched async
    addedBaskets: state => state.addedBaskets, 
    getNumberOfProducts(state){
      let added = state.added ? state.added.length : 0;
      let addedBaskets = state.addedBaskets ? state.addedBaskets.length : 0;

       return added + addedBaskets;
    },
    totalPrice: state => (state.total + state.shipping) - state.discount,
    subTotalPrice(state){
        return state.total - state.discount;
    },
    shipping: state => state.shipping,
    address: state => state.address,
    discount:state =>state.discount,
    coupon: state => state.coupon

  }
  // actions
  export  const actions = {

    async  addToCartBasket({ commit ,state}, basket){    
     commit('ADD_TO_CART_BASKET', {basket_id:basket.basket_id,products:basket.product_ids,images:basket.images,amount:1,type:"basket",maximum:basket.basketMax,image:basket.image,originalprice:basket.price,price:basket.price,name:basket.title})
      commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets});
      },
      
      
      async updateCartBaskets({ commit ,state},locale){
        //For Products
        let baskets = state.addedBaskets.filter(function(basket) {
            return basket.type = "basket";
          });
        let ids = [];
        baskets.forEach(basket=>{
            ids.push(basket.basket_id);
        })
        try {
          await this.$axios.$post('/api/cartbaskets/'+locale,{ids:JSON.stringify(ids)}).then(res=>{
              let newBaskets = [];
            for (let index = 0; index < baskets.length; index++) {
                
              newBaskets.push({basket_id:baskets[index].basket_id,amount:baskets[index].amount,type:"basket",maximum:baskets[index].maximum,image:baskets[index].image,originalprice:baskets[index].originalprice,images:baskets[index].images,price:baskets[index].price,name:res[index].basket_name});         
            }

            commit('UPDATE_CART_BASKETS',newBaskets);
            commit('UPDATE_TOTAL',{'products':state.added,'baskets':newBaskets});


        });
        } catch (err) {
          return err;
        }
      },
      deleteBasket({commit,state},id){
        let basket = state.addedBaskets.find(x => x.id === id);
       let basketIndex = state.addedBaskets.indexOf(basket);
        
       commit('REMOVE_BASKET',basketIndex);
       commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets});
       
     }, addAmountBasket({commit,state},id){ 
      let basket = JSON.parse(JSON.stringify(state.addedBaskets.find(x => x.basket_id === id)));
      let basketIndex = state.addedBaskets.indexOf(basket); 
    
        if(basket.amount != 5){
             basket.amount = basket.amount + 1;
             basket.price =  parseInt((Math.round(basket.amount * basket.originalprice)).toFixed(0));
             commit('UPDATE_AMOUNT_BASKET',{basket:basket,index:basketIndex})
             commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets})
         }
   
    },subtractAmountBasket({commit,state},id){ 
      let basket = JSON.parse(JSON.stringify(state.addedBaskets.find(x => x.basket_id === id)));
      let basketIndex = state.addedBaskets.indexOf(basket); 

    
        if(basket.amount != 1){
      
             basket.amount = basket.amount - 1;
             basket.price =  parseInt((Math.round(basket.amount * basket.originalprice)).toFixed(0));
             commit('UPDATE_AMOUNT_BASKET',{basket:basket,index:basketIndex})
             commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets})
         }
    },

  async  addToCart({ commit ,state}, product){  
if(state.added.find(x => x.id === product.id)){
    throw 'Product Already Exists';
 }
      await this.$axios.$get(`/api/products/${product.id}/${this.$i18n.locale}`).then(res=>{
            // console.log(res);
            commit('ADD_TO_CART', {id:product.id,amount:product.amount,maximum:product.maximum,image:product.image,originalprice:product.originalprice,kind:product.kind,type:"product",price:product.price,name:product.title})
            commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets});

        })
    },
    deleteProduct({commit,state},id){
       let product = state.added.find(x => x.id === id);
      let prdIndex = state.added.indexOf(product);
       
      commit('REMOVE_PRODUCT',prdIndex);
      commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets});
      
    }, 
    addAmountProduct({commit,state},id){
      let product = JSON.parse(JSON.stringify(state.added.find(x => x.id === id)));
      let prdIndex = state.added.indexOf(product); 

      if(product.amount != product.maximum){
        if(product.kind == 1){
          product.amount = product.amount + 1;
          product.price =  (Math.round(product.amount * product.originalprice)).toFixed(0);
        
        }else{
          product.amount = (parseFloat(product.amount) + parseFloat("0.1")).toFixed(1);
          product.price =  (product.originalprice / 100) * (product.amount * 1000);
          product.price =  (Math.round(product.price * 100) / 100).toFixed(0);
        }
            }
        
      commit('UPDATE_AMOUNT',{product:product,index:prdIndex})

      commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets})

    },
    subtractAmountProduct({commit,state},id){
      let product = JSON.parse(JSON.stringify(state.added.find(x => x.id === id)));
      let prdIndex = state.added.indexOf(product); 

      if(product.kind == 1){
        if(product.amount != 1){
          product.amount = product.amount - 1;
          product.price =  (Math.round(product.amount * product.originalprice)).toFixed(0);
  
  }
    }else{
    if(product.amount != 0.1){
      product.amount = (parseFloat(product.amount) - parseFloat("0.1")).toFixed(1);
      product.price =  (product.originalprice / 100) * (product.amount * 1000);
      product.price =  (Math.round(product.price * 100) / 100).toFixed(0);
  }
    }
        
      commit('UPDATE_AMOUNT',{product:product,index:prdIndex})

      commit('UPDATE_TOTAL',{'products':state.added,'baskets':state.addedBaskets})

    },
    async updateCartProducts({ commit ,state},locale){
        //For Products
        let products = state.added.filter(function(product) {
            return product.type = "product";
          });
        let ids = [];
        products.forEach(product=>{
            ids.push(product.id);
        })
        // console.log(ids);
        try {
          await this.$axios.$post('/api/cartproducts/'+locale,{ids:JSON.stringify(ids)}).then(res=>{
              let newProducts = [];
            for (let index = 0; index < products.length; index++) {
                
                newProducts.push({id:products[index].id,amount:products[index].amount,type:"product",maximum:products[index].maximum,image:products[index].image,originalprice:products[index].originalprice,kind:products[index].kind,price:products[index].price,name:res[index].descriptions[0].name});         
            }

            commit('UPDATE_CART_PRODUCTS',newProducts);
            // commit('UPDATE_TOTAL',{'products':newProducts,'baskets':state.addedBaskets});


        });
        } catch (err) {
          return err;
        }
      },
//Cart Calculations

addShipping({commit,state},payload){
commit('UPDATE_SHIPPING',payload);
},
  
addCoupon({commit,state},payload){
  commit('ADD_COUPON',payload);
  },
  addDiscount({commit,state},payload){
    commit('UPDATE_DISCOUNT',payload);
    },
    removeDiscount({commit,state}){
      commit('REMOVE_DISCOUNT');
    }
  





  }

  export const mutations = {
      ADD_TO_CART(state,payload){
          state.added.push(payload);
      },
      ADD_TO_CART_BASKET(state,payload){
        state.addedBaskets.push(payload);
    },
    UPDATE_CART_BASKETS(state,payload){
      state.addedBaskets = payload;

    },
      UPDATE_CART_PRODUCTS(state,payload){
          state.added = payload;

        
        },
        UPDATE_AMOUNT(state,payload){
        
          state.added.splice(payload.index,1,payload.product);
        },
        UPDATE_AMOUNT_BASKET(state,payload){
        
          state.addedBaskets.splice(payload.index,1,payload.basket);
        },
        REMOVE_PRODUCT(state,payload){
            state.added.splice(payload,1);
        },
        REMOVE_BASKET(state,payload){
          state.addedBaskets.splice(payload,1);
      },
        UPDATE_TOTAL(state,payload){
            let total = 0;
            if(payload){
            payload.products.forEach(product=>{
              total = total + parseInt(product.price);
            }) 
            payload.baskets.forEach(basket=>{
              total = total + parseInt(basket.price);
            }) 
            state.total = total;
          }
        },
        //Address
        UPDATE_SHIPPING(state,payload){
        
          if(payload == 'FREE'){
            state.shipping = false;
          }else{
            state.shipping = parseInt(payload);
          }
        },

        ADD_ADDRESS(state,payload){
          state.address = payload;
        },
        //Discounts

        ADD_COUPON(state,payload){
          state.coupon = payload;
        },
        UPDATE_DISCOUNT(state,payload){
          state.discount = payload;
        },
        REMOVE_DISCOUNT(state){
          state.discount = 0;
          state.coupon = false;
        }




      }
 