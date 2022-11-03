import { defineStore } from 'pinia'

import { MedicionesAPI } from '@/api/resources/mediciones'

export const useMedicionesStore = defineStore('mediciones', {

  state: () => ({    
    mediciones: [],  //medicion: { id, sensor, valor, lat, lon, createdAt, updatedAt }
  }),

  getters: {
    medicionesTotales() {
      return this.mediciones.length
    }
  },
  
  actions: {

    //carga y rellena las mediciones en el array de la store
    async cargarMediciones() {
      try {
        this.mediciones = await MedicionesAPI.cargarMediciones()
      }
      catch (error) {
        console.log(error)
      }
    },

    //elimina una medicion y vuleve a cargar las mediciones en el array
    async eliminarMedicion(id) {
      try {
        await MedicionesAPI.eliminarMedicion(id)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
})