<template>
  <div class="space-y-4">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span class="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse"></span>
            New Arrivals
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-gray-100">
            Discover The Best<br>Products for You
          </h1>
          <p class="text-base leading-relaxed mb-8 max-w-lg text-gray-600 dark:text-gray-400">
            Explore our wide range of high-quality products at affordable prices.
            Shop now and enjoy the best deals on lifestyle essentials!
          </p>
          <div class="flex gap-4 flex-wrap">
            <NuxtLink to="/shop" id="hero-shop-now" class="inline-flex items-center gap-2 bg-green-800 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Shop Now →
            </NuxtLink>
            <NuxtLink to="/deals" class="inline-flex items-center text-sm font-medium px-8 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-0.5">
              Explore Deals
            </NuxtLink>
          </div>
          <div class="flex items-center gap-4 mt-10">
            <div class="flex">
              <div class="w-10 h-10 rounded-full bg-green-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-bold text-green-800">JD</div>
              <div class="w-10 h-10 rounded-full bg-amber-200 border-2 border-white dark:border-gray-900 -ml-3 flex items-center justify-center text-xs font-bold text-amber-800">AS</div>
              <div class="w-10 h-10 rounded-full bg-blue-200 border-2 border-white dark:border-gray-900 -ml-3 flex items-center justify-center text-xs font-bold text-blue-800">MK</div>
              <div class="w-10 h-10 rounded-full bg-green-100 border-2 border-white dark:border-gray-900 -ml-3 flex items-center justify-center text-[10px] font-bold text-green-700">+10k</div>
            </div>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted by 10,000+ Happy Customers</span>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden aspect-4/3 shadow-2xl bg-[#f5f0e8] dark:bg-gray-800">
          <img src="~/assets/images/bag.png" alt="Featured product – stylish backpack" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Feature Bar -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div class="grid grid-cols-2 lg:grid-cols-4 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
        <div v-for="(feature, i) in features" :key="i"
          class="flex items-center gap-4 p-6 transition-colors"
          :class="[i < 3 ? 'lg:border-r lg:border-gray-200 lg:dark:border-gray-800' : '', i % 2 === 0 ? 'border-r border-gray-200 dark:border-gray-800 lg:border-r-0' : '', i < 2 ? 'border-b border-gray-200 dark:border-gray-800 lg:border-b-0' : '']">
          <div class="w-12 h-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0 text-xl shadow-sm">
            {{ feature.icon }}
          </div>
          <div>
            <p class="text-sm font-bold text-gray-900 dark:text-gray-100">{{ feature.title }}</p>
            <p class="text-xs mt-1 text-gray-500 dark:text-gray-400">{{ feature.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop by Category -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-end justify-between mb-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-green-600 after:rounded-full">Shop by Category</h2>
        <NuxtLink to="/category" class="text-sm flex items-center gap-1 text-green-700 dark:text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">
          View All Categories →
        </NuxtLink>
      </div>
      <div class="flex gap-6 overflow-x-auto pb-4 snap-x">
        <NuxtLink v-for="cat in categories" :key="cat.label" :to="`/category`"
          class="flex flex-col items-center gap-3 cursor-pointer group shrink-0 snap-start">
          <div class="w-20 h-20 rounded-full overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:border-green-500 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-green-500/20">
            <img :src="cat.img" :alt="cat.label" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{{ cat.label }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Best Selling Products -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex items-end justify-between mb-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-green-600 after:rounded-full">Best Selling Products</h2>
        <NuxtLink to="/shop" class="text-sm flex items-center gap-1 text-green-700 dark:text-green-500 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">
          View All Products →
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="product in bestSellers" :key="product.id"
          class="product-card bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer"
        >
          <NuxtLink :to="`/shop/${product.id}`" class="block">
            <div class="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img :src="product.img" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button
                @click.prevent="toggleWishlist(product)"
                :id="`wishlist-${product.id}`"
                class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                :class="isInWishlist(product.id) ? 'text-red-500' : 'text-gray-400 dark:text-gray-500 hover:text-red-400'"
              >
                <svg class="w-5 h-5" :fill="isInWishlist(product.id) ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </NuxtLink>
          <div class="p-5">
            <div class="flex items-center gap-1.5 mb-2">
              <span class="text-amber-400 text-sm">★</span>
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ product.rating }} ({{ product.reviews }} reviews)</span>
            </div>
            <NuxtLink :to="`/shop/${product.id}`">
              <p class="text-base font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors line-clamp-1">{{ product.name }}</p>
            </NuxtLink>
            <div class="flex items-end gap-2 mb-4">
              <span class="text-lg font-bold text-gray-900 dark:text-white">${{ product.price }}</span>
              <span class="text-sm font-medium line-through text-gray-400 dark:text-gray-500 mb-0.5">${{ product.original }}</span>
            </div>
            <button
              @click="handleAddToCart(product)"
              :id="`add-cart-${product.id}`"
              class="w-full flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-bold py-3 rounded-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all active:scale-[0.98] shadow-sm hover:shadow-md">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-75 shadow-xl bg-[#e8ddd0] dark:bg-[#2c2620]">
        <div class="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
          <span class="text-xs font-black text-amber-800 dark:text-amber-500 uppercase tracking-widest mb-3">Special Offer</span>
          <h2 class="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">Up to 50% Off</h2>
          <p class="text-base text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-md">
            Limited time offer on selected items. Hurry up and grab the best deals before they're gone!
          </p>
          <NuxtLink to="/deals" class="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold px-8 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:shadow-lg w-fit">
            Shop the Sale ↗
          </NuxtLink>
        </div>
        <div class="relative overflow-hidden h-64 md:h-auto">
          <img src="~/assets/images/shoes.png" alt="Special offer - running shoes" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">What Our Customers Say</h2>
        <div class="w-16 h-1 bg-green-600 rounded-full mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="review in reviews" :key="review.name"
          class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div class="text-5xl font-serif mb-4 text-green-100 dark:text-gray-800 leading-none">"</div>
          <p class="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-400 italic font-medium">"{{ review.text }}"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-inner"
              :style="`background: ${review.color}22; color: ${review.color}`">
              {{ review.initials }}
            </div>
            <div>
              <p class="text-sm font-bold text-gray-900 dark:text-gray-100">{{ review.name }}</p>
              <span class="text-amber-400 text-xs tracking-widest">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toastVisible"
        class="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
        <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        Successfully added to your cart!
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const { addToCart } = useCart()
const { toggleWishlist, isInWishlist } = useWishlist()
const { products } = useProducts()

const bestSellers = products.slice(0, 4)

const toastVisible = ref(false)
const handleAddToCart = (product) => {
  addToCart(product)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

const features = [
  { icon: '🚚', title: 'Free Shipping', sub: 'On orders over $50' },
  { icon: '🛡️', title: 'Secure Payment', sub: '100% secure payment' },
  { icon: '↩️', title: 'Easy Returns', sub: '30 days return policy' },
  { icon: '🎧', title: '24/7 Support', sub: 'Dedicated support' },
]

import watchImg from '~/assets/images/watch.png'
import fashion from '~/assets/images/fashion.png'
import kitchen from '~/assets/images/kitchen.png'
import beauty from '~/assets/images/beauty.png'
import sport from '~/assets/images/sport.png'
import accessorie from '~/assets/images/accessorie.png'

const categories = [
  { label: 'Electronics', img: watchImg  },
  { label: 'Fashion', img: fashion },
  { label: 'Home & Kitchen', img: kitchen},
  { label: 'Beauty', img:beauty},
  { label: 'Sports', img: sport},
  { label: 'Accessories', img: accessorie},
]

const reviews = [
  { name: 'John D.', initials: 'JD', color: '#16a34a', text: 'Amazing products and fast delivery! SaSaShop is my go-to store for all my home and lifestyle needs. The quality is always consistently high.' },
  { name: 'Sarah M.', initials: 'SM', color: '#d97706', text: 'Great quality at affordable prices. The customer support is also very responsive and helped me through the entire return process seamlessly.' },
  { name: 'Michael T.', initials: 'MT', color: '#2563eb', text: 'Very happy with my purchase. Highly recommend SaSaShop to everyone! The eco-friendly packaging was a very nice touch that I appreciated.' },
]
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.toast-enter-from { opacity: 0; transform: translateY(100%) scale(0.9); }
.toast-leave-to { opacity: 0; transform: translateY(100%) scale(0.9); }
</style>