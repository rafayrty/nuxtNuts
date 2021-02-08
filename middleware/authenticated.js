// nuxt middleware
export default ({ app }) => {
    console.log(app.$cookies.get('user'));
    // app.$cookies.removeAll()
    if(app.$cookies.get('user')){
        app.store.dispatch('auth/sync',app.$cookies.get('user'));
    }

  }
  