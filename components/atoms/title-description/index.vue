<script lang="ts" setup>
import './title-subtitle.scss'

interface TitleSubtitleProps {
  title: string
  description?: string
  marginTop?: boolean
}

const { title, description } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <section class="title-subtitle-container">
    <article :class="{ 'extra-top-space': marginTop }">

      <div class="title">
        <h2>{{ title }}</h2>
      </div>

      <div class="description">
        <p>{{ description }}</p>
      </div>

    </article>
  </section>
</template>
