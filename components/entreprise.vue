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
          <p>People : {{ utilisateur.mailPeople }}</p>
        </div>
      </div>
      <div class="w-4/5">
        <div>
          <p>Nouvelle Offre d'emplois</p>

          <input class="m-1 p-1 rounded-lg" v-model="titleAdvertisements"
                 placeholder="Titre de l'annonce">
          <input class="m-1 p-1 rounded-lg" v-model="shortDescription"
                 placeholder="Description Courte">
          <input class="m-1 p-1 rounded-lg" v-model="fullDescription"
                 placeholder="Description Longue">
          <input class="m-1 p-1 rounded-lg" v-model="wages"
                 placeholder="Salarire">
          <input class="m-1 p-1 rounded-lg" v-model="place"
                 placeholder="Emplacement">
          <input class="m-1 p-1 rounded-lg" v-model="TypeOfJob"
                 placeholder="Type de travail">
          <input class="m-1 p-1 rounded-lg" v-model="hourWeek"
                 placeholder="Hour Week">
          <input class="m-1 p-1 rounded-lg" v-model="image"
                 placeholder="Image URL">
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies"
                 placeholder="Numéro de l'entreprise">
          <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary" v-on:click="createCard(this.titleAdvertisements,this.shortDescription,this.fullDescription,this.fullDescription,this.wages,this.place,this.TypeOfJob,
      this.hourWeek,this.image,this.nameCompanies)">insert
          </button>
        </div>
        <div>
          <p>Nouvelle entreprise</p>
          <input class="m-1 p-1 rounded-lg" v-model="valueNewEntreprise" id="create-entreprise" type="text"
                 placeholder="Nom de l'entreprise">
          <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary" v-on:click="createEntreprise()">insert
          </button>



        </div>
        <div>
          <p>Nouvelle utilisateurs</p>
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies" placeholder="mailPeople">
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies" placeholder="namePeople">
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies" placeholder="namePeople">
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies" placeholder="phonePeople">
          <input class="m-1 p-1 rounded-lg" v-model="nameCompanies" placeholder="statusPeople">
          <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary" v-on:click="createCard(this.titleAdvertisements,this.shortDescription,this.fullDescription,this.fullDescription,this.wages,this.place,this.TypeOfJob,
      this.hourWeek,this.image,this.nameCompanies)">insert
          </button>
        </div>
      </div>
    </div>


    <div
      class="transition-all duration-150 flex flex-wrap w-full px-4 py-6 md:w-1/2 lg:w-1/3"
      v-for="(jobsmaisdiff) in jobsmaisdiffs"
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
          {{jobsmaisdiff.nameCompanies}}
        </span>
        </div>
        <hr class="border border-none bg-border-color-primary "/>
        <div
          class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
          <a href="#" class="hover:underline">
            <h2 class="text-sm font-bold tracking-normal ">
              {{jobsmaisdiff.titleAdvertisements}}
            </h2>
          </a>
        </div>
        <hr class="border border-none bg-border-color-primary"/>
        <p
          class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-xd text-justify"
        >
          {{jobsmaisdiff.shortDescription}}
        </p>
        <hr class="border border-none bg-border-color-primary"/>

        <transition name="slide-fade">
          <div v-if="learnMore">
            <div class="flex-wrap flex">
              <ul class="list-inside">
                <ul class="list-disc flex-wrap flex">
                  <li class="mx-5 text-xs">{{jobsmaisdiff.wages}} €€€</li>
                  <li class="mx-5 text-xs">Place: {{jobsmaisdiff.place}}</li>
                  <li class="mx-5 text-xs">Type of work :{{jobsmaisdiff.TypeOfJob}}
                  </li>
                  <li class="mx-5 text-xs">{{jobsmaisdiff.hourWeek}} hours</li>
                </ul>
              </ul>
            </div>
            <p
              class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-xs text-justify">
              {{jobsmaisdiff.fullDescription}}
            </p>
            <textarea
              class="h-20 w-full border border-none bg-border-color-primary">
             </textarea>
          </div>
        </transition>


        <div v-if="logoutApply" class=" shadow rounded-lg p-6">
          <div class="grid lg:grid-cols-2 gap-6">
            <div
              class="border  focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
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
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="Email" class="px-1">Email</label>
                </p>
              </div>
              <p>
                <input id="Email" autocomplete="false" tabindex="0" type="text"
                       class="py-1 px-1 outline-none block h-full w-full">
              </p>
            </div>
            <div
              class="border  transition-all duration-500 relative rounded p-1">
              <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label for="Phone" class="  px-1">Phone *</label>
                </p>
              </div>
              <p>
                <input id="Phone" autocomplete="false" tabindex="0" type="text"
                       class="py-1 px-1 outline-none block h-full w-full">
              </p>
            </div>
          </div>
        </div>


        <hr class="border-gray-300"/>

        <section class="px-4 py-2 mt-2">
          <div class="flex items-center justify-between">
            <button class="button" @click="learnMore = !learnMore">Learn more
            </button>
            <button class="button" @click="logoutApply = !logoutApply">Apply
            </button>


          </div>

          <div>


          </div>
        </section>
      </div>
    </div>






  </div>


</template>
<script>

import axios from 'axios'
import card from '../components/card';
import jobs from "../components/jobs";

export default {
  head() {
    return {
      title: "Home Page",
    };
  },
  components: {},
  data() {
    return {
      jobs: [],
      entreprises: [],
      utilisateurs: [],
      jobsmaisdiffs: [],
      valueNewEntreprise: '',
      error: '',
      titleAdvertisements: '',
      shortDescription: '',
      fullDescription: '',
      wages: '',
      place: '',
      TypeOfJob: '',
      hourWeek: '',
      image: '',
      nameCompanies: '',
      learnMore: false,
      logoutApply: false
    }
  },
  methods: {
    async createCard(titleAdvertisements, shortDescription, fullDescription, wages, TypeOfJob, hourWeek, image, nameCompanies) {
      try {
        await card.insertCard(this.titleAdvertisements, this.shortDescription, this.fullDescription, this.wages, this.place,
          this.TypeOfJob, this.hourWeek, this.image, this.nameCompanies);
        this.valeur = await card.getCard();
        console.log(this.titleAdvertisements, this.shortDescription, this.fullDescription, this.wages, this.place)
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  async createEntreprise() {
    try {
      await card.insertEntreprise(this.valueNewEntreprise);
      console.log('valuer entreprise -> ' + this.valueNewEntreprise)

      this.entreprise = await card.getEntreprise();
      this.entreprises = this.entreprise.data.result
    } catch (error) {
      console.log(error.data)
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

