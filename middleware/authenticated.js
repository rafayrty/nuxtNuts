// nuxt middleware
export default ({ app,redirect }) => {
    // console.log(app.$cookies.get('user'));
    // app.$cookies.removeAll()
    if(app.$cookies.get('user')){
        app.store.dispatch('auth/sync',app.$cookies.get('user'));
       if(app.$cookies.get('user').access_token){
           
       }else{
          return redirect('/');

       }
    }

  }
  