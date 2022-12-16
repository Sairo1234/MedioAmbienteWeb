<template>

  <div id="app" class="dark:bg-slate-800">
    <NavBar id="navBar" class="h-16 md:h-24"></NavBar>
    <router-view class="pt-16 md:pt-24" />
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

function disableF5(e) {
  if ((e.which || e.keyCode) == 116) {
    //console.log(router.currentRoute)
    //e.preventDefault();
  }
}

// To disable f5
document.onkeydown = disableF5;

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
  scroll-padding-top: calc(40px + 50px);
  scroll-behavior: smooth;
  /* 40px + height of sticky header */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#navBar {
    z-index: 9999;
}

</style>
