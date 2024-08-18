<script lang="ts" setup>
import './post-text.scss'

interface TitleSubtitleProps {
  title: string
  text: string
  text1?: string
  text2?: string
  text3?: string
  marginTop?: boolean
}

const { title, text, text1, text2, text3, marginTop } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <section class="post-text-container">
    <article :class="{ 'extra-top-space': marginTop }">

      <div class="title">
        <h2>{{ title }}</h2>
      </div>

      <div class="details">
        <p>{{ text }}</p>
        <p>{{ text1 }}</p>
        <p>{{ text2 }}</p>
        <p>{{ text3 }}</p>
      </div>

    </article>
  </section>
</template>
