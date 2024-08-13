<script setup lang="ts">
import BillboardImage from '~/components/sections/02-row/billboard-image/index.vue'
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import HighlightText from '~/components/sections/03-row/inicio/highlight-text/index.vue'
import Cards from '~/components/sections/03-row/inicio/service-card/index.vue'

useSeoMeta({
  title: 'Página Web Profesional - Hosting Gratis - Vanguardia',
  ogTitle: 'Página Web Profesional - Hosting Gratis - Vanguardia',
  description: '¡Páginas web profesional con Hosting GRATIS tu primer año!',
  ogDescription: '¡Consigue una página web profesional con Hosting GRATIS tu primer año!',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle:'Página Web Profesional - Hosting Gratis - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: '¡Consigue una página web profesional con Hosting GRATIS tu primer año!',
  twitterLabel1: 'Time to read',
  twitterData1: '2 minutes',
})

</script>

<template>
  <BillboardImage />

  <TitleSubtitle
    marginTop
    title="Nuestros Planes"
    subtitle="Garantizamos un diseño único y sencillo para tu página web." />
  
  <Cards />

  <HighlightText />


</template>
