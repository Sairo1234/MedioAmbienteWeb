<template>
    <div class="w-screen md:w-3/4 m-auto">
        <tabs variant="underline" v-model="activeTab" class="p-4">
            <!-- class appends to content DIV for all tabs -->
            <tab name="perfil" title="Perfil">

                <div class="flex flex-col gap-2 w-full md:w-1/3 mt-12">

                    <Avatar class="hover:grayscale transition-1 w-fit mb-6" size="xl" rounded bordered
                        :img="userEdit?.profile_photo_url" />

                    <Input class="placeholder-gray-200" placeholder="your nickname" label="nickname"
                        v-model="userEdit.nickname" :disabled="!editando" />
                    <Input class="placeholder-gray-200" placeholder="your email" label="email" v-model="userEdit.email"
                        :disabled="!editando" />
                    <!----------Boton Editar ---------->
                    <button type="button" @click="toggleEdit(true)" v-if="!editando" :disabled="loading"
                        class="flex items-center justify-center disabled:bg-gray-600 mt-6 px-6 py-2 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        <PencilSquareIcon class="h-5 w-5 mr-2" />
                        Editar perfil
                    </button>
                    <!----------Boton Guardar ---------->
                    <button @click="toggleEdit(false)" v-if="editando"
                        class="flex items-center justify-center mt-6 px-4 py-2 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        <CheckIcon class="h-5 w-5 mr-2" />
                        Guardar cambios
                    </button>
                    <!----------Boton Cancelar ---------->
                    <button @click="cancelarEdicion" v-if="editando"
                        class="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-400 transition-colors duration-150 rounded-lg active:bg-white/20  hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none focus:shadow-outline-blue">
                        <XMarkIcon class="h-5 w-5 mr-2" />
                        Cancelar
                    </button>
                    <span v-if="error" class="flex gap-1 text-rose-500 text-sm">
                        <ExclamationTriangleIcon class="h-5 w-5 mr-2" /> {{ error }}
                    </span>
                    <spinner v-if="loading" class="ml-4 self-end w-full" size="4" />
                </div>
            </tab>
            <tab name="password" title="Cambiar contraseña">
                <!-----Cambiar contraseña------>
                <div class="flex flex-col gap-2 w-full md:w-1/2 mt-2">
                    <!----------Texto---------->
                    <h1 class="mb-4 text-2xl font-bold text-gray-700 dark:text-white">
                        Cambiar contraseña
                    </h1>

                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter your current password"
                        label="Contraseña antigua" type="password" v-model="passwordForm.currentPassword" />
                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter your new password"
                        label="Contraseña nueva" type="password" v-model="passwordForm.newPassword" />
                    <Input :disabled="loading" class="placeholder-gray-200" placeholder="repeat your new password"
                        label="Confirmar nueva contraseña" type="password" v-model="passwordForm.repeatNewPassword" />

                    <!----------Boton Aceptar---------->
                    <button type="button" :disabled="loading" @click="handleCambiarContrasenyaButton"
                        class="disabled:bg-gray-600 mt-6 px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                        Cambiar contraseña
                    </button>
                    <span v-if="error" class="flex gap-1 text-rose-500 text-sm">
                        <ExclamationTriangleIcon class="h-5 w-5 mr-2" /> {{ error }}
                    </span>
                    <spinner v-if="loading" class="ml-4 self-end w-full" size="4" />

                </div>
            </tab>
            <tab name="sensor" title="Mi sensor" v-if="user?.rol === 'USER'">
                <Suspense>
                    <MisSensores title="Mi sensor"></MisSensores>
                    <!-- loading state via #fallback slot -->
                    <template #fallback>
                        Cargando...
                    </template>
                </Suspense>
            </tab>
            <tab name="gestion" title="Gestionar sensores y usuarios" v-if="user?.rol === 'AYUNTAMIENTO'">
                <Suspense>
                    <GestionAyuntamiento title="Gestionar"></GestionAyuntamiento>
                    <!-- loading state via #fallback slot -->
                    <template #fallback>
                        Cargando...
                    </template>
                </Suspense>

            </tab>
        </tabs>


    </div>

</template>

<script setup>

import { PencilSquareIcon, XMarkIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

import { Input, Avatar, Tabs, Tab, Spinner } from 'flowbite-vue'

import { reactive, ref, watch } from 'vue'

import { storeToRefs } from 'pinia';
import { useSessionStore } from '@/store/session'

import MisSensores from '@/components/MisSensores.vue';
import GestionAyuntamiento from '@/components/GestionAyuntamiento.vue';


const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const activeTab = ref('perfil')

watch(activeTab, () => {
    if (editando.value && activeTab.value !== "perfil") {
        activeTab.value = "perfil"
        alert("¡Cuidado! Tienes cambios sin guardar.")
    }
})

const loading = ref(false)
const error = ref("")

//editar perfil
const editando = ref(false)

const passwordForm = reactive({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: "",
})

const userEdit = ref({
    ...user.value
})

const cancelarEdicion = () => {
    editando.value = false
    userEdit.value = {
        ...sessionStore.user
    }
    error.value = ""
}

const toggleEdit = async (toggle) => {

    editando.value = toggle;

    //si esta en false es porque esta editando, entonces guarda 
    if (!toggle) {

        const newData = {}

        //comprobar si ha cambiado el nickname
        if (userEdit.value.nickname !== sessionStore.user.nickname) newData.nickname = userEdit.value.nickname
        //comprobar si ha cambiado el email
        if (userEdit.value.email !== sessionStore.user.email) newData.email = userEdit.value.email

        //si no se ha cambiado nada - cancelar guardar
        if (JSON.stringify(newData) === '{}') {
            cancelarEdicion();
            return;
        }

        try {

            var timeout = setTimeout(() => {
                error.value = "Connection timeout."
                return;
            }, 5000);

            loading.value = true;

            //editar datos del usuario
            const res = await sessionStore.editarPerfil(newData)
            if (res.success) {

                //actualizar datos usuario de la web
                sessionStore.setUserData(res.data)

                editando.value = false
                error.value = ""
                alert("Perfil guardado con exito.")
            }

        } catch (errors) {
            editando.value = true
            if (errors.length > 0) error.value = errors[0].msg
            else error.value = "Connection error."

        } finally {
            clearTimeout(timeout)
            loading.value = false;
        }

    }
}

const handleCambiarContrasenyaButton = async () => {

    if (passwordForm.newPassword !== passwordForm.repeatNewPassword) {
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
        if (res.success) {
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
