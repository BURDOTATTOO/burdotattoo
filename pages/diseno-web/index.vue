<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Cards from '~/components/sections/03-row/diseno-web/service-card/index.vue'
import ImageText from '~/components/sections/02-row/diseno-web/image-text/index.vue'


useSeoMeta({
  title: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  ogTitle: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  description: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
  ogDescription: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
  ogImage: '/.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
})

</script>

<template>

  <ImageText />
  <Title
    marginTop
    title="Nuestras promociones populares de diseño web"
    description="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <Cards />

</template>
