<template>
  <div class="col">
    <div class="center-div-content">
      <img :src="require(`@/assets/${image}`)" width="140" height="140" class="img-fluid" alt="...">
      <!-- <h2 v-if="id === 1">{{titre}}</h2> -->
      <h2>{{ titre }}</h2>
      <p>{{ description }}</p>
      <p><a class="btn btn-secondary" href="#" role="button">{{ button }}</a></p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Etapes',
  props: {
    id: Number,
    titre: String,
    image: String,
    description: String,
    button: String,
  }
}
</script>