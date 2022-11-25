<template>
    <section class="packages" id="packages">
      <h1 class="heading"> Our <span>packages</span> </h1>
      <div class="box-container">
        <div class="row">       
          <Slide v-for="(product, index) in products" :key="index" :id="product.id" :name="product.name" :image="product.
          image" :boutton="product.boutton" />    
        </div>
      </div>
    </section>
  </template>
  <script>
  import PecturePackage from '@/components/PecturePackage.vue'
  import axios from 'axios'
  export default {
    name:'Package',
    components:{
      PecturePackage,
    },
    data() {
      return {
        products: [],
        errors: [],
        
      }
    },
   created() {
      axios.get(`http://localhost:8080/products.json`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.products = response.data.products
        })
        .catch(e => {
          this.errors.push(e)
        })
    }  
  
  }
  </script>
  
  <style>
  .section {
    padding: 2rem 7%;
  }
  
  .heading {
    text-align: center;
    padding-bottom: 2rem;
    color: (--text-color-1);
    font-size: 4rem;
  }
  .heading span {
    position: relative;
    z-index: 0;
  }
  
  .pecture {
    width: 100%;
    height: 100%;
  }
  
  .heading span::before {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 0;
    z-index: -1;
    background: var(--orange);
    height: 100%;
    width: 100%;
    clip-path: polygon(0 90%, 100% 83%, 100% 100%, 0% 100%);
  }
  
  
  .back-now {
    margin-top: 1rem;
    display: inline-block;
    padding: .8rem 3rem;
    font-size: 1.7rem;
    color: rgb(73, 62, 77);
    background: var(--orange);
    border-radius: .5rem;
    cursor: pointer;
    border-color: brown;
    background-color: darkorange;
  }
  
  .packages.box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
  }
  
  .packages.box-container.box {
    background: (--bg-color-1);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
  }
  
  
  .packages.box-container.box.image {
    height: 25rem;
    width: 100%;
    padding: 1.5rem;
    position: relative;
  }
  
  .packages.box-container.box.image img {
  
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: .5rem;
  }
  
  .packages.box-container.box.image h3 {
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
    font-size: 2rem;
    color: #fff;
    background: rgba(0, 0, 0, .5);
    border-radius: .5rem;
    font-weight: lighter;
    padding: .5rem 1.5rem;
  }
  
  .packages.box-container.box.image h3 i {
    color: var(--orange);
  }
  
  .packages.box-container.box.content {
    padding: 1.5rem;
    padding-top: 0;
  }
  
  .packages.box-container.box.content.price {
    font-weight: .600;
    color: (--text-color-1);
    font-size: 2.5rem;
  }
  
  .packages.box-container.box.content.price span {
    font-weight: lighter;
    color: (--text-color-2);
    font-size: 1.5rem;
    text-decoration: line-through;
  }
  
  .packages.box-container.box.content P {
    font-size: 1.5rem;
    padding: .5rem 0;
    color: (--text-color-2);
    line-height: 1.7;
  }
  </style>