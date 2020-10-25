<template>
  <div class="w-full h-screen flex">
    <img
      src="https://previews.123rf.com/images/ponsulak/ponsulak1605/ponsulak160500143/59370651-bangkok-thailand-april24-2016-urban-lifestyle-on-yaowarat-road-chinatown-of-bangkok-yaowarat-road-is.jpg"
      alt="background"
      class="rounded-r-lg object-cover object-center h-screen w-7/12">
    <div class=" flex flex-col justify-center items-center w-5/12 shadow-lg">
      <h1 class="text-3xl mb-2">Login Account</h1>
      <div class="w-1/2 text-center">
        <input type="text" name="name" placeholder="name" autocomplete="off"
               v-model="name"
               class="shadow-md border w-full h-10 px-3 py-2 focus:outline-none mb-3 rounded border-2 border-border-color-primary bg-background-secondary ">
        <input type="phone" name="phone" placeholder="phone" autocomplete="off"
               v-model="phone"
               class="shadow-md border w-full h-10 px-3 py-2 focus:outline-none mb-3 rounded border-2 border-border-color-primary bg-background-secondary">

        <button @click="logInUser(login.name,login.phone)"
                class=" px-3 py-1 rounded text-lg focus:outline-none shadow">
          Login
        </button>


      </div>
      <h1 class="text-3xl mb-2">Create Account</h1>
      <div class="w-1/2 text-center">
        <input type="text" name="name" placeholder="name" autocomplete="off"
               v-model="namePeople"
               class="shadow-md border w-full h-10 px-3 py-2 focus:outline-none mb-3 rounded border-2 border-border-color-primary bg-background-secondary">
        <input type="text" name="phone" placeholder="phone" autocomplete="off"
               v-model="phonePeople"
               class="shadow-md border w-full h-10 px-3 py-2 focus:outline-none mb-3 rounded border-2 border-border-color-primary bg-background-secondary">

        <input type="email" name="email" placeholder="email" autocomplete="off"
               v-model="mailPeople"
               class="shadow-md border w-full h-10 px-3 py-2 focus:outline-none mb-3 rounded border-2 border-border-color-primary bg-background-secondary">

        <div class="flex justify-center">
          <button class=" px-3 py-1 rounded text-lg focus:outline-none shadow"
                  v-on:click="createUtilisateur()" >
            {{ buttonText }} Sign In
          </button>
          <div v-if="compteFinaliser">
            <svg t="1602857490635" class="h-8" viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2552">
              <path
                d="M993.123655 34.1906l-5.145524-5.401521A91.365052 91.365052 0 0 0 919.755138 0.015104c-25.522824 0.511992-49.663267 12.031823-67.019812 31.794731L329.479044 631.736986l-10.291048 4.607932-9.983853-4.966327-129.841285-159.28085c-18.815722-22.911662-45.746525-36.60746-74.597299-37.836242a101.01611 101.01611 0 0 0-77.208461 31.743531c-32.51152 34.201096-36.761058 88.062701-10.035052 127.306923l267.823249 394.182985c15.231775 22.476468 39.807413 35.634674 65.995827 35.634675h23.346855c44.08255 0 85.297942-22.630066 110.257574-60.619906L1005.05308 173.068551c28.415581-43.186563 23.346856-101.656101-11.903825-138.852352"
                p-id="2553" fill="#1afa29"></path>
            </svg>
          </div>

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
      title: "Create account",
    };
  },
  components: {},
  data() {
    return {
      mailPeople: '',
      namePeople: '',
      phonePeople: '',
      statusPeople: 'user',
      idUtilisateurPut: '',
      mailPhonePut: '',
      namePeoplePut: '',
      phonePeoplePut: '',
      statusPeoplePut: '',
      error: '',
      login: {
        name: '',
        phone: ''
      },
      compteFinaliser: false
    }
  },
  props: ["logInUser", "buttonText"],
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
    async logInUser() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async createUtilisateur() {
      try {
        await card.insertUtilisateur(this.mailPeople, this.namePeople, this.phonePeople, this.statusPeople);
        this.compteFinaliser = true
        console.log('Info = ' + this.name + ' ' + this.phone)
      } catch (error) {
        console.log(error.message)
      }
    },
  },
};
</script>
