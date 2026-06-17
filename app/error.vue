<script setup>
const props = defineProps({
  error: Object
})

const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
    <h1 class="text-9xl font-extrabold text-red-500 font-mono">{{ error.statusCode }}</h1>
    
    <h2 class="text-3xl font-bold mt-4 text-gray-800">
      {{ error.statusCode === 404 ? 'រកមិនឃើញទំព័រដែលអ្នកចង់ទៅទេ!' : 'មានបញ្ហាបច្ចេកទេសខាងក្នុង Server!' }}
    </h2>

    <p class="text-gray-500 my-4 max-w-md">{{ error.message }}</p>

    <button 
      @click="handleClearError" 
      class="px-6 py-3 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition-all"
    >
      ត្រឡប់ទៅទំព័រដើមវិញ 🏠
    </button>
  </div>
</template>