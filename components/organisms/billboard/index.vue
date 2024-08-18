<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/atoms/buttons/glow-on/index.vue'
import ModalMoreInfo from '~/components/organisms/modal-more-info/index.vue'
import SvgsBillboard from '~/public/svgs/billboard.vue'

const modal = ref(false)

const toggleModal = () => {
  modal.value = !modal.value
}

</script>

<template>
  <article class="billboard">

    <div class="left">
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
    </div>

    <SvgsBillboard />

    <ModalMoreInfo v-if="modal" :isModalOpen="modal" :toggleModal="toggleModal" />

  </article>
</template>
