import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { Swiper, EffectFade,Pagination } from 'swiper';
Swiper.use([EffectFade,Pagination]);

// import custom style
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper);