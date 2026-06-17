<template>
  <div v-if="product">
    <!-- Breadcrumb -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div class="flex items-center gap-2 text-sm" :style="{ color: 'var(--text-muted)' }">
        <NuxtLink to="/" class="hover:text-green-700 transition-colors">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/shop" class="hover:text-green-700 transition-colors">Shop</NuxtLink>
        <span>/</span>
        <NuxtLink :to="`/category`" class="hover:text-green-700 transition-colors">{{ product.category }}</NuxtLink>
        <span>/</span>
        <span :style="{ color: 'var(--text-primary)' }">{{ product.name }}</span>
      </div>
    </section>

    <!-- Product Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        <!-- Left: Images -->
        <div class="flex gap-3">
          <!-- Thumbnails -->
          <div class="flex flex-col gap-2">
            <div v-for="(img, i) in product.images" :key="i"
              @click="activeImg = i"
              class="w-16 h-16 rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:border-green-500"
              :class="activeImg === i ? 'border-gray-900 shadow-md' : ''"
              :style="activeImg !== i ? { borderColor: 'var(--border-color)' } : {}">
              <img :src="img" :alt="`Product view ${i + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Main Image -->
          <div class="flex-1 rounded-3xl overflow-hidden border"
            :style="{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }">
            <img :src="product.images[activeImg]" :alt="product.name" class="w-full h-full object-cover aspect-square" />
          </div>
        </div>

        <!-- Right: Info -->
        <div>
          <span class="inline-block bg-green-900 text-white text-xs font-bold px-3 py-1 rounded-lg mb-4">{{ product.badge }}</span>
          <h1 class="text-3xl font-bold leading-tight mb-3" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <span class="text-yellow-400 text-sm">★★★★★</span>
            <span class="text-sm" :style="{ color: 'var(--text-muted)' }">({{ product.reviews }} verified reviews)</span>
          </div>

          <!-- Price -->
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl font-bold" :style="{ color: 'var(--text-primary)' }">${{ product.price }}</span>
            <span class="text-sm line-through" :style="{ color: 'var(--text-muted)' }">${{ product.original }}</span>
            <span class="text-sm font-semibold text-red-500">Save ${{ (product.original - product.price).toFixed(2) }}</span>
          </div>

          <!-- Description -->
          <p class="text-sm leading-relaxed mb-6" :style="{ color: 'var(--text-secondary)' }">{{ product.description }}</p>

          <!-- Color -->
          <div class="mb-5">
            <p class="text-xs font-bold uppercase tracking-wider mb-2" :style="{ color: 'var(--text-muted)' }">
              Color: <span :style="{ color: 'var(--text-primary)' }">{{ selectedColor }}</span>
            </p>
            <div class="flex gap-2">
              <button v-for="color in product.colors" :key="color.name"
                @click="selectedColor = color.name"
                class="w-8 h-8 rounded-full border-2 transition-all hover:scale-110"
                :style="`background: ${color.hex}`"
                :class="selectedColor === color.name ? 'border-gray-900 scale-110' : 'border-transparent shadow-md'"
                :title="color.name">
              </button>
            </div>
          </div>

          <!-- Shipping -->
          <div class="mb-6">
            <p class="text-xs font-bold uppercase tracking-wider mb-2" :style="{ color: 'var(--text-muted)' }">Shipping</p>
            <div class="flex items-center gap-3 border rounded-xl px-4 py-3"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }">
              <span class="text-lg">🚚</span>
              <div>
                <p class="text-sm font-semibold" :style="{ color: 'var(--text-primary)' }">Free Express Shipping</p>
                <p class="text-xs" :style="{ color: 'var(--text-muted)' }">Estimated delivery: 3–5 business days</p>
              </div>
            </div>
          </div>

          <!-- Quantity + Add to Cart -->
          <div class="flex gap-3 mb-3">
            <div class="flex items-center border rounded-xl overflow-hidden"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
              <button @click="qty > 1 && qty--" class="px-4 py-3 transition-colors text-lg font-medium hover:bg-green-50"
                :style="{ color: 'var(--text-secondary)' }">−</button>
              <span class="px-4 py-3 text-sm font-bold min-w-12 text-center" :style="{ color: 'var(--text-primary)' }">{{ qty }}</span>
              <button @click="qty++" class="px-4 py-3 transition-colors text-lg font-medium hover:bg-green-50"
                :style="{ color: 'var(--text-secondary)' }">+</button>
            </div>
            <button @click="handleAddToCart"
              id="add-to-cart-btn"
              class="flex-1 bg-green-900 text-white text-sm font-bold py-3 rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2 active:scale-95">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add to Cart
            </button>
          </div>

          <!-- Wishlist -->
          <button @click="toggleWishlist(product)"
            id="wishlist-btn"
            class="w-full border text-sm font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-200 active:scale-95"
            :class="isInWishlist(product.id) ? 'text-red-500 border-red-200 bg-red-50' : ''"
            :style="!isInWishlist(product.id) ? { borderColor: 'var(--border-color)', color: 'var(--text-primary)' } : {}">
            <svg class="w-4 h-4" :fill="isInWishlist(product.id) ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {{ isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 class="text-2xl font-bold text-center mb-8" :style="{ color: 'var(--text-primary)' }">Craftsmanship Meets Technology</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="col-span-2 rounded-2xl p-6 border"
          :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <h3 class="text-base font-bold mb-2" :style="{ color: 'var(--text-primary)' }">Hybrid Active Noise Cancellation</h3>
          <p class="text-sm leading-relaxed mb-5" :style="{ color: 'var(--text-secondary)' }">
            Our proprietary dual-microphone system monitors environmental noise and counter-frequencies to create a sanctuary of silence, allowing you to focus on what matters most.
          </p>
          <div class="rounded-xl overflow-hidden h-40 bg-gray-800">
            <img :src="product.images[1]" alt="Product detail" class="w-full h-full object-cover opacity-80" />
          </div>
        </div>
        <div class="rounded-2xl p-6 border flex flex-col items-center justify-center text-center bg-[#fff8ed] border-[#fde68a] dark:bg-amber-900/20 dark:border-amber-900/50">
          <div class="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700 flex items-center justify-center text-xl mb-4">⚡</div>
          <h3 class="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">40h Battery</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">A full charge in 90 minutes. 5 minutes of quick charge gives you 3 hours of listening time.</p>
        </div>
        <div class="rounded-2xl p-6 border" :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <div class="text-xl mb-3">🌿</div>
          <h3 class="text-base font-bold mb-2" :style="{ color: 'var(--text-primary)' }">Ethical Sourcing</h3>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--text-secondary)' }">The vegan leather and recycled aluminum components are sourced from partners committed to zero-waste production cycles.</p>
        </div>
        <div class="col-span-2 bg-green-900 rounded-2xl p-6 text-white">
          <h3 class="text-base font-bold mb-2">Hi-Res Audio Certified</h3>
          <p class="text-sm text-green-200 leading-relaxed">Engineered with custom-designed 40mm dynamic drivers that deliver a wide frequency range and precise acoustic response.</p>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h2 class="text-xl font-bold mb-1" :style="{ color: 'var(--text-primary)' }">Community Feedback</h2>
          <div class="flex items-center gap-2">
            <span class="text-4xl font-bold" :style="{ color: 'var(--text-primary)' }">4.8</span>
            <div>
              <div class="text-yellow-400 text-sm">★★★★★</div>
              <p class="text-xs" :style="{ color: 'var(--text-muted)' }">Based on {{ product.reviews }} reviews</p>
            </div>
          </div>
        </div>
        <button class="border text-sm font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-green-50"
          :style="{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }">
          Write a Review
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div v-for="review in reviews" :key="review.name"
          class="border rounded-2xl p-4"
          :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)' }">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                :style="`background: ${review.color}22; color: ${review.color}`">{{ review.initials }}</div>
              <div>
                <p class="text-sm font-semibold" :style="{ color: 'var(--text-primary)' }">{{ review.name }}</p>
                <p class="text-[10px]" :style="{ color: 'var(--text-muted)' }">Verified Buyer · {{ review.date }}</p>
              </div>
            </div>
            <span class="text-yellow-400 text-xs">★★★★★</span>
          </div>
          <p class="text-xs leading-relaxed italic" :style="{ color: 'var(--text-secondary)' }">"{{ review.text }}"</p>
        </div>
      </div>
      <div class="text-center">
        <button class="text-sm font-medium flex items-center gap-2 mx-auto hover:text-green-700 transition-colors"
          :style="{ color: 'var(--text-secondary)' }">
          View all {{ product.reviews }} reviews →
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

  <!-- 404 state -->
  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
    <span class="text-6xl">🔍</span>
    <h1 class="text-2xl font-bold" :style="{ color: 'var(--text-primary)' }">Product not found</h1>
    <p :style="{ color: 'var(--text-muted)' }">The product you're looking for doesn't exist.</p>
    <NuxtLink to="/shop" class="bg-green-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
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
