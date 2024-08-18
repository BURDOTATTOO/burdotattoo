<script setup lang="ts">
import './icon-title.scss'

type IconTitleProps = {
  data: {
    title: string
    subtitle: string
    icon: Component
  }[]
}

const { data } = defineProps<IconTitleProps>()

</script>

<template>

  <article class="icon-title">

    <section class="item" v-for="(item, index) in data" :key="index">

      <div class="heading">

        <div class="image">
          <component :is="item.icon" />
        </div>

        <h3 class="title">
          {{ item.title }}
        </h3>
        <span class="subtitle">
          {{ item.subtitle }}
        </span>

      </div>

    </section>
    
  </article>

</template>