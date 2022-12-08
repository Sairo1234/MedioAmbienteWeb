<template>
    <div class="m-auto w-screen md:w-3/4 flex justify-center items-center">
        <div v-if="!done" class="w-full md:w-1/2 p-8 md:p-0">
            <!-----Recuoperar contraseña------>
            <div class="flex flex-col gap-2">
                <!----------Texto---------->
                <h1 class="mb-4 mt-2 text-2xl font-bold text-gray-700 dark:text-white">
                    Contraseña olvidada
                </h1>

                <p class="text-gray-800 dark:text-gray-400 mb-8">Introduce tu email y te enviaremos las instrucciones
                    para recuperar tu contraseña.</p>

                <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter your account email"
                    label="Introduce tu email de tu cuenta" type="email" v-model="email" />

                <!----------Boton Aceptar---------->
                <button type="button" :disabled="loading" @click="handleSend"
                    class="disabled:bg-gray-600 mt-6 px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                    Enviar
                </button>
                <span v-if="error" class="text-rose-500 text-sm">{{ error }}</span>
                <spinner v-if="loading" class="ml-4 self-end w-full" size="4" />

            </div>
        </div>
        <div v-if="done" class="w-full md:w-1/2 p-8">
            <p class="text-gray-800 dark:text-gray-500 mb-8">Se ha enviado un correo de recuperación a
                <span class="font-bold">{{ email }}</span>
            </p>
        </div>
    </div>

</template>

<script setup>

import { Input, Spinner } from 'flowbite-vue'

import { ref } from 'vue'

import { logicaFakeSettings } from '@/logicaFake/config'

const loading = ref(false)
const error = ref("")
const email = ref("")
const done = ref(false)

const handleSend = async () => {

    if (!email.value) {
        error.value = "Introduce un email.";
        return;
    }

    try {

        var timeout = setTimeout(() => {
            error.value = "Connection timeout."
            return;
        }, 5000);

        loading.value = true;

        //solicitar cambio de contraseña
        const res = await solicitarReinicioContraseña(email.value)
        if (res.success) {
            error.value = ""
            done.value = true;
            alert(res.msg)
        } else {
            if (res.errors?.length > 0) error.value = res.errors[0].msg
            else error.value = res.msg
        }

        //console.log(res)

    } catch (err) {
        //console.log(err)
        error.value = err.msg
    } finally {
        clearTimeout(timeout)
        loading.value = false;
    }
}

async function solicitarReinicioContraseña(_email) {

    const response = await fetch(logicaFakeSettings.baseURL + '/usuarios/resetPassword', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: _email
        })
    })

    const data = await response.json()

    return data;
}

</script>

<style scoped>

</style>
