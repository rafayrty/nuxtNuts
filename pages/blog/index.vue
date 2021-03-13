<template>
    <div class="main container">
<h1 class="text-4xl  mt-8 font-bold">Latest Posts</h1>
    <div class="blog-container mt-10">
      
   <div class="hero-article lg:grid grid-cols-2 bg-white-500 rounded-md shadow-md pb-4  lg:pb-0 mb-8">
<div class="hero-image overflow-hidden rounded-t-md lg:rounded-t-none lg:rounded-r-md">
  <nuxt-link :to="localePath('/blog/123')" >  <img src="~/assets/images/blog.jpg" v-shared-element:rafay class="w-full block  transform object-cover transition duration-300 cursor-pointer hover:scale-105 "  alt=""></nuxt-link>
</div>
<div class="hero-text lg:py-8 px-6 lg:px-12">
<h1 class="text-2xl lg:text-3xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
<p class="text-gray-400 mt-2 text-sm lg:text-md lg:mt-6 px-4 text-justify" >
    
Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum. Nunc, fringilla elit adipiscing suscipit metus eleifend sit placerat faucibus. Vulputate tellus eget nulla tristique ut praesent molestie in.
Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum. Nunc, fringilla elit adipiscing suscipit metus eleifend sit placerat faucibus. Vulputate tellus eget nulla tristique ut praesent molestie in.
Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum. Nunc, fringilla elit adipiscing suscipit metus eleifend sit placerat faucibus. Vulputate tellus eget nulla tristique ut praesent molestie in.

</p>
<div class="read-more px-4 mt-4 lg:mt-10">
<nuxt-link :to="localePath('/blog/123')"  class="readmore text-lg relative  font-semibold">
    Read More
</nuxt-link>
</div>
</div>




   </div>
   
 <div class="posts-container mt-12 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">

<!-- Posts -->


<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400  mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>



<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>

<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>

<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>

<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>
<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>
<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>
<div class="post bg-white shadow-lg hover:shadow-sm transition duration-300  pb-4">
  <div class="post-image  overflow-hidden rounded-t-md">
    <img src="~/assets/images/post1.jpg"
      class="w-full block transform object-cover transition duration-300 cursor-pointer hover:scale-110"
      style="height:110%" alt="">
  </div>
  <div class="post-text">
    <h1 class="text-xl lg:text-2xl mt-4 font-bold px-4">תהיה ראשון לדעת מה חדש!</h1>
    <p class="text-gray-400 mt-4 text-sm lg:text-md lg:mt-6 px-4" style="line-height:1.2">

      Ullamcorper quis pellentesque quam urna proin est quam arcu. Varius congue magna lacus mus ipsum.

    </p>
    <div class="read-more px-4 mt-4 lg:mt-10">
      <a href="javascript:void(0)" class="readmore text-md relative  font-semibold">
        Read More
      </a>
    </div>
  </div>

</div>






 </div>




    </div>



    </div>

</template>

<style scoped>

a.readmore:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left:0;
  right:0;
  position: absolute;
  background: #79c143;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a.readmore:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>
<script>
export default {
  // transition:{
  //   name:'blog'
  // }

}
</script>

