<template>
    <div class="relative w-full text-gray-700">
        <!-- <input type="text" v-model="searchValue" placeholder="Ayuntamiento"
            class="pl-2 placeholder:text-gray-400 w-full items-center justify-between rounded bg-white p-1 ring-1 ring-gray-300" /> -->

        <Input v-model="searchValue" type="text" class="w-full dark:text-gray-400" placeholder="Ciudad" name="">
        <template #prefix>
            <MagnifyingGlassIcon v-if="!selectedAyto" class="h-5 w-5 mr-2" />
            <BuildingLibraryIcon v-if="selectedAyto" class="h-5 w-5 mr-2" />
        </template>
        </Input>

        <!-- list items -->
        <ul class="z-10 absolute mt-2 p-2 w-fit rounded bg-gray-50 ring-1 ring-gray-300 shadow" v-if="open">
            <li v-for="(ayto, index) in filteredAyuntamientosList" :key="index" :value="ayto?.ciudad"
                class="cursor-pointer select-none p-2 hover:bg-gray-200" @click="selectAyto(ayto)">
                {{ ayto?.ciudad }}
            </li>
            <li v-if="filteredAyuntamientosList.length <= 0" class="select-none p-2">
                <span class="text-gray-500" @click="selectAyto(null)">Sin coincidencias</span>
            </li>
        </ul>
    </div>
</template>

<script setup>

import { ref, computed, watch, defineEmits } from 'vue'

import { logicaFakeAyuntamiento } from '@/logicaFake/resources/ayuntamiento'

import { MagnifyingGlassIcon, BuildingLibraryIcon } from '@heroicons/vue/24/outline'

import { Input } from 'flowbite-vue'

//input        

const emit = defineEmits(['updated'])

const ayuntamientos = ref([])

ayuntamientos.value = await logicaFakeAyuntamiento.getAyuntamientos();

const selectedAyto = ref('')
const searchValue = ref('')

const filteredAyuntamientosList = computed(() => {

    return ayuntamientos.value.filter(ayto => {
        return ayto.ciudad.toLowerCase().includes(searchValue.value.toLowerCase())
    })

})

watch(searchValue, () => {
    open.value = true
})

const open = ref(false)

const selectAyto = (ayto) => {
    if (!ayto) {
        selectedAyto.value = ''
        searchValue.value = ''
    } else {

        selectedAyto.value = ayto.ciudad
        searchValue.value = ayto.ciudad
        emit('updated', ayto.id)
    }
    setTimeout(() => {
        open.value = false
    }, 1)
}



</script>