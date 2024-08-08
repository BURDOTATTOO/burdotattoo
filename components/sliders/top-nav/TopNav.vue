<script lang="ts" setup>
import './top-nav.scss'
import Logo from '~/public/logo.vue'
import ExitSvg from '@/components/icons/ExitSvg.vue'
import SearchSvg from "~/components/icons/menu/SearchSvg.vue"
import CommentSvg from "~/components/icons/menu/CommentSvg.vue"
import GraphicDesignSvg from "~/components/icons/menu/GraphicDesign.vue"
import ServerSvg from "~/components/icons/menu/ServerSvg.vue"
import SupportSvg from "~/components/icons/menu/SupportSvg.vue"
import ArrowDownSvg from "~/components/icons/ArrowDownSvg.vue"
import WebDesignSvg from "~/components/icons/menu/WebDesignSvg.vue"
import SuggestionsSvg from "~/components/icons/menu/SuggestionsSvg.vue"
import AnnouncementsSvg from '~/components/icons/menu/AnnouncementsSvg.vue'




const router = useRouter()

const { toggleTopNav, isTopNavOpen } = defineProps<{
  toggleTopNav: () => void
  isTopNavOpen: boolean | undefined
}>()

const handleClick = (url: string) => {
  router.push(url)
  toggleTopNav()
}

const handleModal = () => {
  toggleTopNav()
}

</script>

<template>

  <section
    :class="['top-nav-container', isTopNavOpen ? 'top-slide-in' : '', isTopNavOpen === false ? 'top-slide-out' : '']">

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
          <li href="#" class="item">
            <WebDesignSvg class="icon" />
            <p>Diseño web</p>
          </li>
          <li class="item" @click="handleClick('about')">
            <GraphicDesignSvg class="icon" />
            <p>Diseño gráfico</p>
          </li>
          <li class="item" @click="handleClick('services')">
            <ServerSvg class="icon" />
            <p>Alostamiento web</p>
          </li>
          <li class="item" @click="handleClick('contact')">
            <SearchSvg class="icon" />
            Marketing de motores de búsqueda
          </li>
          <li class="item" @click="handleClick('contact')">
            <CommentSvg class="icon comment-icon" />
            Marketing de medios sociales
          </li>
          <li class="item" @click="handleClick('contact')">
            <SupportSvg class="icon" />
            Contacta con soporte
          </li>
          <li class="item" @click="handleClick('contact')">
            <SuggestionsSvg class="icon" />
            Sugerencias
          </li>
          <li class="item" @click="handleClick('contact')">
            <AnnouncementsSvg class="icon" />
            Anuncios
          </li>
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