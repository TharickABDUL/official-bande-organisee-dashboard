<template>
  <div class="w-full">

    <div v-if="error" class="content-center  justify-center h-full">
      <p class="text-2xl font-bold text-center ">Erreur de connection sur
        l'API</p>
      <p class="text-xl font-bold text-center ">̿̿’̿’\̵͇̿̿\=(•̪●)=/̵͇̿̿/’̿̿ ̿ ̿
      </p>
    </div>

    <div class="  flex flex-wrap   m-2 p-2">

      <div class="w-1/5">

        <p>Liste des utilisateurs</p>
        <div class="border-2 rounded-lg "
             v-for="(utilisateur) in utilisateurs">
          <p>ID : {{ utilisateur.idPeople }} </p>
          <p>Nom : {{ utilisateur.namePeople }} </p>
          <p>Telephone : {{ utilisateur.phonePeople }}</p>
          <p>Email : {{ utilisateur.mailPeople }}</p>
        </div>
      </div>
      <div class="w-4/5">
        <div class="border-t mt-1">
          <p>Modification des infos du compte</p>
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="idUtilisateurPut" id="modify-utilisateur"
            type="text" placeholder="Numéro de l'utilisateur">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="mailPhonePut"
            placeholder="mailPeople">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="namePeoplePut"
            placeholder="namePeople">

          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="phonePeoplePut"
            placeholder="phonePeople">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="statusPeoplePut"
            placeholder="statusPeople">
          <button
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-on:click="modifierUtilisateur()">MODIFIER
          </button>
        </div>

      </div>
    </div>








  </div>


</template>
<script>

import card from '../components/card';

export default {
  head() {
    return {
      title: "Modify account Page",
    };
  },
  components: {},
  data() {
    return {
      utilisateurs: [],

      mailPeople: '',
      namePeople: '',
      phonePeople: '',
      statusPeople: '',
      idUtilisateurPut: '',
      mailPhonePut: '',
      namePeoplePut: '',
      phonePeoplePut: '',
      statusPeoplePut: '',
      error: ''
    }
  },
  async created() {
    try {
      this.utilisateur = await card.getUtilisateur();
      this.utilisateurs = this.utilisateur.data.result
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async modifierUtilisateur() {
      try {
        await card.modifyUtilisateur(this.idUtilisateurPut, this.mailPhonePut, this.namePeoplePut, this.phonePeoplePut, this.statusPeoplePut);
        this.utilisateur = await card.getUtilisateur();
        this.utilisateurs = this.utilisateur.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
  },
};
</script>

<style>

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}


</style>

