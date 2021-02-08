export const actions = {
    async nuxtServerInit (vuexContext, { $axios,$cookies, error }) {
  //  console.log($cookies.get('user')); 
      try {
        const categories = await $axios.$get('/api/categories/'+this.$i18n.locale);
        // console.log("From Vuex",$cookies.getAll());
        vuexContext.commit('setCategories', categories)
      } catch (err) {
        return error(err)
      }
    },
   async updateCategories(vuexContext,locale){
      try {
        const categories = await this.$axios.$get('/api/categories/'+locale);
        // console.log("from vuex",categories);
        vuexContext.commit('setCategories', categories)
      } catch (err) {
        return vuexContext.err(err)
      }
    }
  }
  
  export const state = () => ({
    categories: []
  })
  
  export const mutations = {
    setCategories(state, payload) {
      state.categories = payload
    }
  }
  export const getters = {
    categories(state){
    return  state.categories;
    }
  }