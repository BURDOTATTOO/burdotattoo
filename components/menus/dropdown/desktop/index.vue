<script setup lang='ts'>
import { ref } from 'vue'

import './menu.scss'
import SeoSvg from '~/components/icons/menu/SeoSvg.vue'
import MarketingSvg from '~/components/icons/menu/MarketingSvg.vue'
import GraphicDesignSvg from '~/components/icons/menu/GraphicDesign.vue'
import SupportSvg from '~/components/icons/menu/SupportSvg.vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'
import WebDesignSvg from '~/components/icons/menu/WebDesignSvg.vue'
import SuggestionsSvg from '~/components/icons/menu/SuggestionsSvg.vue'
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const servicesLinks = [
  {
    title: 'Diseño web',
    to: '/diseno-web',
    icon: WebDesignSvg,
    iconAlt: 'Diseño web'
  },
  {
    title: 'Diseño gráfico',
    to: '/diseno-grafico',
    icon: GraphicDesignSvg,
    iconAlt: 'Diseño gráfico'
  },
  {
    title: 'Marketing de motores de búsqueda',
    to: '/marketing-en-motores-de-busqueda',
    icon: SeoSvg,
    iconAlt: 'Marketing de motores de búsqueda'
  },
  {
    title: 'Marketing de medios sociales',
    to: '/marketing-en-redes-sociales',
    icon: MarketingSvg,
    iconAlt: 'Marketing en redes sociales'
  }
]

const supportLinks = [
  {
    title: 'Contacta con soporte',
    to: '/',
    icon: SupportSvg,
    iconAlt: 'Contacta con soporte'
  },
  {
    title: 'Anuncios',
    to: '/',
    icon: AnnouncementsSvg,
    iconAlt: 'Anuncios'
  },
  {
    title: 'Sugerencias',
    to: '/',
    icon: SuggestionsSvg,
    iconAlt: 'Sugerencias'
  }
]

</script>

<template>

  <nav class="menu">
    <ul class="items">

      <li class="item">
        <h3 class="title">Servicios</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(link, index) in servicesLinks" :to="link.to" :key="index" class="sub-item">
            <NuxtLink>
              <component :is="link.icon" class="icon" :alt="link.iconAlt" />
              <p>{{ link.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">Soporte</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(link, index) in supportLinks" :to="link.to" :key="index" class="sub-item">
            <NuxtLink>
              <component :is="link.icon" class="icon" :alt="link.iconAlt" />
              <p>{{ link.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>
