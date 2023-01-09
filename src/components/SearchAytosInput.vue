<template>
    <div class="relative w-full text-gray-700">
        <input type="text" v-model="searchValue" placeholder="Usuario" class="pl-2 placeholder:text-gray-400 w-full items-center justify-between rounded bg-white p-1 ring-1 ring-gray-300" />

        <!-- list items -->
        <ul class="z-10 absolute mt-2 p-2 w-fit rounded bg-gray-50 ring-1 ring-gray-300 shadow" v-if="open">
            <li v-for="(ayto, index) in filteredAyuntamientosList" :key="index" :value="ayto.ciudad"
                class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="selectAyto(ayto.ciudad)">
            </li>
            <li v-if="filteredAyuntamientosList.length <= 0"
                class="select-none p-2">
                <span class="text-gray-500">Sin coincidencias</span>
            </li>
        </ul>
    </div>
</template>

<script>

import { ref, computed, watch } from 'vue'

//import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'SearchAyuntamientos',
    components: {
        // ChevronDownIcon,
        // ChevronUpIcon
    },
    props: {
        ayuntamientos: {
            type: Array,
            required: true
        }
    },
    setup(props, context) {

        //input

        const searchValue = ref('')

        const filteredAyuntamientosList = computed(() => {

            return props.ayuntamientos.filter(user => {
                return user.nickname.toLowerCase().includes(searchValue.value.toLowerCase())
            })

        })

        watch(searchValue, () => {
            open.value = true
        })  

        const open = ref(false)

        const toggle = () => {
            open.value = !open.value
        }

        const selectAyto = (nickname) => {           
            searchValue.value = nickname
            context.emit('updated', searchValue.value)
            setTimeout( () => {
                open.value = false
            }, 1)
        }

        return {
            open,
            toggle,
            selectAyto,
            searchValue,
            filteredAyuntamientosList
        }
    }
}
</script>