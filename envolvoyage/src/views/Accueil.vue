<template>
    <div class="accueil">
      
      <Carousel />
      <Detail />
      <Features />
  
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import Carousel from '@/components/Carousel.vue'
  import Detail from '@/components/Detail.vue'
  import Features from '@/components/Features.vue'
  
  
  export default {
    name: 'Accueil',
    components: {
      Carousel,
      Detail,
      Features,
    },
    
    
  }
  </script>
  