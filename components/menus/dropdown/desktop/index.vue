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

const services = ref<boolean | null>(null)
const support = ref<boolean | null>(null)
const logged = ref(false)
const loadingProfile = ref(false)

const showDropdown = () => {
  services.value = true
  support.value = false
}

const hideDropdown = () => {
  services.value = false
  support.value = false
}

const showSupport = () => {
  support.value = true
  services.value = false
}

const hideSupport = () => {
  support.value = false
  services.value = false
}

</script>

<template>

  <nav class="menu desktop-only">
    <ul class="items">

      <li class="item" @mouseenter="showDropdown">
        <h3>Servicios</h3>
        <ArrowDownSvg :class="['icon arrow-icon', services ? 'rotate-opposite' : 'rotate']" />

        <ul class="sub-items" v-if="services" @mouseleave="hideDropdown"> 
          <NuxtLink to="/diseno-web" class="sub-item" @click="hideDropdown">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item" @click="hideDropdown">
            <GraphicDesignSvg class="icon" />
            <p>Diseño de gráfico</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item" @click="hideDropdown">
            <ServerSvg class="icon" />
            <p>Alojamiento web</p>
          </NuxtLink>

          <NuxtLink to="/marketing-online" class="sub-item" @click="hideDropdown">
            <SeoSvg class="icon" />
            <p>Marketing de motores de búsqueda</p>
          </NuxtLink>

          <NuxtLink to="/marketing-en-redes-sociales" class="sub-item" @click="hideDropdown">
            <MarketingSvg class="icon comment-icon" />
            <p>Marketing de medios sociales</p>
          </NuxtLink>
        </ul>

      </li>

      <li class="item" @mouseenter="showSupport">
        <h3>Soporte</h3>
        <ArrowDownSvg :class="['icon arrow-icon', support ? 'rotate-opposite' : 'rotate']" />

        <ul class="sub-items" v-if="support" @mouseleave="hideDropdown">
          <NuxtLink to="#" class="sub-item" @click="hideDropdown">
            <SupportSvg class="icon" />
            <p>Contacta con soporte</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item" @click="hideDropdown">
            <AnnouncementsSvg class="icon" />
            <p>Anuncios</p>
          </NuxtLink>

          <NuxtLink to="#" class="sub-item" @click="hideDropdown">
            <SuggestionsSvg class="icon" />
            <p>Sugerencias</p>
          </NuxtLink>

        </ul>

      </li>

    </ul>
  </nav>


  <div @click="hideDropdown" :class="{ 'menu-dropdown-bg': services || support }"></div>
  <div @click="showSupport" :class="{ 'menu-dropdown-bg': support }"></div>
</template>
