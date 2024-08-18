<script setup lang="ts">
import SubTitle from '~/components/atoms/subtitle-description/index.vue'
import Cards from '~/components/organisms/service-cards/index.vue'
import Billboard from '~/components/organisms/billboard-1/index.vue'
import ModalMoreInfo from '~/components/organisms/modal-more-info/index.vue'

// Icons
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

const modal = ref(false)

const toggleModal = () => {
  modal.value = !modal.value
}

const cardData = [
  {
    title: 'Esencial',
    subtitle: 'Promoción de páginas web',
    price: '$599.999',
    icon: PromoSvg,
    iconAlt: 'Imagen del servicio de promoción de páginas web',
    description: '¡Obtén un sitio web impresionante y alojamiento GRATIS durante tu primer año!',
    cta: 'Leer más',
    onClick: toggleModal
  },
  {
    title: 'Web Pro',
    subtitle: 'Sitio web de 5 páginas',
    price: '$999.999',
    image: ProSvg,
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    cta: 'Leer más',
    onClick: () => {
      console.log('toggleEvent 2')
    }
  },
  {
    title: 'Premium',
    subtitle: 'Promoción de tienda online',
    price: '$4,999.999',
    image: PremiumSvg,
    description: '¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!',
    cta: 'Leer más',
    onClick: () => {
      console.log('toggleEvent 3')
    }
  },
]

</script>

<template>

  <Billboard />

  <SubTitle
    marginTop
    title="Nuestras promociones populares de diseño web"
    description="¡Obtenga un sitio web con todas las funciones que aumente sus ingresos y expanda su negocio!" />

  <Cards :data="cardData" />

  <ModalMoreInfo v-if="modal" :isModalOpen="modal" :toggleModal="toggleModal" />

</template>
