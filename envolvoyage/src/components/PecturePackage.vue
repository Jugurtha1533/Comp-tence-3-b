<template>
    <div class="col-4 package" >
      <div class="image">
        <img class="pecture" :src="`${image}`" alt="">
        <h3> <i class="fas fa-map-marker-alt"></i> {{name}} </h3>
      </div>
      <div class="content">
        <div class="price"><span>{{ prix }}</span></div>
        <div class="description">
          <P>{{ description }}</P>
        </div>
        <div class="col border-end  d-flex justify-content-center align-items-center">
          <button class="btn btn-success">{{bouton}}</button>
        </div>
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
      prix:String,
      bouton:String,
      description:String,
    }
  }
  </script>
  
<style scopped>
.description {
  height: 100px;
}
.package{
  margin-bottom: 10px;
}
</style>