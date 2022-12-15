<template>

    <div class="flex flex-col gap-2 w-full">

        <!----------Texto---------->
        <h1 class="mb-2 text-2xl font-bold text-gray-700 dark:text-white mt-2">
            {{ title }}
        </h1>

        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div class="flex flex-wrap lg:flex-nowrap gap-8 p-4 md:p-0">
            <!-- Usuarios -->
            <div class="flex flex-col gap-2 w-full">
                <div class="flex justify-between">
                    <h1 class="mb-2 text-xl font-bold text-gray-700 dark:text-white mt-6">
                        Sensores
                    </h1>
                    <h1 class="mb-2 text-xl font-bold text-gray-700 dark:text-white mt-6">
                        Usuarios
                    </h1>
                </div>

                <div class="p-6 bg-gray-100 dark:bg-white/5 rounded flex flex-col gap-4 shadow-md">

                    <h1 class="font-bold text-gray-700 dark:text-white">
                        Filtros
                    </h1>

                    <div class="grid grid-cols-4 gap-4">
                        <Input class="col-span-2 grow placeholder:text-gray-300" size="sm"
                            placeholder="filtrar por uuid" label="UUID" v-model="searchUserInput.uuid">
                        <template #prefix>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </template>
                        </Input>
                        <Input class="grow placeholder:text-gray-300" size="sm" placeholder="filtrar por nickname"
                            label="Nickname" v-model="searchUserInput.nickname">
                        <template #prefix>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </template>
                        </Input>
                        <Input class="grow placeholder:text-gray-300" size="sm" placeholder="filtrar por email"
                            label="Email" v-model="searchUserInput.email">
                        <template #prefix>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </template>
                        </Input>
                    </div>
                </div>


                <div class="grid grid-cols-1 2xl:grid-cols-1 gap-4 p-6">
                    <div v-for="(sensor, index) in filteredSensoresUsuario" :key="index" class="grid grid-cols-2 gap-4">
                        <div
                            class="flex flex-row gap-6 items-center shadow hover:shadow-md duration-200 relative rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <Avatar :status="sensor.activo ? 'online' : 'offline'" bordered rounded
                                img="https://i.pinimg.com/736x/05/ca/61/05ca610ff78bb9c6f23efc2039842cec.jpg" />
                            <div class="flex flex-col gap-2">
                                <p class="text-gray-500 dark:text-gray-400">{{ sensor.uuid }}</p>
                                <div :class="[sensor.activo ? 'bg-green-100 dark:border-green-400 text-green-400 dark:text-green-500' : 'bg-red-100 dark:border-red-400 text-red-400 dark:text-red-500']"
                                    class="w-fit dark:bg-slate-800 dark:border px-2 rounded ">
                                    {{ sensor.activo ? 'Activo' : 'Inactivo' }}
                                </div>
                            </div>
                            <!-- <XMarkIcon class="h-5 w-5 mr-2 text-gray-300 hover:text-gray-600" /> -->
                        </div>

                        <div :class="!sensor.user ? 'text-gray-400 border-gray-300 dark:border-gray-600 bg-gray-500/10 dark:bg-slate-800' : 'border text-gray-700  hover:shadow-md  hover:bg-gray-50 border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800'"
                            class="flex flex-row gap-6 items-center px-4 py-2 shadow duration-200 relative rounded-md text-sm font-medium">
                            <div v-if="sensor.user" class="w-full">
                                <div class="flex flex-row-reverse gap-8 items-center justify-start">

                                    <Avatar bordered rounded :img=sensor.user.profile_photo_url />
                                    <div class="flex flex-col gap-2 text-right">
                                        <p class="font-bold text-gray-500 dark:text-gray-400">{{ sensor.user.nickname }}
                                        </p>
                                        <i class="text-gray-500 dark:text-gray-400">{{ sensor.user.email }}</i>

                                        <div class="flex gap-4" v-if="false"> <!-- !!!!!! -->
                                            <div :class="[sensor.user.verified ? 'bg-green-100 dark:border-green-400 text-green-400 dark:text-green-500' : 'bg-red-100 dark:border-red-400 text-red-400 dark:text-red-500']"
                                                class="w-fit dark:bg-slate-800 dark:border  px-2 rounded ">
                                                {{ sensor.user.verified ? 'Verificado' : 'No verificado' }}
                                            </div>
                                            <div v-if="!sensor.user.verified">
                                                <a class="text-blue-600" onclick="">Enviar solicitud de activacion ></a>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div v-if="!sensor.user" class="flex justify-between w-full">
                                <span>Sin usuario asignado</span>
                                <PlusCircleIcon @click="addUserToSensorClicked(sensor.uuid)"
                                    class="h-5 w-5 mr-2 text-gray-300 hover:text-gray-600" />
                            </div>
                        </div>
                        <!-- <div class="absolute right-6">></div> -->

                    </div>
                </div>
            </div>

            <!-- Sensores
            <div class="flex flex-col gap-2 w-full lg:w-1/2">


                <h1 class="mb-2 text-xl font-bold text-gray-700 dark:text-white mt-6">
                    <h1>Sensores</h1>
                </h1>

                <div class="p-6 bg-gray-100 dark:bg-white/5 rounded flex flex-col gap-4 mb-4 shadow-md">

                    <h1 class="font-bold text-gray-700 dark:text-white">
                        Filtros
                    </h1>

                    <div class="flex wrap gap-4">
                        <Input class="grow placeholder:text-gray-300" size="sm" placeholder="filtrar por nickname"
                            label="UUID" v-model="searchSensorInput.uuid">
                        <template #prefix>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </template>
                        </Input>
                    </div>
                </div>

                <div class="grid grid-cols-1 4xl:grid-cols-1 gap-4">
                    <div v-for="(sensor, index) in filteredSensores" :key="index"
                        class="shadow-md relative rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                        <div class="flex xl:flex-row flex-col gap-8 items-start xl:items-center">
                            <Avatar :status="sensor.activo ? 'online' : 'offline'" bordered rounded
                                img="https://i.pinimg.com/736x/05/ca/61/05ca610ff78bb9c6f23efc2039842cec.jpg" />
                            <div class="flex flex-col gap-2">
                                <p class="font-bold text-gray-500 dark:text-gray-400">{{ sensor.uuid }}</p>
                                <span class="text-gray-500 dark:text-gray-400">Valor de calibracion: <i>{{
                                        sensor.valorCalibracion
                                }}</i></span>
                                <div :class="[sensor.activo ? 'bg-green-100 dark:border-green-400 text-green-400 dark:text-green-500' : 'bg-red-100 dark:border-red-400 text-red-400 dark:text-red-500']"
                                    class="w-fit dark:bg-slate-800 dark:border px-2 rounded ">
                                    {{ sensor.activo ? 'Activo' : 'Inactivo' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->

        </div>

        <!-- Main modal -->
        <div id="defaultModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for
                            its citizens, companies around the world are updating their terms of service agreements to
                            comply.
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                            25 and is meant to ensure a common set of data rights in the European Union. It requires
                            organizations to notify users as soon as possible of high-risk data breaches that could
                            personally affect them.
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                            accept</button>
                        <button data-modal-toggle="defaultModal" type="button"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup>

//El user que accede a esta pagina es un administrador de su ayuntamiento

import { PlusCircleIcon } from '@heroicons/vue/24/outline'

import { Avatar, Input } from 'flowbite-vue'

import { defineProps, reactive, computed, toRaw } from 'vue';

import { logicaFakeUsuario } from '@/logicaFake/resources/usuario';
import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento';

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const modalAddUser = reactive({
    show: false,
    data: {}
})

function closeModal() {
    modalAddUser.show = false
}
function showModal() {
    modalAddUser.show = true
}

const addUserToSensorClicked = (uuid) => {
    showModal();
    console.log("addUserToSensorClicked " + uuid)
}

defineProps(['title'])

const searchUserInput = reactive({
    nickname: "",
    email: "",
    uuid: ""
})

let sensoresUsuario = reactive([])

const userRaw = { ...toRaw(user.value) };

const ayto = await logicaFakeUsuario.getAyuntamiento(userRaw.nickname);
sensoresUsuario = await logicaFakeAyuntamiento.getSensoresUsuarios(ayto.id);

const filteredSensoresUsuario = computed(() => {

    let myReExp = '^.*w.*$';

    const filtered = sensoresUsuario.filter(sensor => {

        let nickReExp = myReExp.replace('w', searchUserInput.nickname)
        let matchNickname = new RegExp(nickReExp, 'i').test(sensor.user?.nickname)

        let mailReExp = myReExp.replace('w', searchUserInput.email)
        let matchEmail = new RegExp(mailReExp, 'i').test(sensor.user?.email)

        let uuidReExp = myReExp.replace('w', searchUserInput.uuid)
        let matchUuid = new RegExp(uuidReExp, 'i').test(sensor?.uuid)

        return (matchNickname && matchEmail) && matchUuid;
    })

    return filtered;

})


</script>
  
<style scoped>

</style>
  