<template>
      <div :dir="$dir()">
        <vue-confirm-dialog></vue-confirm-dialog>

 <HeaderMain/>
<div class="account-section mt-8">
    <div class="container account-container lg:grid">


<aside class="lg:pt-8 border-r border-gray-300">
    <ul class="m-0 p-0 flex lg:flex-col lg:items-start justify-between items-center">
        <li class="text-blue-500 font-semibold text-lg py-2  lg:border-gray-200 lg:py-3 lg:w-9/12  ">
        <nuxt-link class="flex items-center border-b-4 lg:border-b-0 lg:border-l-4  pb-2  border-gray-400" :to="localePath('/account/orders')">
            <span class="mx-3">
                
<svg width="20" class="stroke-current fill-current" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99952 0C9.45617 0 8.92252 0.147117 8.45295 0.426363L1.14591 4.77095C0.797663 4.97823 0.50863 5.27507 0.307584 5.63192C0.106538 5.98877 0.000491968 6.39318 4.12648e-07 6.80491L0 15.1926C0.000239657 15.6046 0.106167 16.0093 0.307225 16.3664C0.508283 16.7236 0.797452 17.0206 1.14591 17.2281L8.45395 21.5727C8.90756 21.842 9.42116 21.9884 9.94513 21.998C9.96325 21.9993 9.98155 22 10 22C10.0183 22 10.0365 21.9993 10.0545 21.9981C10.579 21.9886 11.0927 21.8424 11.5466 21.5729L18.8547 17.2283C19.2029 17.0207 19.4926 16.723 19.6934 16.3659C19.8942 16.0088 19.9999 15.6042 20 15.1923V6.80491C19.9995 6.39318 19.8935 5.98877 19.6924 5.63192C19.4914 5.27507 19.2023 4.97823 18.8541 4.77095L11.5462 0.426403C11.0766 0.147131 10.5429 0 9.99952 0ZM10.7692 20.2167C10.7705 20.2159 10.7719 20.2151 10.7732 20.2144L18.0807 15.87C18.1965 15.8009 18.2925 15.702 18.3593 15.5832C18.4262 15.4642 18.4615 15.3294 18.4615 15.1922V7.21907L10.7692 11.8413V20.2167ZM9.23077 11.8413L1.53846 7.21907V15.1919C1.53857 15.3291 1.57388 15.464 1.64087 15.583C1.70782 15.7019 1.80409 15.8008 1.92009 15.87L9.2274 20.2141C9.2284 20.2147 9.22977 20.2155 9.23077 20.2161V11.8413ZM9.22693 1.78457C9.4615 1.64507 9.72809 1.57157 9.99952 1.57157C10.271 1.57157 10.5375 1.64507 10.7721 1.78457L17.6583 5.87841L10 10.4802L2.34165 5.87839L9.22693 1.78457Z" fill="#51808E"/>
</svg>

            </span>
            {{$t('orders')}}</nuxt-link></li>
        <li class="text-blue-500 font-semibold text-lg py-2 border-t lg:border-gray-200 lg:py-3 lg:w-9/12  ">
        <nuxt-link class="flex items-center border-b-4 pb-2 lg:border-b-0 lg:border-l-4  border-gray-400" :to="localePath('/account/address')">
                       <span class="mx-3">
                

<svg width="22" height="22"  class="stroke-current fill-current" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.271 5.97596L5.4064 10.331C4.85269 10.5849 5.03885 11.4241 5.64808 11.4241H10.3654C10.4215 11.4241 10.4753 11.4464 10.515 11.4861C10.5546 11.5258 10.5769 11.5796 10.5769 11.6357V16.3519C10.5769 16.9612 11.4231 17.1452 11.6759 16.5931L16.024 6.72904C16.0727 6.62364 16.0879 6.50585 16.0675 6.39156C16.0471 6.27727 15.9922 6.17198 15.9101 6.08989C15.828 6.0078 15.7227 5.95286 15.6084 5.93249C15.4942 5.91212 15.3764 5.92729 15.271 5.97596Z" fill="#51808E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 4.92691 4.92691 0 11 0C17.0731 0 22 4.92691 22 11C22 17.0731 17.0731 22 11 22C4.92691 22 0 17.0731 0 11ZM11 1.69231C5.86155 1.69231 1.69231 5.86155 1.69231 11C1.69231 16.1385 5.86155 20.3077 11 20.3077C16.1385 20.3077 20.3077 16.1385 20.3077 11C20.3077 5.86155 16.1385 1.69231 11 1.69231Z" fill="#51808E"/>
</svg>


            </span>
            {{$t('addresses')}}</nuxt-link></li>
        <li class="text-blue-500 font-semibold text-lg py-2 border-t lg:border-gray-200 lg:py-3 lg:w-9/12">
        <nuxt-link class="flex items-center pb-2 border-b-4 lg:border-b-0 lg:border-l-4  border-gray-400" :to="localePath('/account/profile')">
            <span class="mx-3">
                
