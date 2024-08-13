<script setup lang="ts">
import Billboard from '~/components/sections/02-row/inicio/billboard/index.vue'
import Title from '~/components/atoms/title-description/index.vue'
import BrandDescription from '~/components/sections/03-row/inicio/brand-description/index.vue'
import Cards from '~/components/sections/03-row/inicio/service-card/index.vue'

useSeoMeta({
  title: 'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  ogTitle: 'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  description: 'Crea tu página web profesional con Vanguardia. Disfruta de hosting gratis el primer año y destaca con un diseño web único.',
  ogDescription: 'Consigue una página web profesional con Vanguardia. Hosting gratis el primer año y soporte técnico.',
  ogImage: '/meta/pagina-web-profesional-hosting-gratis.webp',
  ogLocale: 'es_CO',
  twitterTitle:'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Crea tu página web profesional con Vanguardia. Disfruta de hosting gratis el primer año y destaca con un diseño web único.',
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
