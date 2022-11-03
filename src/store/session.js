import { defineStore } from 'pinia'

import { AuthAPI } from '@/api/resources/auth'

export const useSessionStore = defineStore('session', {

    state: () => ({    
      user: null,  //user: { nickname, email }
    }),
  
    getters: {
      isLogged() {
        return this.user != null
      }
    },
    
    actions: {

      async login(email, password) {
        try {
          this.user = await AuthAPI.login(email, password)
          window.sessionStorage.setItem("user", JSON.stringify(this.user))
          return true    
        } catch (error) {
          console.log(error)          
          return false
        }
      },
  
      logout() {
        this.user = null
        window.sessionStorage.removeItem("user")
      },
      
      tryAutoLogin(){
        const savedUserSession = window.sessionStorage.getItem("user")
        if(savedUserSession) {
          this.user = JSON.parse(savedUserSession)
          return true
        }
        else {
          return false
        }
      }

    },
  })