<script setup lang="ts">
import './service-cards-1.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

// type CardProps = {
//   data: Array<Record<string, string | Component> & { cta: string, link?: string, toggleEvent?: () => void }>
// }

type ServiceCardProps = {
  data: {
    title: string
    subtitle: string
    price: string
    image: Component
    imageAlt: string
    description: string
    cta: string
    link?: string
    onClick?: () => void
  }[]
}

const { data } = defineProps<ServiceCardProps>()

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

      <Button class="cta" :text="item.cta" :link="item.link" @click="item.onClick" />

    </section>

  </article>

</template>