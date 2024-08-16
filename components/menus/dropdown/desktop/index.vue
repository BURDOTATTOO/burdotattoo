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

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 100);
}

</script>

<template>

  <nav class="menu desktop-only">
    <ul class="items">

      <li class="item">
        <h3>Servicios</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <NuxtLink to="/diseno-web" class="sub-item">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </NuxtLink>

          <NuxtLink to="/diseno-grafico" class="sub-item">
            <GraphicDesignSvg class="icon" />
            <p>Diseño de gráfico</p>
          </NuxtLink>

          <NuxtLink to="/marketing-en-motores-de-busqueda" class="sub-item">
            <SeoSvg class="icon" />
            <p>Marketing de motores de búsqueda</p>
          </NuxtLink>

          <NuxtLink to="/marketing-en-redes-sociales" class="sub-item">
            <MarketingSvg class="icon comment-icon" />
            <p>Marketing de medios sociales</p>
          </NuxtLink>
        </ul>
      </li>

      <li class="item">
        <h3>Soporte</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <NuxtLink to="/" class="sub-item">
            <SupportSvg class="icon" />
            <p>Contacta con soporte</p>
          </NuxtLink>

          <NuxtLink to="/" class="sub-item">
            <AnnouncementsSvg class="icon" />
            <p>Anuncios</p>
          </NuxtLink>

          <NuxtLink to="/" class="sub-item">
            <SuggestionsSvg class="icon" />
            <p>Sugerencias</p>
          </NuxtLink>
        </ul>
      </li>

    </ul>
  </nav>

</template>
