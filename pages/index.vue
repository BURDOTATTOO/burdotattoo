<script setup lang="ts">
import BillboardImage from '~/components/sections/02-row/billboard-image/index.vue'
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import Cards from '~/components/sections/03-row/cards/all-services/index.vue'
import HighlightText from '~/components/sections/03-row/highlight-text/index.vue'

useSeoMeta({
  title: '¡Consigue una página web profesional con Hosting GRATIS tu primer año!',
  ogTitle: '¡Consigue una página web profesional con Hosting GRATIS tu primer año!',
  description: 'Impresionantes diseños para elegir por solo $500,000.',
  ogDescription: 'Impresionantes diseños para elegir por solo $500,000.',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: '¡Consigue una página web profesional con Hosting GRATIS tu primer año!',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Impresionantes diseños para elegir por solo $500,000.',
  twitterLabel1: 'Time to read',
  twitterData1: '2 minutes',
})

</script>

<template>
  <BillboardImage />
  <TitleSubtitle 
    title="Nuestros Planes"
    subtitle="Garantizamos un diseño único y sencillo para tu página web." />
  
  <Cards />

  <HighlightText />
</template>
