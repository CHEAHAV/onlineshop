<script setup>
const { theme, toggleTheme } = useTheme()
const { cartCount } = useCart()
const { wishlistCount } = useWishlist()
const { searchProducts } = useProducts()

const searchQuery = ref('')
const searchResults = ref([])
const showSearch = ref(false)
const searchRef = ref(null)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Categories', to: '/category' },
  { label: 'New Arrivals', to: '/new-arrival' },
  { label: 'Deals', to: '/deals' },
  { label: 'Contact', to: '/contact' },
]

let searchTimer = null
const onSearchInput = () => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    searchResults.value = searchProducts(searchQuery.value)
  }, 200)
}

const closeSearch = () => {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
}

const router = useRouter()
const goToProduct = (id) => {
  closeSearch()
  router.push(`/shop/${id}`)
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (searchRef.value && !searchRef.value.contains(e.target)) {
      showSearch.value = false
    }
  })
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 gap-2 sm:gap-6 lg:gap-8">
        
        <!-- Hamburger Menu (Mobile) -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Logo -->
        <NuxtLink to="/" @click="mobileMenuOpen = false" class="shrink-0 text-xl sm:text-2xl font-bold tracking-tight text-green-800 dark:text-green-400 hover:opacity-80 transition-opacity">
          SaSaShop
        </NuxtLink>

        <!-- Nav Links (Desktop) -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :exact="link.to === '/'"
            class="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            active-class="!text-green-800 dark:!text-green-400 bg-green-50 dark:bg-green-900/20"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Search -->
        <div ref="searchRef" class="relative w-full max-w-[140px] sm:max-w-xs ml-auto">
          <div
            class="flex items-center cursor-text border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-full px-3 sm:px-4 h-9 sm:h-10 gap-2 hover:border-green-500 dark:hover:border-green-500 focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-500 transition-all duration-200"
            @click="showSearch = true"
          >
            <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-if="showSearch"
              v-model="searchQuery"
              @input="onSearchInput"
              @keydown.escape="closeSearch"
              autofocus
              placeholder="Search..."
              class="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-gray-900 dark:text-gray-100 w-full"
            />
            <span v-else class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">Search...</span>
          </div>

          <!-- Search Dropdown -->
          <Transition name="fade-down">
            <div
              v-if="showSearch && searchQuery"
              class="absolute top-12 -right-4 sm:right-0 sm:left-0 w-screen sm:w-auto max-w-sm sm:max-w-none bg-white dark:bg-gray-800 border-b sm:border border-gray-200 dark:border-gray-700 sm:rounded-xl shadow-xl overflow-hidden z-50"
            >
              <div v-if="searchResults.length === 0" class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                No products found for "{{ searchQuery }}"
              </div>
              <button
                v-for="result in searchResults.slice(0, 6)"
                :key="result.id"
                @click="goToProduct(result.id)"
                class="w-full flex items-center px-4 py-2.5 gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-left"
              >
                <img :src="result.img" :alt="result.name" class="w-10 h-10 rounded-lg object-cover shrink-0" />
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{{ result.name }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{{ result.category }} &middot; ${{ result.price }}</p>
                </div>
              </button>
            </div>
          </Transition>
        </div>

        <!-- Action Icons -->
        <div class="flex items-center gap-1 sm:gap-2 shrink-0">
          
          <!-- Wishlist -->
          <NuxtLink to="/wishlist" class="hidden sm:flex relative p-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="wishlistCount > 0" class="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
              {{ wishlistCount }}
            </span>
          </NuxtLink>

          <!-- Cart -->
          <NuxtLink to="/cart" class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartCount > 0" class="absolute top-0 right-0 bg-green-600 text-white text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
              {{ cartCount }}
            </span>
          </NuxtLink>

          <!-- Dark Mode Toggle -->
          <button @click="toggleTheme" class="hidden sm:flex p-2 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200" :title="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'">
            <svg v-if="theme === 'light'" class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- User / Login -->
          <NuxtLink to="/login" class="p-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </NuxtLink>

        </div>
      </nav>
    </div>

    <!-- Mobile Navigation Menu Dropdown -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-y-auto max-h-[calc(100vh-64px)] z-40">
        <div class="px-4 py-4 flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="mobileMenuOpen = false"
            :exact="link.to === '/'"
            class="px-4 py-3 rounded-xl text-base font-bold text-gray-700 dark:text-gray-200 hover:text-green-800 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
            active-class="!text-green-800 dark:!text-green-400 bg-green-50 dark:bg-green-900/20"
          >
            {{ link.label }}
          </NuxtLink>
          
          <div class="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>
          
          <div class="flex items-center justify-around py-2">
            <!-- Mobile Wishlist -->
            <NuxtLink to="/wishlist" @click="mobileMenuOpen = false" class="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 rounded-lg transition-colors duration-200">
              <div class="relative">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span v-if="wishlistCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold min-w-[16px] h-4 rounded-full flex items-center justify-center px-1">
                  {{ wishlistCount }}
                </span>
              </div>
              <span class="text-xs font-medium">Wishlist</span>
            </NuxtLink>
            
            <!-- Mobile Theme Toggle -->
            <button @click="toggleTheme" class="flex flex-col items-center gap-1 p-2 text-gray-600 dark:text-gray-300 hover:text-green-800 dark:hover:text-green-400 rounded-lg transition-colors duration-200">
              <svg v-if="theme === 'light'" class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span class="text-xs font-medium">Theme</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-down-enter-active, .fade-down-leave-active { transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
.fade-down-enter-from { opacity: 0; transform: translateY(-8px); }
.fade-down-leave-to { opacity: 0; transform: translateY(-8px); }

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-down-enter-from { opacity: 0; transform: translateY(-10px); }
.slide-down-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
>