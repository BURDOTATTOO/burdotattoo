<script lang="ts" setup>
import './more-info.scss'
import { ref } from 'vue'
import Loading from '~/components/atoms/loading/dual-spinner/index.vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const isModalOpen = ref(false)
const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isFormSubmitting = ref(false)
const isLoading = ref(false)

const isForgotPasswordOpen = ref(false)

type CreateFormTypes = {
  email: string
  password: string
  confirmPassword: string
}

const { toggleModal } = defineProps<{
  toggleModal: () => void
}>()

const submitHandler = async (createForm: CreateFormTypes) => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 3000))  
  isLoading.value = false
  // toggleModal()
}

</script>

<template>
  <section class="modal-wrapper">
    <div class="create-modal-inner">
      <div @click="toggleModal" class="btn-close">&times;</div>

      <Loading v-if="isLoading" />

      <div class="create-form">

        <h2 class="modal-description"><span>¡Aprovecha esta promoción </span> ahora!</h2>

        <FormKit v-if="!isForgotPasswordOpen" type="form" id="email-create" #default="{ value, state }"
          @submit="submitHandler">

          <FormKit type="group" name="email">

            <div class="form-group">
              <label for="name">Nombre</label>
              <FormKit
                type="text"
                placeholder="Nombre"
                maxLength="30"
                minLength="3"
                v-model="name"
                name="name"
                validation="required" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <FormKit
                type="email"
                placeholder="joe@email.com"
                v-model="email"
                name="email"
                validation="required|email" />
            </div>

            <div class="form-group">
              <label for="tel">Teléfono</label>
              <FormKit
                maxLength="10"
                minLength="10"
                inputmode="numeric"
                name="phone"
                oninput="this.value = this.value.replace(/\D/g, '')"
                :validation="[['matches', /^.{10,10}$/], ['required']]"
                v-model.number="phone"
                type="text"
                placeholder="Teléfono" />
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <FormKit
                type="textarea"
                name="message"
                placeholder="Mensaje"
                maxLength="85"  
                v-model="message"
                validation="required" />
            </div>

            <button :class="['btn-submit', { 'btn-disabled': !state.valid }]" type="submit">
              <span>Siguiente</span>
            </button>

          </FormKit>

        </FormKit>

      </div>

    </div>
  </section>
</template>
