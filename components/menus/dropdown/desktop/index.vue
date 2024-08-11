<script setup lang="ts">
import { ref } from 'vue'

import './menu.scss'
import SeoSvg from "~/components/icons/menu/SeoSvg.vue"
import MarketingSvg from "~/components/icons/menu/MarketingSvg.vue"
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
          <NuxtLink to="/diseno-web" class="sub-item">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item">
            <GraphicDesignSvg class="icon" />
            <p>Diseño de gráfico</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item">
            <ServerSvg class="icon" />
            <p>Alojamiento web</p>
          </NuxtLink>

          <NuxtLink to="/marketing-online" class="sub-item">
            <SeoSvg class="icon" />
            <p>Marketing de motores de búsqueda</p>
          </NuxtLink>

          <NuxtLink to="/marketing-en-redes-sociales" class="sub-item">
            <MarketingSvg class="icon comment-icon" />
            <p>Marketing de medios sociales</p>
          </NuxtLink>
        </ul>

      </li>

      <li class="item" @click="toggleSupport">
        <h3>Soporte</h3>
        <ArrowDownSvg :class="['icon arrow-icon', showSupport ? 'rotate-opposite' : 'rotate']" />

        <ul class="sub-items" v-if="showSupport">
          <NuxtLink to="#" class="sub-item">
            <SupportSvg class="icon" />
            <p>Contacta con soporte</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item">
            <AnnouncementsSvg class="icon" />
            <p>Anuncios</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item">
            <SuggestionsSvg class="icon" />
            <p>Sugerencias</p>
          </NuxtLink>

        </ul>

      </li>

    </ul>
  </nav>


  <div @click="toggleDropdown" :class="{ 'menu-dropdown-bg': showServices }"></div>
  <div @click="toggleSupport" :class="{ 'menu-dropdown-bg': showSupport }"></div>
</template>
