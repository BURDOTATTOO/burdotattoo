<script lang="ts" setup>
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'
import DropdownMenu from '~/components/menus/dropdown/desktop/index.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SliderTopNav from '~/components/menus/sliders/top-nav/index.vue'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import Logo from '~/public/logo.vue'

import HamburgerVerticalSvg from '~/components/icons/header/HamburgerSvg.vue'

const isSliderTopNavOpen = ref<boolean | undefined>(undefined)
const isDarkMode = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')
  
  if(theme === 'dark') {
    isDarkMode.value = true
  }
})

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const toggleSliderTopNav = () => {
  isSliderTopNavOpen.value = !isSliderTopNavOpen.value
}

</script>

<template>
  <section class="header-container">

    <header class="header">
      <div class="left">
        <NuxtLink to="/" class="logo-container" aria-label="Logo de Vanguardia" >
          <Logo />
        </NuxtLink>
      </div>

      <div class="right">

        <div class="dark-mode-icons" @click="handleTheme()" aria-label="Cambiar tema del sitio web" >
          <MoonSvg v-if="!isDarkMode" class="icon sun" />
          <SunSvg v-else class="icon moon" />
        </div>

        <DropdownMenu class="desktop-only" />
        <ButtonsGlowOn text="Contacto" class="contact-button" aria-label="Ir a la sección de contacto" />
        
        <div class="hamburger-menu mobile-only" @click="toggleSliderTopNav" aria-label="Abrir menú de navegación" >
          <HamburgerVerticalSvg class="icon" />
        </div>

        <SliderTopNav
          :toggleTopNav="toggleSliderTopNav"
          :isTopNavOpen="isSliderTopNavOpen" />
      </div>
    </header>

  </section>

</template>