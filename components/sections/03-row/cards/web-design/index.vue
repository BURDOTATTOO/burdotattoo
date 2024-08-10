<script setup lang="ts">
import './web-design.scss'

import PresentationSvg from '@/components/icons/plans/PresentationSvg.vue'
import CloudSvg from '@/components/icons/plans/CloudSvg.vue'
import ServerSvg from '@/components/icons/plans/ServerSvg.vue'

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
            Promoción de páginas web
          </h3>
          <span class="description">
            $499,999
          </span>
        </div>
        <div class="location">
          <p>¡Obtén un sitio web impresionante y alojamiento GRATIS durante tu primer año!</p>
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
            Promoción de tienda online
          </h3>
          <span class="description">
            $3,999,999
          </span>
        </div>
        <div class="location">
          <p>¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!</p>
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
            Sitio web de 5 páginas
          </h3>
          <span class="description">
            $999,999
          </span>
        </div>
        <div class="location">
          <p>¡Obtenga un impresionante sitio web de agente inmobiliario de 10 páginas y alojamiento GRATIS durante su primer año!</p>
        </div>
      </div>

    </div>

  </section>

</template>