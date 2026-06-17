<template>
  <div>
    <!-- Header -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div class="flex items-center gap-2 text-sm mb-4 text-gray-500 dark:text-gray-400">
        <NuxtLink to="/" class="hover:text-green-700 dark:hover:text-green-400 transition-colors">Home</NuxtLink>
        <span>/</span>
        <span class="text-gray-900 dark:text-gray-100 font-medium">Shopping Cart</span>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Shopping Cart</h1>
    </section>

    <!-- Empty State -->
    <div v-if="cart.length === 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 flex flex-col items-center justify-center min-h-[50vh] text-center gap-5">
      <span class="text-7xl mb-2">🛒</span>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Your cart is empty</h2>
      <p class="text-gray-500 dark:text-gray-400 max-w-md">Looks like you haven't added anything yet. Discover amazing products and fill it up!</p>
      <NuxtLink to="/shop" class="mt-2 bg-green-800 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all hover:-translate-y-0.5 shadow-sm">
        Start Shopping →
      </NuxtLink>
    </div>

    <!-- Cart Content -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="flex flex-col lg:flex-row gap-10">

        <!-- Cart Items -->
        <div class="flex-1 space-y-5">
          <div v-for="item in cart" :key="item.id"
            class="flex gap-5 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all hover:shadow-md"
          >
            <div class="w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
              <img :src="item.img" :alt="item.name" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 min-w-0 py-1">
              <NuxtLink :to="`/shop/${item.id}`">
                <p class="text-base font-bold text-gray-900 dark:text-gray-100 hover:text-green-700 dark:hover:text-green-400 transition-colors line-clamp-1 mb-1">{{ item.name }}</p>
              </NuxtLink>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ item.category }}</p>
              <div class="flex items-center justify-between flex-wrap gap-4 mt-auto">
                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900/50">
                  <button @click="updateQty(item.id, item.qty - 1)"
                    class="px-3.5 py-1.5 text-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">−</button>
                  <span class="px-3 py-1.5 text-sm font-bold min-w-[2.5rem] text-center text-gray-900 dark:text-gray-100">{{ item.qty }}</span>
                  <button @click="updateQty(item.id, item.qty + 1)"
                    class="px-3.5 py-1.5 text-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">+</button>
                </div>
                <span class="text-base font-bold text-gray-900 dark:text-gray-100">${{ (item.price * item.qty).toFixed(2) }}</span>
              </div>
            </div>
            <button @click="removeFromCart(item.id)"
              class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all shrink-0 -mt-1 -mr-1">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="w-full lg:w-96 shrink-0">
          <div class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-7 sticky top-24 shadow-sm">
            <h2 class="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 pb-4 border-b border-gray-100 dark:border-gray-700">Order Summary</h2>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Subtotal ({{ cartCount }} items)</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Shipping</span>
                <span class="text-green-700 dark:text-green-500 font-bold">{{ cartTotal > 50 ? 'Free' : '$9.99' }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600 dark:text-gray-400">Tax (8%)</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">${{ (cartTotal * 0.08).toFixed(2) }}</span>
              </div>
            </div>

            <div class="border-t border-gray-200 dark:border-gray-700 pt-5 mb-6">
              <div class="flex justify-between items-center">
                <span class="text-base font-bold text-gray-900 dark:text-gray-100">Total</span>
                <span class="text-2xl font-black text-gray-900 dark:text-gray-100">
                  ${{ (cartTotal * 1.08 + (cartTotal <= 50 ? 9.99 : 0)).toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- Promo code -->
            <div class="flex gap-2 mb-6">
              <input type="text" placeholder="Promo code" class="flex-1 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 dark:focus:border-green-500 transition-colors" />
              <button class="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-bold px-4 py-2.5 rounded-xl transition-colors">Apply</button>
            </div>

            <button @click="handleCheckout" id="checkout-btn"
              class="w-full bg-green-800 text-white font-bold py-4 rounded-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all active:scale-[0.98] mb-3 shadow-sm">
              Proceed to Checkout
            </button>
            <NuxtLink to="/shop" class="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm font-bold py-3.5 rounded-xl flex items-center justify-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
              Continue Shopping
            </NuxtLink>

            <div class="mt-5 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30">
              <p v-if="cartTotal > 50" class="text-xs text-green-700 dark:text-green-400 text-center font-bold flex items-center justify-center gap-1.5">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                You qualify for free shipping!
              </p>
              <p v-else class="text-xs text-center text-gray-600 dark:text-gray-400 font-medium">
                Add <span class="font-bold text-gray-900 dark:text-white">${{ (50 - cartTotal).toFixed(2) }}</span> more for free shipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="checkoutMsg" class="fixed bottom-6 right-6 z-50 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
        <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        Order placed successfully!
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const { cart, cartCount, cartTotal, removeFromCart, updateQty, clearCart } = useCart()
const checkoutMsg = ref(false)

const handleCheckout = () => {
  checkoutMsg.value = true
  setTimeout(() => {
    checkoutMsg.value = false
    clearCart()
  }, 3000)
}

useHead({ title: 'Shopping Cart – SaSaShop' })
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.toast-enter-from { opacity: 0; transform: translateY(100%) scale(0.9); }
.toast-leave-to { opacity: 0; transform: translateY(100%) scale(0.9); }
</style>
