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
  <section :class="{ 'extra-top-space': marginTop }" class="subtitle-description">

    <h2 class="title">{{ title }}</h2>

    <p class="description">{{ description }}</p>

  </section>
</template>
