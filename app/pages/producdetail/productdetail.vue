<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">

    <!-- Breadcrumb -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div class="flex items-center gap-2 text-sm text-gray-400">
        <NuxtLink to="/" class="hover:text-gray-700">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/category" class="hover:text-gray-700">Electronics</NuxtLink>
        <span>/</span>
        <span class="text-gray-700">Wireless Headphones</span>
      </div>
    </section>

    <!-- Product Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="grid grid-cols-2 gap-12 items-start">

        <!-- Left: Images -->
        <div class="flex gap-3">
          <!-- Thumbnails -->
          <div class="flex flex-col gap-2">
            <div
              v-for="(img, i) in product.images" :key="i"
              @click="activeImg = i"
              class="w-14 h-14 rounded-lg border-2 overflow-hidden cursor-pointer transition-colors"
              :class="activeImg === i ? 'border-gray-900' : 'border-gray-100'"
            >
              <img :src="img" :alt="`Product view ${i+1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Main Image -->
          <div class="flex-1 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-100">
            <img :src="product.images[activeImg]" alt="Product" class="w-full h-full object-cover aspect-square" />
          </div>
        </div>

        <!-- Right: Info -->
        <div>
          <span class="inline-block bg-green-900 text-white text-xs font-medium px-3 py-1 rounded-md mb-4">Best Seller</span>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <span class="text-yellow-400 text-sm">★★★★★</span>
            <span class="text-sm text-gray-500">({{ product.reviews }} verified reviews)</span>
          </div>

          <!-- Price -->
          <div class="flex items-center gap-3 mb-4">
            <span class="text-3xl font-bold text-gray-900 dark:text-gray-100">${{ product.price }}</span>
            <span class="text-sm text-gray-400 line-through">${{ product.original }}</span>
            <span class="text-sm font-medium text-red-500">Save ${{ (parseFloat(product.original) - parseFloat(product.price)).toFixed(2) }}</span>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-500 leading-relaxed mb-6">{{ product.description }}</p>

          <!-- Color -->
          <div class="mb-5">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Color: <span class="text-gray-700">{{ selectedColor }}</span></p>
            <div class="flex gap-2">
              <button
                v-for="color in product.colors" :key="color.name"
                @click="selectedColor = color.name"
                class="w-8 h-8 rounded-full border-2 transition-all"
                :style="`background: ${color.hex}`"
                :class="selectedColor === color.name ? 'border-gray-900 scale-110' : 'border-transparent'"
                :title="color.name"
              ></button>
            </div>
          </div>

          <!-- Shipping -->
          <div class="mb-6">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Shipping</p>
            <div class="flex items-center gap-3 border border-gray-100 rounded-lg px-4 py-3">
              <span class="text-lg">🚚</span>
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">Free Express Shipping</p>
                <p class="text-xs text-gray-400">Estimated delivery: Oct 24 - Oct 26</p>
              </div>
            </div>
          </div>

          <!-- Quantity + Add to Cart -->
          <div class="flex gap-3 mb-3">
            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button @click="qty > 1 && qty--" class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-800 transition-colors text-lg">−</button>
              <span class="px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 min-w-8 text-center">{{ qty }}</span>
              <button @click="qty++" class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-800 transition-colors text-lg">+</button>
            </div>
            <button class="flex-1 bg-green-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
              🛒 Add to Cart
            </button>
          </div>

          <!-- Wishlist -->
          <button class="w-full border border-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-lg hover:bg-gray-50 dark:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            ♡ Add to Wishlist
          </button>
        </div>

      </div>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8">Craftsmanship Meets Technology</h2>

      <div class="grid grid-cols-3 gap-4">

        <!-- Large feature: Noise Cancellation -->
        <div class="col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100">
          <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Hybrid Active Noise Cancellation</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-5">
            Our proprietary dual-microphone system monitors environmental noise and counter-frequencies to create a sanctuary of silence, allowing you to focus on what matters most.
          </p>
          <div class="rounded-xl overflow-hidden h-40 bg-gray-800">
            <img src="https://picsum.photos/seed/headphones-detail/600/400" alt="Noise cancellation tech" class="w-full h-full object-cover opacity-80" />
          </div>
        </div>

        <!-- Battery -->
        <div class="bg-amber-50 rounded-2xl p-6 border border-amber-100 flex flex-col items-center justify-center text-center">
          <div class="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-amber-200 flex items-center justify-center text-xl mb-4">⚡</div>
          <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">40h Battery</h3>
          <p class="text-xs text-gray-500 leading-relaxed">A full charge in 90 minutes. 5 minutes of quick charge gives you 3 hours of listening time.</p>
        </div>

        <!-- Ethical Sourcing -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100">
          <div class="text-xl mb-3">🌿</div>
          <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Ethical Sourcing</h3>
          <p class="text-xs text-gray-500 leading-relaxed">The vegan leather and recycled aluminum components are sourced from partners committed to zero-waste production cycles.</p>
        </div>

        <!-- Hi-Res Audio -->
        <div class="col-span-2 bg-green-900 rounded-2xl p-6 text-white">
          <h3 class="text-base font-semibold text-white mb-2">Hi-Res Audio Certified</h3>
          <p class="text-sm text-green-200 leading-relaxed">Engineered with custom-designed 40mm dynamic drivers that deliver a wide frequency range and precise acoustic response.</p>
        </div>

      </div>
    </section>

    <!-- Reviews -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="flex items-start justify-between mb-6">
        <div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Community Feedback</h2>
          <div class="flex items-center gap-2">
            <span class="text-4xl font-bold text-gray-900 dark:text-gray-100">4.8</span>
            <div>
              <div class="text-yellow-400 text-sm">★★★★★</div>
              <p class="text-xs text-gray-400">Based on 156 reviews</p>
            </div>
          </div>
        </div>
        <button class="border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50 dark:bg-gray-800 transition-colors">
          Write a Review
        </button>
      </div>

      <div class="grid grid-cols-3 gap-4 mb-6">
        <div v-for="review in reviews" :key="review.name" class="bg-white dark:bg-gray-900 border border-gray-100 rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                <img :src="review.avatar" :alt="review.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900 dark:text-gray-100">{{ review.name }}</p>
                <p class="text-[10px] text-gray-400">Verified Buyer • {{ review.date }}</p>
              </div>
            </div>
            <span class="text-yellow-400 text-xs">★★★★★</span>
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic">"{{ review.text }}"</p>
        </div>
      </div>

      <div class="text-center">
        <button class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 font-medium flex items-center gap-2 mx-auto">
          View all 156 reviews →
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-900 border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-4 gap-8">
        <div>
          <h3 class="text-gray-900 dark:text-gray-100 font-bold text-lg mb-2">SaSaShop</h3>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">© 2026 SaSaShop. All rights reserved. Your one-stop shop for quality products at the best prices.</p>
          <div class="flex gap-3">
            <button class="text-gray-400 hover:text-gray-700 text-sm">🌐</button>
            <button class="text-gray-400 hover:text-gray-700 text-sm">@</button>
          </div>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm text-gray-500">
            <li><NuxtLink to="/" class="hover:text-gray-900 dark:text-gray-100">Home</NuxtLink></li>
            <li><NuxtLink to="/shop" class="hover:text-gray-900 dark:text-gray-100">Shop</NuxtLink></li>
            <li><NuxtLink to="/category" class="hover:text-gray-900 dark:text-gray-100">Categories</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">Customer Service</h4>
          <ul class="space-y-2 text-sm text-gray-500">
            <li><a href="#" class="hover:text-gray-900 dark:text-gray-100">Track Order</a></li>
            <li><a href="#" class="hover:text-gray-900 dark:text-gray-100">Returns & Refunds</a></li>
            <li><a href="#" class="hover:text-gray-900 dark:text-gray-100">Shipping Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">Newsletter</h4>
          <p class="text-sm text-gray-500 mb-4">Subscribe for the latest arrivals and exclusive deals.</p>
          <div class="flex gap-2">
            <input type="email" placeholder="Email address" class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-400" />
            <button class="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">Join</button>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const activeImg = ref(0)
