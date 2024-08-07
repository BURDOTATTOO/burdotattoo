<script setup lang="ts">
import { ref } from 'vue'

import './menu.scss'
import ProfileSvg from "~/components/icons/menu/ProfileSvg.vue"
import HelpSvg from "~/components/icons/menu/HelpSvg.vue"
import LogoutSvg from "~/components/icons/menu/LogoutSvg.vue"
import MessageSvg from "~/components/icons/menu/MessagesSvg.vue"
import AdsSvg from "~/components/icons/menu/AdsSvg.vue"
import HeartSvg from "~/components/icons/HeartSvg.vue"
import ArrowDownSvg from "~/components/icons/ArrowDownSvg.vue"

const showDropdown = ref<boolean | null>(null)
const logged = ref(false)
const loadingProfile = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleLogin = () => {
  console.log('Login')
  showDropdown.value = false
  
  loadingProfile.value = true
  setTimeout(() => {
    loadingProfile.value = false
    logged.value = !logged.value
  }, 2000)

}

</script>

<template>
  <div class="menu-list" @click="toggleDropdown">
    <h3>Servicios</h3>
    <ArrowDownSvg :class="['icon user-icon', showDropdown ? 'rotate-opposite' : 'rotate']" />
  </div>

  
  <nav class="user-menu-outer" v-if="showDropdown">
    <ul class="menu-dropdown">

      <li href="#" v-if="!logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Crear Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <AdsSvg class="icon" />
        <p>Publicaciones</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <MessageSvg class="icon" />
        <p>Mensajes</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <HeartSvg class="icon" />
        <p>Favoritos</p>
      </li>

      <li href="#" class="menu-dropdown-item">
        <HelpSvg class="icon" />
        <p>Centro de ayuda</p>
      </li>

      <li @click="handleLogin" v-if="!logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Entrar</p>
      </li>

      <li @click="handleLogin" v-if="logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Salir</p>
      </li>

    </ul>
  </nav>

  <div @click="toggleDropdown" :class="{ 'menu-dropdown-bg': showDropdown }"></div>
</template>
