<script lang="ts" setup>
import './billboard.scss'
import ButtonsGlowOn from '~/components/buttons/glow-on/index.vue'
import MoreInfoModal from '~/components/modal/more-info/index.vue'

const modal = ref(false)

const toggleModal = () => {
  modal.value = !modal.value
}

</script>

<template>
  <section class="billboard-diseno-grafico-container">

    <div class="left">
      <div>
        <NuxtPicture 
          src="/diseno-grafico.webp" 
          sizes="100vw xs:360px sm:500px"
          width="500"
          height="320" 
          format="webp" 
          alt="" 
        />
      </div>
    </div>

    <div class="right">
      <h1>¡Servicio de Diseño!
        <span class="animate-text">Gráfico</span>
      </h1>

      <p>Un servicio de diseño gráfico de alta calidad y precios competitivos significa que podemos respaldar o
        convertirnos en su equipo de marketing.</p>
      <ButtonsGlowOn class="learn-more" text="¡Aprender más!" :active="true" @click="toggleModal" />
    </div>

    <MoreInfoModal v-if="modal" :isModalOpen="modal" :toggleModal="toggleModal" />

  </section>
</template>
