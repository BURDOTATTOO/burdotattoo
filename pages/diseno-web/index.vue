<script setup lang="ts">
import Title from '~/components/atoms/title-description/index.vue'
import Cards from '~/components/organism/color-service-cards/index.vue'
import Billboard from '~/components/sections/02-row/diseno-web/billboard/index.vue'
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

useSeoMeta({
  title: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  ogTitle: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  description: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
  ogDescription: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
  ogImage: '/meta/diseno-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Expertos en Diseño Web - Servicio Profesional - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Impulsa tu presencia digital con Vanguardia, los líderes en desarrollo web y digital en Colombia.',
})

const cardData = [
  {
    title: 'Esencial',
    subtitle: 'Promoción de páginas web',
    price: '$599.999',
    image: PromoSvg,
    description: '¡Obtén un sitio web impresionante y alojamiento GRATIS durante tu primer año!',
    cta: 'Leer más',
    link: '/diseno-web/promocion-de-paginas-web'
  },
  {
    title: 'Web Pro',
    subtitle: 'Sitio web de 5 páginas',
    price: '$999.999',
    image: ProSvg,
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    cta: 'Leer más',
    link: '/diseno-web/sitio-web-de-5-paginas'
  },
  {
    title: 'Premium',
    subtitle: 'Promoción de tienda online',
    price: '$4,999.999',
    image: PremiumSvg,
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    cta: 'Leer más',
    link: '/diseno-web/sitio-web-de-5-paginas'
  },
]

</script>

<template>

  <Billboard />

  <Title
    marginTop
    title="Nuestras promociones populares de diseño web"
    description="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <Cards :data="cardData" />

</template>
