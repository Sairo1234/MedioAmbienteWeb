<template>
    <div class="w-full">

        <div id="map">
            <div class="absolute m-auto right-12 bottom-12 w-fit flex flex-col gap-4">

                <div id="filtros-mapa" class="absolute m-auto right-28 bottom-12 w-fit flex flex-col gap-4">
                    <div class="bg-white/20 backdrop-blur-sm dark:bg-slate-900/20 p-5 rounded-md shadow-lg">

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
        </div>

        <div style="width: 800px;"><canvas id="estadistica"></canvas></div>

        <div class="main-container" v-if="!isLogged">

            <div class="bg-white dark:bg-slate-900 py-20">

                <!--Texto principal-->
                <div class="flex justify-center flex-col items-center mb-20">
                    <h1 class="text-4xl md:text-5x1 font-bold text-blue-900 text-center mb-6 dark:text-white">
                        Recoge datos y ayuda a tu ciudad</h1>
                    <!--Poner algo de texto más tarde-->
                    <p class="text-center w-full px-6 md:w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor,
                        sit
                        amet
                        consectetur
                        adipisicing elit.
                        Reprehenderit aut ratione, ut, voluptatum commodi ducimus enim nobis ad ex excepturi eaque
                        amet
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
                    <p class="text-center w-full px-6 md:w-2/3 text-gray-500 dark:text-gray-400">Lorem ipsum dolor
                        sit
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
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem
                                ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia
                                deserunt
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
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem
                                ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia
                                deserunt
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
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem
                                ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia
                                deserunt
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
                            <p class="px-10 md:px-0 md:w-3/4 text-justify text-gray-500 dark:text-gray-400">Lorem
                                ipsum
                                dolor sit amet consectetur adipisicing
                                elit. Veniam ab asperiores, odio delectus non consectetur aspernatur officia
                                deserunt
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
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
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
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
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
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
                        culpa
                        est!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                        repellendus ratione aliquam adipisci ipsa eos nostrum, ea obcaecati, fugiat perferendis
                        reprehenderit
                        perspiciatis quibusdam quidem alias placeat labore quisquam facilis dolorem. Lorem ipsum
                        dolor
                        sit
                        amet
                        consectetur adipisicing elit. Adipisci vel nesciunt dolorem suscipit aut et cumque in
                        officia
                        omnis,
                        excepturi laudantium cum rerum culpa error modi, maxime numquam earum ducimus. Lorem ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Magni, sit labore blanditiis eveniet ducimus impedit,
                        nihil
                        quis
                        fugit fugiat est omnis qui? Cum minima quod libero nam in excepturi perspiciatis. Lorem
                        ipsum
                        dolor
                        sit
                        amet consectetur adipisicing elit. Quos dolorum dolor itaque reprehenderit omnis? Aut
                        exercitationem
                        aliquid rerum minima repellendus cumque, id alias saepe nihil nam at consequatur incidunt
                        ad?
                        Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Impedit sint architecto totam fugit sunt
                        distinctio.
                        Ipsa cumque beatae sed earum placeat sint facilis quas, temporibus, nulla id aliquid eum
                        vel.
                        Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam labore aliquam, ipsa dolores
                        quam
                        at
                        aliquid quisquam quis doloribus rerum dolorem sed nobis velit nulla necessitatibus
                        recusandae
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
                        Reprehenderit aut ratione, ut, voluptatum commodi ducimus enim nobis ad ex excepturi eaque
                        amet
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

import { TheCard } from 'flowbite-vue'

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

import {estaFunctions} from '../logicaFake/estadisticas_functionalities'

// ***************** Código del mapa
const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const isLogged = computed(() => {
    return sessionStore.isLogged
})

const checkedGasses = ref([])

// Creación del mapa y estadísticas
onMounted(async () => {

    L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
    var mymap = mapFunctions.generarMapa('map')

    var medidasJsonDelUltimoDia = await MedicionesAPI.obtenerTodasMedicionesDelDia(new Date().getTime())

    // Si hay un usuario logeado, se calculan sus layers
    if (isLogged.value) {

        var medidasJsonDelUltimoDiaDelUsuarioDeTipoO3= await MedicionesAPI.obtenerMedicionesDeTemperaturaDelDiaPorNicknameYTipo("Raul", 1, new Date().getTime())
        var medidasJsonDelUltimoDiaDelUsuarioDeTipoNO2= await MedicionesAPI.obtenerMedicionesDeTemperaturaDelDiaPorNicknameYTipo("Raul", 2, new Date().getTime())
        var geojsonFeatureDelusuario = mapFunctions.generarGeoJson(await MedicionesAPI.obtenerTodasMedicionesDelDiaPorNickname("Raul"))

        console.log(medidasJsonDelUltimoDiaDelUsuarioDeTipoO3)

        L.control.layers({
            "Mapa de interpolación del O3": mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDiaDelUsuarioDeTipoO3, mymap).addTo(mymap),
            "Mapa de interpolación de NO2":  mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDiaDelUsuarioDeTipoNO2, mymap),
            }, 
            { "Tu recorrido": mapFunctions.generarRutaDeUsuarioLogeado(geojsonFeatureDelusuario) },
            {collapsed: false}).addTo(mymap);
    }
    else {
        var mapaInterpolacion = mapFunctions.generarMapaDeInterpolacion(medidasJsonDelUltimoDia, mymap)
        mapaInterpolacion.addTo(mymap)
    }

    // Función para crear media de datos dados de las últimas 24 horas
    estaFunctions.estadisticaPrueba('estadistica')

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
</style>