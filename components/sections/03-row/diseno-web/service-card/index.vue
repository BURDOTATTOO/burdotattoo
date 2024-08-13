<script setup lang="ts">
import './diseno-web-service-card.scss'

import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import RegularButton from '~/components/atoms/buttons/default/index.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

</script>

<template>

  <section class="diseno-web-cards">

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Esencial
        </h3>

        <h4 class="subtitle">
          Promoción de páginas web
        </h4>

        <p class="price">
          $599.999
        </p>

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
        <RegularButton text="Leer más" />
      </div>

    </div>

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Web Pro
        </h3>
        <h4 class="subtitle">
          Sitio web de 5 páginas
        </h4>
        <p class="price">
          $999.999
        </p>
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
        <RegularButton text="Leer más" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          Premium
        </h3>
        <h4 class="subtitle">
          Promoción de tienda online
        </h4>

        <p class="price">
          $4,999.999
        </p>
      </div>

      <div class="details">

        <div class="image">
          <PremiumSvg />
        </div>

        <div class="description">

          <p>
            ¡Obtén un sitio web de comercio electrónico con 5 páginas y alojamiento GRATIS tu primer año!
          </p>
        </div>

      </div>

      <div class="cta">
        <RegularButton text="Leer más" />
      </div>

    </div>

  </section>

</template>