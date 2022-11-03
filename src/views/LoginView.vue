<template>
    <div class="login-container">

        <form name="login" onSubmit="handleLoginButtonClick" class="login-form">
            <h2>Iniciar sesión</h2>
            <PrimeInputText type="text" name="email" v-model="email" placeholder="Correo electrónico" />
            <PrimeInputText type="password" name="password" v-model="password" placeholder="Contraseña" />
            <span v-if="error" style="color: red">No existe un usuario con estas credenciales.</span>
            <PrimeButton type="submit" @click="handleLoginButtonClick">Iniciar sesión</PrimeButton>
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

export default defineComponent({

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