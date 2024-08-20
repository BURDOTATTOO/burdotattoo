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
  <section class="title-description">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </section>
</template>
