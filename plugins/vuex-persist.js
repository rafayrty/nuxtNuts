import VuexPersistence from 'vuex-persist'
  
export default ({ store }) => {
  new VuexPersistence({
   
    key: 'vuex', // The key to store the state on in the storage provider.
    storage: window.localStorage,
    modules:['cart','recently'], // or window.sessionStorage or localForage    
  }).plugin(store);
}