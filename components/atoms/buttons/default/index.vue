<script setup lang="ts">
import './regular.scss'

type GlowOnProps = {
  text: string
  link?: string
}

const router = useRouter()

const { text, link } = defineProps<GlowOnProps>()

const handleClick = () => {
  if (link) {
    router.push(link)
  }
}
</script>

<template>
  <button class="regular" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>