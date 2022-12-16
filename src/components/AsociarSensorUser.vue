<template>

    <div class="w-full">
        <div v-if="!showAddUsers" class="flex justify-start w-full">
            <PlusCircleIcon @click="enableAddUser(true)" class="h-5 w-5 mr-3 text-gray-300 hover:text-gray-600" />
            <span class="ml-2">Sin usuario asignado</span>
        </div>
        <div v-if="showAddUsers" class="flex justify-start items-center w-full">
            <XCircleIcon @click="enableAddUser(false)" class="h-5 w-5 mr-3 text-gray-300 hover:text-gray-600" />
            <select v-model="selectedUser" name="users" id="users"
                class=" block w-2/3 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>Selecciona un usuario</option>
                <option v-for="(u, index) in usuarios" :key="index" :value="u.nickname">
                    {{ u.nickname }} ({{ u.email }})
                </option>
            </select>
            <button v-if="selectedUser"
                class="ml-8 focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="asociarUsuarioSensor()">
                Asociar a {{ selectedUser }}
            </button>

        </div>
    </div>

</template>

<script>

import { defineComponent, ref, toRaw } from 'vue'

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

import { PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'

import { logicaFakeUsuario } from '@/logicaFake/resources/usuario';
import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento';

export default defineComponent({
    components: {
        PlusCircleIcon,
        XCircleIcon
    },
    props: {
        uuid: String
    },
    async setup() {

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

        return {
            usuarios,
            showAddUsers,
            selectedUser,
            enableAddUser
        }

    },
    methods: {
        async asociarUsuarioSensor() {

            if(this.selectedUser === "") {
                console.log("selecciona un usuario")
                return;
            }

            const res = logicaFakeAyuntamiento.asociarUsuarioSensor(this.uuid, this.selectedUser);
            console.log(res)
        }
    }
})

</script>