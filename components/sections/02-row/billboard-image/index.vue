<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'
import SlidingText from '~/components/sliding-text/index.vue'
import SvgsBillboard from '~/public/svgs/billboard.vue'
</script>

<template>
  <section class="billboard-image-container">

    <div class="left">
      <p>¡Consigue una página web profesional con Hosting
        <h3 class="animate-charcter">GRATIS</h3>  tu primer año!</p>

      <NuxtLink to="/join">
        <ButtonsGlowOn class="btn" text="¡Aprender más!" :active="true" />
      </NuxtLink>

    </div>

    <div class="right">
      <SvgsBillboard />
    </div>

  </section>
</template>
