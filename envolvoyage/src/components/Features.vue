<template>
  <div class="container marketing">
    <!-- START THE FEATURETTES -->
    <hr class="featurette-divider" />

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Meilleures destinations.
          <span class="text-mut blow your mind"></span>
        </h2>
        <p class=" lead">Trouver la perfection de voyage avec
          le professionnalisme d'experts.</p>
      </div>
    </div>
    <div class="col-md-5">
      <div class="ratio ratio-16x9">
        <iframe src="@/assets/production ID_3784238.mp4" title="YouTube 
                       video" allowfullscreen></iframe>
      </div>
    </div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Profiter en
          famille<span class="text-muteyourself"></span></h2>
        <p class=" lead">Offrez le meilleur à ceux que vous
          aimez et partagez des moments fabuleux !</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img src="@/assets/famille.jpg" width="100%" height="100%" alt="">
      </div>
    </div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading"> Envie s'evader
          <span class="text-muted"></span>
        </h2>
        <p class="lead">Parfois un peu d'évasion serait le
          bienvenue et ferait le plus grand bien !</p>
      </div>
      <div class="col-md-5">
        <img src="@/assets/evader.jpg" width="100%" height="100%" alt="">
      </div>
    </div>
    <hr class="featurette-divider" />
    <!-- /END THE FEATURETTES -->
  </div>
</template>
<script>
export default {
  name: 'Features',

}
</script>
 
 
<style scoped>
/* Featurettes
    ------------------------- */

.featurette-divider {
  margin: 5rem 0;
  /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>