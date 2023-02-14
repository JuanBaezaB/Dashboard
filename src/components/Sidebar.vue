<script setup>
import { ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
    { name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
    { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Customer Success1', href: '#', bgColorClass: 'bg-yellow-500' },
]
</script>
<template>
    <!-- Sidebar -->
    <div id="sidebar" class="fixed inset-0 z-40 flex ">
        <div
            class="relative flex w-full flex-1 flex-col pt-0 pb-5 transition-colors duration-500 bg-white dark:bg-gray-800 border-slate-200 lg:border-slate-900/10 dark:border-slate-50/[0.06] border-r shadow-sm dark:shadow-none">

            <!-- Header Sidebar -->
            <header>
                <div class="flex items-center justify-between px-4">
                    <div class="flex flex-shrink-0 items-center h-16 -mb-px">
                        <svg width="32" height="32" viewBox="0 0 32 32">
                            <defs>
                                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                    <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%"></stop>
                                    <stop stop-color="#A5B4FC" offset="100%"></stop>
                                </linearGradient>
                                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                    <stop stop-color="#38BDF8" stop-opacity="0" offset="0%"></stop>
                                    <stop stop-color="#38BDF8" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <rect fill="#6366F1" width="32" height="32" rx="16"></rect>
                            <path
                                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                                fill="#4F46E5"></path>
                            <path
                                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                                fill="url(#logo-a)"></path>
                            <path
                                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                                fill="url(#logo-b)"></path>
                        </svg>
                    </div>
                    <div class="flex items-center justify-center ">
                        <button @click="sidebarClose"
                            class="inline-flex items-center justify-center w-8 h-8 mr-2 text-slate-500 transition-colors duration-150   hover:bg-slate-200 rounded-full focus:shadow-outline "
                            data-toggle="layout" data-action="sidebar_close" id="sidebar_close">
                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>



            <!-- Sidebar content -->
            <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="px-2">
                    <div class="space-y-1">
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            :class="[item.current ? 'dark:bg-gray-900 bg-sky-100  dark:text-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']"
                            :aria-current="item.current ? 'page' : undefined">
                            <component :is="item.icon"
                                :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                                aria-hidden="true" />
                            {{ item.name }}
                        </a>
                        <a
                            class="group flex items-center p-2 rounded-lg md:text-sm lg:leading-6 font-semibold text-sky-500 dark:text-sky-400 hover:bg-gray-100 dark:hover:bg-gray-900 ">
                            <div
                                class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                                        class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300">
                                    </path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                                        class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200">
                                    </path>
                                </svg>
                            </div>
                            <span>
                                Documentation
                            </span>
                        </a>
                    </div>
                    <div class="mt-8 text-sm">
                        <h3 class="px-3 font-semibold text-slate-900 dark:text-slate-200" id="mobile-teams-headline">
                            Teams</h3>
                        <div class="mt-1 space-y-1 text-sm" role="group" aria-labelledby="mobile-teams-headline">
                            <a v-for="team in teams" :key="team.name" :href="team.href"
                                class="group flex items-center rounded-md px-3 py-2 leading-5 hover:bg-gray-50 dark:hover:bg-gray-900 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                                <span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']"
                                    aria-hidden="true" />
                                <span class="truncate">{{ team.name }}</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            pageContent: null,
            lResize: false
        }
    },
    created() {
        window.addEventListener("resize", this.resizeHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeHandler);
    },

    mounted() {
        this.pageContent = document.getElementById('page-container').classList;
        this.sidebarcloseMd();

    },
    methods: {
        sidebarClose() {
            let withPage = window.innerWidth;
            if (withPage < 768) {
                this.pageContent.remove('sidebar-o-xs')
                if (this.pageContent.contains('sidebar-o-md')) {
                    this.pageContent.remove('sidebar-o-md')
                }
            } else if (withPage > 767 && withPage < 1024) {
                this.pageContent.remove('sidebar-o-md')
                if (this.pageContent.contains('sidebar-o-xs')) {
                    this.pageContent.remove('sidebar-o-xs');
                }
            }

            console.log(this.pageContent);

        },
        resizeHandler(e) {
            clearTimeout(this.lResize);
            this.pageContent.remove('side-trans-enabled')
            let page = this.pageContent;
            this.lResize = setTimeout(function (pageContent = page) {
                let withPage = window.innerWidth;
                if (withPage > 767 && withPage < 1024) {
                    if (pageContent.contains('sidebar-o-xs')) {
                        pageContent.add('sidebar-o-md');
                    }
                }
                if (withPage < 768) {
                    if (pageContent.contains('sidebar-o-md')) {
                        pageContent.add('sidebar-o-xs')
                    }
                }
                pageContent.add('side-trans-enabled')
                console.log(withPage)
            }, 500);
        },
        sidebarcloseMd() {
            const overlay = document.querySelector("#sidenav-overlay");
            const pageContent = this.pageContent;

            overlay.addEventListener('click', function (event) {
                console.log(pageContent);
                pageContent.remove('sidebar-o-md');
                if (pageContent.contains('sidebar-o-xs')) {
                    pageContent.remove('sidebar-o-xs');
                }
            });

        },

    }
}
</script>