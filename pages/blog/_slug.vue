<template>
    <div class="main">
    
    <div class="featured-image  lg:w-10/12 xl:w-9/12 lg:mt-12   mx-auto" >
<div class="image overflow-hidden">
        <img src="~/assets/images/blog.jpg" v-shared-element:rafay class="w-full object-cover lg:rounded-md"  alt="">
</div>
 <div class="title">
<h1 class="text-2xl lg:text-3xl font-bold py-4 px-4">תהיה ראשון לדעת מה חדש!</h1>
 </div>
</div>
<div class="content  container">
    <div class="content-main mt-6 mb-10">
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi praesentium error, consequuntur laudantium dicta debitis ullam fugit odio dolor possimus eos culpa esse in, hic molestiae quis earum veniam.
</p>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi praesentium error, consequuntur laudantium dicta debitis ullam fugit odio dolor possimus eos culpa esse in, hic molestiae quis earum veniam.
</p>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi praesentium error, consequuntur laudantium dicta debitis ullam fugit odio dolor possimus eos culpa esse in, hic molestiae quis earum veniam.
</p>
    </div>


</div>



    </div>
</template>

<style scoped>
.featured-image{
    position:relative;
    overflow:hidden;
}
.image:after{
    /* content:"";
    background:rgba(0,0,0,.5);
    position:absolute;
    width:100%;
    left:0;
    right:0;
    bottom:0;
    height:20%;
   
    backdrop-filter: blur(15px); */
}
.title{
    position:absolute;
   background:rgba(0,0,0,.5);
   backdrop-filter: blur(15px);
    display:block;
    width:100%;
    bottom:0;
    color:#fff;
    opacity:0;
    transform:translateY(10px);
    animation:displayIn forwards .5s ease;
     animation-delay:.5s;

}

@keyframes displayIn {

    from{
      opacity:0;
      transform:translateY(10px);
    }

    to{
        opacity:1;
      transform:translateY(0px);

    }

    
}

@media only screen and (min-width:1024px){
    .image img{
      height:50vh;
      object-fit: cover;        
    }
}
</style>