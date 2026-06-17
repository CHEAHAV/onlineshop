<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-16">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-10">
        <h1 class="text-3xl font-black text-green-800 dark:text-green-400 tracking-tight">SaSaShop</h1>
        <p class="text-sm mt-1.5 text-gray-500 dark:text-gray-400 font-medium">Your one-stop shop</p>
      </div>

      <!-- Step Indicators -->
      <div class="flex items-center justify-center gap-2 mb-10">
        <div v-for="(s, i) in steps" :key="i" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
            :class="[
              step >= i + 1 ? 'bg-green-800 text-white dark:bg-green-700 shadow-md' : 'bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-200 dark:border-gray-700'
            ]"
          >
            <svg v-if="step > i + 1" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="text-xs font-bold transition-colors duration-300" 
            :class="step === i + 1 ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'">{{ s }}</span>
          <div v-if="i < steps.length - 1" class="w-8 h-1 rounded-full transition-colors duration-300" 
            :class="step > i + 1 ? 'bg-green-800 dark:bg-green-700' : 'bg-gray-200 dark:bg-gray-800'"></div>
        </div>
      </div>

      <!-- Card -->
      <div class="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 sm:p-10 shadow-xl dark:shadow-2xl">

        <!-- Step 1: Email -->
        <div v-if="step === 1">
          <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Welcome back</h2>
          <p class="text-sm mb-8 text-gray-500 dark:text-gray-400 font-medium">Enter your email to get started</p>
          <div class="space-y-5">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400">Email Address</label>
              <input v-model="email" type="email" id="login-email" placeholder="you@example.com"
                @keydown.enter="goToStep2"
                class="w-full border rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                :class="emailError ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-green-600 dark:focus:border-green-500 focus:ring-1 focus:ring-green-600 dark:focus:ring-green-500'"
              />
              <p v-if="emailError" class="text-red-500 font-medium text-xs mt-1.5 flex items-center gap-1"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {{ emailError }}</p>
            </div>
            <button @click="goToStep2" id="login-next"
              class="w-full bg-green-800 text-white font-bold py-3.5 rounded-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all active:scale-[0.98] shadow-sm">
              Continue
            </button>
            <div class="relative flex items-center gap-4 py-2">
              <div class="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
              <span class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">or</span>
              <div class="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
            </div>
            <button class="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm">
              <svg class="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
          </div>
          <p class="text-center text-sm mt-8 text-gray-500 dark:text-gray-400 font-medium">
            Don't have an account?
            <NuxtLink to="/login" class="text-green-700 dark:text-green-500 font-bold hover:text-green-600 dark:hover:text-green-400 transition-colors ml-1">Sign up free</NuxtLink>
          </p>
        </div>

        <!-- Step 2: Password -->
        <div v-else-if="step === 2">
          <button @click="step = 1" class="flex items-center gap-1.5 text-sm font-bold mb-6 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back
          </button>
          <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Enter your password</h2>
          <div class="flex items-center gap-2 mb-8">
            <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Signing in as</span>
            <span class="text-sm font-bold bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">{{ email }}</span>
          </div>
          <div class="space-y-5">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400">Password</label>
              <div class="relative">
                <input v-model="password" :type="showPassword ? 'text' : 'password'" id="login-password"
                  placeholder="••••••••"
                  @keydown.enter="handleLogin"
                  class="w-full border rounded-xl px-4 py-3.5 text-sm outline-none transition-colors pr-16 font-mono"
                  :class="pwError ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-green-600 dark:focus:border-green-500 focus:ring-1 focus:ring-green-600 dark:focus:ring-green-500'"
                />
                <button @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold px-2 py-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  {{ showPassword ? 'HIDE' : 'SHOW' }}
                </button>
              </div>
              <p v-if="pwError" class="text-red-500 font-medium text-xs mt-1.5 flex items-center gap-1"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> {{ pwError }}</p>
            </div>
            <div class="flex justify-between items-center py-1">
              <label class="flex items-center gap-2.5 text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-600 dark:focus:ring-green-500 dark:ring-offset-gray-900" /> Remember me
              </label>
              <a href="#" class="text-sm text-green-700 dark:text-green-500 hover:text-green-600 dark:hover:text-green-400 font-bold transition-colors">Forgot password?</a>
            </div>
            <button @click="handleLogin" id="login-submit"
              class="w-full bg-green-800 text-white font-bold py-3.5 rounded-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all active:scale-[0.98] shadow-sm">
              Sign In
            </button>
          </div>
        </div>

        <!-- Step 3: Success -->
        <div v-else class="text-center py-8">
          <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-green-200 dark:border-green-800/50">
            <svg class="w-10 h-10 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 class="text-3xl font-black mb-3 text-gray-900 dark:text-gray-100">Welcome back!</h2>
          <p class="text-sm mb-8 text-gray-500 dark:text-gray-400 font-medium">You're successfully logged in. Redirecting to shop...</p>
          <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 mb-8 overflow-hidden shadow-inner border border-gray-200 dark:border-gray-700">
            <div class="bg-green-600 dark:bg-green-500 h-2 rounded-full animate-progress"></div>
          </div>
          <NuxtLink to="/shop" class="inline-flex items-center justify-center w-full gap-2 bg-green-800 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-all shadow-sm">
            Go to Shop →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'default' })

const { theme } = useTheme()
const router = useRouter()
const step = ref(1)
const email = ref('')
const password = ref('')
const emailError = ref('')
const pwError = ref('')
const showPassword = ref(false)
const steps = ['Email', 'Password', 'Done']

const goToStep2 = () => {
  emailError.value = ''
  if (!email.value || !email.value.includes('@')) {
    emailError.value = 'Please enter a valid email address'
    return
  }
  step.value = 2
}

const handleLogin = () => {
  pwError.value = ''
  if (!password.value || password.value.length < 6) {
    pwError.value = 'Password must be at least 6 characters'
    return
  }
  step.value = 3
  setTimeout(() => router.push('/shop'), 3000)
}

useHead({ title: 'Sign In – SaSaShop' })
</script>

<style scoped>
@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}
.animate-progress { animation: progress 3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
</style>
