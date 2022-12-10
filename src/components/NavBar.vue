<template>
    <Navbar sticky>
        <template #logo>
            <router-link to='/' class="flex gap-2 items-center">
                <img class="object-contain h-12 w-12" src="../../public/logoco3_mini.png" alt="logo">
                <h1 class="font-bold text-lg dark:text-white">CommunO3</h1>
            </router-link>
            <!-- <NavbarLogo link="/" alt="communo3 logo" image-url="https://flowbite.com/docs/images/logo.svg">
                communo3
            </NavbarLogo> -->
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse v-if="!isLogged" :isShowMenu="isShowMenu">
                <NavbarLink link='/'>
                    <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                        <MapIcon class="h-5 w-5 mr-2" />
                        Ver mapa
                    </div>
                </NavbarLink>
                <NavbarLink link='/#about'>
                    <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                        <InformationCircleIcon class="h-5 w-5 mr-2" />
                        Quienes somos
                    </div>
                </NavbarLink>
                <NavbarLink link='/#howto'>
                    <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                        <QuestionMarkCircleIcon class="h-5 w-5 mr-2" />
                        ¿Que tengo que hacer?
                    </div>
                </NavbarLink>
                <NavbarLink link='/#contact'>
                    <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                        <EnvelopeIcon class="h-5 w-5 mr-2" />
                        Contacto
                    </div>
                </NavbarLink>
                <NavbarLink v-if="isShowMenu">
                    <div class="flex items-center p-3 bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 rounded-2xl">
                        <UserCircleIcon class="h-5 w-5 mr-2" />
                        <router-link to='/login' class="dark:text-gray-400">Iniciar sesión</router-link>
                    </div>
                </NavbarLink>
            </NavbarCollapse>
            <NavbarCollapse v-if="isLogged" :isShowMenu="isShowMenu">
                <NavbarLink link='/'>
                    <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                        <MapIcon class="h-5 w-5 mr-2" />
                        Ver mapa
                    </div>
                </NavbarLink>
            </NavbarCollapse>
        </template>
        <template #right-side>
            <div class="flex flex-auto gap-8">
                <!-- Profile Dropdown -->
                <div id="profile-dropdown" v-if="isLogged" class="relative inline-block text-left">
                    <div>
                        <button type="button" @click="handleProfileDropdownClick"
                            class="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                            id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <div class="flex flex-auto gap-8">
                                <Avatar status="online" bordered rounded :img="user?.profile_photo_url" />
                                <div class="flex flex-col text-left">
                                    <p class="text-gray-500 dark:text-gray-400 font-bold">{{ user?.nickname }}</p>
                                    <p class="text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
                                </div>
                            </div>
                            <!-- Heroicon name: mini/chevron-down -->
                            <svg class="ml-2 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div @click="handleProfileDropdownClick"
                        class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                            <router-link to="/ajustes"
                                class="flex items-center text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10 inline-block w-full"
                                role="menuitem" tabindex="-1" id="menu-item-0">
                                <AdjustmentsHorizontalIcon class="h-5 w-5 mr-2" />
                                Ajustes
                            </router-link>

                            <button @click="handleLogoutButtonClick"
                                class="flex items-center text-left text-red-500 block px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-white/10 inline-block w-full"
                                role="menuitem" tabindex="-1" id="menu-item-1">
                                <ArrowLeftOnRectangleIcon class="h-5 w-5 mr-2" />
                                Cerrar sesión
                            </button>

                        </div>
                    </div>
                </div>

                <!-- Landing buttons -->
                <div class="flex gap-6 items-center">
                    <NavbarCollapse  v-if="!isLogged">
                        <NavbarLink link='/#howto'>
                            <div
                                class="text-white bg-blue-700 hover:bg-blue-800 fnt-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700">
                                Quiero unirme
                            </div>
                        </NavbarLink>
                        <NavbarLink class="flex items-center">
                            <router-link to='/login' class="dark:text-gray-400">
                                <div class="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-2xl">
                                    <UserCircleIcon class="h-5 w-5 mr-2" />
                                    Iniciar sesión
                                </div>
                            </router-link>
                        </NavbarLink>

                    </NavbarCollapse>
                    <!-- Toggle theme button -->
                <div>
                    <button id="theme-toggle" type="button"
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:bg-gray-700 rounded-lg p-2">
                        <div id="theme-toggle-dark-icon" class="hidden">
                            <MoonIcon class="h-5 w-5" />
                        </div>
                        <div id="theme-toggle-light-icon" class="hidden">
                            <SunIcon class="h-5 w-5" />
                        </div>
                    </button>
                </div>
                </div>
                

            </div>
        </template>
    </Navbar>
</template>

<script setup>

import { MapIcon, ArrowLeftOnRectangleIcon, AdjustmentsHorizontalIcon, InformationCircleIcon, QuestionMarkCircleIcon, EnvelopeIcon, UserCircleIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

import { Navbar, NavbarCollapse, NavbarLink, Avatar } from 'flowbite-vue'

import router from '@/router';
import { storeToRefs } from 'pinia';
import { onMounted, computed } from 'vue';

import { useSessionStore } from '@/store/session'

const sessionStore = useSessionStore()
const { user } = storeToRefs(sessionStore)

const handleLogoutButtonClick = async () => {
    sessionStore.logout();
    router.push("/")
}

const isLogged = computed(() => {
    return sessionStore.isLogged
})

const handleProfileDropdownClick = () => {
    const profileDropdownButton = document.querySelector("#profile-dropdown div[role='menu']");
    if (profileDropdownButton?.classList.contains("hidden")) profileDropdownButton?.classList.remove("hidden")
    else profileDropdownButton?.classList.add("hidden")
}

onMounted(() => {

    // TOGGLE LIGHT/DARK THEME
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    var themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function () {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

    });

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

})




</script>


<style scoped>

</style>