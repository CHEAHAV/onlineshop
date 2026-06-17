<template>
  <div>
    <!-- Hero Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="rounded-3xl overflow-hidden relative min-h-64" style="background: linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 50%, #4a7c59 100%);">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-4 right-4 w-64 h-64 rounded-full bg-white"></div>
          <div class="absolute bottom-4 left-4 w-40 h-40 rounded-full bg-white"></div>
        </div>
        <div class="relative px-10 py-12 text-white">
          <span class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            ⚡ Flash Deals
          </span>
          <h1 class="text-4xl md:text-5xl font-bold mb-3">Up to 50% Off</h1>
          <p class="text-green-200 text-sm max-w-md leading-relaxed mb-6">
            Limited time offers on our most popular products. Grab the best deals before they're gone!
          </p>
          <!-- Countdown timer -->
          <div class="flex gap-3 mb-6">
            <div v-for="(t, label) in timer" :key="label" class="bg-white/20 rounded-xl px-4 py-2 text-center min-w-15">
              <div class="text-2xl font-bold">{{ String(t).padStart(2, '0') }}</div>
              <div class="text-xs text-green-200 capitalize">{{ label }}</div>
            </div>
          </div>
        </div>
        <div class="absolute right-0 bottom-0 w-64 h-full hidden md:block">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Deals hero" class="w-full h-full object-cover opacity-60" />
        </div>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="flex gap-2 overflow-x-auto pb-1">
        <button v-for="cat in dealCategories" :key="cat"
          @click="activeCategory = cat"
          class="shrink-0 text-sm font-semibold px-5 py-2 rounded-full transition-all"
          :class="activeCategory === cat ? 'bg-green-900 text-white' : 'border hover:bg-green-50'"
          :style="activeCategory !== cat ? { borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' } : {}">
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Deal Products -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="product in filteredDeals" :key="product.id"
          class="product-card rounded-2xl border overflow-hidden group relative"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <!-- Discount badge -->
          <div class="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
            -{{ Math.round((1 - product.price / product.original) * 100) }}%
          </div>
          <NuxtLink :to="`/shop/${product.id}`" class="block">
            <div class="relative bg-gray-50 dark:bg-gray-900 aspect-square overflow-hidden">
              <img :src="product.img" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button @click.prevent="toggleWishlist(product)"
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border flex items-center justify-center transition-all shadow-sm hover:scale-110"
                :class="isInWishlist(product.id) ? 'text-red-500 border-red-200' : 'text-gray-400 border-gray-200'">
                <svg class="w-4 h-4" :fill="isInWishlist(product.id) ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </NuxtLink>
          <div class="p-3">
            <div class="flex items-center gap-1 mb-1">
              <span class="text-yellow-400 text-xs">★</span>
              <span class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ product.rating }} ({{ product.reviews }})</span>
            </div>
            <NuxtLink :to="`/shop/${product.id}`">
              <p class="text-sm font-bold mb-1 hover:text-green-700 transition-colors line-clamp-2" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</p>
            </NuxtLink>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-bold text-red-500">${{ product.price }}</span>
              <span class="text-xs line-through" :style="{ color: 'var(--text-muted)' }">${{ product.original }}</span>
            </div>
            <button @click="handleAddToCart(product)"
              class="w-full flex items-center justify-center gap-1.5 bg-green-900 text-white text-xs font-bold py-2.5 rounded-xl hover:bg-green-700 transition-all active:scale-95">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toastVisible" class="fixed bottom-6 right-6 z-50 bg-green-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-xl flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        Added to cart!
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const { addToCart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()
const { products } = useProducts()

const toastVisible = ref(false)
const activeCategory = ref('All Deals')

const dealCategories = ['All Deals', 'Electronics', 'Fashion', 'Sports', 'Beauty', 'Accessories']

const filteredDeals = computed(() => {
  const onSale = products.filter(p => p.original > p.price)
  if (activeCategory.value === 'All Deals') return onSale
  return onSale.filter(p => p.category === activeCategory.value)
})

const handleAddToCart = (product) => {
  addToCart(product)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

// Countdown timer (12 hours from load)
const timer = reactive({ hours: 11, minutes: 59, seconds: 59 })
let interval
onMounted(() => {
  interval = setInterval(() => {
    if (timer.seconds > 0) { timer.seconds-- }
    else if (timer.minutes > 0) { timer.minutes--; timer.seconds = 59 }
    else if (timer.hours > 0) { timer.hours--; timer.minutes = 59; timer.seconds = 59 }
  }, 1000)
})
onUnmounted(() => clearInterval(interval))

useHead({ title: 'Deals & Offers – SaSaShop' })
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>
