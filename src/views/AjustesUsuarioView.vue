<template>
    <div class="m-auto w-screen md:w-3/4">
        <tabs variant="underline" v-model="activeTab" class="p-4">
            <!-- class appends to content DIV for all tabs -->
            <tab name="first" title="Editar perfil">
                <Avatar class="hover:grayscale transition-1 w-fit" size="xl" rounded bordered
                    :img="user?.profile_photo_url" />
                <div class="flex flex-col gap-2 w-full md:w-1/3 mt-12">
                    <Input class="placeholder-gray-200" placeholder="your nickname" label="nickname"
                        v-model="user.nickname" :disabled="!editando" />
                    <Input class="placeholder-gray-200" placeholder="your email" label="email" v-model="user.email"
                        :disabled="!editando" />
                    <!----------Boton Editar ---------->
                    <button type="button" :disabled="loading" @click="toggleEdit(true)" v-if="!editando"
                        class="disabled:bg-gray-600 mt-6 px-4 py-2 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        Editar perfil
                    </button>
                    <!----------Boton Aceptar---------->
                    <button @click="toggleEdit(false)" v-if="editando"
                        class="mt-6 px-4 py-2 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        Guardar cambios
                    </button>
                    <spinner v-if="loading" class="ml-4 self-end w-full" size="4" />
                </div>
            </tab>
            <tab name="second" title="Cambiar contraseña">
                <!-----Cambiar contraseña------>
                <div class="flex flex-col gap-2 w-full md:w-1/2">
                    <!----------Texto---------->
                    <h1 class="mb-4 mt-2 text-2xl font-bold text-gray-700  dark:text-white">
                        Cambiar contraseña
                    </h1>

                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter your current password"
                        label="Contraseña antigua" type="password" v-model="passwordForm.currentPassword" />
                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter your new password"
                        label="Contraseña nueva" type="password" v-model="passwordForm.newPassword" />
                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="repeat your new password"
                        label="Confirmar nueva contraseña" type="password"
                        v-model="passwordForm.repeatNewPassword" />

                    <!----------Boton Aceptar---------->
                    <button type="button" :disabled="loading" @click="handleCambiarContrasenyaButton"
                        class="disabled:bg-gray-600 mt-6 px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        Cambiar contraseña
                    </button>
                    <span v-if="error" class="text-rose-500 text-sm">{{ error }}</span>
                    <spinner v-if="loading" class="ml-4 self-end w-full" size="4" />

                </div>
            </tab>
            <tab name="third" title="Mi sensor">
                <div class="flex flex-col gap-2 w-full md:w-1/2">
                    <!----------Texto---------->
                    <h1 class="mb-4 mt-2 text-2xl font-bold text-gray-700 dark:text-white">
                        Mi sensor
                    </h1>
                    <div v-for="(sensor, index) in sensores" :key="index"
                        class="rounded-md border border-gray-300 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                        <div class="flex flex-auto gap-8 items-center">
                            <Avatar stacked :status="sensor.activo ? 'online' : 'offline'" bordered rounded
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

            </tab>
        </tabs>


    </div>

</template>

<script setup>

import { Input, Avatar, Tabs, Tab, Spinner } from 'flowbite-vue'

import { reactive, ref } from 'vue'

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const loading = ref(false)
const error = ref("")

//editar perfil
const editando = ref(false)

const passwordForm = reactive({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
})

//sensores
const activeTab = ref('first')
const sensores = ref([
    {
        uuid: "2f8eec06-6ded-11ed-a1eb-0242ac120002",
        activo: true,
    }
])

const toggleEdit = (toggle) => {
    editando.value = toggle
    if (!toggle) {
        loading.value = true
        //guardar usuario
        setTimeout(() => {
            loading.value = false
        }, 1000)
    }
}

const handleCambiarContrasenyaButton = async () => {

    if(passwordForm.newPassword !== passwordForm.repeatNewPassword) {
        error.value = "Las contraseñas no coinciden";
        return;
    }

    try {
        
        var timeout = setTimeout(() => {
            error.value = "Connection timeout."
            return;
        }, 5000);

        loading.value = true;

        //cambiar contrasenya
        const res = await sessionStore.cambiarContrasenya(passwordForm.currentPassword, passwordForm.newPassword)
        if(res.success) {
            Object.keys(passwordForm).forEach(v => passwordForm[v] = "")
            error.value = ""
            alert(res.msg)           
        } else {
            error.value = res.msg
        }

    } catch (errors) {
        if (errors.length > 0) error.value = errors[0].msg
        else error.value = "Connection error."

    } finally {
        clearTimeout(timeout)
        loading.value = false;
    }


}

</script>

<style scoped>

</style>
