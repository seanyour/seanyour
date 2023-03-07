import {defineConfig} from "vitepress";

export default defineConfig({
    base: '/seanyour/',
    title: 'seanyour \' docs',
    description: 'seanyour study docs',
    outDir: '../dist',
    lastUpdated: true,
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    },
    themeConfig: {
        nav: [],
        sidebar: {}
    }
})