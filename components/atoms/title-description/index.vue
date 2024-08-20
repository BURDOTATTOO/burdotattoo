<script lang="ts" setup>
import './title-description.scss'

interface TitleSubtitleProps {
  title: string
  description?: string
  marginTop?: boolean
}

const { title, description } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <article class="title-description">
    <section :class="{ 'extra-top-space': marginTop }">

      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </section>
  </article>
</template>
