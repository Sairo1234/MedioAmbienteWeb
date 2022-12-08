import { defineStore } from 'pinia'

import { logicaFakeAuth } from '@/logicaFake/resources/auth'
import { logicaFakeUsuario } from '@/logicaFake/resources/usuario'

export const useSessionStore = defineStore('session', {

  state: () => ({
    user: null,  //user: { nickname, email, profile_photo_url, rol }
  }),

  getters: {
    isLogged() {
      return this.user != null
    }
  },

  actions: {

    async login(email, password) {

      this.user = await logicaFakeAuth.login(email, password)
      window.sessionStorage.setItem("user", JSON.stringify(this.user))
      return true;

    },

    logout() {
      this.user = null
      window.sessionStorage.removeItem("user")
    },

    tryAutoLogin() {

      const savedUserSession = window.sessionStorage.getItem("user")

      if (savedUserSession) {
        this.user = JSON.parse(savedUserSession)
        return true;
      }
      else {
        return false;
      }
    },

    async cambiarContrasenya(currentPassword, newPassword) {

      const res = await logicaFakeAuth.cambiarContrasenya(this.user?.nickname, currentPassword, newPassword)
      return res;

    },

    async editarPerfil(newData) {

      const res = await logicaFakeUsuario.editarPerfil(this.user?.nickname, newData)
      return res;
      
    },


  },
})