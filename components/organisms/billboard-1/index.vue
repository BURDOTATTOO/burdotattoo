<script setup lang="ts">
import './billboard-1.scss'

</script>

<template>
  <article class="billboard-1">

    <NuxtPicture
      class="desktop-only"
      src="/images/services.jpg" 
      sizes="100vw sm:300px md:500px" 
      format="webp"
      alt="Imagen de diseño web portfolio" />

    <section class="details-wrapper">
      <div class="details">
        <h1>
          Expertos en Diseño Web - Servicio Profesional
        </h1>
        <h2>
          soluciones web personalizadas.
        </h2>
        <p>Somos una empresa líder en diseño web y desarrollo digital en Colombia, ofreciendo soluciones profesionales
          para pequeñas empresas, corporaciones y necesidades individuales. Creamos sitios web destacados que impulsan
          el crecimiento orgánico y fortalecen su presencia digital.
        </p>
        <p>
          Nos especializamos en diseño web responsivo, desarrollo de aplicaciones web, SEO y marketing digital integral.
          Nuestro objetivo es atraer más atención a su sitio y establecer una posición dominante en su industria.
        </p>

        <p>
          Los beneficios de nuestro trabajo incluyen aumento del tráfico orgánico, mejora de la experiencia del usuario,
          incremento en las conversiones y fortalecimiento de la imagen de marca.
        </p>

      </div>
    </section>
  </article>
</template>