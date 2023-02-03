<template>
    <div class="w-full">

        <div id="map">
            <div class="absolute m-auto right-28 bottom-12 w-fit flex flex-col gap-4">

                <div id="filtros-mapa" class="absolute m-auto right-0 bottom-12 w-30 flex flex-col gap-4">
                    <a v-if="isLogged"
                        class=" text-center w-full dark:bg-slate-800 bg-white hover:bg-gray-100 dark:hover:bg-slate-700 px-8 py-2 rounded-md shadow-lg text-blue-800 dark:text-white font-bold"
                        href="#misdatos">
                        <div class="flex items-center justify-center w-full">
                            <PresentationChartLineIcon class="h-5 w-5 mr-2" />
                            Ver mis estadisticas
                        </div>
                    </a>
                    <div id="leyenda" class="flex w-full">
                        <span>Limpio</span>
                        <span>Baja</span>
                        <span>Media</span>
                        <span>Alta</span>
                        <span>Peligroso</span>
                        <!-- #2B83BA
                        #ABDdA4
                        #FFFFbF
                        #FDAE61
                        #D7191C -->
                    </div>
                </div>

            </div>
        </div>

        <div class="main-container" v-if="!isLogged">

            <div class="bg-white dark:bg-slate-900 py-20">

                <!--Texto principal-->
                <div class="flex justify-center flex-col items-center mb-20">
                    <h1 class="text-4xl md:text-6xl font-bold text-blue-900 text-center mb-8 w-2/6 dark:text-white">
                        Recoge datos y ayuda a tu ciudad</h1>
                    <!--Poner algo de texto más tarde-->
                    <p class="text-2xl text-center w-full px-6 md:w-2/5 text-gray-500 dark:text-gray-400">Unidos por el
                        aire que respiramos.</p>
                </div>

                <!--Imagen y boton-->
                <div class="flex justify-center items-center flex-col mb-16">
                    <!--Cambiar por una imagen más tarde-->
                    <img class="halo-green object-cover w-auto h-full md:w-2/3 lg:w-1/2" src="../assets/freshair.jpg"
                        alt="img" />

                    <!--Boton "Unete"-->
                    <a href="#howto" v-if="!isLogged"
                        class="text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Quiero unirme</a>

                </div>


                <!--Texto secundario-->
                <div class="flex justify-center flex-col items-center my-20">
                    <h2 class="text-4xl md:text-5x1 font-bold text-blue-900 text-center mb-6 dark:text-white">¿Cómo
                        funciona?</h2>
                    <!--Poner algo de texto más tarde-->
                    <p class="text-center w-full px-6 md:w-2/3 text-gray-500 dark:text-gray-400">El proceso sencillo en
                        4 pasos:</p>
                </div>

                <!--Texto terciario con elementos a imagenes y texto-->

                <div id="howto" class=" w-auto md:w-4/5 md:mx-auto bg-white dark:bg-slate-900">

                    <!--Primera fila-->

                    <div class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2">

                        <img class="halo-blue object-cover px-10 md:px-0 w-auto h-auto mb-8 " src="../assets/stcity.png"
                            alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">1. Busca tu ayuntamiento
                            </h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Antes de
                                empezar, es importante verificar si tu ayuntamiento participa en esta iniciativa. Para
                                ello, puedes utilizar el buscador en nuestra página web. Si tu ayuntamiento no está
                                participando, te animamos a contactarlos y animarlos a unirse.</p>
                        </div>

                    </div>

                    <!--Segunda fila-->

                    <div class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2">

                        <img class="halo-blue object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 "
                            src="../assets/boxo3.png" alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">2. Solicita un sensor</h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Una vez que
                                sepas que tu ayuntamiento está participando, puedes solicitar un sensor.</p>

                            <!--Boton "Unete"-->
                            <a href="#solicitar" v-if="!isLogged"
                                class="w-1/3 text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Solicitar sensor</a>
                        </div>

                    </div>

                    <!--Tercera fila-->

                    <div class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2">

                        <img class="halo-blue object-cover px-10 md:px-0 w-auto h-auto mb-8 "
                            src="../assets/citymocko3.png" alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">3. Descarga la aplicación
                            </h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Una vez que
                                tengas el sensor, es hora de descargar la aplicación correspondiente. La aplicación te
                                permitirá conectarte con el sensor y enviar los datos a nuestra plataforma en línea.
                                Además, te proporcionaremos un usuario y una contraseña que te permitirán entrar en la
                                aplicación y empezar a utilizar el sensor.</p>
                        </div>

                    </div>

                    <!--Cuarta fila-->

                    <div class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2">

                        <img class="halo-blue object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 "
                            src="../assets/co3city.png" alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                            <h3 class="text-3xl text-blue-900 dark:text-white md:w-full">4. Empezar a recopilar datos
                            </h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">¡Estás listo
                                para empezar! Mientras camines por tu ciudad, el sensor medirá los niveles de ozono y
                                otros gases en el aire. Los datos se enviarán automáticamente a nuestra plataforma en
                                línea y se utilizarán para construir un mapa en tiempo real de la calidad del aire en tu
                                ciudad. ¡Gracias por tu contribución!</p>
                        </div>

                    </div>

                </div>

            </div>
            <div class="sections">

                <section id="about" class="bg-white dark:bg-slate-800">
                    <h1 class="ml-16 mb-6 text-4xl font-extrabold dark:text-white">Quiénes somos</h1>
                    <p class="ml-14 text-lg text-gray-500">
                        Somos una empresa comprometida con el medio ambiente y la salud de las personas. Creemos en la
                        importancia de tener datos precisos y actualizados sobre la calidad del aire en nuestras
                        ciudades. Por eso, hemos desarrollado una solución innovadora que permite a cualquier persona
                        contribuir a la creación de un mapa de la calidad del aire en tiempo real. Juntos podemos
                        mejorar la calidad de vida en nuestras comunidades."
                    </p>

                    <div id="solicitar" class="w-full h-screen flex flex-col gap-4 items-center pt-48">


                        <form
                            class="w-2/3 h-fit flex flex-col items-center py-16 ph-24 border border rounded-lg bg-gray-100 dark:text-gray-600 dark:bg-slate-700 relative overflow-hidden">

                            <h2 class="mb-4 text-2xl font-bold text-gray-700 dark:text-white">Busca tu ayuntamiento:
                            </h2>
                            <p class="w-2/4 text-sm text-center text-gray-500 mb-6 ">
                                Encuentra tu ayuntamiento y solicita tu sensor.
                            </p>
                            <div class="w-1/3 flex flex-col gap-4">
                                <Suspense>
                                    <!-- loading state via #fallback slot -->
                                    <template #fallback>
                                        Buscando...
                                    </template>
                                    <SearchAytosInput @updated="handleSelectedAytoUpdate" id="ayuntamientos" />
                                </Suspense>
                                <Input :disabled="loading || !selectedAyto" v-model="email" type="email"
                                    class="w-full dark:text-gray-400" placeholder="Correo electrónico" name="">
                                <template #prefix>
                                    <AtSymbolIcon class="h-5 w-5 mr-2" />
                                </template>
                                </Input>
                                <!---------- Boton Solicitar ---------->
                                <button :disabled="loading || !email" type="submit" @click="handleSolicitarButtonClick"
                                    class="disabled:bg-gray-600 w-full mt-2 px-4 py-2 text-sm font-medium text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                                    Solicitar sensor
                                </button>
                            </div>
                            <MapPinIcon
                                class="h-96 w-96 absolute left-8 -bottom-2 mb-2 text-gray-200/40 dark:text-white/5" />
                        </form>

                        <p class="w-full text-center text-xs text-gray-500 mb-6">
                            *No garantizamos la entrega de un sensor, delegando las responsabilidades al ayuntamiento de
                            tu ciudad.
                        </p>

                    </div>

                </section>
            </div>

        </div>

        <div class="main-container bg-white dark:bg-slate-900" id="misdatos" v-if="isLogged">
            <div class="p-4 md:p-20">

                <!--Texto principal-->
                <div class="mb-20">
                    <h1 class="text-3xl md:text-5xl font-bold text-blue-900 mb-6 dark:text-white">Bienvenido, {{
                        user.nickname
                    }}</h1>
                    <!--Poner algo de texto más tarde-->
                    <p class="md:w-2/3 text-gray-500 dark:text-gray-400 mb-12">La calidad del aire que respiramos es
                        crucial para nuestra salud y bienestar. Los gases ozono (O3) y dióxido de nitrógeno (NO2) son
                        dos de los contaminantes del aire que pueden tener efectos negativos en nuestra salud. Aqui
                        tienes tus datos:</p>


                    <div class="flex gap-12 w-full justify-around">
                        <div class="flex flex-col gap-6">
                            <h1 class="text-xl md:text-2xl font-bold">Exposicion al Ozono</h1>
                            <p>El ozono es un gas poderoso y tóxico que puede causar irritación en los ojos, garganta y
                                pulmones. Además, puede agravar problemas respiratorios como el asma y la
                                bronquitis. Es más común en <b>días cálidos y soleados</b>, y se produce cuando los
                                contaminantes del aire reaccionan con la luz solar.</p>
                            <div
                                style="width: 100%; height: 400px; box-shadow: 0 2px 132px rgba(20, 80, 220, 0.1); border-radius: 8px; padding: 12px;">
                                <canvas id="estadisticaSemanaO3"></canvas>
                            </div>
                            <i class="text-black/50">Exposición semanal.</i>
                            <div
                                style="width: 100%; height: 400px; box-shadow: 0 2px 132px rgba(20, 80, 220, 0.1); border-radius: 8px; padding: 12px;">
                                <canvas id="estadisticaMes03"></canvas>
                            </div>
                            <i class="text-black/50">Exposición mensual.</i>
                        </div>
                        <div class="flex flex-col gap-6">
                            <h1 class="text-xl md:text-2xl font-bold">Exposición al NO2</h1>
                            <p>El dióxido de nitrógeno (NO2) es un gas producido por la quema de combustibles fósiles.
                                El NO2 puede irritar la garganta y los pulmones, y puede agravar problemas respiratorios
                                como el asma y la bronquitis. Además, el NO2 puede dañar el sistema respiratorio y
                                aumentar el riesgo de enfermedades cardíacas y pulmonares.</p>
                            <div
                                style="width: 100%; height: 400px; box-shadow: 0 2px 182px rgba(220, 20, 80, 0.1); border-radius: 8px; padding: 12px;">
                                <canvas id="estadisticaSemanaNO2"></canvas>
                            </div>
                            <i class="text-black/50">Exposición semanal.</i>
                            <div
                                style="width: 100%; height: 400px; box-shadow: 0 2px 182px rgba(220, 20, 80, 0.1); border-radius: 8px; padding: 12px;">
                                <canvas id="estadisticaMesNO2"></canvas>
                            </div>
                            <i class="text-black/50">Exposición mensual.</i>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <footer class="flex justify-around">
            <div class="flex flex-col gap-4">
                <span>Copyright © 2023 Communo3. Todos los derechos reservados.</span>
                <span>Para más información, puedes descargar el Manual de Usuario: 
                    <a class="font-bold text-blue-700/80" href="../assets/Manual de Usuario Proyecto Medio Ambiente.pdf"
                        download="ManualDeUsuarioCommuno3.pdf">Descargar Manual</a></span>
            </div>


            <div class="flex flex-col"><span>Síguenos en nuestras redes sociales:</span>
                <ul>
                    <li>Facebook: <a class="font-bold text-black/40"> @Communo3</a></li>
                    <li>Twitter: <a class="font-bold text-black/40"> @Communo3_Air</a></li>
                    <li>Instagram: <a class="font-bold text-black/40"> @Communo3_Air</a></li>
                </ul>
            </div>




        </footer>
    </div>


