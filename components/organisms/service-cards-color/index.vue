<script setup lang="ts">
import './service-cards-color.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

type CardProps = {
  data: Array<Record<string, string | Component> & { cta: string, link?: string, toggleEvent?: () => void }>
}

const { data } = defineProps<CardProps>()

</script>

<template>

  <article class="color-service-cards">

    <section class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <h3 class="title">
          {{ item.title }}
        </h3>

        <p class="subtitle">
          {{ item.subtitle }}
        </p>

        <p class="price">
          {{ item.price }}
        </p>

      </div>

      <div class="details">

        <component :is="item.image" class="image" :aria-label="item.imageAlt" />
        <p class="description">
          {{ item.description }}
        </p>

      </div>

      <Button class="cta" :text="item.cta" :link="item.link" @click="item.toggleEvent" />

    </section>

  </article>

</template>