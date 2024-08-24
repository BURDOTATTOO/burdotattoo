<script setup lang="ts">
import './regular.scss'

type ButtonProps = {
  text: string
  link?: string
  external?: string
}

const router = useRouter()

const { text, link, external } = defineProps<ButtonProps>()

const handleClick = () => {
  if (link) {
    router.push(link)
  }

  if (external) {
    window.open(external, '_blank')
  }

}
</script>

<template>
  <button class="regular" type="button" @click="handleClick">
    <span>{{ text }}</span>
  </button>
</template>