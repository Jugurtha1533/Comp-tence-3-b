<template>
    <div class="col-lg-4 box" >
      <div class="image">
        <img class="pecture" :src="`${image}`" alt="">
        <h3> <i class="fas fa-map-marker-alt"></i> {{name}} </h3>
      </div>
      <div class="content">
        <div class="price"><span>{{ prix }}</span></div>
        <P>{{ description }}</P>
        <a class="btn back-now">{{ bouton }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Packages',
    props: {
      id: Number,
      name: String,
      image: String,
      prix:Number,
      button:String,
    }
  }
  </script>
  
  