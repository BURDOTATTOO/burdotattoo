<script setup lang="ts">
import { ref } from 'vue'

import './menu.scss'
import SearchSvg from "~/components/icons/menu/SearchSvg.vue"
import CommentSvg from "~/components/icons/menu/CommentSvg.vue"
import GraphicDesignSvg from "~/components/icons/menu/GraphicDesign.vue"
import ServerSvg from "~/components/icons/menu/ServerSvg.vue"
import SupportSvg from "~/components/icons/menu/SupportSvg.vue"
import ArrowDownSvg from "~/components/icons/ArrowDownSvg.vue"
import WebDesignSvg from "~/components/icons/menu/WebDesignSvg.vue"
import SuggestionsSvg from "~/components/icons/menu/SuggestionsSvg.vue"
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const showServices = ref<boolean | null>(null)
const showSupport = ref<boolean | null>(null)
const logged = ref(false)
const loadingProfile = ref(false)

const toggleDropdown = () => {
  showServices.value = !showServices.value
  showSupport.value = false
}

const toggleSupport = () => {
  showSupport.value = !showSupport.value
  showServices.value = false
}

const handleLogin = () => {
  console.log('Login')
  showServices.value = false

  loadingProfile.value = true
  setTimeout(() => {
    loadingProfile.value = false
    logged.value = !logged.value
  }, 2000)

}

</script>

<template>

  <nav class="menu desktop-only">
    <ul class="items">

      <li class="item" @click="toggleDropdown">
        <h3>Servicios</h3>
        <ArrowDownSvg :class="['icon arrow-icon', showServices ? 'rotate-opposite' : 'rotate']" />

        <ul class="sub-items" v-if="showServices">
          <li href="#" class="sub-item">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </li>

          <li href="#" class="sub-item">
            <GraphicDesignSvg class="icon" />
            <p>Diseño de gráfico</p>
          </li>

          <li href="#" class="sub-item">
            <ServerSvg class="icon" />
            <p>Alojamiento web</p>
          </li>

          <li href="#" class="sub-item">
            <SearchSvg class="icon" />
            <p>Marketing de motores de búsqueda</p>
          </li>

          <li href="#" class="sub-item">
            <CommentSvg class="icon comment-icon" />
            <p>Marketing de medios sociales</p>
          </li>
        </ul>

      </li>

      <li class="item" @click="toggleSupport">
        <h3>Soporte</h3>
        <ArrowDownSvg :class="['icon arrow-icon', showSupport ? 'rotate-opposite' : 'rotate']" />

        <ul class="sub-items" v-if="showSupport">
          <li href="#"  class="sub-item">
            <SupportSvg class="icon" />
            <p>Contacta con soporte</p>
          </li>

          <li href="#" class="sub-item">
            <SuggestionsSvg class="icon" />
            <p>Anuncios</p>
          </li>

          <li href="#"  class="sub-item">
            <AnnouncementsSvg class="icon" />
            <p>Sugerencias</p>
          </li>

        </ul>

      </li>

    </ul>
  </nav>


  <div @click="toggleDropdown" :class="{ 'menu-dropdown-bg': showServices }"></div>
  <div @click="toggleSupport" :class="{ 'menu-dropdown-bg': showSupport }"></div>
</template>
