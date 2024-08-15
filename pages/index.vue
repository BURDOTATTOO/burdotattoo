<script setup lang="ts">
import Billboard from '~/components/sections/02-row/inicio/billboard/index.vue'
import Title from '~/components/atoms/title-description/index.vue'
import BrandDescription from '~/components/sections/03-row/inicio/brand-description/index.vue'
import Cards from '~/components/organism/color-service-cards/index.vue'
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

useSeoMeta({
  title: 'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  ogTitle: 'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  description: 'Crea tu página web profesional con Vanguardia. Disfruta de hosting gratis el primer año y destaca con un diseño web único.',
  ogDescription: 'Consigue una página web profesional con Vanguardia. Hosting gratis el primer año y soporte técnico.',
  ogImage: '/meta/pagina-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle:'Página Web Profesional en Colombia - Hosting Gratis el Primer Año - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Crea tu página web profesional con Vanguardia. Disfruta de hosting gratis el primer año y destaca con un diseño web único.',
  twitterLabel1: 'Time to read',
  twitterData1: '2 minutes',
})

const CardData = [
  {
    title: 'Esencial',
    subtitle: 'Marketing en redes sociales',
    price: '$399.999',
    image: PromoSvg,
    imageAlt: 'Imagen del servicio de marketing en redes sociales',
    description: 'Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.',
    cta: 'Leer más',
    link: 'marketing-en-redes-sociales'
  },
  {
    title: 'Hosting',
    subtitle: 'Alojamiento web administrado - cPanel',
    price: '$49.999',
    image: ProSvg,
    imageAlt: 'Imagen del servicio de alojamiento web administrado - cPanel',
    description: '¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de espacio en disco, Jet Backup y 500 GB de ancho de banda!',
    cta: 'Leer más',
    link: 'alojamiento-web-administrado-cpanel'
  },
  {
    title: 'SEO',
    subtitle: 'Marketing en motores de búsqueda',
    price: '$999.999',
    image: PremiumSvg,
    imageAlt: 'Imagen del servicio de marketing en motores de búsqueda',
    description: 'Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización de motores de búsqueda y marketing de motores de búsqueda.',
    cta: 'Leer más',
    link: 'marketing-en-motores-de-busqueda'
  }
]

</script>

<template>
  <Billboard />

  <Title
    marginTop
    title="Nuestros Planes"
    description="Agencia Colombiana de marketing que ofrece soluciones efectivas y personalizadas a empresas de cualquier tamaño." />

  <Cards :data="CardData" />

  <BrandDescription />


</template>
