<script setup lang="ts">
import './service-cards-1.scss'
import Button from '~/components/atoms/buttons/default/index.vue'

type ServiceCardsProps = {
  data: {
    title: string
    price: string
    icon: Component
    features: string[]
    cta: string
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
          <Component :is="item.icon" />
        </div>

        <div class="description">

          <button v-for="(i, index) in item.features" :key="index">
            {{ i }}
          </button>
        </div>

      </div>

      <div class="cta">
        <Button :text="item.cta" />
      </div>

    </section>

  </article>

</template>