import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    //A partir de ahora podemos usar @ para referirnos a la carpeta src
    //Si le sacamos el './src', nos referiríamos a la carpeta raíz del proyecto
    alias:{
      '@': resolve(__dirname,'./src')
    }
  }, 
  css:{
    //instalación de variables globales scss y uso del módulo color de Sass
    preprocessorOptions:{
      scss:{
        additionalData: `@use "sass:color" as color;\n@use "@/scss/_variables" as *;`
      }
    }
  }
})