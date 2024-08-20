<script setup lang="ts">
import './billboard-1.scss'

type Props = {
  data: {
    title: string
    subtitle: string
    text: string[]
  }
}

const { data } = defineProps<Props>()

console.log(data.text)
</script>

<template>
  <section class="billboard-1">

    <NuxtPicture
      class="desktop-only"
      src="/images/services.jpg"
      sizes="100vw sm:300px md:500px"
      format="webp"
      alt="Imagen de diseño web portfolio"
    />

    <div class="details-wrapper">
      <div class="details">
        <h1 class="title">
          {{ data.title }}
        </h1>
        <h2 class="subtitle">
          {{ data.subtitle }}
        </h2>
        <p class="description" v-for="(item, index) in data.text" :key="index">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>