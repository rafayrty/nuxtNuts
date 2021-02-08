export const actions = {
   async login(vuexContext,userDetail){
    return new Promise((resolve, reject) => {
       this.$axios.$post('/api/auth/login',userDetail).then(res=>{
          vuexContext.commit('setUser', res)
             resolve();
        }).catch(err=>{
          reject(err);
        })

 
    })
  },
  sync(vuexContext,syncData){
    console.log("from cookies",this.$cookies.get('user'));
   return vuexContext.commit('syncUser',syncData);
  },
  logOut(vuexContext){
    this.$cookies.remove('user');
    this.$cookies.remove('isLoggedIn');
    return vuexContext.commit('logOut')
  }
}
  
  export const state = () => ({
    user: [],
    isLoggedIn: false
  })
  
  export const mutations = {
    setUser(state, payload) {
       this.$cookies.set('user',payload);
      state.user = payload
      this.$cookies.set('isLoggedIn',true);
      state.isLoggedIn = true

    //   console.log(state.categories);
    },
    
    syncUser(state, payload) {
     state.user = payload;
     state.isLoggedIn = true;

   //   console.log(state.categories);
   },
   logOut(state){
    state.user = [];
    state.isLoggedIn = false;
  }
  }
  export const getters = {
    user(state){
    return  state.user;
    },
    isLoggedIn(state){
        return state.isLoggedIn;
    }
  }