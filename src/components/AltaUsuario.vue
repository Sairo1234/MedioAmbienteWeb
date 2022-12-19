<template>
    <div class="m-auto w-screen md:w-3/4 flex justify-center items-center">
        <div v-if="!done" class="w-full md:w-1/2 p-8 md:p-0">
            <!-----Recuoperar contraseña------>
            <div class="flex flex-col gap-2 mt-10">
                <!----------Texto---------->
                <h1 class="mb-4 text-2xl font-bold text-gray-700 dark:text-white">
                    Dar de alta usuario
                </h1>

                <p class="text-gray-800 dark:text-gray-400 mb-8">Introduce un email para enviar un correo de activacion.
                </p>

                <Input :disabled="loading" class="placeholder-gray-200" placeholder="enter an email"
                    label="Introduce un email" type="email" v-model="email" />

                <!----------Boton Aceptar---------->
                <button type="button" :disabled="loading" @click="handleSend"
                    class="disabled:bg-gray-600 mt-6 px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                    Enviar
                </button>
                <span v-if="error" class="flex gap-1 text-rose-500 text-sm">
                    <ExclamationTriangleIcon class="h-5 w-5 mr-2" /> {{ error }}
                </span>
                <Spinner v-if="loading" class="ml-4 self-end w-full" size="4" />

            </div>
        </div>
        <div v-if="done" class="w-full md:w-1/2 p-8 mt-6">
            <p class="text-gray-800 dark:text-gray-500 mb-8">Se ha enviado un correo de activacion a
                <span class="font-bold">{{ email }}</span>
            </p>
        </div>
    </div>

</template>

<script setup>

import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

import { Input, Spinner } from 'flowbite-vue'

import { ref } from 'vue'

import { logicaFakeAuth } from '@/logicaFake/resources/auth'

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

        //enviar correo de activacion al email
        const res = await registerUser(new Date().getTime().toString(), email.value, "123456")
        if (res) {
            error.value = ""
            done.value = true;
            //alert(res)
        }

    } catch (err) {
        console.log(err)
        if (err?.length > 0) error.value = err[0].msg
        else error.value = err.msg
    } finally {
        clearTimeout(timeout)
        loading.value = false;
    }
}

async function registerUser(_nickname, _email, _password) {

    const response = await logicaFakeAuth.register(_nickname, _email, _password)
    console.log(response)
    return response;
}

</script>