<template>
    <header class="bg-green-500  lg:pb-10">
<DesktopMenu @open-modal="openModal()" @cart-modal="openCart()" />
<MobileMenu @open-modal="openModal()" @cart-modal="openCart()" />
<Main ref="accountmodal"/>
<Cart ref="cartmodal"/>

    </header>
</template>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<script>
export default {
//  async fetch(){
//            this.categories =  await this.$axios.$get(`/api/categories/${this.$i18n.locale}`)
//             .then(data=>{
//               console.log(data);
//               return data;
//             }).catch(e=>{
//               context.error(e);
//             })
//   },
  created(){

},
  methods:{
    openModal(){
          this.$refs.accountmodal.show();
    },
    openCart(){
          this.$refs.cartmodal.show();
    }
  }
}
</script>