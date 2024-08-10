<script lang="ts" setup>
import './title-subtitle.scss'

interface TitleSubtitleProps {
  title: string
  subtitle: string
  marginTop?: boolean
}

const { title, subtitle } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <section class="title-subtitle-container">
    <article :class="{ 'extra-top-space': marginTop }">

      <div class="title">
        <h3>{{ title }}</h3>
      </div>

      <div class="subtitle">
        <p>{{ subtitle }}</p>
      </div>

    </article>
  </section>
</template>
