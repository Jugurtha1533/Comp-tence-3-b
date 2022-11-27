<template>
  <header id="nav">
   
    <nav class=" navbar navbar-dark bg-primary">
      <div class="container-fluid">
      <a class="navbar-brand" v-on:click.prevent.stop="goToHomepage" >
        <span>Envolvoyage</span><img src="@/assets/logo-envole-voyage.png" width="50">
      </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-c
          aria-expanded="false" aria-label="Toggle 
  navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link class="nav-link" to="/">Accueil</router-link>
              </a>
           </li>
            <li class="nav-item">
              <a class="nav-link" href="#">

              <router-link class="nav-link" to="/destinations">Destinations</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Circuits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                <router-link class="nav-link" to="/contact">Contact</router-link></a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    id: Number,
    titre: String,
    image: String,

  },
  methods: {
    goToHomepage: function() {
      console.log('getToHomepage')
      this.$router.push('/');
    }
  }

}


</script>

<style scoped>
.nav-list li {
  padding-top: 5px;
  padding-bottom: 5px;
}

.nav-list li a:hover:before {
  margin-left: 0;
  opacity: 1;
  visibility: visible;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>