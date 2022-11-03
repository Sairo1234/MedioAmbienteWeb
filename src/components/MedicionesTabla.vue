<template>
  <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sensor</th>
                    <th>Valor</th>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Fecha</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in mediciones" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.sensor }}</td>
                    <td>{{ item.valor }}</td>
                    <td>{{ item.lat }}</td>
                    <td>{{ item.lon }}</td>
                    <td>{{ $dayjs(item.createdAt).format('MMM D, YYYY h:mm A') }}</td>
                    <td>
                        <button @click="eliminarMedicion(item.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
</template>

<script>

//import { io } from 'socket.io-client'

import { storeToRefs } from 'pinia'
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useMedicionesStore } from '../store/mediciones'

export default defineComponent({

    name: 'MedicionesTabla',
    
    setup() {

        const medicionesStore = useMedicionesStore()
        const { mediciones } = storeToRefs(medicionesStore) //medicion: { id, sensor, valor, lat, lon, createdAt, updatedAt }

        //se ejecuta despues de que se ha creado el componente
        onMounted(() => {
            console.log("MedicionesView : mounted")           
        })        

        const eliminarMedicion = (id) => {
            medicionesStore.eliminarMedicion(id)
            medicionesStore.cargarMediciones()
        }        
        
        //se ejecuta despues de que se ha creado el componente
        onUnmounted(() => {
            console.log("MedicionesView : unmounted")
            //socket.disconnect()
        })

        return {
            mediciones,
            eliminarMedicion
        }

    }
})
</script>


<style scoped>

table {
    font-family: sans-serif;
    width: fit-content;
}

th,
td {
    padding: 0.25em 0.5em;
    text-align: left;
}

th:nth-child(2),
td:nth-child(2) {
    text-align: right;
}

td {
    background-color: #eee;
}

th {
    background-color: #0078D4;
    color: #fff;
}
</style>