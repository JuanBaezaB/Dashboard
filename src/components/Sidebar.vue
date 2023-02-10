<template>
    <!-- Sidebar -->
    <aside id="sidebar" class="fixed inset-0  lg:overflow-y-visible ">
        <!-- Sidebar header -->
        <header
            class="sticky top-0 transition-colors duration-500 bg-white dark:bg-gray-800 border-slate-200 lg:border-slate-900/10 dark:border-slate-50/[0.06] border-r">
            <div class="px-4 sm:px-3 lg:px-3 ">
                <div class="flex items-center justify-between h-16 -mb-px">
                    <div class="flex ">
                        <a aria-current="page" class="block active" href="/">
                            <!-- Logo -->
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
                        </a>
                    </div>
                    <div class="flex items-center">
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
            </div>
        </header>
        <!-- Sidebar content -->
        <div id="nav" class="overflow-y-auto h-full bg-white scrolling-touch dark:bg-gray-800 transition-colors duration-500 border-slate-200 lg:border-slate-900/10 dark:border-slate-50/[0.06] border-b border-r">
            <nav id="nav" class="mx-10 my-10 md:mx-5 md:my-5 font-normal text-base md:text-sm">
                <ul class="">
                    <li>
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
                    </li>

                    <li>
                        <a
                            class="group flex items-center p-2 rounded-lg lg:text-sm text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:bg-gray-900">
                            <div
                                class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-slate-800 dark:highlight-white/5">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
                                        class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-slate-400"></path>
                                    <path d="m6 9 6 3v7l-6-3V9Z"
                                        class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-slate-500">
                                    </path>
                                    <path d="m18 9-6 3v7l6-3V9Z"
                                        class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-slate-600">
                                    </path>
                                </svg>
                            </div>
                            <span>
                                Components
                            </span>
                        </a>
                    </li>
                    <li class="mt-12 lg:mt-8">
                        <h5 class="mb-8 md:mb-3 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                        <ul class="space-y-6 md:space-y-2 border-l border-slate-100 dark:border-slate-700">
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/installation">Installation</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/editor-setup">Editor Setup</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/using-with-preprocessors">Using with Preprocessors</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/optimizing-for-production">Optimizing for Production</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/browser-support">Browser Support</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/upgrade-guide">Upgrade Guide</a></li>
                        </ul>
                    </li>
                    <li class="mt-12 lg:mt-8">
                        <h5 class="mb-8 md:mb-3 font-semibold text-slate-900 dark:text-slate-200">Getting Started</h5>
                        <ul class="space-y-6 md:space-y-2 border-l border-slate-100 dark:border-slate-700">
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/installation">Installation</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/editor-setup">Editor Setup</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/using-with-preprocessors">Using with Preprocessors</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/optimizing-for-production">Optimizing for Production</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/browser-support">Browser Support</a></li>
                            <li><a class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="/docs/upgrade-guide">Upgrade Guide</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>

    </aside>
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
    },
    methods: {
        sidebarClose() {
            let withPage = window.innerWidth;
            if (withPage < 768) {
                this.pageContent.remove('sidebar-o-xs')
            }else if (withPage > 767 && withPage < 1024) {
                this.pageContent.remove('sidebar-o-md')
            }
           
            console.log(this.pageContent);

        },
        resizeHandler(e) {
            clearTimeout(this.lResize);
            this.pageContent.remove('side-trans-enabled')
            let page = this.pageContent;
            this.lResize = setTimeout(function (pageContent = page) {
                pageContent.add('side-trans-enabled')
                console.log(window.innerWidth)
            }, 500);
        },
    }
}
</script>

