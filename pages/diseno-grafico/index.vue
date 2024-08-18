<script setup lang="ts">
import Billboard from '~/components/organisms/billboard-2/index.vue'
import Services from '~/components/organisms/services-list/index.vue'
import TextParagraph from '~/components/organisms/text-paragraph/index.vue'
import TextImage from '~/components/organisms/image-text/index.vue'

useSeoMeta({
  title: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  ogTitle: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  description: 'Mejora la identidad corporativa de tu negocio con nuestro diseño gráfico profesional en Colombia. Desde logotipos hasta publicidad, nuestro equipo asegura una primera impresión impactante y un diseño efectivo.',
  ogDescription: 'Destaca con nuestro diseño gráfico profesional en Colombia. Creamos identidades corporativas únicas y efectivas que mejoran la apariencia y comunicación de tu negocio. ¡Contáctanos para transformar tu imagen!',
  ogImage: '/meta/diseno-grafico-profesional.webp',
  ogLocale: 'es_CO',
  twitterTitle: 'Diseño Gráfico Profesional en Colombia - Identidad Corporativa y Más',
  twitterCard: 'summary_large_image',
  twitterDescription: 'Transforma tu identidad corporativa con nuestro diseño gráfico profesional en Colombia. Creamos logotipos y materiales publicitarios que comunican eficazmente tus ofertas y destacan entre la competencia.',
})

</script>

<template>
  <Billboard />
  <Services />
  <TextParagraph />
  <TextImage />
</template>
