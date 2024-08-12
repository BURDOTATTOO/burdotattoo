<script setup lang="ts">
import ImageText from '~/components/sections/02-row/image-text/indext.vue'
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import WebDesignCards from '~/components/sections/03-row/cards/web-design-color/index.vue'
import BillboardGraphicDesign from '~/components/sections/02-row/billboard-graphic-design/index.vue'

useSeoMeta({
  title: 'Servicio de diseño gráfico en Colombia: profesional y con excelentes precios.',
  ogTitle: 'Servicio de diseño gráfico en Colombia: profesional y con excelentes precios.',
  description: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Llámenos hoy!',
  ogDescription: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Llámenos hoy!',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Servicio de diseño gráfico en Colombia: profesional y con excelentes precios.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Llámenos hoy!',
})

</script>

<template>
  <BillboardGraphicDesign />

  <TitleSubtitle 
    marginTop
    title="Nuestras promociones populares de diseño web"
    subtitle="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <WebDesignCards />
</template>
