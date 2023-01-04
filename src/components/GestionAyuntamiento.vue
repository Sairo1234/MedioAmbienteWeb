<template>

    <div class="flex flex-col gap-2 w-full">

        <!----------Texto---------->
        <h1 class="mb-2 text-2xl font-bold text-gray-700 dark:text-white mt-2">
            {{ title }}
        </h1>

        <p class="mb-4 text-gray-500">Desde aqui puedes gestionar tus sensores y asociarlos a un usuario previamente
            registrado.</p>

        <div class="flex flex-wrap lg:flex-nowrap gap-8 p-4 md:p-0" v-if="false">
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
                                    class="w-fit dark:bg-slate-800 dark:border px-2 rounded">
                                    {{ sensor.activo ? 'Activo' : 'Inactivo' }}
                                </div>
                            </div>
                            <div class="absolute right-10 text-gray-300">></div>
                            <!-- <XMarkIcon class="h-5 w-5 mr-2 text-gray-300 hover:text-gray-600" /> -->
                        </div>

                        <div :class="!sensor.user ? 'text-gray-400 border-gray-300 dark:border-gray-600 bg-gray-500/10 dark:bg-slate-800' : 'border text-gray-700  hover:shadow-md  hover:bg-gray-50 border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800'"
                            class="flex flex-row gap-6 items-center px-4 py-2 shadow duration-200 relative rounded-md text-sm font-medium">
                            <div v-if="sensor.user" class="w-full group relative">
                                <div class="flex flex-row-reverse gap-8 items-center justify-start">
                                    <Avatar bordered rounded :img=sensor.user.profile_photo_url />
                                    <div class="flex flex-col items-end gap-2 text-right">
                                        <p class="font-bold text-gray-500 dark:text-gray-400">{{ sensor.user.nickname }}
                                        </p>
                                        <i class="text-gray-500 dark:text-gray-400">{{ sensor.user.email }}</i>

                                        <div class="flex gap-4" v-if="sensor.user"> <!-- !!!!!! -->
                                            <div :class="[sensor.user.verified ? 'bg-green-100 dark:border-green-400 text-green-400 dark:text-green-500' : 'bg-red-100 dark:border-red-400 text-red-400 dark:text-red-500']"
                                                class="w-fit dark:bg-slate-800 dark:border px-2 rounded ">
                                                {{ sensor.user.verified ? 'Verificado' : 'No verificado' }}
                                            </div>
                                            <div v-if="!sensor.user.verified">
                                                <a class="text-blue-600" onclick="">Enviar solicitud de activacion ></a>
                                            </div>
                                        </div>
                                    </div>

                                    <XCircleIcon
                                        class="absolute left-0 hidden group-hover:block h-5 w-5 mr-3 text-gray-300 hover:text-red-600" />

                                </div>
                            </div>

                            <!-- <AsociarSensorUser v-if="!sensor.user" :uuid="sensor?.uuid"
                              @updated="asociarSensorUserUpdated" /> -->

                        </div>
                        <!-- <div class="absolute right-6">></div> -->

                    </div>
                </div>
            </div>

        </div>

        <div class="flex flex-col gap-12">
            <TableFilters v-for="(n) in tablesCount" :key="n">{{ n }}</TableFilters>
            <div class="flex gap-2">
                <div class="group flex justify-center gap-2 text-gray-300 hover:text-gray-500 items-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
                    :class="tablesCount > 0 ? 'w-5/6' : 'w-full'" @click="tablesCount++">
                    <PlusCircleIcon class="h-6 w-6 text-gray-200 group-hover:text-gray-400" />
                    Añadir tabla
                </div>
                <div v-if="tablesCount > 0"
                    class="group flex justify-center gap-2 text-gray-300 hover:text-red-500 p-2 rounded-md bg-gray-100 hover:bg-red-200 hover:cursor-pointer w-1/6"
                    @click="tablesCount--">
                    <XCircleIcon class="h-6 w-6 text-gray-200 group-hover:text-red-500" />
                    Eliminar tabla
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

//El user que accede a esta pagina es un administrador de su ayuntamiento


import { PlusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { Avatar, Input } from 'flowbite-vue'

import { defineProps, ref } from 'vue';

import TableFilters from './TableFilters.vue';

defineProps(['title'])

const tablesCount = ref(1)

</script>

<style scoped>

</style>
