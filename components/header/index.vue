<script lang="ts" setup>
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'
import DropdownMenu from '~/components/menus/dropdown/desktop/index.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SliderTopNav from '~/components/sliders/top-nav/TopNav.vue'
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
  <header class="header-container">

    <div class="header">
      <div class="left">
        <NuxtLink to="/" class="logo-container">
          <Logo />
        </NuxtLink>
      </div>

      <div class="right">

        <div class="dark-mode-icons" @click="handleTheme()" >
          <MoonSvg v-if="!isDarkMode" class="icon sun" />
          <SunSvg v-else class="icon moon" />
        </div>

        <DropdownMenu />
        <ButtonsGlowOn text="Contacto" class="contact-button" />
        
        <div class="hamburger-menu mobile-only" @click="toggleSliderTopNav">
          <HamburgerVerticalSvg class="icon" />
        </div>

        <SliderTopNav
          :toggleTopNav="toggleSliderTopNav"
          :isTopNavOpen="isSliderTopNavOpen" />
      </div>
    </div>

  </header>

</template>