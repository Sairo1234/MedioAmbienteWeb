<template>
  <link href="https://unpkg.com/primevue/resources/themes/fluent-light/theme.css" rel="stylesheet">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="isLogged" to="/mediciones">Mediciones ({{ medicionesTotales }})</router-link>
    <router-link v-if="!isLogged" to="/login">Login</router-link>
    <div v-if="isLogged">{{ user }}</div>
    <PrimeButton v-if="isLogged" @click="handleLogoutButtonClick">Cerrar sesión</PrimeButton>
  </nav>
  <router-view />

</template>

<script>

import { io } from 'socket.io-client'

import { defineComponent } from 'vue'
import { useSessionStore } from '@/store/session'
import { useMedicionesStore } from '@/store/mediciones'
import { storeToRefs } from 'pinia'
import router from './router'

export default defineComponent({

  setup() {

    const medicionesStore = useMedicionesStore()
    medicionesStore.cargarMediciones()

    const sessionStore = useSessionStore()
    const { user } = storeToRefs(sessionStore)

    if (sessionStore.tryAutoLogin()) router.push("/")

    const handleLogoutButtonClick = async () => {
      sessionStore.logout();
      router.push("/login")
    }

    /********* start sockets  *********/

    const socket = io("http://localhost:3000")
    // callbacks que se ejecutan cuando se emite un evento desde el servidor

    //cuando se conecta al servidor
    socket.on("connect", () => {
      console.log("socket connected")
    })

    //cuando se desconecta al servidor
    socket.on("disconnect", () => {
      console.log("socket disconnected")
    })

    //cuando se crea una nueva medicion en el servidor
    socket.on("nuevaMedicion", (medicion) => {
      console.log('this method was fired by the socket server: io.emit("nuevaMedicion", data)', medicion)
      medicionesStore.cargarMediciones()
    })
    /********* end sockets  *********/


    return {
      sessionStore,
      medicionesStore,
      user,
      handleLogoutButtonClick
    }
  },
  computed: {
    isLogged() {
      return this.sessionStore.isLogged
    },
    medicionesTotales() {
      return this.medicionesStore.medicionesTotales
    },
  },
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0078D4;
}
</style>