</template>

<script setup>

import SearchAytosInput from '../components/SearchAytosInput.vue'

import { PresentationChartLineIcon, AtSymbolIcon, MapPinIcon } from '@heroicons/vue/24/outline'

import { Input } from 'flowbite-vue'

import L from "leaflet"
import '../lib/leaflet-heat.js'

import { GestureHandling } from "leaflet-gesture-handling";

import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

import { onMounted } from 'vue'

import { storeToRefs } from 'pinia'
import { useSessionStore } from '@/store/session'
import { computed, ref } from 'vue';

import { mapFunctions } from '../logicaFake/map_functionalities'
import { MedicionesAPI } from '@/logicaFake/resources/mediciones'

import 'iso8601-js-period'
import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento'

import { estaFunctions } from '../logicaFake/estadisticas_functionalities'

// ***************** Código del mapa
const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const isLogged = computed(() => {
    return sessionStore.isLogged
})

//const checkedGasses = ref([])

const selectedAyto = ref('')
const email = ref('')
const loading = ref(false)

const handleSelectedAytoUpdate = (v) => {
    console.log(v)
    selectedAyto.value = v;
}

const handleSolicitarButtonClick = async () => {
    if (email.value == '' || selectedAyto.value == '') return
    loading.value = true;
    const res = await logicaFakeAyuntamiento.solicitarSensor(email.value, selectedAyto.value)
    if (res.success) {
        alert("Sensor solicitado.")
        email.value = ''
    }
    loading.value = false

}

