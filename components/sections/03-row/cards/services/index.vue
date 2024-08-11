<script setup lang="ts">
import './services.scss'

import PresentationSvg from '~/components/icons/plans/PresentationSvg.vue'
import CloudSvg from '~/components/icons/plans/CloudSvg.vue'
import ServerSvg from '~/components/icons/plans/ServerSvg.vue'
import ButtonGlobal from '~/components/buttons/glow-on/index.vue'
</script>

<template>

  <section class="card-services-container">

    <div class="item">

      <div class="image">
        <PresentationSvg class="icon" />
      </div>

      <div class="details">

        <div class="text">
          <h3 class="title">
            Marketing en redes sociales
          </h3>
          <span class="price">
            $599,999
          </span>
        </div>

        <div class="description">
          <p>Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de
            negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.
          </p>

          <ButtonGlobal text="Leer más" link="/marketing-en-redes-sociales" />
        </div>

      </div>

    </div>

    <div class="item">

      <div class="image">
        <ServerSvg class="icon" />
      </div>

      <div class="details">

        <div class="text">
          <h3 class="title">
            Alojamiento web administrado por cPanel
          </h3>
          <span class="price">
            $60,000
          </span>
        </div>

        <div class="description">
          <p>¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de
            espacio en disco, Jet Backup y 500 GB de ancho de banda!
          </p>

          <ButtonGlobal text="Leer más" link="/" />
        </div>
      </div>

    </div>

    <div class="item">

      <div class="image">
        <CloudSvg class="icon" />
      </div>

      <div class="details">

        <div class="text">
          <h3 class="title">
            SEO – Marketing en motores de búsqueda
          </h3>
          <span class="price">
            $1,000,000
          </span>
        </div>

        <div class="description">
          <p>Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización
            de motores de búsqueda y marketing de motores de búsqueda.
          </p>

          <ButtonGlobal text="Leer más" link="/diseno-web" />
        </div>
      </div>

    </div>

  </section>

</template>