<template>
  <div class="flex flex-wrap mx-auto">


    <div v-if="error" class="content-center w-full justify-center h-full">
      <p class="text-2xl font-bold text-center ">Erreur de connection sur l'API</p>
      <p class="text-xl font-bold text-center ">̿̿’̿’\̵͇̿̿\=(•̪●)=/̵͇̿̿/’̿̿ ̿ ̿ ̿</p>
    </div>

    <div class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
      v-for="(jobsmaisdiff,index) in jobsmaisdiffs">


      <div
        class="min-h-full pb-4 mb-6 transition-all duration-150  rounded-lg shadow-lg hover:shadow-2xl"
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
        <span class="text-sm font-bold uppercase">
          {{jobsmaisdiff.nameCompanies}}
        </span>
        </div>
        <hr class="border border-none bg-border-color-primary "/>
        <div
          class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
          <div role="alert" v-if="errorMsg">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Danger
            </div>
            <div
              class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <h1>{{ errorMsg }}</h1>
            </div>
          </div>

          <a href="#" class="hover:underline">
            <h2 class="text-2xl font-bold tracking-normal ">
            {{jobsmaisdiff.idAdvertisements}}  {{jobsmaisdiff.titleAdvertisements}}
            </h2>
          </a>
        </div>
        <hr class="border border-none bg-border-color-primary"/>
        <p
          class="w-full px-4 py-2 overflow-hidden text-sm text-justify"
        >
          {{jobsmaisdiff.shortDescription}}
        </p>
        <hr class="border border-none bg-border-color-primary"/>

        <transition name="slide-fade" v-if="showIndex === index"  >
          <div >
            <div class="flex-wrap flex">
              <ul class="list-inside">
                <ul class="list-disc flex-wrap flex">
                  <li class="mx-5">{{jobsmaisdiff.wages}} €€€</li>
                  <li class="mx-5">Place: {{jobsmaisdiff.place}}</li>
                  <li class="mx-5">Tyype of work :{{jobsmaisdiff.TypeOfJob}}
                  </li>
                  <li class="mx-5">{{jobsmaisdiff.hourWeek}} hours</li>
                </ul>
              </ul>
            </div>
            <p
              class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify">
              {{jobsmaisdiff.fullDescription}}
            </p>
            <textarea v-model="message"
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
            <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary"  v-on:click="showIndex = index">Learn more
            </button>
            <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary" @click="insertmessage()"
                    v-on:click="idvalueAdvertisements = jobsmaisdiff.idAdvertisements">Apply
<!--            <button class="m-1 p-1 rounded-lg  border-2 border-border-color-primary bg-background-secondary" @click="logoutApply = !logoutApply">Apply-->
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

  import card from '../components/card';

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
          jobsmaisdiffs: [],
        message: '',
        error: '',
        errorMsg: '',
        advertisementsID: '',
        idvalueAdvertisements: '',
        showIndex: null,
        logoutApply: false
      }
    },
    async created() {
      try {
        this.jobs = await card.getCard();
        this.jobsmaisdiffs = this.jobs.data.result
      } catch (err) {
        this.error = err.message;
      }
    },
    methods: {
      async fetchLongueDescription() {
        try {
          this.fullCards = await card.getCard();
          this.cards = this.fullCards.data.result;
        } catch (error) {
        }
      },
      async insertmessage() {
        try {
          this.value = await card.insertMessage(this.message,1,this.idvalueAdvertisements)
          console.log(this.value)

          if (this.value.data.status == "error") {
            this.errorMsg = this.value.data.result
          }

          this.entreprise = await card.getEntreprise();
          this.entreprises = this.entreprise.data.result

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

