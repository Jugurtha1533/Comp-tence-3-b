<template>
    <div class="carousel-item active" data-bs-interval="10000">
      <img :src="require(`@/assets/${image}`)" class="d-block w-100 imgcarosel" alt="colier" width="" height="500" />
      <div class="carousel-caption d-none d-md-block    ">
    
        <h5> <a href="#"><b>{{ titre }}</b></a> </h5>
    
      </div>
    </div>
    
    
    </template>
    
    <script>
    export default {
      name: 'Slides',
      props: {
        id: Number,
        titre: String,
        image: String,
      }
    }
    </script>
    <style>
    .imgcarosel {
      border-radius: 40px;
      width: auto;
      height: auto;
    }
    </style>