<script setup lang="ts">
import './marketing-color-seo.scss'

import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import DevelopSvg from '~/components/icons/DevelopSvg.vue'
import RegularButton from '~/components/atoms/buttons/default/index.vue'
</script>

<template>

  <section class="card-marketing-container">

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Esencial
        </h3>
        <span class="subtitle">
          $1,199.999
        </span>

      </div>

      <div class="details">

        <div class="image">
          <DevelopSvg />
        </div>

        <div class="description">

          <button>Optimización de contenido</button>
          <button>Optimización de etiquetas y descripciones</button>
          <button>Páginas a optimizar: 1-5</button>
          <button>Palabras clave incluidas: 1-10</button>
          <button>Informe de rendimiento: 1 por año</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          SEO Pro
        </h3>
        <span class="subtitle">
          $2,999.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <ProSvg />
        </div>

        <div class="description">

          <button>Optimización de contenido</button>
          <button>Optimización de etiquetas y descripciones</button>
          <button>Páginas a optimizar: 1-15</button>
          <button>Palabras clave incluidas: 21-40</button>
          <button>Creación de enlaces incluida</button>
          <button>Publicaciones de blog: 4 por año</button>
          <button>Informe de rendimiento: 4 por año</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          SEO Premium
        </h3>
        <span class="subtitle">
          $4,999.999
        </span>
      </div>

      <div class="details">

        <div class="image">
          <PremiumSvg />
        </div>

        <div class="description">

          <button>Optimización de contenido</button>
          <button>Optimización de etiquetas y descripciones</button>
          <button>Páginas a optimizar: 1-20</button>
          <button>Palabras clave incluidas: 41-60</button>
          <button>Creación de enlaces incluido</button>
          <button>Publicaciones de blog: 12 por año</button>
          <button>Informe de rendimiento: 4 por año</button>

        </div>

      </div>

      <div class="cta">
        <RegularButton text="Solicitar" />
      </div>

    </div>

  </section>

</template>