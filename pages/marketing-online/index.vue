<script setup lang="ts">

import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import CardMarketing from '~/components/sections/03-row/cards/marketing-two/index.vue'
import CardMarketingTwo from '~/components/sections/03-row/cards/marketing/index.vue'
import MarketingAgreement from '~/components/sections/01-row/marketing-agreement/index.vue'


useSeoMeta({
  title: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  ogTitle: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  description: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
  ogDescription: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
  ogImage: '/.webp',
  ogLocale: 'en_Es',
  twitterTitle: 'Mejora tu presencia en línea con nuestro servicio de marketing en redes sociales.',
  twitterCard: 'summary_large_image',//default
  twitterDescription: 'Incrementa tu visibilidad en línea y alcanza a más clientes con nuestro servicio de marketing en redes sociales.',
})

</script>

<template>

  <TitleSubtitle 
    title="¿Tu sitio web está bien posicionado en Google?"
    subtitle="Haz que tu página web aparezca en los principales motores de búsqueda con nuestro servicio integral de optimización y marketing online." 
  />

  <CardMarketing />

  <TitleSubtitle marginTop title="Nuestros planes de marketing en redes sociales"
    subtitle="Diseñados para maximizar tu presencia digital y alcanzar tus objetivos comerciales con precisión y eficacia." />

  <CardMarketingTwo />

  <MarketingAgreement />



</template>