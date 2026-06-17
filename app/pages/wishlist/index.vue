<template>
  <div>
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      <div class="flex items-center gap-2 text-sm mb-4" :style="{ color: 'var(--text-muted)' }">
        <NuxtLink to="/" class="hover:text-green-700 transition-colors">Home</NuxtLink>
        <span>/</span>
        <span :style="{ color: 'var(--text-primary)' }">Wishlist</span>
      </div>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold" :style="{ color: 'var(--text-primary)' }">
          My Wishlist
          <span class="text-lg font-normal ml-2" :style="{ color: 'var(--text-muted)' }">({{ wishlistCount }} items)</span>
        </h1>
        <button v-if="wishlist.length > 0" @click="addAllToCart"
          class="bg-green-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-green-700 transition-all active:scale-95">
          Add All to Cart
        </button>
      </div>
    </section>

    <!-- Empty State -->
    <div v-if="wishlist.length === 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col items-center justify-center min-h-[50vh] text-center gap-4">
      <span class="text-6xl">❤️</span>
      <h2 class="text-xl font-bold" :style="{ color: 'var(--text-primary)' }">Your wishlist is empty</h2>
      <p :style="{ color: 'var(--text-muted)' }">Save items you love by clicking the heart icon on any product!</p>
      <NuxtLink to="/shop" class="bg-green-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all">
        Explore Products →
      </NuxtLink>
    </div>

    <!-- Wishlist Grid -->
    <section v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div v-for="product in wishlist" :key="product.id"
          class="product-card rounded-2xl border overflow-hidden group"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <NuxtLink :to="`/shop/${product.id}`" class="block">
            <div class="relative bg-gray-50 dark:bg-gray-900 aspect-square overflow-hidden">
              <img :src="product.img" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button @click.prevent="removeFromWishlist(product.id)"
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-red-200 text-red-500 flex items-center justify-center shadow-sm hover:bg-red-50 transition-all hover:scale-110">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </NuxtLink>
          <div class="p-3">
            <p class="text-xs mb-1" :style="{ color: 'var(--text-muted)' }">{{ product.category }}</p>
            <NuxtLink :to="`/shop/${product.id}`">
              <p class="text-sm font-bold mb-1 hover:text-green-700 transition-colors line-clamp-2" :style="{ color: 'var(--text-primary)' }">{{ product.name }}</p>
            </NuxtLink>
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-bold" :style="{ color: 'var(--text-primary)' }">${{ product.price }}</span>
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

const { wishlist, wishlistCount, removeFromWishlist } = useWishlist()
const { addToCart } = useCart()
const toastVisible = ref(false)

const handleAddToCart = (product) => {
  addToCart(product)
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

const addAllToCart = () => {
  wishlist.value.forEach(p => addToCart(p))
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2500)
}

useHead({ title: 'My Wishlist – SaSaShop' })
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>
