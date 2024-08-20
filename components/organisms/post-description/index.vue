<script lang="ts" setup>
import './post-description.scss'

interface PostSubtitleProps {
  text: string
  text1?: string
  text2?: string
  text3?: string
}

const { text, text1, text2, text3 } = defineProps<PostSubtitleProps>()

</script>

<template>
  <section class="post-description">

    <div class="details">
      <p>{{ text }}</p>
      <p>{{ text1 }}</p>
      <p>{{ text2 }}</p>
      <p>{{ text3 }}</p>
    </div>

  </section>
</template>
