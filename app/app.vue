<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { theme } = useTheme()

// Sync html class on load
if (import.meta.client) {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
}
</script>