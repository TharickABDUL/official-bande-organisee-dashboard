<template>

    <div class="fixed flex flex-col items-center justify-center h-screen">
      <div class=" flex flex-col">

        <ul class="flex flex-col">
          <li v-for="color of colors" :key="color" class="">
            <component
              :is="`icon-${color}`"
              :class="getClasses(color)"
              @click="$colorMode.preference = color"
            />
          </li>
        </ul>

      </div>
    </div>
</template>

<script>
  import IconLight from '@/assets/light.svg?inline'
  import IconDark from '@/assets/dark.svg?inline'
  import IconSepia from '@/assets/sepia.svg?inline'


  export default {
    components: {
      IconLight,
      IconDark,
      IconSepia
    },
    data() {
      return {
        colors: ['light', 'dark', 'sepia']
      }
    },
    methods: {
      getClasses(color) {
        // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
        if (this.$colorMode.unknown) {
          return {}
        }
        return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
        }
      }
    }
  }

</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    display: inline-block;
    padding: 5px;
  }
  .feather {
    top: 0px;
    cursor: pointer;
    padding: 7px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
  }
  .feather:hover {
    top: -3px;
  }
  .feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
  }
  .feather.selected {
    color: var(--color-primary);
  }
</style>
