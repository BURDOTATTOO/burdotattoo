<script setup lang="ts">
import './service-cards-1.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

type ServiceCardsProps = {
  data: {
    title: string
    price: string
    icon: Component
    iconAlt: string
    features: string[]
    cta: string
    link?: string
    onClick?: () => void
  }[]
}

const { data } = defineProps<ServiceCardsProps>()

</script>

<template>

  <article class="service-cards-1">

    <section class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <h3 class="title">
          {{ item.title }}
        </h3>

        <span class="subtitle">
          {{ item.price }}
        </span>
      </div>

      <div class="details">

        <div class="image">
          <Component :is="item.icon" :aria-label="item.iconAlt" />
        </div>

        <div class="description">

          <button v-for="(text, index) in item.features" :key="index">
            {{ text }}
          </button>
        </div>

      </div>


      <Button class="cta" :text="item.cta" :link="item.link" @click="item.onClick" />

    </section>

  </article>

</template>