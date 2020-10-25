<template>
  <div>

    <div role="alert" v-if="errorMsg">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Danger
      </div>
      <div
        class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <h1>{{ errorMsg }}</h1>
      </div>
    </div>


    <div
      class=" align-baseline flex flex-wrap justify-end text-copy-primary sm:mx-0 mx-auto">

      <button @click="setMax4()"
              class="m-1 p-1  rounded-lg  border-2 border-border-color-primary bg-background-secondary">
        4
      </button>
      <button @click="setMax8()"
              class="m-1 p-1  rounded-lg  border-2 border-border-color-primary bg-background-secondary">
        8
      </button>
      <button @click="setMax12()"
              class="m-1 p-1  rounded-lg  border-2 border-border-color-primary bg-background-secondary">
        12
      </button>

      <button @click="cardById()"
              class="m-1 p-1  rounded-lg  border-2 border-border-color-primary bg-background-secondary">
        ID
      </button>
      <input
        class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
        v-model="idValue"
        id="id-value" type="text"
        placeholder="N°annonce">
    </div>


    <div v-if="error" class="content-center  justify-center h-full">
      <p class="text-2xl font-bold text-center ">Erreur de connection sur
        l'API</p>
      <p class="text-xl font-bold text-center ">̿̿’̿’\̵͇̿̿\=(•̪●)=/̵͇̿̿/’̿̿ ̿ ̿
      </p>
    </div>

    <div class="  flex flex-wrap   m-2 p-2">

      <div class="w-1/5">
        <p>Liste des entreprises</p>
        <div class="border-2 rounded-lg "
             v-for="(entreprise) in entreprises">
          <p>{{ entreprise.idCompanies }} {{ entreprise.nameCompanies }}</p>
        </div>
        <p>Liste des utilisateurs</p>
        <div class="border-2 rounded-lg "
             v-for="(utilisateur) in utilisateurs">
          <p>ID : {{ utilisateur.idPeople }} </p>
          <p>Name : {{ utilisateur.namePeople }} </p>
          <p>Phone : {{ utilisateur.phonePeople }}</p>
          <p>Email : {{ utilisateur.mailPeople }}</p>
        </div>
      </div>
      <div class="w-4/5">
        <div class="flex">
          <div>
            <p>Nouvelle entreprise</p>
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="valueNewEntreprisePost"
              id="create-entreprise" type="text"
              placeholder="Nom de l'entreprise">
            <button
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-on:click="createEntreprise()">insert
            </button>
          </div>
          <div>

          </div>

        </div>
        <div>
          <p>Nouvelle Offre d'emplois</p>

          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="titleAdvertisements"
            type="text"
            placeholder="Titre de l'annonce">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="shortDescription"
            type="text"
            placeholder="Description Courte">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="fullDescription"
            type="text"
            placeholder="Description Longue">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="wages" type="text"
            placeholder="Salarire">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="place" type="text"
            placeholder="Emplacement">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="TypeOfJob" type="text"
            placeholder="Type de travail">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="hourWeek" type="text"
            placeholder="Hour Week">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="image" type="text"
            placeholder="Image URL">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="CompaniesID" type="text"
            placeholder="Numéro de l'entreprise">
          <button
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-on:click="createCard()">insert
          </button>
        </div>
        <div>
          <div>
            <p>Nouvelle utilisateurs</p>
            <!--          this.mailPeople,this.namePeople,this.phonePeople,this.statusPeople-->
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="mailPeople"
              placeholder="mailPeople">
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="namePeople"
              placeholder="namePeople">

            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="phonePeople"
              placeholder="phonePeople">
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="statusPeople"
              placeholder="statusPeople">
            <button
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-on:click="createUtilisateur()">insert
            </button>
          </div>

        </div>


        <div class="border-t mt-1 flex flex-wrap justify-center">
          <div>

            <p>Supprimer une entreprise</p>
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="idEntrepriseDelete"
              id="delete-entreprise" type="text"
              placeholder="ID de l'entreprise">
            <button
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-on:click="deleteEntreprise()">DELETE
            </button>
          </div>
          <div>
            <p> Supprimer une Offre d'emplois</p>
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="idCardDelete" id="delete-emploi"
              type="text" placeholder="Numéro de l'annonce">
            <button
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-on:click="deleteCard()">DELETE
            </button>
          </div>
          <div>
            <p>Supprimer un utilisateur</p>
            <input
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-model="idUtilisateurDelete" id="delete-utilisateur"
              type="text" placeholder="Numéro de l'utilisateur">
            <button
              class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
              v-on:click="deleteUtilisateur()">DELETE
            </button>
          </div>
        </div>
        <div class="border-t mt-1">
          <p>Modifier un utilisateur</p>
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="idUtilisateurPut" id="modify-utilisateur"
            type="text" placeholder="Numéro de l'entreprise">
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
        <div>
          <p>Modifier une entreprise</p>
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="idEntreprisePut" id="modify-idEntreprise"
            type="text" placeholder="Numéro de l'utilisateur">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="nameCompaniesPut" id="modify-CompanyName"
            type="text" placeholder="Nouveau Nom">
          <button
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-on:click="modifierentreprise()">MODIFIER
          </button>
        </div>

        <div>
          <p>Modifier une Offre</p>
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="idAdvertisementsPut" id="modify-idOffre"
            type="text" placeholder="Numéro de l'offre">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="titleAdvertisementsPut"
            placeholder="titleAdvertisements">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="shortDescriptionPut"
            placeholder="shortDescription">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="fullDescriptionPut"
            placeholder="fullDescription">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="wagesPut"
            placeholder="wages">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="placePut"
            placeholder="place">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="TypeOfJobPut"
            placeholder="TypeOfJob">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="hourWeekPut"
            placeholder="hourWeek">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="CompaniesIDPut"
            placeholder="CompaniesID">
          <input
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-model="imagePut"
            placeholder="image">
          <button
            class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"
            v-on:click="modifieCard()">MODIFIER
          </button>
        </div>

      </div>
    </div>

    <div class="flex flex-wrap w-full">
      <div
        class="transition-all duration-150  px-4 py-6 md:w-1/3 lg:w-1/4"
        v-for="(jobsmaisdiff) in cards"
      >


        <div
          class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150  rounded-lg shadow-lg hover:shadow-2xl"
        >
          <div class="md:flex-shrink-0">
            <img
              v-bind:src="jobsmaisdiff.image"
              alt="Blog Cover"
              class="object-fill w-full rounded-lg rounded-b-none md:h-56"
            />
          </div>
          <div
            class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-bold uppercase">
                      {{ jobsmaisdiff.nameCompanies }}</span>
          </div>
          <hr class="border border-none bg-border-color-primary "/>
          <div
            class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <div class="hover:underline ">
              <p class="border">Offre n°{{ jobsmaisdiff.idAdvertisements }}</p>
              <h2 class="text-sm font-bold tracking-normal ">
                {{ jobsmaisdiff.titleAdvertisements }}</h2>
            </div>
          </div>
          <hr class="border border-none bg-border-color-primary"/>

          <p
            class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-xd text-justify"
          >

            {{ jobsmaisdiff.shortDescription }}
          </p>
          <hr class="border border-none bg-border-color-primary"/>

          <transition name="slide-fade" v-if="showIndex === index">
            <div>
              <div class="flex-wrap flex">
                <ul class="list-inside">
                  <ul class="list-disc flex-wrap flex">
                    <li class="mx-5 text-xs">{{ jobsmaisdiff.wages }} €€€</li>
                    <li class="mx-5 text-xs">Place: {{ jobsmaisdiff.place }}
                    </li>
                    <li class="mx-5 text-xs">Type of work
                      :{{ jobsmaisdiff.TypeOfJob }}
                    </li>
                    <li class="mx-5 text-xs">{{ jobsmaisdiff.hourWeek }} hours
                    </li>
                  </ul>
                </ul>
              </div>
              <p
                class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-xs text-justify">
                {{ jobsmaisdiff.fullDescription }}</p>
              <textarea
                class="h-20 w-full border border-none bg-border-color-primary">
                         </textarea>
            </div>
          </transition>


          <div v-if="logoutApply" class=" shadow rounded-lg p-6">
            <div class="grid lg:grid-cols-2 gap-6">
              <div
                class="border  focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div
                  class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="name" class=" px-1">Name </label>
                  </p>
                </div>
                <p>
                  <input id="name" autocomplete="false" tabindex="0" type="text"
                         class="py-1 px-1  outline-none block h-full w-full">
                </p>
              </div>
              <div
                class="border focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                <div
                  class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="Email" class="px-1">Email</label>
                  </p>
                </div>
                <p>
                  <input id="Email" autocomplete="false" tabindex="0"
                         type="email"
                         class="py-1 px-1 outline-none block h-full w-full">
                </p>
              </div>
              <div
                class="border  transition-all duration-500 relative rounded p-1">
                <div
                  class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                  <p>
                    <label for="Phone" class="  px-1">Phone *</label>
                  </p>
                </div>
                <p>
                  <input id="Phone" autocomplete="false" tabindex="0"
                         type="text"
                         class="py-1 px-1 outline-none block h-full w-full">
                </p>
              </div>
            </div>
          </div>


          <hr class="border-gray-300"/>

          <section class="px-4 py-2 mt-2">
            <div class="flex items-center justify-between">
              <button class="button" v-on:click="showIndex = index">Learn more
              </button>
              <button class="button" @click="logoutApply = !logoutApply">Apply
              </button>
            </div>
          </section>
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
      title: "administrateur page",
    };
  },
  components: {},
  data() {
    return {
      fullCards: [],
      entreprises: [],
      utilisateurs: [],
      cards: [],
      valueNewEntreprisePost: '',
      idEntrepriseDelete: '',
      idUtilisateurDelete: '',
      idCardDelete: '',
      error: '',
      titleAdvertisements: '',
      shortDescription: '',
      fullDescription: '',
      CompaniesID: '',
      wages: '',
      nameCompanies: '',
      place: '',
      TypeOfJob: '',
      maxValue: '',
      idValue: '',
      mailPeople: '',
      namePeople: '',
      phonePeople: '',
      statusPeople: '',
      idUtilisateurPut: '',
      mailPhonePut: '',
      namePeoplePut: '',
      phonePeoplePut: '',
      statusPeoplePut: '',
      idEntreprisePut: '',
      nameCompaniesPut: '',

      idAdvertisementsPut: '',
      titleAdvertisementsPut: '',
      shortDescriptionPut: '',
      fullDescriptionPut: '',
      wagesPut: '',
      placePut: '',
      TypeOfJobPut: '',
      hourWeekPut: '',
      CompaniesIDPut: '',
      imagePut: '',

      hourWeek: '',
      index: '',
      errorMsg: '',
      showIndex: null,
      image: '',
      logoutApply: false
    }
  },
  async created() {
    try {
      this.fullCards = await card.getCard();
      this.cards = this.fullCards.data.result
      this.utilisateur = await card.getUtilisateur();
      this.utilisateurs = this.utilisateur.data.result
      this.entreprise = await card.getEntreprise();
      this.entreprises = this.entreprise.data.result
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async setMax4() {
      this.maxValue = 4;
      this.fullCards = await card.getCardMax(this.maxValue);
      this.cards = this.fullCards.data.result
    },
    async setMax8() {
      this.maxValue = 8;
      this.fullCards = await card.getCardMax(this.maxValue);
      this.cards = this.fullCards.data.result
    },
    async setMax12() {
      this.maxValue = 12;
      this.fullCards = await card.getCardMax(this.maxValue);
      this.cards = this.fullCards.data.result
    },
    async modifierUtilisateur() {
      try {
        await card.modifyUtilisateur(this.idUtilisateurPut, this.mailPhonePut, this.namePeoplePut, this.phonePeoplePut, this.statusPeoplePut);
        this.utilisateur = await card.getUtilisateur();
        this.utilisateurs = this.utilisateur.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
    async modifierentreprise() {
      try {
        await card.modifyEntreprise(this.idEntreprisePut, this.nameCompaniesPut);
        this.entreprise = await card.getEntreprise();
        this.entreprises = this.entreprise.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
    async modifieCard() {
      try {
        await card.modifyCard(this.idAdvertisementsPut, this.titleAdvertisementsPut, this.shortDescriptionPut, this.fullDescriptionPut, this.wagesPut, this.placePut, this.TypeOfJobPut, this.hourWeekPut, this.CompaniesIDPut, this.imagePut);
        this.card = await card.getCard();
        this.cards = this.card.data.result

      } catch (error) {
        console.log(error.message)
      }
    },


    async createCard() {
      try {
        await card.insertCard(this.titleAdvertisements, this.shortDescription, this.fullDescription, this.wages, this.place,
          this.TypeOfJob, this.hourWeek, this.CompaniesID, this.image);
        this.fullCards = await card.getCard();
        this.cards = this.fullCards.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
    async createUtilisateur() {
      try {
        await card.insertUtilisateur(this.mailPeople, this.namePeople, this.phonePeople, this.statusPeople);
        this.utilisateur = await card.getUtilisateur();
        this.utilisateurs = this.utilisateur.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
    async createEntreprise() {
      try {
        this.value = await card.insertEntreprise(this.valueNewEntreprisePost)
        if (this.value.data.status == "error") {
          this.errorMsg = this.value.data.result
        }
        this.entreprise = await card.getEntreprise();
        this.entreprises = this.entreprise.data.result

      } catch (error) {
        console.log(error.message)
      }
    },
    async deleteEntreprise(idEntrepriseDelete) {
      try {
        this.value = await card.deleteEntreprise(this.idEntrepriseDelete);
        if (this.value.data.status == "error") {
          this.errorMsg = this.value.data.result
        }
        this.entreprise = await card.getEntreprise();
        this.entreprises = this.entreprise.data.result
      } catch (error) {
      }

    },
    async deleteUtilisateur(idUtilisateurDelete) {
      try {
        this.value = await card.deleteUtilisateur(this.idUtilisateurDelete);
        if (this.value.data.status == "error") {
          this.errorMsg = this.value.data.result
        }
        this.utilisateur = await card.getUtilisateur();
        this.utilisateurs = this.utilisateur.data.result
      } catch (error) {
      }
    },
    async deleteCard(idCardDelete) {
      try {
        this.value = await card.deleteCard(this.idCardDelete);
        if (this.value.data.status == "error") {
          this.errorMsg = this.value.data.result
        }
        this.fullCards = await card.getCard();
        this.cards = this.fullCards.data.result
      } catch (error) {
      }

    },
    async cardById(idValue) {
      try {
        this.value = this.fullCards = await card.getCardid(this.idValue);
        if (this.value.data.status == "error") {
          this.errorMsg = this.value.data.result
        }
        this.cards = this.fullCards.data.result;
      } catch (error) {
      }
    }
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

