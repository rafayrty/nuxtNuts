// plugins/vue-google-oauth2.js
// file name can be changed to whatever you want
import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '278239377093-a6bvmppsp97vf92ptv24iefl89jkkv4k.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)