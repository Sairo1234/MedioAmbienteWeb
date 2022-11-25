<template>

    <div class="map-wrapper">
        <div id="map"></div>
    </div>

    <div class="main-container" v-if="!isLogged">

        <div class="bg-white dark:bg-slate-900 py-20">

            <!--Texto principal-->
            <div class="flex justify-center flex-col items-center mb-20">
                <h1 class="text-5xl font-bold text-blue-900 text-center mb-6 dark:text-white">Recoge datos y ayuda a tu
                    ciudad</h1>
                <!--Poner algo de texto más tarde-->
                <p class="text-center w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit.
                    Reprehenderit aut ratione, ut, voluptatum commodi ducimus enim nobis ad ex excepturi eaque amet
                    vitae
                    modi quae nemo, animi quidem esse quia.</p>
            </div>

            <!--Imagen y boton-->
            <div class="flex justify-center items-center flex-col mb-16">
                <!--Cambiar por una imagen más tarde-->
                <img class="object-cover w-auto h-full md:w-2/3 lg:w-1/2" src="cta-mapGrande.png" alt="img" />

                <!--Boton "Unete"-->
                <router-link to="/home" type="button" v-if="!isLogged"
                        class="text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Quiero unirme
                    </router-link>

            </div>


            <!--Texto secundario-->
            <div class="flex justify-center flex-col items-center my-20">
                <h2 class="text-5xl font-bold text-blue-900 text-center mb-6 dark:text-white">¿Cómo funciona?</h2>
                <!--Poner algo de texto más tarde-->
                <p class="text-center w-2/3 md:w-1/4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Tenetur
                    reiciendis
                    eveniet eligendi molestias necessitatibus.</p>
            </div>

            <!--Texto terciario con elementos a imagenes y texto-->

            <div class=" w-auto md:w-4/5 md:mx-auto bg-white dark:bg-slate-900">

                <!--Primera fila-->

                <div
                    class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                    <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 " src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/10/08/14127729679367.jpg" alt="img" />

                    <div
                        class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                        <h3 class="text-3xl font-bold text-blue-900 dark:text-white mb-6 md:w-full">Paso 1</h3>
                        <!--Poner algo de texto más tarde-->
                        <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                            dolor sit amet consectetur adipisicing
                            elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt eius
                            debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                    </div>

                </div>

                <!--Segunda fila-->

                <div
                    class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                    <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 " src="cta-mapGrande.png"
                        alt="img" />

                    <div
                        class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                        <h3 class="text-3xl font-bold text-blue-900 dark:text-white mb-6 md:w-full">Paso 1</h3>
                        <!--Poner algo de texto más tarde-->
                        <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                            dolor sit amet consectetur adipisicing
                            elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt eius
                            debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                    </div>

                </div>

                <!--Tercera fila-->

                <div
                    class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                    <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 " src="https://www.aplicacionespara.org/wp-content/uploads/2019/07/aplicaciones-para-ayudar-al-medio-ambiente-1.jpg" alt="img" />

                    <div
                        class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                        <h3 class="text-3xl font-bold text-blue-900 dark:text-white mb-6 md:w-full">Paso 3</h3>
                        <!--Poner algo de texto más tarde-->
                        <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                            dolor sit amet consectetur adipisicing
                            elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt eius
                            debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                    </div>

                </div>

                <!--Cuarta fila-->

                <div
                    class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                    <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 " src="cta-mapGrande.png"
                        alt="img" />

                    <div
                        class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                        <h3 class="text-3xl font-bold text-blue-900 dark:text-white md:w-full">Paso 4</h3>
                        <!--Poner algo de texto más tarde-->
                        <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                            dolor sit amet consectetur adipisicing
                            elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt eius
                            debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                    </div>

                </div>

            </div>

        </div>
        <div class="sections">
            <section id="about" class="bg-white dark:bg-slate-800">
                <h1 class="text-4xl font-extrabold dark:text-white">Quiénes somos</h1>
                <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                </p>
            </section>

            <section id="howto" class="bg-white dark:bg-slate-900">
                <h1 class="text-4xl font-extrabold dark:text-white">¿Qué tengo que hacer?</h1>
                <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                </p>
            </section>

            <section id="contact" class="bg-white dark:bg-slate-800">
                <h1 class="text-4xl font-extrabold dark:text-white">Contáctanos</h1>
                <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                    repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                    reprehenderit
                    perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia omnis,
                    excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil quis
                    fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum dolor
                    sit
                    amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut exercitationem
                    aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                    distinctio.
                    Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel. Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam at
                    aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae culpa
                    est!
                </p>
            </section>
        </div>

    </div>

    <div class="main-container" id="misdatos" v-if="isLogged">
        <div class="bg-white dark:bg-slate-900 p-20">

            <!--Texto principal-->
            <div class="mb-20">
                <h1 class="text-5xl font-bold text-blue-900 mb-6 dark:text-white">Bienvenido, {{
                        user.nickname
                }}</h1>
                <!--Poner algo de texto más tarde-->
                <p class="w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit.
                    Reprehenderit aut ratione, ut, voluptatum commodi ducimus enim nobis ad ex excepturi eaque amet
                    vitae
                    modi quae nemo, animi quidem esse quia.</p>
            </div>

            <div class="flex justify-around gap-12">

                <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur.</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order.
                    </p>
                </the-card>

                <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur.</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        or 
                    </p>1
                </the-card>

                <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur.</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                        order.
                    </p>
                </the-card>

            </div>

        </div>

    </div>

</template>

<script setup>

import { TheCard } from 'flowbite-vue'

import { storeToRefs } from 'pinia'
import { useSessionStore } from '@/store/session'
import { computed } from 'vue';

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const isLogged = computed(() => {
    return sessionStore.isLogged
})

</script>

<style scoped>
.map-wrapper {
    padding-top: 50px;
    /* height of sticky header */
}

#map {
    box-shadow: inset 0 0 80px rgb(87, 87, 87);
    width: 100%;
    height: 100vh;
    background: url("../../public/gmaps.png");
}

.sections section {
    padding: 24px;
}
.main-container {
    min-height: 100vh;
}
</style>