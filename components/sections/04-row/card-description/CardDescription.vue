<script setup lang="ts">
import './card-description.scss'

import PresentationSvg from '@/components/icons/plans/PresentationSvg.vue'
import CloudSvg from '@/components/icons/plans/CloudSvg.vue'
import ServerSvg from '@/components/icons/plans/ServerSvg.vue'
import SeoSvg from '~/components/icons/plans/SeoSvg.vue'
</script>

<template>

  <section class="card-description-container">

    <div class="grid-item">

      <div class="grid-image">
        <PresentationSvg class="icon" />
      </div>

      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            SMM – Marketing en redes sociales
          </h3>
          <span class="description">
            $100
          </span>
        </div>
        <div class="location">
          <p>Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de
            negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.</p>
        </div>
      </div>

    </div>

    <div class="grid-item">

      <div class="grid-image">
        <ServerSvg class="icon" />
      </div>

      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            Alojamiento web administrado por cPanel
          </h3>
          <span class="description">
            $200
          </span>
        </div>
        <div class="location">
          <p>¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de
            espacio en disco, Jet Backup y 500 GB de ancho de banda!</p>
        </div>
      </div>

    </div>

    <div class="grid-item">
      <div class="grid-image">
        <CloudSvg class="icon" />
      </div>
      <div class="grid-container">
        <div class="grid-details">
          <h3 class="title">
            SEO – Marketing en motores de búsqueda
          </h3>
          <span class="description">
            $80
          </span>
        </div>
        <div class="location">
          <p>Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización
            de motores de búsqueda y marketing de motores de búsqueda.</p>
        </div>
      </div>

    </div>

  </section>

</template>