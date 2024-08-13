<script setup lang="ts">
import './inicio-service-card.scss'

import PremiumSvg from '~/components/icons/PremiumSvg.vue'
import ProSvg from '~/components/icons/ProSvg.vue'
import Button from '~/components/atoms/buttons/default/index.vue'
import PromoSvg from '~/components/icons/PromoSvg.vue'

</script>

<template>

  <article class="inicio-service-card">

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Esencial
        </h3>

        <p class="subtitle">
          Marketing en redes sociales
        </p>

        <p class="price">
          $399.999
        </p>

      </div>

      <div class="details">

        <div class="image">
          <PromoSvg />
        </div>

        <div class="description">
          <p>
            Contrata a nuestro equipo de expertos en marketing en redes sociales y aumenta tus oportunidades de negocio. Dirígete a clientes potenciales en función de grupos demográficos específicos.
          </p>
        </div>

      </div>

      <div class="cta">
        <Button text="Leer más" link="marketing-en-redes-sociales" />
      </div>

    </div>

    <div class="item">

      <div class="heading">

        <h3 class="title">
          Hosting
        </h3>
        <p class="subtitle">
          Alojamiento web administrado por cPanel
        </p>
        <p class="price">
          $49.999
        </p>
      </div>

      <div class="details">

        <div class="image">
          <ProSvg />
        </div>

        <div class="description">
          <p>
            ¡Potente alojamiento de sitios web administrado con cPanel, correos electrónicos ilimitados, 25 GB de espacio en disco, Jet Backup y 500 GB de ancho de banda!
          </p>

        </div>

      </div>

      <div class="cta">
        <Button text="Leer más" link="alojamiento-web" />
      </div>

    </div>

    <div class="item">

      <div class="heading">
        <h3 class="title">
          SEO
        </h3>
        <p class="subtitle">
          Marketing en motores de búsqueda
        </p>

        <p class="price">
          $999.999
        </p>
      </div>

      <div class="details">

        <div class="image">
          <PremiumSvg />
        </div>

        <div class="description">

          <p>
            Haga que su sitio web aparezca en los principales motores de búsqueda con nuestro servicio de optimización de motores de búsqueda y marketing de motores de búsqueda.
          </p>
        </div>

      </div>

      <div class="cta">
        <Button text="Leer más" link="marketing-en-motores-de-busqueda" />
      </div>

    </div>

  </article>

</template>