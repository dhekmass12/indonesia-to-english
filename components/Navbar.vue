<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
</script>

<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="inset-y-0 left-0 flex items-center">
                <!-- Mobile menu button-->
                <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="absolute -inset-0.5" />
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                    <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" style="margin-left: 10px;">
                <div>
                    <div class="flex space-x-4">
                        <a v-for="item in leftNavigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', item.backgroundColor, 'rounded-md py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
                            <span v-if="item.name === 'Dashboard'">
                                <FontAwesomeIcon :icon="faHome" class="h-6 w-auto" style="float:left;" alt="Homepage" />
                                <p style="float:left; position: relative; transform: translateY(-50%); top:50%; margin-left: 10px; margin-right: 10px;">{{ item.name }}</p>
                                <div style="clear: left;"/>
                            </span>
                            <span v-else class="hidden">
                                <p style="float:left; position: relative; transform: translateY(-50%); top:50%;">{{ item.name }}</p>
                                <div style="clear: left;"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="flex space-x-4">
                    <NuxtLink v-for="item in rightNavigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', item.backgroundColor, 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</NuxtLink>
                </div>
            </div>
        </div>
        </div>

        <DisclosurePanel>
        <div class="space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton v-for="item in leftNavigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

    const leftNavigation = [
        { name: 'Dashboard', href: '/', current: false, backgroundColor: ''},
    ]
    const rightNavigation = [
    ]
</script>