<script setup lang="ts">
import Billboard from '~/components/sections/02-row/billboard-graphic-design/index.vue'
import HighlightText from '~/components/sections/02-row/highlight-text/indext.vue'
import TextImage from '~/components/sections/02-row/text-image/indext.vue'
import ServicesList from '~/components/sections/01-row/services-list/index.vue'

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
  <Billboard />

  <ServicesList 
    title="Servicios" 
    subtitle="Estos son algunos de los servicios de diseño gráfico que ofrece Vanguardia."
    marginTop />

  <HighlightText />
  <TextImage />



</template>
