<script setup lang="ts">
import './billboard-4.scss'

</script>

<template>
  <article class="billboard-4">

    <NuxtPicture 
      class="image"
      src="/images/diseno-grafico.webp"
      width="500"
      height="320" 
      sizes="100vw xs:360px sm:500px"
      format="webp" 
      alt="Imagen de identidad corporativa de diseño gráfico" 
    />

    <section class="details">
      <h2>
        Identidad <span>corporativa</span>
      </h2>
      <p>
        La piedra angular de cualquier emprendimiento sólido es un paquete de identidad que no solo se distinga de la
        competencia y funcione bien en todos los medios, sino que también comunique sus ofertas a los posibles
        consumidores a nivel personal. Podemos ayudarlo a crear una identidad corporativa completamente nueva desde cero
        o a renovar una imagen corporativa “cansada” u obsoleta.
      </p>
    </section>
  </article>
</template>