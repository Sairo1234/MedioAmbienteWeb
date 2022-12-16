<template>
    <div class="w-full">

        <div id="map">
<<<<<<< Updated upstream
            <div class="absolute m-auto right-12 bottom-12 w-fit flex flex-col gap-4">
                <div class="bg-white/60 backdrop-blur-sm dark:bg-slate-900/20 p-5 rounded-md shadow-lg">
=======
            <div id="filtros-mapa" class="absolute m-auto right-28 bottom-12 w-fit flex flex-col gap-4">
                <div class="bg-white/20 backdrop-blur-sm dark:bg-slate-900/20 p-5 rounded-md shadow-lg">
>>>>>>> Stashed changes
                    <!-- <h3 class="font-bold mb-3 dark:text-white">Filtrar por gas</h3> -->
                    <div class="flex flex-col gap-2 text-blue-800">
                        <div class="flex items-center">
                            <input id="o3-checkbox" type="checkbox" value="o3" v-model="checkedGasses"
                                class="w-5 h-5 disabled:border-gray-100 bg-gray-100 rounded border-gray-300 focus:ring-blue-500/20 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-400 dark:border-gray-600">
                            <label for="o3-checkbox"
                                class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-800">Ozono (O3)</label>
                        </div>
                        <div class="flex items-center">
                            <input disabled id="co2-checkbox" type="checkbox" value="co2" v-model="checkedGasses"
                                class="w-5 h-5 disabled:border-gray-100 bg-gray-100 rounded border-gray-300 focus:ring-blue-500/20 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-400 dark:border-gray-600">
                            <label for="co2-checkbox"
                                class="ml-2 text-sm font-medium text-gray-600 dark:text-gray-800">Dióxido de carbono
                                (CO2)</label>
                        </div>
                        <span>Checked gasses: {{ checkedGasses }}</span>
                    </div>
                </div>
                <a v-if="isLogged"
                    class="w-full dark:bg-slate-800 bg-white hover:bg-gray-100 dark:hover:bg-slate-700 px-12 py-2 rounded-md shadow-lg text-blue-800 dark:text-white font-bold"
                    href="#misdatos">
                    <div class="flex items-center">
                        <PresentationChartLineIcon class="h-5 w-5 mr-2" />
                        Ver mis estadisticas
                    </div>
                </a>
            </div>

        </div>

        <div class="main-container" v-if="!isLogged">

            <div class="bg-white dark:bg-slate-900 py-20">

                <!--Texto principal-->
                <div class="flex justify-center flex-col items-center mb-20">
                    <h1 class="text-4xl md:text-5x1 font-bold text-blue-900 text-center mb-6 dark:text-white">
                        Recoge datos y ayuda a tu ciudad</h1>
                    <!--Poner algo de texto más tarde-->
                    <p class="text-center w-full px-6 md:w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit
                        amet
                        consectetur
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
                    <a href="#howto" v-if="!isLogged"
                        class="text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Quiero unirme</a>

                </div>


                <!--Texto secundario-->
                <div class="flex justify-center flex-col items-center my-20">
                    <h2 class="text-4xl md:text-5x1 font-bold text-blue-900 text-center mb-6 dark:text-white">¿Cómo
                        funciona?</h2>
                    <!--Poner algo de texto más tarde-->
                    <p class="text-center w-full px-6 md:w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit
                        amet
                        consectetur adipisicing elit. Tenetur
                        reiciendis
                        eveniet eligendi molestias necessitatibus.</p>
                </div>

                <!--Texto terciario con elementos a imagenes y texto-->

                <div class=" w-auto md:w-4/5 md:mx-auto bg-white dark:bg-slate-900">

                    <!--Primera fila-->

                    <div
                        class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                        <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 "
                            src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/10/08/14127729679367.jpg"
                            alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">Paso 1</h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt
                                eius
                                debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                        </div>

                    </div>

                    <!--Segunda fila-->

                    <div
                        class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                        <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 "
                            src="cta-mapGrande.png" alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">Paso 2</h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt
                                eius
                                debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                        </div>

                    </div>

                    <!--Tercera fila-->

                    <div
                        class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                        <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 "
                            src="https://www.aplicacionespara.org/wp-content/uploads/2019/07/aplicaciones-para-ayudar-al-medio-ambiente-1.jpg"
                            alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16">

                            <h3 class="text-3xl text-blue-900 dark:text-white mb-6 md:w-full">Paso 3</h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt
                                eius
                                debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                        </div>

                    </div>

                    <!--Cuarta fila-->

                    <div
                        class="flex flex-col md:flex-row justify-center items-center mb-16 md:grid md:grid-cols-2 md:divide-x">

                        <img class="object-cover px-10 md:px-0 w-auto h-auto mb-8 md:col-start-2 "
                            src="cta-mapGrande.png" alt="img" />

                        <div
                            class="flex flex-col justify-center md:justify-start mb-16 md:mb-0 text-center md:text-left md:ml-16 md:col-start-1 md:row-start-1">

                            <h3 class="text-3xl text-blue-900 dark:text-white md:w-full">Paso 4</h3>
                            <!--Poner algo de texto más tarde-->
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia deserunt
                                eius
                                debitis sed aut unde, accusantium itaque ea, iusto maiores fugiat quos?</p>
                        </div>

                    </div>

                </div>

            </div>
            <div class="sections">

                <section id="howto" class="bg-white dark:bg-slate-900">
                    <h1 class="text-4xl font-extrabold dark:text-white">¿Qué tengo que hacer?</h1>
                    <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                    </p>
                </section>

                <section id="about" class="bg-white dark:bg-slate-800">
                    <h1 class="text-4xl font-extrabold dark:text-white">Quiénes somos</h1>
                    <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                    </p>
                </section>

                <section id="contact" class="bg-white dark:bg-slate-800">
                    <h1 class="text-4xl font-extrabold dark:text-white">Contáctanos</h1>
                    <p class="my-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit, nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus recusandae
                        culpa
                        est!
                    </p>
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
                    <p class="md:w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit.
                        Reprehenderit aut ratione, ut, voluptatum commodi ducimus enim nobis ad ex excepturi eaque amet
                        vitae
                        modi quae nemo, animi quidem esse quia.</p>
                </div>

                <div class="flex justify-around flex-wrap gap-12">

                    <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png"
                        img-alt="Desk">
                        <h5 class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological
                            order.
                        </p>
                    </the-card>

                    <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png"
                        img-alt="Desk">
                        <h5 class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological
                            or
                        </p>1
                    </the-card>

                    <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png"
                        img-alt="Desk">
                        <h5 class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological
                            order.
                        </p>
                    </the-card>

                    <the-card variant="image" img-src="https://developarts.com/bl-content/uploads/chart_usage.png"
                        img-alt="Desk">
                        <h5 class="mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur.</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological
                            order.
                        </p>
                    </the-card>
                </div>

            </div>

        </div>
    </div>


