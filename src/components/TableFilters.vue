<template>
    <div class="container mx-auto dark:text-gray-300" :key="refreshKey">
        <div class="flex gap-6 items-center mb-4 p-4 bg-gray-100 dark:bg-white/5 shadow-md rounded-xl">
            <input type="text" placeholder="Filtrar por UUID" v-model="filtroUuid" class="border rounded py-1 px-3"
                :class="filtroUuid ? 'bg-white dark:bg-white/10' : 'bg-gray-300 bg-white/5'" />
            <input type="text" placeholder="Filtrar por Nombre" v-model="filtroNombre" class="border rounded py-1 px-3"
                :class="filtroNombre ? 'bg-white dark:bg-white/10' : 'bg-gray-300 bg-white/5'" />
            <label class="inline-flex items-center">
                <input type="checkbox" v-model="filtroActivo" class="form-checkbox dark:bg-white/10 rounded" />
                <span class="ml-2"
                    :class="filtroActivo ? 'text-gray-900 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'">Solo
                    inactivos</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" v-model="filtroSinUser" class="form-checkbox dark:bg-white/10 rounded" />
                <span class="ml-2"
                    :class="filtroSinUser ? 'text-gray-900 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500'">Sin
                    usuario asignado</span>
            </label>
            <button class="rounded-lg p-2 bg-blue-500 text-white" @click="exportToPDF">Export to PDF</button>
        </div>
        <table id="data-table" class="table w-full">
            <thead>
                <tr class="grid grid-cols-3">
                    <th class="px-4 py-2 hover:bg-gray-100 cursor-pointer" v-on:click="sortBy('uuid')">
                        UUID
                        <!-- Muestra una flecha arriba o abajo para indicar el orden actual de la tabla -->
                        <span v-if="sortColumn === 'uuid' && sortDirection === 'asc'">▲</span>
                        <span v-if="sortColumn === 'uuid' && sortDirection === 'desc'">▼</span>
                    </th>
                    <th class="px-4 py-2 hover:bg-gray-100 cursor-pointer" v-on:click="sortBy('inactivoDesde')">
                        Activo
                        <!-- Muestra una flecha arriba o abajo para indicar el orden actual de la tabla -->
                        <span v-if="sortColumn === 'inactivoDesde' && sortDirection === 'asc'">▲</span>
                        <span v-if="sortColumn === 'inactivoDesde' && sortDirection === 'desc'">▼</span>
                    </th>
                    <th class="px-4 py-2 hover:bg-gray-100 cursor-pointer" v-on:click="sortBy('user.nickname')">
                        Nombre
                        <!-- Muestra una flecha arriba o abajo para indicar el orden actual de la tabla -->
                        <span v-if="sortColumn === 'user.nickname' && sortDirection === 'asc'">▲</span>
                        <span v-if="sortColumn === 'user.nickname' && sortDirection === 'desc'">▼</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="filteredData.length <= 0" class="text-center">
                    <td class="p-10">
                        <span> - Sin coincidencias -</span>
                    </td>
                </tr>
                <tr v-for="(item, index) in filteredData" :key="index"
                    :class="{ 'bg-gray-100 dark:bg-gray-900': index % 2 === 0 }" class="grid grid-cols-3">
                    <td class="px-4 py-2 h-full flex items-center">
                        <div class="text-sm font-medium">
                            {{ item.uuid }}
                        </div>
                    </td>
                    <td class="px-4 py-2 flex items-center h-full">
                        <div class="text-sm font-medium flex h-full items-center">
                            <span class="h-2 rounded-full p-1" :class="{
                                'bg-green-500 dark:bg-green-400 outline outline-2 outline-offset-1 outline-green-300 dark:outline-green-500': item.activo,
                                'bg-red-500 dark:bg-red-500': !item.activo
                            }"></span>
                            <span class="ml-4 font-bold" v-if="item.activo">activo</span>
                            <span class="ml-4 font-bold" v-if="!item.activo">inactivo
                                <span class="font-medium text-sm">desde hace {{
                                    tiempoTranscurrido(item.inactivoDesde)
                                }}</span>
                            </span>
                        </div>
                    </td>
                    <td class="px-4 py-2">
                        <div v-if="item.user"
                            class="w-full h-12 group relative flex flex-row gap-6 items-center px-4 py-2 shadow relative rounded-md text-sm font-medium border bg-white dark:bg-white/10 shadow hover:shadow-md">
                            <div class="flex flex-row gap-8 items-center justify-start">
                                <div class="flex flex-col items-end gap-2 text-right">
                                    <p>
                                        <span class="font-bold text-gray-500 dark:text-gray-400"></span>{{
                                            item.user.nickname
                                        }}
                                        ( <i class="text-gray-500 dark:text-gray-400">{{ item.user.email }}</i> )
                                    </p>

                                </div>
                                <XCircleIcon
                                    class="absolute right-2 hidden group-hover:block h-5 w-5 ml-3 text-gray-300 hover:text-red-600"
                                    @click="desasociarUsuarioSensor(item.uuid, item.user.nickname)" />
                            </div>
                        </div>
                        <AsociarSensorUser v-if="!item.user" :uuid="item?.uuid" @updated="OnSensorUserAsociado" />

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

  
<script setup>


