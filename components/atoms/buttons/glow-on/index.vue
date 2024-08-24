<script setup lang="ts">
import './glow-on.scss'

type GlowOnProps = {
  text: string
  active?: boolean
  link?: string
  external?: boolean
}

const router = useRouter()

const { text, active, link, external } = defineProps<GlowOnProps>() 

const handleClick = () => {
  if (link) {
    if (external) {
      window.open(link, '_blank')
    } else {
      router.push(link)
    }
  }
}
</script>

<template>
  <button :class="['glow-on', active ? 'active' : '']" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>