</template>

<script setup>

import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'

import '../lib/leaflet-heat.js'
import { TheCard } from 'flowbite-vue'

import L from "leaflet"
import { onMounted } from 'vue'

import { storeToRefs } from 'pinia'
import { useSessionStore } from '@/store/session'
import { computed, ref } from 'vue';
//import medidasJson from './medidas.json'

import { mapFunctions } from './map_functionalities'
//import { Utilities } from './utilities'
import { MedicionesAPI } from '@/logicaFake/resources/mediciones'
import { antPath } from 'leaflet-ant-path';
//import geoJsonBarrios from './Barrios_20210712'

// ***************** Código del mapa


const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const isLogged = computed(() => {
    return sessionStore.isLogged
})

const checkedGasses = ref([])

onMounted(async () => {

    //Asocio al mapa creado el mapa generado en vue
    let mymap = L.map('map').setView([51.446509, -0.267366], 13);

    // Generador del mapa
    mapFunctions.generarMapa(mymap)

    // Si quiero obtener las mediciones de hoy de la Base de datos:
    var medidasJsonDelUltimoDia = await MedicionesAPI.obtenerTodasMedicionesDelDia(new Date().getTime())

    // Generamos el array de puntos
    var features = mapFunctions.generarFeatures(medidasJsonDelUltimoDia)

    // Generamos el GeoJson
    var geojsonFeature = mapFunctions.generarGeoJson(features)

    // Generamos el heatMap
    var heatmap = mapFunctions.generarHeatMap(geojsonFeature, mymap)

    //AQUÍ HABRÍA UNA LLAMADA AL BACKEND PARA RECIBIR EL GEOJSON DE LOS BARRIOS

    //var geoJsonDistritosAyuntamiento = mapFunctions.generarGeoJsonDeDistritosDelAyuntamiento(geojsonFeature, geoJsonBarrios)

    //var barriosColoreados = L.geoJson(geoJsonDistritosAyuntamiento, {style: Utilities.style(geoJsonDistritosAyuntamiento)})

    var baseMaps = null

    // Si hay un usuario logeado, se calculan sus layers
    if (isLogged.value) 
    {
        // geoJson de las mediciones del usuario. Llamada al servidor
        var medidasJsonDelUltimoDiaDelUsuarioLogeado = await MedicionesAPI.obtenerTodasMedicionesDelDiaPorNickname("Raul")
        var geojsonFeatureDelusuario = mapFunctions.generarGeoJson(mapFunctions.generarFeatures(medidasJsonDelUltimoDiaDelUsuarioLogeado))
        var heatmapDelUsuario = mapFunctions.generarHeatMap(geojsonFeatureDelusuario, mymap)

        // Ruta del usuario de hoy
        var routeDelusuario = []
        geojsonFeatureDelusuario.features.forEach(feature => {

            routeDelusuario.push(feature.geometry.coordenadas)
        })

        // Estilo de la ruta del usuario
        const pathDelUsuario = antPath(routeDelusuario,
        {
            "delay": 733,
            "dashArray": [
                11,
                42
            ],
            "weight": 5,
            "color": "#0000FF",
            "pulseColor": "#FFFFFF",
            "paused": false,
            "reverse": false,
            "hardwareAccelerated": true
        });

        // Se establecen las capas
        baseMaps =
        {
            "Mapa normal": mymap,
            "Mapa de las últimas 24 horas": heatmap,
            "Tu recorrido": pathDelUsuario,
            "Tu Mapa de Calor": heatmapDelUsuario
            //"Mapa Barrios": barriosColoreados,
        }
    }
    else {

        // Si no está loggeado, se muestran las capas estándar
        baseMaps =
        {
            "Mapa normal": mymap,
            "Mapa de las últimas 24 horas": heatmap,
            //"Mapa Barrios": barriosColoreados,
        }
    }

    // Asignación de las capas al mapa
    L.control.layers(baseMaps).addTo(mymap);
})

</script>

<style scoped>
#map {
    box-shadow: inset 0 0 80px rgb(87, 87, 87);
    width: 100%;
    height: calc(100vh - 75px);
}

#map #filtros-mapa {
    z-index: 999;
}

.sections section {
    padding: 24px;
}

.main-container {
    min-height: calc(100vh - 50px);
}
</style>