<script setup lang="ts">
import './billboard-1.scss'

</script>

<template>
  <section class="billboard-1">

    <NuxtPicture
      class="desktop-only"
      src="/images/services.jpg" 
      sizes="100vw sm:300px md:500px" 
      format="webp"
      alt="Imagen de diseño web portfolio" />

    <div class="details-wrapper">
      <div class="details">
        <h1 class="title">
          Expertos en Diseño Web - Servicio Profesional
        </h1>
        <h2 class="subtitle">
          soluciones web personalizadas.
        </h2>
        <p class="description">
          Somos una empresa líder en diseño web y desarrollo digital en Colombia, ofreciendo soluciones profesionales
          para pequeñas empresas, corporaciones y necesidades individuales. Creamos sitios web destacados que impulsan
          el crecimiento orgánico y fortalecen su presencia digital.
        </p>
        <p class="description">
          Nos especializamos en diseño web responsivo, desarrollo de aplicaciones web, SEO y marketing digital integral.
          Nuestro objetivo es atraer más atención a su sitio y establecer una posición dominante en su industria.
        </p>
        <p class="description">
          Los beneficios de nuestro trabajo incluyen aumento del tráfico orgánico, mejora de la experiencia del usuario,
          incremento en las conversiones y fortalecimiento de la imagen de marca.
        </p>
      </div>
    </div>
  </section>
</template>