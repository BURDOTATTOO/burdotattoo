<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import ModalMoreInfo from '~/components/organisms/modal-more-info/index.vue'
import SvgsBillboard from '~/components/icons/web-dev.vue'
import AnimateText from '~/components/atoms/animated-colorful-text/index.vue'

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <section class="billboard">

    <div class="details">
      <h1 class="title">¡Obtén una página web profesional con Hosting
        <AnimateText>GRATIS</AnimateText> durante el primer año! 
      </h1>
      <p class="description">Elige entre una variedad de diseños modernos por solo $500,000.</p>
      
      <ButtonsGlowOn
        class="learn-more"
        text="¡Aprender más!" 
        :active="true" 
        @click="toggleModal"
      />
    </div>

    <SvgsBillboard aria-label="imagen soluciones creativas de diseño gráfico"/>

    <ModalMoreInfo v-if="isModalOpen" :toggleModal="toggleModal"/>
  </section>
</template>