// Creación del mapa y estadísticas
onMounted(async () => {

    L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
    var mymap = mapFunctions.generarMapa('map')

    // Si hay un usuario logeado, se calculan sus layers
    if (isLogged.value) {

        // Código para creación del mapa
        var medidasJsonDelUltimoDiaDelUsuarioDeTipoO3 = await MedicionesAPI.obtenerMedicionesDelUsuarioDelDiaPorNicknameYTipo(sessionStore.user.nickname, 1, new Date().getTime())
        var medidasJsonDelUltimoDiaDelUsuarioDeTipoNO2 = await MedicionesAPI.obtenerMedicionesDelUsuarioDelDiaPorNicknameYTipo(sessionStore.user.nickname, 2, new Date().getTime())

        console.log(medidasJsonDelUltimoDiaDelUsuarioDeTipoO3)

        L.control.layers({
            "Mapa de interpolación del O3": mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDiaDelUsuarioDeTipoO3, mymap).addTo(mymap),
            "Mapa de interpolación de NO2": mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDiaDelUsuarioDeTipoNO2, mymap),
        },
            { "Tu recorrido": mapFunctions.generarRutaDeUsuarioLogeado(mapFunctions.generarGeoJson(await MedicionesAPI.obtenerTodasMedicionesDelDiaPorNickname(sessionStore.user.nickname))) },
            { collapsed: false })
            .addTo(mymap);

        // Código para crear estadísticas
        estaFunctions.estadisticaDeLaSemana('estadisticaSemanaO3', await MedicionesAPI.obtenerMediaDeDatosSemanalesDelUsuarioLogeadoPorTipo(sessionStore.user.nickname, 1), "O3")
        estaFunctions.estadisticaDelMes('estadisticaMes03', await MedicionesAPI.obtenerMediaDeDatosMensualesDelUsuarioLogeadoPorTipo(sessionStore.user.nickname, 1), "O3")
        estaFunctions.estadisticaDeLaSemana('estadisticaSemanaNO2', await MedicionesAPI.obtenerMediaDeDatosSemanalesDelUsuarioLogeadoPorTipo(sessionStore.user.nickname, 2), "NO2")
        estaFunctions.estadisticaDelMes('estadisticaMesNO2', await MedicionesAPI.obtenerMediaDeDatosMensualesDelUsuarioLogeadoPorTipo(sessionStore.user.nickname, 2), "NO2")

    }
    else {
        var medidasJsonDelUltimoDia = await MedicionesAPI.obtenerTodasMedicionesDelDia(new Date().getTime())
        var mapaInterpolacion = mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDia)
        mapaInterpolacion.addTo(mymap)
    }
})

