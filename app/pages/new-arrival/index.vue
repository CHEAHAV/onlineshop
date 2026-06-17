<template>
  <div>
    <!-- Breadcrumb + Heading -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
      <div class="flex items-center gap-2 text-sm mb-6" :style="{ color: 'var(--text-muted)' }">
        <NuxtLink to="/" class="hover:text-green-700 transition-colors">Home</NuxtLink>
        <span>›</span>
        <span :style="{ color: 'var(--text-primary)' }">New Arrivals</span>
      </div>
      <h1 class="text-5xl font-bold mb-4" :style="{ color: 'var(--text-primary)' }">Fresh from Nature.</h1>
      <p class="text-sm max-w-md leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
        Discover our latest collection of thoughtfully crafted, sustainable products
        designed to bring calm and quality into your everyday life.
      </p>
    </section>

    <!-- Toolbar -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex items-center justify-between">
        <span class="text-sm" :style="{ color: 'var(--text-muted)' }">
          Showing 1–{{ visibleProducts.length }} of {{ products.length }} New Arrivals
        </span>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 border rounded-xl px-4 py-2 text-sm transition-colors hover:bg-green-50"
            :style="{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-card)' }">
            ⚙ Filter
          </button>
          <div class="relative">
            <select v-model="sortBy" class="appearance-none border rounded-xl px-4 py-2 pr-8 text-sm focus:outline-none focus:border-green-500 cursor-pointer transition-colors"
              :style="{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)', backgroundColor: 'var(--bg-card)' }">
              <option>Sort by: Featured</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Price Low to High</option>
              <option>Sort by: Price High to Low</option>
            </select>
            <span class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs" :style="{ color: 'var(--text-muted)' }">▾</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div v-for="product in visibleProducts" :key="product.id"
          class="product-card group rounded-2xl border overflow-hidden"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <NuxtLink :to="`/shop/${product.id}`" class="block">
            <div class="relative bg-gray-50 dark:bg-gray-900 aspect-square overflow-hidden">
              <span class="absolute top-3 left-3 bg-white dark:bg-gray-800 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-gray-200 z-10">NEW</span>
              <img :src="product.img" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button
                @click.prevent="toggleWishlist(product)"
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border flex items-center justify-center transition-all shadow-sm hover:scale-110 z-10"
                :class="isInWishlist(product.id) ? 'text-red-500 border-red-200' : 'text-gray-400 border-gray-200'">
                <svg class="w-4 h-4" :fill="isInWishlist(product.id) ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </NuxtLink>
          <div class="p-4">
            <p class="text-xs mb-1" :style="{ color: 'var(--text-muted)' }">{{ product.category }}</p>
            <NuxtLink :to="`/shop/${product.id}`">
              <p class="text-sm font-bold mb-3 leading-snug hover:text-green-700 transition-colors" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</p>
            </NuxtLink>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold" :style="{ color: 'var(--text-primary)' }">${{ product.price }}</span>
              <button @click="handleAddToCart(product)"
                class="w-8 h-8 rounded-full bg-green-900 text-white flex items-center justify-center text-lg hover:bg-green-700 transition-all active:scale-95">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="flex justify-center mt-12">
        <button v-if="visibleCount < newArrivals.length"
          @click="visibleCount += 8"
          class="border text-sm font-semibold px-8 py-3 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all"
          :style="{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }">
          Load More Products
        </button>
      </div>
    </section>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toastVisible" class="fixed bottom-6 right-6 z-50 bg-green-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-xl flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
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

const sortBy = ref('Sort by: Featured')
const visibleCount = ref(8)
const toastVisible = ref(false)

// New arrivals = products with isNew flag
const newArrivals = computed(() => products.filter(p => p.isNew))
const visibleProducts = computed(() => newArrivals.value.slice(0, visibleCount.value))

const handleAddToCart = (product) => {
  addToCart(product)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

useHead({
  title: 'New Arrivals – SaSaShop',
  meta: [{ name: 'description', content: 'Discover our latest arrivals – fresh, sustainable, and thoughtfully crafted products.' }]
})
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>