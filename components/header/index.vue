<script lang="ts" setup>
import './header.scss'
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'
import Menu from './menu/index.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SliderTopNav from '~/components/sliders/top-nav/TopNav.vue'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'
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

        <div class="dark-mode-icons">
          <MoonSvg v-if="!isDarkMode" @click="handleTheme()" class="icon sun" />
          <SunSvg v-else @click="handleTheme()" class="icon moon" />
        </div>

        <Menu class="desktop-only" />
        <ButtonsGlowOn text="Probar" />
        <HamburgerVerticalSvg @click="toggleSliderTopNav" class="icon hamburger mobile-only " />

        <SliderTopNav
          :toggleTopNav="toggleSliderTopNav"
          :isTopNavOpen="isSliderTopNavOpen" />
      </div>
    </div>

  </header>

</template>