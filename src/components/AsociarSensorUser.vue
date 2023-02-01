<template>

    <div :class="selectedUser ? 'border-blue-500' : 'border-tranparent'"
        class="border group w-full h-12 flex justify-start items-center flex-row gap-6 px-4 py-2 shadow-inner relative rounded-md text-sm font-medium bg-gray-200 dark:bg-white/10 text-gray-400">
        <div v-if="!showAddUsers" class="flex justify-start items-center w-full">
            <PlusCircleIcon @click="enableAddUser(true)" class="h-5 w-5 mr-3 text-gray-400 hover:text-gray-600 min-w-fit hover:cursor-pointer" />
            <span class="ml-2">Sin usuario asignado</span>
        </div>
        <div v-if="showAddUsers" class="flex justify-start items-center w-full">
            <XCircleIcon @click="enableAddUser(false)" class="h-5 w-5 mr-3 text-gray-400 hover:text-gray-600 min-w-fit hover:cursor-pointer" />
            <SearchUsersInput @updated="handleSelectedUserUpdate" id="users" :users="usuarios"/>            
            <button v-if="selectedUser"
                class="ml-6 px-3 py-2 text-sm focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="asociarUsuarioSensor()">
                Asociar
            </button>

        </div>
    </div>

</template>

<script setup>

import SearchUsersInput from './SearchUsersInput.vue'

import { defineProps, ref, toRaw, defineEmits } from 'vue'

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

import { PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'

import { logicaFakeUsuario } from '@/logicaFake/resources/usuario';
import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento';


const props = defineProps(['uuid'])
const emit = defineEmits(['updated'])

const emitUpdated = (res) => {
    emit('updated', res);
}

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const userRaw = { ...toRaw(user.value) };
const ayto = await logicaFakeUsuario.getAyuntamiento(userRaw.nickname);

const usuarios = await logicaFakeAyuntamiento.getUsuarios(ayto.id);

const selectedUser = ref("")

const showAddUsers = ref(false)

const enableAddUser = (enable) => {
    selectedUser.value = ""
    showAddUsers.value = enable;
}

async function asociarUsuarioSensor() {

    if (selectedUser.value === "") {
        console.log("selecciona un usuario")
        return;
    }

    const res = await logicaFakeAyuntamiento.asociarUsuarioSensor(props.uuid, selectedUser.value);
    emitUpdated(res)

}

function handleSelectedUserUpdate(selected) {
    selectedUser.value = selected
}


</script>