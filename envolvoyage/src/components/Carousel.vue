<template>
    <div id="carouselExampleIndicators" class="carousel slide"  	        data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">   
        <Slide v-for="(slide,index) in slides" :key="index" :id="slide.id" :titre="slide.titre" :image="slide.
        image" />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  import Slide from '@/components/Slide.vue'
  
  export default {
    name: 'Carousel',
    components: {
      Slide,
    },
    props: {
  
    },
    data() {
      return {
        slides: [
          {
            id: 1,
            titre: 'First slide label',
            image: 'maldives-14.jpg',
          },
          {
            id: 2,
            titre: 'Second slide label',
            image: 'maldives-14.jpg',
          },
          {
            id: 3,
            titre: 'Third slide label',
            image: 'maldives-14.jpg',
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  
  /* Carousel base class */
  .carousel {
    margin-bottom: 4rem;
  }
  
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }
  
  .carousel-item>img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }
  
  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 32rem;
  }
  @media (min-width: 40em) {
  
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }
  </style>

