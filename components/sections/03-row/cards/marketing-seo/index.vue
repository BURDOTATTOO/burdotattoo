<script setup lang="ts">
import './marketing-seo.scss'

import StatisticsUpSvg from '~/components/icons/StatisticsUpSvg.vue'
import BrandPromoSvg from '~/components/icons/BrandPromoSvg.vue'
import SeoSvg from '~/components/icons/SeoSvg.vue'
import OptimizationSvg from '~/components/icons/OptimizationSvg.vue'
import OffPageSvg from '~/components/icons/OffPageSvg.vue'
import PayPerClicSvg from '~/components/icons/PayPerClicSvg.vue'
</script>

<template>

  <section class="card-marketing-seo-container">

    <div class="item">

      <div class="heading">

        <div class="image">
          <SeoSvg />
        </div>

        <h3 class="title">
          Optimización de Motores de Búsqueda (SEO)
        </h3>
        <span class="subtitle">
          Aumenta la calidad y cantidad del tráfico en tu sitio web incrementando su visibilidad en los motores de
          búsqueda.
        </span>

      </div>

    </div>

    <div class="item">

      <div class="heading">

        <div class="image">
          <OptimizationSvg />
        </div>

        <h3 class="title">
          Optimización de Contenido
        </h3>
        <span class="subtitle">
          Asegúrate de que el contenido esté escrito de manera que alcance a la mayor audiencia posible.
        </span>

      </div>

    </div>

    <div class="item">

      <div class="heading">

        <div class="image">
          <StatisticsUpSvg />
        </div>

        <h3 class="title">
          Optimización On-Page
        </h3>
        <span class="subtitle">
          Mejora individualmente cada página web para que ocupe posiciones más altas y atraiga tráfico relevante desde
          los motores de búsqueda.
        </span>

      </div>

    </div>

    <div class="item">

      <div class="heading">

        <div class="image">
          <BrandPromoSvg />
        </div>

        <h3 class="title">
          Marketing en Redes Sociales
        </h3>
        <span class="subtitle">
          Contrata a nuestro equipo de expertos en marketing en redes sociales y multiplica tus oportunidades de
          negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.
        </span>

      </div>

    </div>

    <div class="item">

      <div class="heading">

        <div class="image">
          <OffPageSvg />
        </div>

        <h3 class="title">
          Optimización Off-Page
        </h3>
        <span class="subtitle">
          Incrementa la autoridad de tu dominio mediante la creación de contenido y la obtención de backlinks desde
          otros sitios web.
        </span>

      </div>

    </div>

    <div class="item">

      <div class="heading">

        <div class="image">
          <PayPerClicSvg />
        </div>

        <h3 class="title">
          Marketing PPC (Pago por Clic)
        </h3>
        <span class="subtitle">
          Publicidad de pago por clic para obtener resultados y tráfico de forma inmediata.
        </span>

      </div>

    </div>

  </section>

</template>