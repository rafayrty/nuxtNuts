export const actions = {
    async nuxtServerInit (vuexContext, { $axios,$cookies, error }) {
  //  console.log($cookies.get('user')); 
      try {
        const categories = await $axios.$get('/api/categories/'+this.$i18n.locale);
        const child_categories = await $axios.$get('/api/childCategories/'+this.$i18n.locale);
        const info = await $axios.$get('/api/socials/'+this.$i18n.locale);
        vuexContext.commit('setCategories', categories)
        vuexContext.commit('setChildcategories', child_categories)
        vuexContext.commit('info', info)

      } catch (err) {
        return error(err)
      }
    },
   async updateCategories(vuexContext,locale){

      try {
        const categories = await this.$axios.$get('/api/categories/'+locale);
        const child_categories = await this.$axios.$get('/api/childCategories/'+locale);
        const info = await this.$axios.$get('/api/socials/'+locale);

        // console.log("from vuex",categories);
        vuexContext.commit('setCategories', categories);
        vuexContext.commit('setChildcategories', child_categories)
        vuexContext.commit('info', info)


      } catch (err) {
        console.log(err);
        return error(err)
      }
    }
  }
  
  export const state = () => ({
    categories: [],
    childCategories:[],
    info:[]
  })
  
  export const mutations = {
    setCategories(state, payload) {
      state.categories = payload
    },
    setChildcategories(state, payload) {
      state.childCategories = payload
    },
    info(state,payload){
      state.info = payload;
    }
  }
  export const getters = {
    categories(state){
    return  state.categories;
    },
    ChildCategories(state){
      return  state.childCategories;
      },
      info(state){
        return state.info;
      }
  }