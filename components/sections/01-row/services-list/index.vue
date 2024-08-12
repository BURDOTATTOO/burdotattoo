<script lang="ts" setup>
import './services-list.scss'

interface TitleSubtitleProps {
  title: string
  subtitle?: string
  marginTop?: boolean
}

const { title, subtitle, marginTop } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <section class="services-list-container">
    <article :class="{ 'extra-top-space': marginTop }">

      <div class="title">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>

      <div class="details">
        <ul class="items">
          <div>
            <li>
              <p>- Diseño de folletos</p>
            </li>
            <li>
              <p>- Diseño de logotipos e identidad de marca</p>
            </li>
            <li>
              <p>- Boletines informativos y catálogos</p>
            </li>
            <li>
              <p>- Diseño de papelería</p>
            </li>
            <li>
              <p>- Afiches/volantes/postales</p>
            </li>
            <li>
              <p>- Tarjetas de presentación</p>
            </li>
          </div>

          <div>
            <li>
              <p>- Menús de restaurantes</p>
            </li>
            <li>
              <p>- Letreros para césped</p>
            </li>
            <li>
              <p>- Banners</p>
            </li>
            <li>
              <p>- Carpetas de presentación</p>
            </li>
            <li>
              <p>- Tarjetas de felicitación</p>
            </li>
            <li>
              <p>- Colgadores para puertas</p>
            </li>
          </div>
        </ul>
      </div>

    </article>
  </section>
</template>
