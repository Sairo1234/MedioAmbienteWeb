<template>
    <div class="login-container">

        <form name="login" onSubmit="handleLoginButtonClick" class="login-form">
            <h1 class="text-4xl font-extrabold dark:text-white">Iniciar sesión</h1>
            <Input placeholder="Correo electrónico" label="Correo electrónico" v-model="email"/>
            <Input placeholder="Contraseña" label="Contraseña" type="password" v-model="password"/>
            <span v-if="error" style="color: red">No existe un usuario con estas credenciales.</span>
            <button v-on:click="handleLoginButtonClick" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Iniciar sesión
                </button>
            <p>
                { "email" : {{ email }}, "password": {{ password }} }
            </p>
        </form>
    </div>
</template>

<script>

import router from "@/router";
import { defineComponent, ref } from "vue";
import { useSessionStore } from '@/store/session'

import { Input } from 'flowbite-vue'

export default defineComponent({
    components: {
        Input
    },
    setup() {

        const error = ref(false)

        const email = ref("")
        const password = ref("")

        const sessionStore = useSessionStore()

        const handleLoginButtonClick = async (e) => {

            e.preventDefault()

            //check login
            const logged = await sessionStore.login(email.value, password.value);
            if (logged) {
                error.value = false;
                router.push("/")
            } else {
                //cannot login
                console.log("Cannot login.")
                error.value = true;
            }

        }

        return {
            email,
            password,
            error,
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