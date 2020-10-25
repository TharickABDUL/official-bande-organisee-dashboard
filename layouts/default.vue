<template>

  <div
    class="bg-background-primary min-h-screen flex flex-col w-full justify-center h-full content-center content-wrapper">
    <div class="flex-grow bg">
      <NavBarre/>
      <div class="relative ">
        <div class="absolute fixed z-50">
          <ColorModePicker/>
        </div>
        <nuxt/>

      </div>

    </div>
    <div class="relative">
      <NavFooter/>
    </div>

  </div>
</template>


<script>

  import NavFooter from "~/components/NavFooter.vue";
  import NavBarre from "~/components/NavBarre.vue";
  import ColorModePicker from "../components/themeChangeur"

  export default {
    // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
    data() {
      return {};
    },
    head() {
      return {
        titleTemplate: "%s - JobBoard",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Find an awesome jobs!"
          }
        ]
      };
    },

    components: {
      NavFooter,
      NavBarre,
      ColorModePicker
    }

  };
</script>
