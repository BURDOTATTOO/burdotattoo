<script setup lang="ts">
import './icon-cards.scss'

type IconTitleProps = {
  data: {
    icon: Component
    iconAlt: string
    title: string
    description: string
  }[]
}

const { data } = defineProps<IconTitleProps>()

</script>

<template>

  <section class="icon-cards">

    <div class="card" v-for="(item, index) in data" :key="index">

      <div class="image">
        <component :is="item.icon" :aria-label="item.iconAlt"/>
      </div>

      <h3 class="title">
        {{ item.title }}
      </h3>

      <span class="description">
        {{ item.description }}
      </span>

    </div>
    
  </section>

</template>