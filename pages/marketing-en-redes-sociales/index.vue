<script setup lang="ts">
import TitleSubtitle from '~/components/sections/01-row/title-subtitle/TitleSubtitle.vue'
import CardMarketingSocial from '~/components/sections/03-row/cards/marketing-social/index.vue'
import CardMarketingColor from '~/components/sections/03-row/cards/marketing-color/index.vue'

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

  <TitleSubtitle title="Soluciones de marketing en redes sociales"
    subtitle="El equipo profesional de marketing en redes sociales se encargará de diversas funciones esenciales para impulsar tu marca en el entorno digital. Estas funciones incluyen:" />

  <CardMarketingSocial />

  <TitleSubtitle marginTop title="Nuestros planes de marketing en redes sociales"
    subtitle="Diseñados para maximizar tu presencia digital y alcanzar tus objetivos comerciales con precisión y eficacia." />

  <CardMarketingColor />

  <MarketingAgreement />


</template>