import { ref, computed, toRaw } from 'vue'

import moment from 'moment'
import objectPath from 'object-path'

import jsPDF from 'jspdf'
import 'jspdf-autotable'

import { logicaFakeUsuario } from '@/logicaFake/resources/usuario';
import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento';

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

import { XCircleIcon } from '@heroicons/vue/24/outline'
import AsociarSensorUser from './AsociarSensorUser.vue'


const refreshKey = ref(0);

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const userRaw = { ...toRaw(user.value) };

const ayto = await logicaFakeUsuario.getAyuntamiento(userRaw.nickname);
let data = await logicaFakeAyuntamiento.getSensoresUsuarios(ayto.id);

const exportToPDF = () => {
    const doc = new jsPDF()
    doc.autoTable({ html: '#data-table' })
    doc.save('data-sensores.pdf')
}

//const today = new Date()
// data.forEach(item => {
//     const randomMilliseconds = Math.floor(Math.random() * 86400000)
//     if (!item.activo) item.inactivoDesde = today.getTime() - randomMilliseconds
// })

const filtroUuid = ref('')
const filtroNombre = ref('')
const filtroActivo = ref(false)
const filtroSinUser = ref(false)
const sortColumn = ref('uuid')
const sortDirection = ref('asc')

//utils?
const removeAccents = (str) => {
    const strNorm = str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return strNorm?.toLowerCase()
}

const tiempoTranscurrido = (inactivoDesde) => {
    const milisegundos = moment().diff(inactivoDesde)
    const segundos = Math.floor(milisegundos / 1000)
    const minutos = Math.floor(segundos / 60)
    const horas = Math.floor(minutos / 60)

    let tiempoTranscurrido = ''

    if (horas) {
        tiempoTranscurrido += `${horas} hora${horas > 1 ? 's' : ''} `
    }
    if (minutos) {
        tiempoTranscurrido += `${minutos % 60} minuto${minutos % 60 > 1 ? 's' : ''} `
    }
    if (segundos) {
        tiempoTranscurrido += `${segundos % 60} segundo${segundos % 60 > 1 ? 's' : ''} `
    }

    return tiempoTranscurrido
}


const filteredData = computed(() => {

    refreshKey.value;

    let filtered = data
        .filter(item => {
            if (filtroUuid.value && !item.uuid.includes(filtroUuid.value)) {
                return false
            }
            if (filtroActivo.value && item.activo) {
                return false
            }
            if (filtroSinUser.value && item.user) {
                return false
            }
            if (filtroNombre.value && !removeAccents(item.user?.nickname)?.includes(filtroNombre.value)) {
                return false
            }
            return true
        })
        .sort((a, b) => {

            let aFieldData = objectPath.get(a, sortColumn.value)
            let bFieldData = objectPath.get(b, sortColumn.value)

            if (sortDirection.value === 'asc') {
                return typeof (aFieldData) === 'string'
                    ? removeAccents(aFieldData)?.localeCompare(removeAccents(bFieldData))
                    : bFieldData - aFieldData
            } else {
                return typeof (aFieldData) === 'string'
                    ? removeAccents(bFieldData)?.localeCompare(removeAccents(aFieldData))
                    : aFieldData - bFieldData
            }
        })

    return filtered
})

const sortBy = (column) => {
    if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortColumn.value = column
        sortDirection.value = 'asc'
    }
}

async function desasociarUsuarioSensor(uuid, nickname) {

    const res = await logicaFakeAyuntamiento.desasociarUsuarioSensor(uuid, nickname);

    if (res.success) {
        OnSensorUserAsociado(res)
    }

}


const OnSensorUserAsociado = async () => {
    data = await logicaFakeAyuntamiento.getSensoresUsuarios(ayto.id);
    refreshKey.value += 1;
}



</script>
