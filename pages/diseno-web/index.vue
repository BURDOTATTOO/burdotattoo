<script setup lang="ts">
import ImageText from '~/components/sections/02-row/diseno-web-text-image/index.vue'
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import WebDesignCards from '~/components/sections/03-row/cards/web-design-color/index.vue'

useSeoMeta({
  title: 'Servicio experto en diseño web.',
  ogTitle: 'Servicio experto en diseño web.',
  description: 'Vanguardia es una empresa Colombiana líder en diseño y desarrollo que ofrece soluciones web.',
  ogDescription: 'Vanguardia es una empresa Colombiana líder en diseño y desarrollo que ofrece soluciones web.',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Servicio experto en diseño web.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Vanguardia es una empresa Colombiana líder en diseño y desarrollo que ofrece soluciones web.',
})

</script>

<template>
  <ImageText />

  <TitleSubtitle 
    marginTop
    title="Nuestras promociones populares de diseño web"
    subtitle="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <WebDesignCards />
</template>
