<script setup lang="ts">
import './marketing-color.scss'

import ShareSvg from '~/components/icons/plans/AdsSvg.vue'
import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import RegularButton from '~/components/buttons/regular/index.vue'
</script>

<template>

  <section class="card-marketing-container">

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Esencial
        </h3>
        <span class="subtitle">
          $599.999
        </span>

      </div>

      <div class="details">

        <div class="image">
          <ShareSvg />
        </div>

        <div class="description">

          <button>Facebook & Instagram</button>
          <button>Llamada de inicio</button>
          <button>Gasto mensual en anuncios <span>$150.000</span></button>
          <button>1 unidades de anuncios patrocinados</button>
          <button>Hasta 4 creaciones de publicaciones por mes</button>
          <button>Publicaciones bilingües/traducciones incluidas</button>
          <button>Post boost</button>
          <button>Informes de rendimiento</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          Pro
        </h3>
        <span class="subtitle">
          $899.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <ProSvg />
        </div>

        <div class="description">

          <button>Facebook & Instagram</button>
          <button>Llamada de inicio</button>
          <button>Gasto mensual en anuncios <span>$300.000</span></button>
          <button>2 unidades de anuncios patrocinados</button>
          <button>Hasta 4 creaciones de publicaciones por mes</button>
          <button>Publicaciones bilingües/traducciones incluidas</button>
          <button>Post boost</button>
          <button>Informes de rendimiento</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          Premium
        </h3>
        <span class="subtitle">
          $1,199.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <PremiumSvg />
        </div>

        <div class="description">

          <button>Facebook & Instagram</button>
          <button>Llamada de inicio</button>
          <button>Gasto mensual en anuncios <span>$400.000</span></button>
          <button>2 unidades de anuncios patrocinados</button>
          <button>Hasta 4 creaciones de publicaciones por mes</button>
          <button>Publicaciones bilingües/traducciones incluidas</button>
          <button>Post boost</button>
          <button>Informes de rendimiento</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

  </section>

</template>