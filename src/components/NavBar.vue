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
                <NavbarLink link='/'>Ver mapa</NavbarLink>
                <NavbarLink link='/#about'>Quienes somos</NavbarLink>
                <NavbarLink link='/#howto'>¿Que tengo que hacer?</NavbarLink>
                <NavbarLink link='/#contact'>Contacto</NavbarLink>
                <NavbarLink v-if="isShowMenu">
                    <router-link to='/login' v-if="!isLogged">Iniciar sesión</router-link>
                </NavbarLink>
            </NavbarCollapse>
            <NavbarCollapse v-if="isLogged" :isShowMenu="isShowMenu">
                <NavbarLink link='/'>Ver mapa</NavbarLink>
                <NavbarLink v-if="isShowMenu">
                    <router-link to="/ajustes">Ajustes</router-link>
                </NavbarLink>
                <NavbarLink v-if="isShowMenu && isLogged">
                    <button @click="handleLogoutButtonClick"
                        class="text-left text-red-500 block px-4 py-2 text-sm hover:bg-slate-100 inline-block w-full"
                        role="menuitem" tabindex="-1" id="menu-item-1">Cerrar sesión</button>
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
                        class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                            <router-link to="/ajustes"
                                class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 inline-block w-full"
                                role="menuitem" tabindex="-1" id="menu-item-0">Ajustes</router-link>
                            <button @click="handleLogoutButtonClick"
                                class="text-left text-red-500 block px-4 py-2 text-sm hover:bg-slate-100 inline-block w-full"
                                role="menuitem" tabindex="-1" id="menu-item-1">Cerrar sesión</button>
                        </div>
                    </div>
                </div>

                <!-- Landing buttons -->
                <div class="flex gap-6 items-center">
                    <a href="#howto" v-if="!isLogged"
                        class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:">
                        Quiero unirme
                    </a>
                    <router-link to='/login' class="dark:text-gray-400" v-if="!isLogged">Iniciar sesión</router-link>
                </div>

                <!-- Toggle theme button -->
                <button id="theme-toggle" type="button"
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700  dark: rounded-lg text-sm p-2.5">
                    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </template>
    </Navbar>
</template>

<script setup>


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