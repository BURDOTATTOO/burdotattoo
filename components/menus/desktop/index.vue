<script lang="ts" setup>
import './menu.scss'

</script>

<template>
  <nav class="desktop-menu">
    <ul class="menu-list">
      <li class="menu-item">
        <span class="menu-span">Entrar</span>
      </li>
      <li class="menu-item">
        <NuxtLink to="/" class="link">
          <span class="menu-span">Vault</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>

</template>
