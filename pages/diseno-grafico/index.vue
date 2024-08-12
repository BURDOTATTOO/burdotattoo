<script setup lang="ts">
import Billboard from '~/components/sections/02-row/diseno-grafico/billboard/index.vue'
import Services from '~/components/sections/01-row/diseno-grafico/services-list/index.vue'
import TextParagraph from '~/components/sections/02-row/diseno-grafico/text-paragraph/index.vue'
import TextImage from '~/components/sections/02-row/diseno-grafico/image-text/index.vue'

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

  <Services />

  <TextParagraph />

  <TextImage />

</template>
