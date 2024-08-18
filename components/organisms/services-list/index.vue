<script lang="ts" setup>
import './services-list.scss'
import CheckSvg from '~/components/icons/CheckSvg.vue'

</script>

<template>
  <article class="services-list">
    <section>

      <div class="title">
        <h2>Servicios</h2>
        <p>Estos son algunos de los servicios de diseño gráfico que ofrece Vanguardia.</p>
      </div>

      <div class="details">
        <ul class="items">
          <div>
            <li>
              <CheckSvg class="icon" />
              <p>Diseño de folletos</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Diseño de logotipos e identidad de marca</p>
            </li>
            <li>
              <CheckSvg class="icon"  />
              <p>Boletines informativos y catálogos</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Diseño de papelería</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Afiches/volantes/postales</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Tarjetas de presentación</p>
            </li>
          </div>

          <div>
            <li>
              <CheckSvg class="icon" />
              <p>Menús de restaurantes</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Letreros para césped</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Banners</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Carpetas de presentación</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Tarjetas de felicitación</p>
            </li>
            <li>
              <CheckSvg class="icon" />
              <p>Colgadores para puertas</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </article>
</template>
