<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center">
            <img src="@/images/logo.jpg" alt="Xôi Xéo A Phùng" class="w-12 h-12 rounded-full object-cover" />
            <span class="ml-2 text-xl font-bold text-primary-600">Xôi Xéo A Phùng</span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li>
              <RouterLink to="/" class="text-gray-600 hover:text-primary-600 transition-colors" :class="{ 'text-primary-600 font-medium': $route.name === 'home' }">
                Trang chủ
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/menu" class="text-gray-600 hover:text-primary-600 transition-colors" :class="{ 'text-primary-600 font-medium': $route.name === 'menu' }">
                Thực đơn
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="text-gray-600 hover:text-primary-600 transition-colors" :class="{ 'text-primary-600 font-medium': $route.name === 'about' }">
                Về chúng tôi
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-600 hover:text-primary-600 transition-colors" :class="{ 'text-primary-600 font-medium': $route.name === 'contact' }">
                Liên hệ
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Right Navigation: Cart & Mobile Menu Button -->
        <div class="flex items-center">
          <RouterLink to="/cart" class="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartCount > 0" class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
              {{ cartCount }}
            </span>
          </RouterLink>

          <!-- Mobile menu button -->
          <button @click="toggleMobileMenu" class="p-2 ml-4 text-gray-600 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!mobileMenuOpen">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <ul class="py-3 space-y-2">
          <li>
            <RouterLink to="/" class="block py-2 text-gray-600 hover:text-primary-600" :class="{ 'text-primary-600 font-medium': $route.name === 'home' }">
              Trang chủ
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/menu" class="block py-2 text-gray-600 hover:text-primary-600" :class="{ 'text-primary-600 font-medium': $route.name === 'menu' }">
              Thực đơn
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="block py-2 text-gray-600 hover:text-primary-600" :class="{ 'text-primary-600 font-medium': $route.name === 'about' }">
              Về chúng tôi
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="block py-2 text-gray-600 hover:text-primary-600" :class="{ 'text-primary-600 font-medium': $route.name === 'contact' }">
              Liên hệ
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/store';

const route = useRoute();
const cartStore = useCartStore();
const { count: cartCount } = storeToRefs(cartStore);
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script> 