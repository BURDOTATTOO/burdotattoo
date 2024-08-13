<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import SvgsBillboard from '~/public/svgs/billboard.vue'
import MoreInfoModal from '~/components/modal/more-info/index.vue'

const modal = ref(false)

const toggleModal = () => {
  modal.value = !modal.value
}

</script>

<template>
  <section class="billboard-image-container">

    <div class="left">
      <h1>¡Obtén una página web profesional con Hosting
        <span class="animate-text">GRATIS</span> durante el primer año!
      </h1>
      <p>Elige entre una variedad de diseños impresionantes por solo $499,999.</p>
      <ButtonsGlowOn class="learn-more" text="¡Aprender más!" :active="true" @click="toggleModal" />
    </div>

    <SvgsBillboard />

    <MoreInfoModal v-if="modal" :isModalOpen="modal" :toggleModal="toggleModal" />

  </section>
</template>
