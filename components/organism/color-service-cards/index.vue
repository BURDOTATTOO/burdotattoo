<script setup lang="ts">
import './color-service-cards.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

type CardsProps = {
  data: Array<Record<string, string | Component> & { cta: string, link: string }>
}

const { data } = defineProps<CardsProps>()

</script>

<template>

  <article class="inicio-service-card">

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

      <Button class="cta" :text="item.cta" :link="item.link" />

    </section>

  </article>

</template>