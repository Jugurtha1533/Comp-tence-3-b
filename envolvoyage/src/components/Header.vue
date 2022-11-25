<template>
  <header id="nav">
    <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>-->
    <nav class=" navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#"><span>Envol 
voyage</span><img src="@/assets/logo-envole voyage.
png" width="50"></a> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-c
          aria-expanded="false" aria-label="Toggle 
  navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
          <router-link class="nav-link" to="/">Accueil</router-link></a>
</li>
            <li class="nav-item">
              <a class="nav-link" href="#">

              <router-link class="nav-link" to="/Distinations">Distinations</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Circuits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
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