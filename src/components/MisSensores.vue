<template>
    <div class="flex flex-col gap-2 w-full md:w-2/4 mt-2">
        <!----------Texto---------->
        <h1 class="mb-4 text-2xl font-bold text-gray-700 dark:text-white">
            Mi sensor
        </h1>
        <div v-for="(sensor, index) in sensores" :key="index"
            class="rounded-md border border-gray-300 bg-white dark:bg-slate-800 px-4 py-4 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50">
            <div class="flex flex-auto gap-8 items-center">
                <Avatar :status="sensor.activo ? 'online' : 'offline'" bordered rounded
                    img="https://i.pinimg.com/736x/05/ca/61/05ca610ff78bb9c6f23efc2039842cec.jpg" />
                <div class="flex flex-col gap-2">
                    <p class="text-gray-500 dark:text-gray-400">{{ sensor.uuid }}</p>
                    <div :class="[sensor.activo ? 'bg-green-100 dark:border-green-400 text-green-400 dark:text-green-500' : 'bg-red-100 dark:border-red-400 text-red-400 dark:text-red-500']"
                        class="w-fit dark:bg-slate-800 dark:border  px-2 rounded ">
                        {{ sensor.activo ? 'Activo' : 'Inactivo' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Avatar } from 'flowbite-vue'

import { defineProps, ref } from 'vue';

import { logicaFakeUsuario } from '@/logicaFake/resources/usuario';

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

defineProps(['title'])

//sensores
const sensores = ref([])
const userSensor = await logicaFakeUsuario.getSensor(user.value.nickname);
if(userSensor) {
    sensores.value.push(userSensor)
}


</script>
  
<style scoped>

</style>