</script>

<style scoped>
#map {
    box-shadow: inset 0 0 80px rgb(87, 87, 87);
    width: 100%;
    height: calc(100vh - 80px);
}

#mapOverlay {
    height: calc(100vh - 75px);
}

#map #filtros-mapa {
    z-index: 999;
}

.sections section {
    padding: 24px;
}

.main-container {
    min-height: calc(100vh - 80px);
}

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}

img {
    border-radius: 6px;
}

img.halo-blue {
    box-shadow: 0 2px 1362px rgba(20, 90, 220, 0.1);
}

img.halo-green {
    box-shadow: 0 16px 1362px rgba(0, 180, 80, 0.1);
}

a:hover {
    cursor: pointer;
}

#leyenda {
    z-index: 999;
}

#leyenda>span {
    padding: 6px 16px;
    border: 1px white solid;
}

#leyenda>span:nth-child(1) {
    color: aliceblue;
    border-radius: 6px 0 0 6px;
    background: #2B83BA;
}

#leyenda>span:nth-child(2) {
    background: #ABDdA4;
}

#leyenda>span:nth-child(3) {
    background: #FFFFbF;
}

#leyenda>span:nth-child(4) {
    background: #FDAE61;
}

#leyenda>span:nth-child(5) {
    color: aliceblue;
    border-radius: 0 6px 6px 0;
    background: #D7191C;
}

footer {
    padding: 3rem;
    background: rgba(87, 87, 87, 0.5);
}
</style>
