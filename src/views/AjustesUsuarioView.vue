<template>
    <!-----Cambiar contraseña------>

    <div class="flex flex-col w-3/4 justify-center items-center mx-auto">
        <!----------Texto---------->
        <h1 class="mb-4 mt-10 text-3xl text-gray-700">
            ¿Quieres cambiar tu contraseña?
        </h1>

        <!----------Cajas para nueva contraseña---------->
        <div class="lg:w-1/3 ">
            <input
                class="w-full px-4 py-2 mb-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Contraseña antigua" type="password" />

            <input
                class="w-full px-4 py-2 mb-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Contraseña nueva" type="password" />

            <input
                class="w-full px-4 py-2 mb-4 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Confirmar contraseña" type="password" />

        </div>

        <!----------Boton Aceptar---------->
        <button
            class="block w-full lg:w-1/3 px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            href="#">
            Aceptar
        </button>

    </div>
</template>

<script setup>
</script>