const qty = ref(1)
const selectedColor = ref('Oatmeal Mist')

const product = {
  name: 'Acoustic Pure Elite Wireless',
  price: '249.99',
  original: '299.99',
  reviews: 156,
  description: 'Experience studio-quality sound with our most advanced wireless headphones. Featuring hybrid active noise cancellation and up to 40 hours of battery life. Designed for those who appreciate the intersection of natural beauty and technological precision.',
  images: [
    'https://picsum.photos/seed/headphones1/600/600',
    'https://picsum.photos/seed/headphones2/600/600',
    'https://picsum.photos/seed/headphones3/600/600',
  ],
  colors: [
    { name: 'Oatmeal Mist', hex: '#e8ddd0' },
    { name: 'Forest Green', hex: '#3d5a4a' },
    { name: 'Midnight', hex: '#2c2c2c' },
  ],
}

const reviews = [
  {
    name: 'John D.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    date: '2 weeks ago',
    text: 'The sound clarity is unlike anything I\'ve heard before in this price range. The noise cancellation is perfect for my daily train commute.',
  },
  {
    name: 'Sarah M.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    date: '1 month ago',
    text: 'Beautiful design! They look even better in person. The battery life is actually as long as they claim, which is rare these days.',
  },
  {
    name: 'Michael T.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    date: '3 days ago',
    text: 'Highly recommend SaSaShop! The delivery was faster than expected and the product packaging was very eco-friendly and thoughtful.',
  },
]
</script>