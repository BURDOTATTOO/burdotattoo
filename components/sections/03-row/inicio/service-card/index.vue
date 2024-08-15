<script setup lang="ts">
import './inicio-service-card.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

const data = [
  {
    title: 'Esencial',
    subtitle: 'Marketing en redes sociales',
    price: '$399.999',
    image: PromoSvg,
    imageAlt: 'Imagen del servicio de marketing en redes sociales',
    description: 'Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.',
    button: 'Leer más',
  },
  {
    title: 'Hosting',
    subtitle: 'Alojamiento web administrado - cPanel',
    price: '$49.999',
    image: ProSvg,
    imageAlt: 'Imagen del servicio de alojamiento web administrado - cPanel',
    description: '¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de espacio en disco, Jet Backup y 500 GB de ancho de banda!',
    button: 'Leer más',
  },
  {
    title: 'SEO',
    subtitle: 'Marketing en motores de búsqueda',
    price: '$999.999',
    image: PremiumSvg,
    imageAlt: 'Imagen del servicio de marketing en motores de búsqueda',
    description: 'Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización de motores de búsqueda y marketing de motores de búsqueda.',
    button: 'Leer más',
  }
]

</script>

<template>

  <article class="inicio-service-card">

    <section class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <h3 class="title">
          {{ item.title }}
        </h3>

        <p class="subtitle">
          {{ item.subtitle }}
        </p>

        <p class="price">
          {{ item.price }}
        </p>

      </div>

      <div class="details">

        <component :is="item.image" class="image" :aria-label="item.imageAlt" />
        <p class="description">
          {{ item.description }}
        </p>

      </div>

      <Button class="cta" :text="item.button" link="marketing-en-redes-sociales" />

    </section>

  </article>

</template>