<script setup lang="ts">
import Billboard from '~/components/organisms/billboards/billboard-7/index.vue'
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import BrandDescription from '~/components/organisms/brand-description/index.vue'
import ServiceCards from '~/components/organisms/service-cards/index.vue'
// Icons
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

useSeoMeta({
  title: 'Servicios Web Profesional en Colombia - Vanguardia',
  ogTitle: 'Servicios Web Profesional en Colombia - Vanguardia',
  description: 'Descubre los servicios profesionales de Vanguardia: marketing en redes sociales, alojamiento web administrado y optimización SEO. Obtén hosting gratis el primer año con un diseño web único.',
  ogDescription: 'Vanguardia ofrece servicios clave como marketing en redes sociales, alojamiento web administrado y optimización SEO. Disfruta de hosting gratis el primer año con un diseño web excepcional.',
  ogImage: '/meta/inicio-web-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Servicios Web Profesionales en Colombia - Vanguardia',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Explora los servicios de Vanguardia: marketing en redes sociales, alojamiento web administrado y optimización SEO. Aprovecha el hosting gratis el primer año y un diseño web único.',
  twitterLabel1: 'Tiempo de lectura',
  twitterData1: '2 minutos',
})

const serviceCards = [
  {
    title: 'Esencial',
    subtitle: 'Marketing en redes sociales',
    price: '$399.999',
    icon: PromoSvg,
    iconAlt: 'Imagen del servicio de marketing en redes sociales',
    description: 'Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.',
    buttonText: 'Leer más',
    link: 'marketing-en-redes-sociales'
  },
  {
    title: 'Hosting',
    subtitle: 'Alojamiento web administrado - cPanel',
    price: '$49.999',
    icon: ProSvg,
    iconAlt: 'Imagen del servicio de alojamiento web administrado - cPanel',
    description: '¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de espacio en disco, Jet Backup y 500 GB de ancho de banda!',
    buttonText: 'Leer más',
    link: 'alojamiento-web-administrado-cpanel'
  },
  {
    title: 'SEO',
    subtitle: 'Marketing en motores de búsqueda',
    price: '$999.999',
    icon: PremiumSvg,
    iconAlt: 'Imagen del servicio de marketing en motores de búsqueda',
    description: 'Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización de motores de búsqueda y marketing de motores de búsqueda.',
    buttonText: 'Leer más',
    link: 'marketing-en-motores-de-busqueda'
  }
]

</script>

<template>
  <Billboard />

  <SubTitle
    marginTop
    title="Burdo Tattoo"
    description="Agencia Colombiana de marketing que ofrece soluciones efectivas y personalizadas a empresas de cualquier tamaño." />

  <ServiceCards :data="serviceCards" />

  <BrandDescription />


</template>
