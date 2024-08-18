<script lang="ts" setup>
import './subtitle-description.scss'

interface TitleSubtitleProps {
  title: string
  description?: string
  marginTop?: boolean
}

const { title, description } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <article class="title-subtitle-container">
    <section :class="{ 'extra-top-space': marginTop }">

      <h2 class="title">{{ title }}</h2>

      <p class="description">{{ description }}</p>

    </section>
  </article>
</template>
