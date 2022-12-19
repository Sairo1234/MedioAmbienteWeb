<template>
  <div class="home flex flex-col items-center">
    <img alt="Commun03 logo" src="../assets/communo3_logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>

img {
  max-width: 200px;
}

</style>
