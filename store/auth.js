export const actions = {
   async login(vuexContext,userDetail){
    return new Promise((resolve, reject) => {
       this.$axios.$post('/api/auth/login',userDetail).then(res=>{
          vuexContext.commit('setUser', res)
             resolve(res);
        }).catch(err=>{
          reject(err);
        })

 
    })
  },
  async googleLogin(vuexContext,userDetail){
    return new Promise((resolve, reject) => {
       this.$axios.$post('/api/auth/google',userDetail).then(res=>{
          vuexContext.commit('setUser', res)
             resolve(res);
        }).catch(err=>{
          reject(err);
        })

 
    })
  },
  sync(vuexContext,syncData){
   return vuexContext.commit('syncUser',syncData);
  },
  updateUserDetails(vuexContext,newUser){
   let oldUser = {first_name:newUser.first_name,last_name:newUser.last_name,phone:newUser.phone,email:newUser.email};
   return vuexContext.commit('updateUser',newUser);

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
    updateUser(state,payload){
      state.user.first_name = payload.first_name; 
      state.user.last_name = payload.last_name; 
      state.user.phone = payload.phone; 
      state.user.email = payload.first_name; 
      const date = new Date();
      date.setDate(date.getDate() + 10);
      this.$cookies.set('user',state.user,{
        expires:date
      });

    },
    setUser(state, payload) {
      const date = new Date();
      date.setDate(date.getDate() + 10);
       this.$cookies.set('user',payload,{
        expires:date
      });
      state.user = payload
      this.$cookies.set('isLoggedIn',true,{
        expires:date
      });
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