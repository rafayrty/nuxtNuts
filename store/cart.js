
export const state = () => ({
    added: [],
    total:0
  })
  // getters
  export const getters = {
    addedProducts: state => state.added, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.added) ? state.added.length : 0,
    totalPrice: state => state.total,

  }
  // actions
  export  const actions = {
  async  addToCart({ commit ,state}, product){
    // this.$store.state.addedProducts.find(x => x.name === 'string 1')
  
if(state.added.find(x => x.id === product.id)){
    throw 'Product Already Exists';
 }
      await this.$axios.$get(`/api/products/${product.id}/${this.$i18n.locale}`).then(res=>{
            // console.log(res);
            commit('ADD_TO_CART', {id:product.id,amount:product.amount,type:"product",maximum:product.maximum,image:product.image,originalprice:product.originalprice,kind:product.kind,type:"product",price:product.price,name:product.title})
            commit('UPDATE_TOTAL',state.added);

        })
    },
    deleteProduct({commit,state},id){
       let product = state.added.find(x => x.id === id);
      let prdIndex = state.added.indexOf(product);
       
      commit('REMOVE_PRODUCT',prdIndex);
      commit('UPDATE_TOTAL',state.added);
      
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

      commit('UPDATE_TOTAL',state.added)

    },
    subtractAmountProduct({commit,state},id){
      let product = JSON.parse(JSON.stringify(state.added.find(x => x.id === id)));
      let prdIndex = state.added.indexOf(product); 

      if(product.kind == 1){
        if(product.amount != 1){
          product.amount = this.amount - 1;
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

      commit('UPDATE_TOTAL',state.added)

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
                
                newProducts.push({id:products[index].id,amount:products[index].amount,type:"product",maximum:products[index].maximum,image:products[index].image,originalprice:products[index].originalprice,kind:products[index].kind,type:"product",price:products[index].price,name:res[index].descriptions[0].name});         
            }

            commit('UPDATE_CART_PRODUCTS',newProducts);
            commit('UPDATE_TOTAL',newProducts);


        });
        } catch (err) {
          return err;
        }
      }
  }

  export const mutations = {
      ADD_TO_CART(state,payload){
          state.added.push(payload);
      },
      UPDATE_CART_PRODUCTS(state,payload){
          state.added = payload;

        
        },
        UPDATE_AMOUNT(state,payload){
        
          state.added.splice(payload.index,1,payload.product);
        },
        REMOVE_PRODUCT(state,payload){
            state.added.splice(payload,1);
        },
        UPDATE_TOTAL(state,payload){
            let total = 0;
            if(payload){

            
            payload.forEach(product=>{
              total = total + parseInt(product.price);
            }) 
            state.total = total;
          }
        }
        

      }
 