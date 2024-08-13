<script setup lang="ts">
import ImageText from '~/components/sections/02-row/diseno-web/image-text/index.vue'
import Title from '~/components/atoms/title-description/index.vue'
import WebDesignCards from '~/components/sections/03-row/cards/web-design-color/index.vue'

useSeoMeta({
  title: 'Servicio experto en Diseño Web.',
  ogTitle: 'Servicio experto en Diseño web.',
  description: 'Transforma tu presencia digital con Vanguardia, líderes en desarrollo en Colombia.',
  ogDescription: 'Transforma tu presencia digital con Vanguardia, líderes en desarrollo en Colombia.',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Servicio experto en Diseño web.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Transforma tu presencia digital con Vanguardia, líderes en desarrollo en Colombia.',
})

</script>

<template>
  <ImageText />

  <Title
    marginTop
    title="Nuestras promociones populares de diseño web"
    description="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <WebDesignCards />
</template>
