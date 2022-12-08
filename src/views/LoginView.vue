<template>
    
    <div class="flex items-center min-h-screen bg-white dark:bg-slate-800 rounded-xl">
        <div class="flex-1 h-full max-w-4xl mx-auto bg-white shadow sm:shadow-xl rounded-xl">

            <div class="flex flex-col md:flex-row rounder-xl">

                <!----------Izquierda---------->
                <div class="h-32 md:h-auto md:w-1/2 hidden md:flex dark:bg-slate-900 rounded-xl">
                    <img class="object-cover w-full h-full rounded-xl" src="../../public/cta-mapGrande.png" alt="img" />
                </div>

                <!----------Derecha---------->
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 dark:bg-slate-900 rounded-r-xl">
                    <div class="w-full">
                        <!----------Logo---------->
                        <div class="flex justify-center">
                            <img class="object-cover w-64 " src="logoco3.png" alt="img" />
                        </div>
                        <!----------Texto Iniciar Sesión---------->
                        <div class="flex items-center mb-4 mt-10 ">
                            <h1 class="text-2xl text-left text-gray-700 dark:text-white">
                                Iniciar sesión
                            </h1>
                            <spinner class="ml-4" size="4" v-if="loading" />
                        </div>



                        <form>
                            <!----------Cajas correo y contraseña---------->
                            <div class="flex flex-col gap-4">
                                <Input :disabled="loading" v-model="email" type="email" class="w-full"
                                    placeholder="Correo electrónico" name="">
                                </Input>
                                <Input :disabled="loading" v-model="password" class="w-full " placeholder="Contraseña"
                                    type="password">
                                <!----------Link contraseña olvidada---------->
                                <template #helper>
                                    <a class="text-sm text-blue-600 hover:underline">
                                        <router-link to='/forgot-password'>¿Has olvidado tu contraseña?</router-link>
                                    </a>

                                </template>
                                </Input>
                            </div>

                            <!----------Boton Iniciar Sesión---------->
                            <button type="submit" @click="handleLoginButtonClick"
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 w-full border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                href="#">
                                Inicia sesión
                            </button>

                        </form>

                        <span v-if="error" class="text-rose-500 text-sm">{{ error }}</span>



                    </div>



                </div>
            </div>
        </div>
    </div>


</template>

<script>

import router from "@/router";
import { defineComponent, ref } from "vue";
import { useSessionStore } from '@/store/session'

import { Input, Spinner } from 'flowbite-vue'

export default defineComponent({
    components: {
        Input, Spinner
    },
    setup() {

        const loading = ref(false)

        const error = ref("")

        const email = ref("")
        const password = ref("")

        const sessionStore = useSessionStore()

        const handleLoginButtonClick = async (e) => {

            e.preventDefault()

            try {

                var timeout = setTimeout(() => {
                    error.value = "Connection timeout."
                    loading.value = false;
                    return;
                }, 5000);

                loading.value = true;

                //check login
                await sessionStore.login(email.value, password.value);

                router.push("/")

            } catch (errors) {
                if (errors.length > 0) {
                    //for to print all errors                    
                    error.value = errors[0].msg
                }
                else error.value = "Connection error."

            } finally {
                clearTimeout(timeout)
                loading.value = false;
            }

        }

        return {
            email,
            password,
            error,
            loading,
            handleLoginButtonClick
        }
    }

})

</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 18px;
}
</style>