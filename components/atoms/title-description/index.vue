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

      <div class="title">
        <h1>{{ title }}</h1>
      </div>

      <div class="description">
        <p>{{ description }}</p>
      </div>

    </section>
  </article>
</template>
