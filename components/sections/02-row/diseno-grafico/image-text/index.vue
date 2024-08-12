<script setup lang="ts">
import './image-text.scss'

</script>

<template>
  <article class="image-text">

    <div class="image">
      <div>
        <NuxtPicture 
          src="/diseno-grafico-2.webp" 
          sizes="100vw xs:300px sm:400px"
          format="webp" 
          alt="Imagen de identidad corporativa de diseño gráfico" 
        />
      </div>
    </div>

    <div class="text">
      <h2>
        Identidad <span>corporativa</span>
      </h2>
      <p>
        La piedra angular de cualquier emprendimiento sólido es un paquete de identidad que no solo se distinga de la
        competencia y funcione bien en todos los medios, sino que también comunique sus ofertas a los posibles
        consumidores a nivel personal. Podemos ayudarlo a crear una identidad corporativa completamente nueva desde cero
        o a renovar una imagen corporativa “cansada” u obsoleta.
      </p>
    </div>
    
  </article>
</template>