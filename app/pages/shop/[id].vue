<template>
  <div v-if="product">
    <!-- Breadcrumb -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
      <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm" :style="{ color: 'var(--text-muted)' }">
        <NuxtLink to="/" class="hover:text-green-700 transition-colors">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/shop" class="hover:text-green-700 transition-colors">Shop</NuxtLink>
        <span>/</span>
        <NuxtLink :to="`/category`" class="hover:text-green-700 transition-colors">{{ product.category }}</NuxtLink>
        <span>/</span>
        <span class="truncate max-w-[120px] sm:max-w-none font-medium" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</span>
      </div>
    </section>

    <!-- Product Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">

        <!-- Left: Images -->
        <div class="flex flex-col-reverse sm:flex-row lg:flex-col-reverse xl:flex-row gap-3 sm:gap-4 lg:gap-3 xl:gap-4">
          <!-- Thumbnails -->
          <div class="flex sm:flex-col lg:flex-row xl:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-y-auto lg:overflow-x-auto xl:overflow-y-auto pb-2 sm:pb-0 lg:pb-2 xl:pb-0 hide-scrollbar scroll-smooth">
            <div v-for="(img, i) in product.images" :key="i"
              @click="activeImg = i"
              class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl sm:rounded-2xl border-2 overflow-hidden cursor-pointer transition-all hover:border-green-500"
              :class="activeImg === i ? 'border-gray-900 shadow-md ring-2 ring-gray-900 ring-offset-1 dark:ring-gray-100 dark:ring-offset-gray-900' : ''"
              :style="activeImg !== i ? { borderColor: 'var(--border-color)' } : {}">
              <img :src="img" :alt="`Product view ${i + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Main Image -->
          <div class="flex-1 w-full rounded-2xl sm:rounded-3xl overflow-hidden border relative group"
            :style="{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }">
            <img :src="product.images[activeImg]" :alt="product.name" class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        <!-- Right: Info -->
        <div class="flex flex-col pt-2 sm:pt-0">
          <span class="inline-block bg-green-900 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg mb-3 sm:mb-4 self-start">{{ product.badge }}</span>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4 sm:mb-5">
            <span class="text-yellow-400 text-sm sm:text-base">★★★★★</span>
            <span class="text-xs sm:text-sm font-medium" :style="{ color: 'var(--text-muted)' }">({{ product.reviews }} verified reviews)</span>
          </div>

          <!-- Price -->
          <div class="flex flex-wrap items-end gap-3 mb-5 sm:mb-6">
            <span class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight" :style="{ color: 'var(--text-primary)' }">${{ product.price }}</span>
            <span class="text-base sm:text-lg line-through mb-1" :style="{ color: 'var(--text-muted)' }">${{ product.original }}</span>
            <span class="text-sm sm:text-base font-bold text-red-500 mb-1 px-2.5 py-1 bg-red-50 dark:bg-red-900/20 rounded-md">Save ${{ (product.original - product.price).toFixed(2) }}</span>
          </div>

          <!-- Description -->
          <p class="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" :style="{ color: 'var(--text-secondary)' }">{{ product.description }}</p>

          <!-- Color -->
          <div class="mb-6 sm:mb-8">
            <p class="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3" :style="{ color: 'var(--text-muted)' }">
              Color: <span :style="{ color: 'var(--text-primary)' }">{{ selectedColor }}</span>
            </p>
            <div class="flex flex-wrap gap-3">
              <button v-for="color in product.colors" :key="color.name"
                @click="selectedColor = color.name"
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-700"
                :style="`background: ${color.hex}`"
                :class="selectedColor === color.name ? 'border-gray-900 shadow-lg scale-110' : 'border-transparent shadow-sm'"
                :title="color.name">
              </button>
            </div>
          </div>

          <!-- Shipping -->
          <div class="mb-6 sm:mb-8">
            <p class="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3" :style="{ color: 'var(--text-muted)' }">Shipping</p>
            <div class="flex items-start sm:items-center gap-3 sm:gap-4 border rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }">
              <span class="text-xl sm:text-2xl mt-0.5 sm:mt-0">🚚</span>
              <div>
                <p class="text-sm sm:text-base font-bold" :style="{ color: 'var(--text-primary)' }">Free Express Shipping</p>
                <p class="text-xs sm:text-sm mt-0.5 sm:mt-1" :style="{ color: 'var(--text-muted)' }">Estimated delivery: 3–5 business days</p>
              </div>
            </div>
          </div>

          <!-- Quantity + Add to Cart -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div class="flex items-center justify-between sm:justify-start border rounded-xl sm:rounded-2xl overflow-hidden h-12 sm:h-14"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
              <button @click="qty > 1 && qty--" class="px-5 sm:px-4 h-full transition-colors text-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200"
                :style="{ color: 'var(--text-secondary)' }">−</button>
              <span class="px-4 text-base font-bold min-w-[3rem] text-center" :style="{ color: 'var(--text-primary)' }">{{ qty }}</span>
              <button @click="qty++" class="px-5 sm:px-4 h-full transition-colors text-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200"
                :style="{ color: 'var(--text-secondary)' }">+</button>
            </div>
            <button @click="handleAddToCart"
              id="add-to-cart-btn"
              class="flex-1 h-12 sm:h-14 bg-green-900 text-white text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl hover:bg-green-800 transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-green-900/20">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add to Cart
            </button>
          </div>

          <!-- Wishlist -->
          <button @click="toggleWishlist(product)"
            id="wishlist-btn"
            class="w-full border h-12 sm:h-14 text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/20 dark:hover:border-red-900/50 active:scale-[0.98]"
            :class="isInWishlist(product.id) ? 'text-red-500 border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/20' : ''"
            :style="!isInWishlist(product.id) ? { borderColor: 'var(--border-color)', color: 'var(--text-primary)' } : {}">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 transition-transform" :class="isInWishlist(product.id) ? 'scale-110' : ''" :fill="isInWishlist(product.id) ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {{ isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 sm:mb-10 lg:mb-12" :style="{ color: 'var(--text-primary)' }">Craftsmanship Meets Technology</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div class="sm:col-span-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border flex flex-col justify-center transition-transform hover:-translate-y-1"
          :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3" :style="{ color: 'var(--text-primary)' }">Hybrid Active Noise Cancellation</h3>
          <p class="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6" :style="{ color: 'var(--text-secondary)' }">
            Our proprietary dual-microphone system monitors environmental noise and counter-frequencies to create a sanctuary of silence, allowing you to focus on what matters most.
          </p>
          <div class="rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64 bg-gray-800">
            <img :src="product.images[1]" alt="Product detail" class="w-full h-full object-cover opacity-80 transition-opacity hover:opacity-100 duration-500" />
          </div>
        </div>
        <div class="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border flex flex-col items-center justify-center text-center bg-[#fff8ed] border-[#fde68a] dark:bg-amber-900/20 dark:border-amber-900/50 transition-transform hover:-translate-y-1">
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5 shadow-sm">⚡</div>
          <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">40h Battery</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">A full charge in 90 minutes. 5 minutes of quick charge gives you 3 hours of listening time.</p>
        </div>
        <div class="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-transform hover:-translate-y-1" :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <div class="text-3xl sm:text-4xl mb-4 sm:mb-5">🌿</div>
          <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3" :style="{ color: 'var(--text-primary)' }">Ethical Sourcing</h3>
          <p class="text-sm leading-relaxed font-medium" :style="{ color: 'var(--text-secondary)' }">The vegan leather and recycled aluminum components are sourced from partners committed to zero-waste production cycles.</p>
        </div>
        <div class="sm:col-span-2 lg:col-span-2 bg-green-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-center transition-transform hover:-translate-y-1 relative overflow-hidden">
          <div class="absolute -right-10 -top-10 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
          </div>
          <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 relative z-10">Hi-Res Audio Certified</h3>
          <p class="text-sm sm:text-base text-green-100 leading-relaxed max-w-xl relative z-10">Engineered with custom-designed 40mm dynamic drivers that deliver a wide frequency range and precise acoustic response. Hear every detail exactly as the artist intended.</p>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <h2 class="text-2xl sm:text-3xl font-extrabold mb-2" :style="{ color: 'var(--text-primary)' }">Community Feedback</h2>
          <div class="flex items-center gap-3">
            <span class="text-4xl sm:text-5xl font-black" :style="{ color: 'var(--text-primary)' }">4.8</span>
            <div class="flex flex-col justify-center mt-1">
              <div class="text-yellow-400 text-sm sm:text-base tracking-widest">★★★★★</div>
              <p class="text-xs sm:text-sm font-medium mt-0.5" :style="{ color: 'var(--text-muted)' }">Based on {{ product.reviews }} reviews</p>
            </div>
          </div>
        </div>
        <button class="w-full sm:w-auto border text-sm sm:text-base font-bold px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 shadow-sm"
          :style="{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }">
          Write a Review
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div v-for="review in reviews" :key="review.name"
          class="border rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-shadow hover:shadow-md"
          :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold shadow-sm"
                :style="`background: ${review.color}22; color: ${review.color}`">{{ review.initials }}</div>
              <div>
                <p class="text-sm sm:text-base font-bold" :style="{ color: 'var(--text-primary)' }">{{ review.name }}</p>
                <p class="text-xs font-medium" :style="{ color: 'var(--text-muted)' }">Verified Buyer · {{ review.date }}</p>
              </div>
            </div>
            <span class="text-yellow-400 text-xs sm:text-sm self-start mt-1">★★★★★</span>
          </div>
          <p class="text-sm leading-relaxed italic" :style="{ color: 'var(--text-secondary)' }">"{{ review.text }}"</p>
        </div>
      </div>
      <div class="text-center">
        <button class="text-sm sm:text-base font-bold inline-flex items-center gap-2 mx-auto hover:text-green-700 dark:hover:text-green-500 transition-colors group"
          :style="{ color: 'var(--text-secondary)' }">
          View all {{ product.reviews }} reviews
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toastVisible" class="fixed bottom-6 right-6 left-6 sm:left-auto z-50 bg-green-900 text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center justify-center sm:justify-start gap-3">
        <div class="w-6 h-6 rounded-full bg-green-800 flex items-center justify-center">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
        </div>
        Added to cart!
      </div>
    </Transition>
  </div>

  <!-- 404 state -->
  <div v-else class="min-h-[70vh] flex flex-col items-center justify-center gap-5 text-center px-6">
    <span class="text-7xl sm:text-8xl drop-shadow-sm mb-2">🔍</span>
    <h1 class="text-3xl sm:text-4xl font-black" :style="{ color: 'var(--text-primary)' }">Product not found</h1>
    <p class="text-base sm:text-lg max-w-md mx-auto" :style="{ color: 'var(--text-muted)' }">The product you're looking for doesn't exist or has been removed.</p>
    <NuxtLink to="/shop" class="mt-4 bg-green-900 text-white px-8 py-3.5 rounded-2xl sm:rounded-3xl font-bold hover:bg-green-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
      Back to Shop
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const route = useRoute()
const { getProductById } = useProducts()
const { addToCart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()

const product = computed(() => getProductById(route.params.id))

const activeImg = ref(0)
const qty = ref(1)
const selectedColor = ref('')
const toastVisible = ref(false)

watch(product, (p) => {
  if (p) {
    selectedColor.value = p.colors[0]?.name || ''
    activeImg.value = 0
  }
}, { immediate: true })

const handleAddToCart = () => {
  if (!product.value) return
  addToCart(product.value, qty.value)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

useHead(() => ({
  title: product.value ? `${product.value.name} – SaSaShop` : 'Product – SaSaShop',
  meta: [{ name: 'description', content: product.value?.description }]
}))

const reviews = [
  { name: 'John D.', initials: 'JD', color: '#4a7c59', date: '2 weeks ago', text: 'The sound clarity is unlike anything I\'ve heard before in this price range. The noise cancellation is perfect for my daily train commute.' },
  { name: 'Sarah M.', initials: 'SM', color: '#c17f3a', date: '1 month ago', text: 'Beautiful design! They look even better in person. The battery life is actually as long as they claim, which is rare these days.' },
  { name: 'Michael T.', initials: 'MT', color: '#3a6bc1', date: '3 days ago', text: 'Highly recommend SaSaShop! The delivery was faster than expected and the product packaging was very eco-friendly and thoughtful.' },
]
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>
