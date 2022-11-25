<template>
    <div class="col-lg-4">
      <Etapes v-for="(etape,index) in etapes" :key="index" :id="etape.id" :titre="etape.titre" :image="etape.
      image" :description="etape.description" :button="etape.button"/> 
    </div>
    <!-- /.col-lg-4 -->
  </template>
  
  <script>
  import Etapes from '@/components/Etapes.vue'
  export default {
    name: 'Detail',
    components: {
      Etapes,
    },
    props: {
  
    },
    data() {
      return {
        etapes: [
          {
            id: 1,
            titre: 'Planifier',
            image: 'steps-icon-1.png',
            description: 'Confiez-nous vos rêves d\'évasion : en famille ou entre amis, nous trouverons la formule qui  comblera vos attentes.',
            button: 'View details & raquo',
          },
          {
            id: 2,
            titre: 'Organiser',
            image: 'steps-icon-2.png',
            description: 'Nous nous chargeons d\'assurer votre sécurité et d.',
            button: 'View details & raquo' ,
         
          },
          {
            id: 3,
            titre: 'Voyager',
            image: 'steps-icon-3.png',
            description: 'Nous nous chargeons d\'assurer votre sécurité et de.',
            button: 'View details & raquo',
          },
        ],
      }
    },
  }
  </script>
  
  <style>
  /* MARKETING CONTENT
      -------------------------------------------------- */
  
  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .marketing h2 {
    font-weight: 400;
  }
  
  .marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
  }
  </style>