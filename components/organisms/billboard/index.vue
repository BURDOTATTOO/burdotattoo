<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import ModalMoreInfo from '~/components/organisms/modal-more-info/index.vue'
import SvgsBillboard from '~/components/icons/web-dev.vue'

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <article class="billboard">

    <section class="text">
      <h1>¡Obtén una página web profesional con Hosting
        <span class="animate-text">GRATIS</span> durante el primer año!
      </h1>
      <p>Elige entre una variedad de diseños modernos por solo $500,000.</p>
      
      <ButtonsGlowOn
        class="learn-more"
        text="¡Aprender más!" 
        :active="true" 
        @click="toggleModal"
      />
    </section>

    <SvgsBillboard aria-label="imagen soluciones creativas de diseño gráfico"/>

    <ModalMoreInfo v-if="isModalOpen" :toggleModal="toggleModal"/>
  </article>
</template>
