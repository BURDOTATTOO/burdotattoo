<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'
import SvgsBillboard from '~/public/svgs/billboard.vue'
</script>

<template>
  <section class="billboard-image-container">

    <div class="left">
      <h1>¡Consigue una página web profesional con Hosting
        <span class="animate-text">GRATIS</span> tu primer año!</h1>

      <p>Impresionantes diseños para elegir por solo $499.</p>

      <NuxtLink to="/">
        <ButtonsGlowOn text="¡Aprender más!" :active="true" />
      </NuxtLink>

    </div>

    <div class="right">
      <SvgsBillboard />
    </div>

  </section>
</template>
