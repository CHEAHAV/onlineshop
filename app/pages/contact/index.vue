<template>
  <div class="min-h-screen bg-white transition-colors dark:bg-[#0f1117] pt-8 md:pt-14 pb-16">
    <!-- Header Section -->
    <section class="text-center px-4 mb-10 md:mb-14">
      <div class="inline-flex items-center justify-center mb-6">
        <span class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
          style="background-color: #fdf2e9; color: #a35d29;">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          WE'RE HERE TO HELP
        </span>
      </div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight" :style="{ color: 'var(--text-primary)' }">
        Get in Touch
      </h1>
      <p class="text-[15px] mx-auto leading-relaxed text-center" :style="{ color: 'var(--text-secondary)' }">
        Have a question about our products or an existing order? Our team is ready to
        assist you with anything you need to make your SaSaShop experience perfect.
      </p>
    </section>

    <!-- Main Content Container -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
      <div class="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-6 items-start">
        
        <!-- Left Column: Contact Info Cards -->
        <div class="flex flex-col gap-4">
          <div v-for="info in contactInfos" :key="info.title" 
            class="rounded-2xl p-6 md:p-7 transition-transform hover:-translate-y-1"
            style="background-color: #f8f9fa;"
            :class="theme === 'dark' ? 'dark:bg-[#1a1d27] dark:hover:bg-[#1e212d]' : ''">
            
            <!-- Icon -->
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style="background-color: #e8eae8;"
              :class="theme === 'dark' ? 'dark:bg-[#252836]' : ''">
              <component :is="info.iconComponent" class="w-5 h-5" style="color: #4b5d49;" :class="theme === 'dark' ? 'dark:text-green-400' : ''" />
            </div>

            <!-- Text -->
            <h3 class="text-[17px] font-bold mb-2" :style="{ color: 'var(--text-primary)' }">
              {{ info.title }}
            </h3>
            <p class="text-[14px] leading-relaxed" :style="{ color: 'var(--text-secondary)' }" v-html="info.content"></p>
            <p v-if="info.sub" class="text-[13px] mt-1.5" :style="{ color: 'var(--text-muted)' }">
              {{ info.sub }}
            </p>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_40px_rgb(0,0,0,0.03)] border border-gray-100"
          :class="theme === 'dark' ? 'dark:bg-[#1a1d27] dark:border-gray-800 dark:shadow-none' : ''">
          
          <h2 class="text-2xl font-bold mb-8" :style="{ color: 'var(--text-primary)' }">
            Send us a Message
          </h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Full Name -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest mb-2" :style="{ color: 'var(--text-muted)' }">
                  Full Name
                </label>
                <input v-model="form.name" type="text" placeholder="Jane Doe" required
                  class="w-full rounded-xl px-4 py-3.5 text-[14px] outline-none transition-all"
                  style="background-color: #f8f9fa;"
                  :class="[
                    theme === 'dark' ? 'dark:bg-[#252836] dark:text-white dark:focus:ring-1 dark:focus:ring-green-500' : 'focus:ring-1 focus:ring-[#4b5d49] text-gray-900'
                  ]" />
              </div>
              <!-- Email Address -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest mb-2" :style="{ color: 'var(--text-muted)' }">
                  Email Address
                </label>
                <input v-model="form.email" type="email" placeholder="jane@example.com" required
                  class="w-full rounded-xl px-4 py-3.5 text-[14px] outline-none transition-all"
                  style="background-color: #f8f9fa;"
                  :class="[
                    theme === 'dark' ? 'dark:bg-[#252836] dark:text-white dark:focus:ring-1 dark:focus:ring-green-500' : 'focus:ring-1 focus:ring-[#4b5d49] text-gray-900'
                  ]" />
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest mb-2" :style="{ color: 'var(--text-muted)' }">
                Subject
              </label>
              <div class="relative">
                <select v-model="form.subject"
                  class="w-full rounded-xl px-4 py-3.5 text-[14px] outline-none transition-all appearance-none cursor-pointer"
                  style="background-color: #f8f9fa;"
                  :class="[
                    theme === 'dark' ? 'dark:bg-[#252836] dark:text-white dark:focus:ring-1 dark:focus:ring-green-500' : 'focus:ring-1 focus:ring-[#4b5d49] text-gray-900'
                  ]">
                  <option>General Inquiry</option>
                  <option>Order Issue</option>
                  <option>Returns & Refunds</option>
                  <option>Product Question</option>
                  <option>Other</option>
                </select>
                <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest mb-2" :style="{ color: 'var(--text-muted)' }">
                Message
              </label>
              <textarea v-model="form.message" placeholder="How can we help you today?" rows="4" required
                class="w-full rounded-xl px-4 py-3.5 text-[14px] outline-none transition-all resize-none"
                style="background-color: #f8f9fa;"
                :class="[
                  theme === 'dark' ? 'dark:bg-[#252836] dark:text-white dark:focus:ring-1 dark:focus:ring-green-500' : 'focus:ring-1 focus:ring-[#4b5d49] text-gray-900'
                ]"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-full rounded-xl py-3.5 text-[14px] font-bold text-white transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              style="background-color: #4b5d49;"
              :class="theme === 'dark' ? 'dark:bg-green-600 dark:hover:bg-green-700' : 'hover:bg-[#3f4f3d]'">
              Send Message
              <svg class="w-4 h-4 translate-y-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 12h14" />
              </svg>
            </button>

            <!-- Success Message -->
            <Transition name="fade">
              <div v-if="submitted" class="flex items-center gap-2.5 p-3.5 rounded-xl bg-green-50 text-green-800 text-[13px] font-medium border border-green-100"
                :class="theme === 'dark' ? 'dark:bg-green-900/30 dark:border-green-800/50 dark:text-green-400' : ''">
                <svg class="w-5 h-5 shrink-0 text-green-600" :class="theme === 'dark' ? 'dark:text-green-400' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Message sent successfully! We'll be in touch soon.
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Banner Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full h-90 md:h-100 rounded-3xl overflow-hidden relative" style="background-color: #eef1ec;">
        <!-- Clean minimal architectural map image -->
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80" 
             alt="Office location map" 
             class="w-full h-full object-cover opacity-90 saturate-[0.6] mix-blend-multiply"
             :class="theme === 'dark' ? 'dark:mix-blend-normal dark:opacity-60 dark:saturate-100' : ''" />
        
        <!-- Floating Address Card -->
        <div class="absolute bottom-5 left-5 md:bottom-8 md:left-8 bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 md:p-6"
          :class="theme === 'dark' ? 'dark:bg-[#1a1d27] dark:shadow-none dark:border dark:border-gray-800' : ''">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style="background-color: #e8eae8;"
              :class="theme === 'dark' ? 'dark:bg-[#252836]' : ''">
              <svg class="w-5 h-5" style="color: #4b5d49;" :class="theme === 'dark' ? 'dark:text-green-400' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 class="text-[15px] font-bold" :style="{ color: 'var(--text-primary)' }">SaSaShop Headquarters</h4>
              <p class="text-[12px] mt-1 mb-2.5 leading-relaxed" :style="{ color: 'var(--text-secondary)' }">
                Come say hello! We love meeting our community.
              </p>
              <a href="https://maps.google.com" target="_blank" 
                class="text-[12px] font-bold underline transition-colors"
                style="color: #4b5d49;"
                :class="theme === 'dark' ? 'dark:text-green-400 dark:hover:text-green-300' : 'hover:text-[#3f4f3d]'">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })
const { theme } = useTheme()

// Heroicons SVG functional components
const PinIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
    ])
  }
}

const PhoneIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
    ])
  }
}

const MailIcon = {
  render() {
    return h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ])
  }
}

const submitted = ref(false)
const form = reactive({ name: '', email: '', subject: 'General Inquiry', message: '' })

const contactInfos = [
  { iconComponent: PinIcon, title: 'Visit Our Office', content: '123 Artisan Way, Nordic District<br>Stockholm, Sweden 112 34' },
  { iconComponent: PhoneIcon, title: 'Call Us', content: '+46 8 123 456 78', sub: 'Mon - Fri: 9:00 AM - 6:00 PM CET' },
  { iconComponent: MailIcon, title: 'Email Support', content: 'hello@SaSaShop.com', sub: 'Average response time: 2 hours' },
]

const handleSubmit = () => {
  if (!form.name || !form.email || !form.message) return
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { name: '', email: '', message: '', subject: 'General Inquiry' })
  }, 4000)
}

useHead({ title: 'Contact Us – SaSaShop' })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>