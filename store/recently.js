export const state = () => ({
    recently: [],
    ids:[]
})
export const getters ={
    getRecentProducts: state => state.recently
}
export const actions = {
  async addRecently({commit,state},id){
   
      if(state.ids.filter(x => x == id).length==0){

      commit('ADD_ID',id);
       try {
           
        await this.$axios.$get(`/api/products/${id}/${this.$i18n.locale}`).then(res=>{
          commit('ADD_RECENTLY',res[0]);

      });
      } catch (err) {
        return err;
      }
    }

  },
 async updateRecently({commit,state},locale){
    try {
        await this.$axios.$post('/api/cartproducts/'+locale,{ids:JSON.stringify(state.ids)}).then(res=>{

            let recentlyProducts = [];
            console.log("From Recently",res);
          for (let index = 0; index < res.length; index++) {
            recentlyProducts.push({id:res[index].id,amount:res[index].amount,type:"product",maximum:res[index].maximum,image:res[index].image,originalprice:res[index].originalprice,kind:res[index].kind,type:"product",price:res[index].price,name:res[index].descriptions[0].name});         
          }
          commit('UPDATE_RECENTLY',recentlyProducts);

      });
      } catch (err) {
        return err;
      }
  }
}

export const mutations = {
       ADD_RECENTLY(state,payload){
           state.recently.push(payload)

       },
       UPDATE_RECENTLY(state,payload){
        state.recently = payload

       },
       ADD_ID(state,payload){
    
        state.ids.push(payload);
        state.ids = [...new Set(state.ids)]
    }
    
}
