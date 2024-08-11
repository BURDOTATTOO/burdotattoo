<script setup lang="ts">
import './web-design-color.scss'

import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import RegularButton from '~/components/buttons/regular/index.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

</script>

<template>

  <section class="card-marketing-container">

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Promoción de páginas web
        </h3>
        <span class="subtitle">
          $599.999
        </span>

      </div>

      <div class="details">

        <div class="image">
          <PromoSvg />
        </div>

        <div class="description">
          <p>
            ¡Obtén un sitio web impresionante y alojamiento GRATIS durante tu primer año!
          </p>
        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          Sitio web de 5 páginas
        </h3>
        <span class="subtitle">
          $999.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <ProSvg />
        </div>

        <div class="description">
          <p>
            ¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!
          </p>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          Promoción de tienda online
        </h3>
        <span class="subtitle">
          $3,999.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <PremiumSvg />
        </div>

        <div class="description">

          <p>
            ¡Obtenga un impresionante sitio web de agente inmobiliario de 10 páginas y alojamiento GRATIS durante su primer año!
          </p>
        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

  </section>

</template>