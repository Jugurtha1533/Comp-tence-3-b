<template>
  <div class="contact">
    <div class="col-sm-12 col-md-6 mx-auto">
      <form class="vue-form" @submit.prevent="sendForm">

        <div class="error-message alert-danger">
          <p v-show="!email.valid">Veuillez entrer une adresse email valide.</p>
        </div>
        <div class="error-message alert-danger">
          <p v-show="!name.valid">Le nom doit avoir minimum trois caractères.</p>
        </div>

        <fieldset>
          <legend>Contact</legend>
          <div class="fom-group">
            <label class="form-label col-sm-3" for="name">Nom</label>
            <input type="text"  class="form-control col-sm-9" name="name" id="name" required="required" v-model="name.value"/>           
          </div>
          <div>
            <label class="form-label" for="firstName">Prenom</label>
            <input type="text"  class="form-control" name="firstName" id="firstName" required="required" v-model="firstName">
          </div>
          <div>
            <label class="form-label" for="email">Email</label>
            <input type="email" class="form-control"  name="email" id="email" required="required" :class="{ email, error: !email.valid }"
              v-model="email.value">
          </div>
          
          <div>
            <label class="form-label" for="textarea">Commentaire</label>
            <textarea class="form-control" name="textarea" id="textarea" required="" v-model="message.text"
              :maxlength="message.maxlength"></textarea>
            <div class="counter" >
              <span >{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
          </div>
          <div class="d-grid gap-1">
            <button class="btn btn-success pull-right"   type="submit">
              Envoyer
            </button>
          </div>
        </fieldset>
      </form>
    </div>
    <hr class="featurette-divider" />
  </div>  
</template>

<script>

export default {
  name: 'Contact',
  components: {
  },
  props: {

  },
  data() {
    return {
      emailRegExp: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      name: {
        value: "",
        valid: true
      },
      firstName: "",
      email: {
        value: "",
        valid: true
      },
      message: {
        text: '',
        maxlength: 255
      },
    }
  },
  methods: {
    sendForm: function() {
      alert ('Vos données sont envoyées!')
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value);
      }
      if (type === "name") {
        this.name.valid = this.isNameValid(value);
      }
    },
    isNameValid: function(value) {
      return (value.length > 3) ? true : false;
    },
    // check for valid email adress
    isEmail: function(value) {
      return this.emailRegExp.test(value);
    },
  },
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    },
    "name.value": function(value) {
      this.validate("name", value);
    }
  }
}
</script>

<style scoped>
.contact {
  margin-top: 5rem;
}

.counter {
  height: 30px;
}

.counter span{
  float: right;
}
</style>