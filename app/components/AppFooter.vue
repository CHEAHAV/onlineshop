<script setup>
const { theme } = useTheme()

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Categories', to: '/category' },
  { label: 'New Arrivals', to: '/new-arrival' },
]

const serviceLinks = [
  { label: 'Track Order', href: '#' },
  { label: 'Returns & Refunds', href: '#' },
  { label: 'Shipping Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Brand -->
      <div>
        <h3 class="font-bold text-2xl mb-4 text-green-800 dark:text-green-400">
          SaSaShop
        </h3>
        <p class="text-sm leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
          Your one-stop shop for quality products at the best prices. We deliver excellence to your doorstep.
        </p>
        <div class="flex gap-3">
          <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 hover:border-green-700 dark:hover:border-green-400 transition-all duration-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 hover:border-green-700 dark:hover:border-green-400 transition-all duration-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 hover:border-green-700 dark:hover:border-green-400 transition-all duration-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
        <ul class="space-y-3">
          <li v-for="link in quickLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-sm text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Customer Service -->
      <div>
        <h4 class="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Customer Service</h4>
        <ul class="space-y-3">
          <li v-for="item in serviceLinks" :key="item.label">
            <a :href="item.href" class="text-sm text-gray-600 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h4 class="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">Subscribe to our newsletter</h4>
        <p class="text-sm mb-5 leading-relaxed text-gray-600 dark:text-gray-400">
          Get the latest updates on new products and upcoming sales.
        </p>
        <div class="flex">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 text-sm px-4 py-2.5 outline-none rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-green-600 dark:focus:border-green-500 focus:ring-1 focus:ring-green-600 dark:focus:ring-green-500 transition-colors duration-200"
          />
          <button class="bg-green-800 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-r-lg transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; 2026 SaSaShop. All rights reserved. Built for modern lifestyle seekers. develop by IT CHEAHAV.
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>