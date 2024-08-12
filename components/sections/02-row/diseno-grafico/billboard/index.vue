<script lang="ts" setup>
import './graphic-design.scss'
import AnimatedColorfulText from '~/components/atoms/animated-colorful-text/index.vue'

</script>

<template>
  <section class="billboard-diseno-grafico">

    <div class="left">
      <div>
        <NuxtPicture 
          src="/diseno-grafico.webp" 
          sizes="100vw xs:360px sm:500px"
          width="500"
          height="320" 
          format="webp" 
          alt="imagen soluciones creativas de diseño gráfico" 
        />
      </div>
    </div>

    <div class="right">
      <h1>Soluciones Creativas de Diseño
        <AnimatedColorfulText>Gráfico</AnimatedColorfulText>
      </h1>

      <p>Un servicio de diseño gráfico de alta calidad y precios competitivos significa que podemos respaldar o
        convertirnos en su equipo de marketing.
      </p>
    </div>

  </section>
</template>
