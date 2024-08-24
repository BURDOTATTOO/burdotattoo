<script lang="ts" setup>
import './billboard-7.scss'
import Button from '~/components/atoms/buttons/default/index.vue'
import ModalPromo from '~/components/organisms/modals/modal-promo/index.vue'
import SvgsBillboard from '~/components/icons/web-dev.vue'
import AnimateText from '~/components/atoms/animated-colorful-text/index.vue'
import Subtitle from '~/components/atoms/subtitle-description/index.vue'



const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

</script>

<template>
  <section class="billboard-7">

    <div class="details">
      <h1 class="title">¡BURDO TATTOO!
        <AnimateText>free</AnimateText> durante el primer año! 
      </h1>
      <p class="description">Elige entre una variedad de diseños modernos por solo $500,000.</p>
      
      <Button text="TATTOO" external="https://www.burdotattoo.com/TATTOOSHOP.html" />

      <Button text="PIERCING" external="https://www.burdotattoo.com/piercing.html" />
    </div>

    <SvgsBillboard aria-label="imagen soluciones creativas de diseño gráfico"/>

    <ModalPromo v-if="isModalOpen" :toggleModal="toggleModal"/>
  </section>




</template>
