<template>
  <div>
    <!-- Header -->
    <section class="text-center py-14 px-6">
      <h1 class="text-4xl font-bold mb-4" :style="{ color: 'var(--text-primary)' }">Shop by Category</h1>
      <p class="text-sm max-w-md mx-auto leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
        Discover our carefully curated collections, designed to bring modern minimalism
        and tactile warmth to every aspect of your lifestyle.
      </p>
    </section>

    <!-- Category Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-4">

      <!-- Row 1 -->
      <div class="flex gap-4">
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border flex-1 transition-all hover:shadow-lg"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Fashion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Fashion</h2>
          </div>
        </NuxtLink>
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border flex-1 transition-all hover:shadow-lg"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Home & Kitchen" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Home & Kitchen</h2>
          </div>
        </NuxtLink>
      </div>

      <!-- Row 2 -->
      <div class="flex gap-4">
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border transition-all hover:shadow-lg" style="flex: 0 0 calc(33% - 8px)"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-52">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" alt="Beauty" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Beauty</h2>
          </div>
        </NuxtLink>
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border flex-1 transition-all hover:shadow-lg"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-52">
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="Electronics" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Electronics</h2>
          </div>
        </NuxtLink>
      </div>

      <!-- Row 3 -->
      <div class="flex gap-4">
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border flex-1 transition-all hover:shadow-lg"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" alt="Sports" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Sports</h2>
          </div>
        </NuxtLink>
        <NuxtLink to="/shop" class="group rounded-2xl overflow-hidden border flex-1 transition-all hover:shadow-lg"
          :style="{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }">
          <div class="overflow-hidden h-64">
            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80" alt="Accessories" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="px-5 py-4">
            <h2 class="text-lg font-bold" :style="{ color: 'var(--text-primary)' }">Accessories</h2>
          </div>
        </NuxtLink>
      </div>

    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

useHead({
  title: 'Shop by Category – SaSaShop',
  meta: [{ name: 'description', content: 'Browse all product categories at SaSaShop – Fashion, Electronics, Home & Kitchen, Beauty, Sports, and Accessories.' }]
})
</script>