<svg width="22" height="22"  class="stroke-current fill-current" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1539 0.00102201C4.96772 -0.0825278 -0.0825318 4.96748 0.00102206 11.1533C0.0835183 17.0859 4.91431 21.9165 10.8472 21.999C17.0344 22.0836 22.0836 17.0336 21.999 10.8477C21.9175 4.91407 17.0867 0.0835142 11.1539 0.00102201ZM17.8392 17.3059C17.8182 17.3287 17.7924 17.3465 17.7636 17.3582C17.7349 17.3699 17.7039 17.3751 17.6729 17.3735C17.6419 17.3719 17.6117 17.3635 17.5843 17.3489C17.5569 17.3343 17.5331 17.3138 17.5145 17.289C17.0415 16.6701 16.4623 16.1403 15.8038 15.7243C14.4574 14.8602 12.7514 14.3843 11.0005 14.3843C9.24959 14.3843 7.54361 14.8602 6.19723 15.7243C5.53878 16.1401 4.95952 16.6698 4.48649 17.2884C4.46791 17.3133 4.44408 17.3337 4.41671 17.3483C4.38934 17.363 4.35909 17.3714 4.32811 17.373C4.29712 17.3746 4.26616 17.3694 4.23742 17.3577C4.20868 17.346 4.18286 17.3281 4.16179 17.3054C2.61006 15.6303 1.73106 13.4416 1.69325 11.1586C1.60705 6.01291 5.8297 1.70586 10.9778 1.69317C16.1259 1.68048 20.3078 5.86062 20.3078 11C20.3096 13.338 19.4278 15.5904 17.8392 17.3059Z" fill="#51808E"/>
<path d="M11.0005 5.07747C9.95768 5.07747 9.01479 5.46825 8.34477 6.17842C7.67476 6.88859 7.34001 7.87057 7.41563 8.92446C7.56899 11 9.17714 12.6921 11.0005 12.6921C12.8239 12.6921 14.4289 11 14.5854 8.92499C14.6637 7.88114 14.3316 6.90816 13.6504 6.18477C12.9778 5.47089 12.0365 5.07747 11.0005 5.07747Z" fill="#51808E"/>
</svg>

            </span>
            
            {{$t('profile')}}</nuxt-link></li>
                    <li class="text-red-500 font-semibold text-lg py-2 border-t lg:border-gray-200 lg:py-3 lg:w-9/12">
<a href="#" @click.prevent.once="logOut" class="flex items-center pb-2 border-b-4 lg:border-b-0 lg:border-l-4  border-gray-400">
            <span class="mx-3">
                
<svg xmlns="http://www.w3.org/2000/svg" class="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
            </span>
            
            {{$t('logout')}}</a>
                    </li>
    </ul>
</aside>

    <Nuxt />



</div>
</div>
    <Footer />


  </div>

</template>
<script>
export default {
 middleware:['authenticated'],
        transition:{
  name: 'layout',
  mode: 'out-in',
              beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    }
        } ,
    head () {
      return {
            htmlAttrs: {
                lang: this.$i18n.locale,
            },
            
        }
  },
  methods:{

   logOut(){

     this.$store.dispatch('auth/logOut');
     this.$toast.show("Logged Out",{type:'error',duration:5000});
     this.$router.replace({path:'/'});

   }
  }
}
</script>
<style>
.layout-enter-active,
.layout-leave-active {
    transition: all .5s;
    overflow: hidden;
    }
.layout-enter,
.layout-leave-active {
  transform: translateX(10px);
    opacity: 0
}
/* .main-enter-active, .main-leave-active {
    transition: all .5s;
    overflow: hidden;
  }
  .main-enter, .main-leave-active {
      transform: translateX(10px);
    opacity: 0
  } */
</style>
<style lang="scss" scoped>

aside{
    ul{
        margin:0;
        padding:0;
         transition:.3s ease;
        li{
            transition:.3s ease;
        }
    }
}
.account-container{
    
 .nuxt-link-active{
              transition:.3s ease;

     @apply text-green-500 border-b-4 border-green-500;
 }
}


@media only screen and (min-width:1024px){
    .account-container{
        grid-template-columns:.45fr 1fr;
        grid-gap:4rem;
         .nuxt-link-active{
     @apply text-green-500 border-l-4 border-b-0 border-green-500;
 }
    }
}
</style>