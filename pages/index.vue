<script setup lang="ts">
import Billboard from '~/components/sections/02-row/inicio/billboard/index.vue'
import Title from '~/components/atoms/title-description/index.vue'
import BrandDescription from '~/components/sections/03-row/inicio/brand-description/index.vue'
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
  <Billboard />

  <Title
    marginTop
    title="Nuestros Planes"
    description="Garantizamos un diseño único y sencillo para tu página web." />
  
  <Cards />

  <BrandDescription />


</template>
