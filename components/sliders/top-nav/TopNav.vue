<script lang="ts" setup>
import './top-nav.scss'
import Logo from '~/public/logo.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'
import SeoSvg from "~/components/icons/menu/SeoSvg.vue"
import MarketingSvg from "~/components/icons/menu/MarketingSvg.vue"
import GraphicDesignSvg from "~/components/icons/menu/GraphicDesign.vue"
import ServerSvg from "~/components/icons/menu/ServerSvg.vue"
import SupportSvg from "~/components/icons/menu/SupportSvg.vue"
import WebDesignSvg from "~/components/icons/menu/WebDesignSvg.vue"
import SuggestionsSvg from "~/components/icons/menu/SuggestionsSvg.vue"
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'

const { toggleTopNav, isTopNavOpen } = defineProps<{
  toggleTopNav: () => void
  isTopNavOpen: boolean | undefined
}>()

</script>

<template>

  <section
    :class="[isTopNavOpen === undefined ? 'display-none' : 'top-nav-container',  isTopNavOpen ? 'top-slide-in' : '', isTopNavOpen === false ? 'top-slide-out' : '']">
    
    <div class="top-nav-header">

      <NuxtLink to="/" class="logo-container">
        <Logo />
      </NuxtLink>

      <div @click="toggleTopNav" class="animation-exit">
        <ExitSvg class=" exit-icon" />
      </div>
    </div>

    <div class="top-nav-content">

      <nav>
        <ul class="list">
          <NuxtLink to="/diseno-web" class="item" @click="toggleTopNav()">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </NuxtLink>
          <NuxtLink to="/" class="item" @click="toggleTopNav()">
            <GraphicDesignSvg class="icon" />
            <p>Diseño gráfico</p>
          </NuxtLink>
          <NuxtLink to="/" class="item" @click="toggleTopNav()">
            <ServerSvg class="icon" />
            <p>Alostamiento web</p>
          </NuxtLink>
          <NuxtLink to="/marketing-online" class="item" @click="toggleTopNav()">
            <SeoSvg class="icon" />
            Marketing de motores de búsqueda
          </NuxtLink>
          <NuxtLink to="/marketing-en-redes-sociales" class="item" @click="toggleTopNav()">
            <MarketingSvg class="icon comment-icon" />
            Marketing de medios sociales
          </NuxtLink>
          <NuxtLink to="/" class="item" @click="toggleTopNav()">
            <SupportSvg class="icon" />
            Contacta con soporte
          </NuxtLink>
          <NuxtLink to="/" class="item" @click="toggleTopNav()">
            <SuggestionsSvg class="icon" />
            Sugerencias
          </NuxtLink>
          <NuxtLink to="/" class="item" @click="toggleTopNav()">
            <AnnouncementsSvg class="icon" />
            Anuncios
          </NuxtLink>
        </ul>
      </nav>

      <div class="contact">

        <div class="social-list">
          <span class="svg">
          </span>
        </div>

        <p class="contact-tel"><a href="tel:+41787746337">+57 304 665 9898</a></p>
        <p class="contact-email">
          <a href="mailto:alejandroyunes@outlook.com">alejandroyunes@outlook.com</a>
        </p>
      </div>

    </div>

  </section>

  <div v-if="isTopNavOpen" @click="toggleTopNav" class="content-bg" />
</template>