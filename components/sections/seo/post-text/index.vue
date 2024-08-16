<script lang="ts" setup>
import './post-text.scss'

interface TitleSubtitleProps {
  title: string
  text: string
  textTwo?: string
  textThree?: string
  marginTop?: boolean
}

const { title, text, textTwo, textThree, marginTop } = defineProps<TitleSubtitleProps>()

</script>

<template>
  <section class="post-text-container">
    <article :class="{ 'extra-top-space': marginTop }">

      <div class="title">
        <h2>{{ title }}</h2>
      </div>

      <div class="details">
        <p>{{ text }}</p>
        <p>{{ textTwo }}</p>
        <p>{{ textThree }}</p>
      </div>

    </article>
  </section>
</template>
