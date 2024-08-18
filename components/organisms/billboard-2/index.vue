<script lang="ts" setup>
import './billboard-2.scss'
import AnimatedColorfulText from '~/components/atoms/animated-colorful-text/index.vue'

</script>

<template>
  <article class="billboard-2">

    <section class="left">
      <NuxtPicture 
        src="/images/sections/02-row/billboard/diseno-grafico.webp" 
        sizes="100vw xs:360px sm:500px"
        width="500"
        height="320" 
        format="webp" 
        alt="imagen soluciones creativas de diseño gráfico" 
      />
    </section>

    <section class="right">
      <h2>Desbloquea tu Identidad
        <AnimatedColorfulText>Visual</AnimatedColorfulText>
      </h2>

      <p>
        Ofrecemos un servicio de diseño gráfico de alta calidad a precios competitivos, lo que nos permite apoyar o integrarnos como parte de su equipo de marketing.
      </p>
    </section>

  </article>
</template>
