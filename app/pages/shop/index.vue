<template>
  <div>
    <!-- Hero -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span class="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span class="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse"></span>
            New Arrivals
          </span>
          <h1 class="text-4xl font-bold leading-tight mb-4" :style="{ color: 'var(--text-primary)' }">
            Discover The Best Products<br>for You
          </h1>
          <p class="text-sm leading-relaxed mb-7 max-w-sm" :style="{ color: 'var(--text-secondary)' }">
            Explore our wide range of high-quality products at affordable prices.
            Shop now and enjoy the best deals!
          </p>
          <div class="flex gap-3">
            <button class="inline-flex items-center gap-2 bg-green-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-green-800 transition-all hover:shadow-lg">
              Shop Now →
            </button>
            <NuxtLink to="/deals" class="inline-flex items-center text-sm font-medium px-6 py-3 rounded-xl border transition-all"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }">
              Explore Deals
            </NuxtLink>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden aspect-4/3 shadow-xl bg-[#f5f0e8] dark:bg-gray-800">
          <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" alt="Shop hero" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Feature Bar -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div class="grid grid-cols-2 md:grid-cols-4 rounded-2xl border overflow-hidden"
        :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
        <div v-for="(f, i) in features" :key="i"
          class="flex flex-col items-center gap-1 py-4 text-center border-r last:border-r-0"
          :style="{ borderColor: 'var(--border-color)' }">
          <span class="text-xl">{{ f.icon }}</span>
          <p class="text-sm font-semibold" :style="{ color: 'var(--text-primary)' }">{{ f.title }}</p>
          <p class="text-xs" :style="{ color: 'var(--text-muted)' }">{{ f.sub }}</p>
        </div>
      </div>
    </section>

    <!-- Shop by Categories -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Shop by Categories</h2>
        <NuxtLink to="/category" class="text-sm text-green-700 hover:text-green-600 font-medium">View All →</NuxtLink>
      </div>
      <div class="flex gap-5 overflow-x-auto pb-2">
        <button v-for="cat in categories" :key="cat.label"
          class="flex flex-col items-center gap-2 cursor-pointer group shrink-0"
          @click="selectedCategory = cat.label">
          <div class="w-16 h-16 rounded-full overflow-hidden border-2 transition-all"
            :class="selectedCategory === cat.label ? 'border-green-600 shadow-md' : 'border-gray-200'">
            <img :src="cat.img" :alt="cat.label" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span class="text-xs font-medium transition-colors" :class="selectedCategory === cat.label ? 'text-green-700' : ''" :style="{ color: selectedCategory === cat.label ? '' : 'var(--text-secondary)' }">{{ cat.label }}</span>
        </button>
      </div>
    </section>

    <!-- Products + Filters -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div class="flex gap-6">

        <!-- Sidebar Filters -->
        <aside class="w-44 shrink-0 hidden md:block">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-bold" :style="{ color: 'var(--text-primary)' }">Filters</span>
            <button class="text-xs text-green-700 hover:text-green-600 font-medium" @click="clearFilters">Clear All</button>
          </div>

          <div class="mb-5">
            <p class="text-xs font-bold mb-2 uppercase tracking-wider" :style="{ color: 'var(--text-muted)' }">Category</p>
            <ul class="space-y-1.5 text-xs">
              <li v-for="cat in filterCategories" :key="cat"
                class="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors"
                :style="{ color: selectedFilter === cat ? '#4a7c59' : 'var(--text-secondary)' }"
                @click="selectedFilter = cat">
                <span class="w-3.5 h-3.5 rounded border flex items-center justify-center text-[9px] shrink-0"
                  :class="selectedFilter === cat ? 'bg-green-700 border-green-700 text-white' : ''"
                  :style="selectedFilter !== cat ? { borderColor: 'var(--border-color)' } : {}">
                  <span v-if="selectedFilter === cat">✓</span>
                </span>
                {{ cat }}
              </li>
            </ul>
          </div>

          <div class="mb-5">
            <p class="text-xs font-bold mb-2 uppercase tracking-wider" :style="{ color: 'var(--text-muted)' }">Price Range</p>
            <input type="range" min="0" max="500" v-model="maxPrice" class="w-full accent-green-700" />
            <div class="flex justify-between text-xs mt-1" :style="{ color: 'var(--text-muted)' }">
              <span>$0</span><span>${{ maxPrice }}</span>
            </div>
          </div>

          <div class="mb-6">
            <p class="text-xs font-bold mb-2 uppercase tracking-wider" :style="{ color: 'var(--text-muted)' }">Customer Rating</p>
            <div class="flex items-center gap-1 text-xs" :style="{ color: 'var(--text-secondary)' }">
              <span class="text-yellow-400">★★★★★</span> 4 & Up
            </div>
          </div>

          <div class="bg-green-900 text-white rounded-2xl p-4">
            <p class="text-[10px] font-bold text-green-300 uppercase tracking-wider mb-1">Flash Sale</p>
            <p class="text-sm font-bold leading-tight mb-3">Up to 40% Off Select Tech</p>
            <NuxtLink to="/deals" class="inline-block bg-white dark:bg-gray-800 text-green-900 dark:text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">
              Shop Now
            </NuxtLink>
          </div>
        </aside>

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Best Selling Products</h2>
            <div class="flex items-center gap-2">
              <span class="text-sm" :style="{ color: 'var(--text-muted)' }">Sort by:</span>
              <select v-model="sortBy" class="text-sm border rounded-xl px-3 py-1.5 focus:outline-none focus:border-green-500 transition-colors"
                :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="product in paginatedProducts" :key="product.id"
              class="product-card rounded-2xl border overflow-hidden group"
              :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
              <NuxtLink :to="`/shop/${product.id}`" class="block">
                <div class="relative bg-gray-50 dark:bg-gray-900 aspect-square overflow-hidden">
                  <img :src="product.img" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button
                    @click.prevent="toggleWishlist(product)"
                    class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border flex items-center justify-center transition-all shadow-sm hover:scale-110"
                    :class="isInWishlist(product.id) ? 'text-red-500 border-red-200 dark:border-red-900' : 'text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700'">
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
                  <p class="text-sm font-semibold mb-1 hover:text-green-700 transition-colors" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</p>
                </NuxtLink>
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-sm font-bold" :style="{ color: 'var(--text-primary)' }">${{ product.price }}</span>
                  <span class="text-xs line-through" :style="{ color: 'var(--text-muted)' }">${{ product.original }}</span>
                </div>
                <button @click="handleAddToCart(product)"
                  class="w-full flex items-center justify-center gap-2 bg-green-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-green-700 transition-all active:scale-95">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex items-center justify-center gap-2 mt-8">
            <button class="w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-colors hover:bg-green-50"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }"
              @click="page > 1 && page--">‹</button>
            <button v-for="p in totalPages" :key="p"
              class="w-9 h-9 rounded-xl text-sm font-semibold transition-colors"
              :class="page === p ? 'bg-green-900 text-white' : 'border hover:bg-green-50'"
              :style="page !== p ? { borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' } : {}"
              @click="page = p">{{ p }}</button>
            <button class="w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-colors hover:bg-green-50"
              :style="{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }"
              @click="page < totalPages && page++">›</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-56 bg-[#e8ddd0] dark:bg-[#2c2620]">
        <div class="flex flex-col justify-center px-10 py-10">
          <span class="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">Special Offer</span>
          <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">Up to 50% Off</h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Limited time offer on selected items. Hurry up<br>and grab the best deals before they're gone!</p>
          <NuxtLink to="/deals" class="inline-flex items-center gap-2 bg-green-900 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-green-800 transition-all w-fit">
            Shop the Sale ↗
          </NuxtLink>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80" alt="Special offer" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold mb-2" :style="{ color: 'var(--text-primary)' }">What Our Customers Say</h2>
        <div class="w-12 h-0.5 bg-gray-300 mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="review in reviews" :key="review.name"
          class="rounded-2xl border p-6"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="text-4xl font-serif mb-3" :style="{ color: 'var(--border-color)' }">"</div>
          <p class="text-sm leading-relaxed mb-4 italic" :style="{ color: 'var(--text-secondary)' }">{{ review.text }}</p>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              :style="`background: ${review.color}22; color: ${review.color}`">{{ review.initials }}</div>
            <div>
              <p class="text-sm font-semibold" :style="{ color: 'var(--text-primary)' }">{{ review.name }}</p>
              <span class="text-yellow-400 text-xs">★★★★★</span>
            </div>
          </div>
        </div>
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

const selectedCategory = ref('All')
const selectedFilter = ref('All Products')
const maxPrice = ref(500)
const sortBy = ref('Newest')
const page = ref(1)
const perPage = 6
const toastVisible = ref(false)

const features = [
  { icon: '🚚', title: 'Free Shipping', sub: 'On orders over $50' },
  { icon: '🛡️', title: 'Secure Payment', sub: '100% secure payment' },
  { icon: '↩️', title: 'Easy Returns', sub: '30 days return policy' },
  { icon: '🎧', title: '24/7 Support', sub: 'Dedicated support' },
]

const categories = [
  { label: 'All', img: 'https://picsum.photos/seed/all/200/200' },
  { label: 'Electronics', img: 'https://picsum.photos/seed/electronics/200/200' },
  { label: 'Fashion', img: 'https://picsum.photos/seed/fashion/200/200' },
  { label: 'Home & Kitchen', img: 'https://picsum.photos/seed/homekitchen/200/200' },
  { label: 'Beauty', img: 'https://picsum.photos/seed/beauty/200/200' },
  { label: 'Sports', img: 'https://picsum.photos/seed/sports/200/200' },
  { label: 'Accessories', img: 'https://picsum.photos/seed/accessories/200/200' },
]

const filterCategories = ['All Products', 'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Accessories']

const filteredProducts = computed(() => {
  let result = products.filter(p => parseFloat(p.price) <= maxPrice.value)
  if (selectedFilter.value !== 'All Products') {
    result = result.filter(p => p.category === selectedFilter.value)
  }
  if (selectedCategory.value !== 'All') {
    result = result.filter(p => p.category === selectedCategory.value)
  }
  if (sortBy.value === 'Price: Low to High') result = [...result].sort((a, b) => a.price - b.price)
  if (sortBy.value === 'Price: High to Low') result = [...result].sort((a, b) => b.price - a.price)
  if (sortBy.value === 'Best Rating') result = [...result].sort((a, b) => b.rating - a.rating)
  return result
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredProducts.value.length / perPage)))
const paginatedProducts = computed(() => {
  const start = (page.value - 1) * perPage
  return filteredProducts.value.slice(start, start + perPage)
})

const clearFilters = () => {
  selectedFilter.value = 'All Products'
  maxPrice.value = 500
  selectedCategory.value = 'All'
}

const handleAddToCart = (product) => {
  addToCart(product)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

const reviews = [
  { name: 'John D.', initials: 'JD', color: '#4a7c59', text: 'Amazing products and fast delivery! SaSaShop is my go-to store for all my lifestyle and tech needs. The quality is always top-notch.' },
  { name: 'Sarah M.', initials: 'SM', color: '#c17f3a', text: 'Great quality at affordable prices. The customer support is also very responsive. Highly recommend if you value aesthetics and durability.' },
  { name: 'Michael T.', initials: 'MT', color: '#3a6bc1', text: 'Very happy with my purchase. The curated collection is exactly what I was looking for. Will definitely be a returning customer!' },
]
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>