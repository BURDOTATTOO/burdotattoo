<script setup lang="ts">
import Billboard from '~/components/sections/02-row/diseno-grafico/billboard/index.vue'
import Services from '~/components/sections/01-row/diseno-grafico/services-list/index.vue'
import TextParagraph from '~/components/sections/02-row/diseno-grafico/text-paragraph/index.vue'
import TextImage from '~/components/sections/02-row/diseno-grafico/image-text/index.vue'

useSeoMeta({
  title: 'Servicio de diseño gráfico en Colombia: profesional y asequible.',
  ogTitle: 'Servicio de diseño gráfico en Colombia: profesional y asequible.',
  description: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Cóntactenos hoy!',
  ogDescription: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Cóntactenos hoy!',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Servicio de diseño gráfico en Colombia: profesional y asequible.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Nuestros expertos diseñadores gráficos ofrecen el mejor servicio de diseño gráfico en Colombia para ayudarle a destacar entre la multitud. ¡Cóntactenos hoy!',
})

</script>

<template>
  <main>
    <Billboard />
    <Services />
    <TextParagraph />
    <TextImage />
  </main>
</template>
