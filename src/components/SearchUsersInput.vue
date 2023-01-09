<template>
    <div class="relative w-full text-gray-700">
        <!-- <input type="text" v-model="searchValue" placeholder="Usuario" class="pl-2 placeholder:text-gray-400 w-full items-center justify-between rounded bg-white p-1 ring-1 ring-gray-300" /> -->

        <Input v-model="searchValue" type="text" class="w-full dark:text-gray-400"
            placeholder="Usuario" name="">
            <template #prefix>
                <MagnifyingGlassIcon v-if="!searchValue" class="h-4 w-4 mr-3" />
                <UserIcon v-if="searchValue" class="h-4 w-4 mr-3" />
            </template>
        </Input>

        <!-- list items -->
        <ul class="z-10 absolute mt-2 p-2 w-fit rounded bg-gray-50 ring-1 ring-gray-300 shadow" v-if="open">
            <li v-for="(u, index) in filteredUsersList" :key="index" :value="u.nickname"
                class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="selectUser(u.nickname)">
                {{ u.nickname }}(<span class="text-gray-500">{{ u.email }}</span>)
            </li>
            <li v-if="filteredUsersList.length <= 0"
                class="select-none p-2">
                <span class="text-gray-500">Sin coincidencias</span>
            </li>
        </ul>
    </div>
</template>

<script>

import { ref, computed, watch } from 'vue'

//import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

import { Input } from 'flowbite-vue'
import { UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'SearchUsers',
    components: {
    // ChevronDownIcon,
    // ChevronUpIcon
    Input,
    MagnifyingGlassIcon,
    UserIcon
},
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    setup(props, context) {

        //input

        const searchValue = ref('')

        const filteredUsersList = computed(() => {

            return props.users.filter(user => {
                return user.nickname.toLowerCase().includes(searchValue.value.toLowerCase())
            })

        })

        watch(searchValue, () => {
            open.value = true
        }) 

        const open = ref(false)

        // const toggle = () => {
        //     open.value = !open.value
        // }

        const selectUser = (nickname) => {           
            searchValue.value = nickname
            context.emit('updated', searchValue.value)
            setTimeout( () => {
                open.value = false
            }, 1)
        }

        return {
            open,
            //toggle,
            selectUser,
            searchValue,
            filteredUsersList
        }
    }
}
</script>