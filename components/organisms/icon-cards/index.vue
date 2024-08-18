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

  <article class="icon-cards">

    <section class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

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
    
  </article>

</template>