<template>
  <!-- <link href="https://unpkg.com/primevue/resources/themes/fluent-light/theme.css" rel="stylesheet">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="isLogged" to="/mediciones">Mediciones ({{ medicionesTotales }})</router-link>
    <router-link v-if="!isLogged" to="/login">Login</router-link>
    <div id="user-info" v-if="isLogged">
      <img v-bind:src="user.profile_photo_url"/>
      <div>
        <b>{{ user.nickname }}</b>
        <br>
        <span>{{ user.email }}</span>
      </div>
    </div>
    <PrimeButton v-if="isLogged" @click="handleLogoutButtonClick">Cerrar sesión</PrimeButton>
  </nav>
  <router-view /> -->

  <div id="app" class="dark:bg-slate-800">
    <NavBar></NavBar>
    <router-view class="pt-16 md:pt-18" />
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

import { defineComponent } from 'vue'
import { useSessionStore } from '@/store/session'
import router from './router'
import { computed } from '@vue/reactivity';

export default defineComponent({

  components: {
    NavBar
  },

  setup() {    

    const sessionStore = useSessionStore()

    if (sessionStore.tryAutoLogin()) router.push("/")

    const handleLogoutButtonClick = async () => {
      sessionStore.logout();
      router.push("/login")
    }

    const isLogged = computed(() => {
      return sessionStore.isLogged
    })

    return {
      isLogged,
      handleLogoutButtonClick
    }
  }

})


</script>


<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

html {
  scroll-padding-top: calc(40px + 20px);
  /* 40px + height of sticky header */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
