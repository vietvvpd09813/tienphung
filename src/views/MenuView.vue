<template>
  <div class="menu-page">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-secondary-900 to-secondary-700 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <img src="@/images/xoi-xeo-da-nang-3.jpeg" class="w-full h-full object-cover" alt="Xôi Xéo Background">
      </div>
      <div class="container relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-shadow-md">Thực Đơn Của Chúng Tôi</h1>
          <p class="text-lg md:text-xl mb-8 text-shadow-sm">Khám phá những món xôi ngon đậm đà hương vị truyền thống</p>
        </div>
      </div>
    </section>

    <!-- Menu Categories Section -->
    <section class="py-12 bg-gray-50">
      <div class="container">
        <div class="flex flex-wrap justify-center mb-12 gap-4">
          <button class="px-6 py-2 bg-primary-500 text-white rounded-full shadow-md hover:bg-primary-600 transition-colors">
            Tất cả
          </button>
          <button class="px-6 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            Xôi Xéo
          </button>
          <button class="px-6 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            Xôi Gà
          </button>
          <button class="px-6 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            Xôi Đặc Biệt
          </button>
          <button class="px-6 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            Đồ Uống
          </button>
        </div>

        <!-- Menu Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Menu Item 1 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/xoi.jpg" alt="Xôi Xéo Truyền Thống" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Bán chạy
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Xéo Truyền Thống</h3>
                <span class="text-primary-500 font-bold">35.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi nếp thơm dẻo, đậu xanh béo ngậy, hành khô phi vàng thơm, mỡ hành và ruốc thịt heo.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <!-- Menu Item 2 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/xoi2.jpg" alt="Xôi Gà" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Phổ biến
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Gà</h3>
                <span class="text-primary-500 font-bold">45.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi nếp kết hợp với thịt gà ta thơm ngon, rau răm, hành phi và nước mắm chua ngọt đặc biệt.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <!-- Menu Item 3 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/xoi-xeo-bi-quyet-thanh-cong-nau-xoi-deo-thom-ngon-tai-nha_15.jpg" alt="Xôi Xéo Đặc Biệt" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Xéo Đặc Biệt</h3>
                <span class="text-primary-500 font-bold">50.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi xéo thơm ngon với lớp đậu xanh dày, thêm chà bông, ruốc, thịt kho, lạp xưởng và trứng cút.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <!-- Menu Item 4 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/xoi-xeo-1_1632244162.webp" alt="Xôi Mặn Thập Cẩm" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Mặn Thập Cẩm</h3>
                <span class="text-primary-500 font-bold">55.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi trắng với thịt kho tàu, chả lụa, lạp xưởng, trứng cút và dưa chua ăn kèm.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <!-- Menu Item 5 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/Quan-xoi-xeo-ngon-Ha-Noi-14.jpg" alt="Xôi Đậu Xanh" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Đậu Xanh</h3>
                <span class="text-primary-500 font-bold">30.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi đậu xanh truyền thống, mềm dẻo, thơm béo với lớp đậu xanh nghiền nhuyễn bên trên.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          <!-- Menu Item 6 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div class="relative h-64 overflow-hidden">
              <img src="@/images/images.jpg" alt="Xôi Vò" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-3">
                <h3 class="text-xl font-bold text-secondary-800">Xôi Vò</h3>
                <span class="text-primary-500 font-bold">35.000đ</span>
              </div>
              <p class="text-gray-600 mb-4">Xôi vò dẻo thơm với đậu xanh nguyên hạt, nước cốt dừa và muối mè thơm ngon.</p>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors w-full">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Combo Deals -->
    <section class="py-16 bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold text-center text-secondary-800 mb-12">Combo Đặc Biệt</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Combo 1 -->
          <div class="bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-md border border-primary-100 flex flex-col md:flex-row gap-6">
            <img src="@/images/xoi.jpg" alt="Family Combo" class="w-full md:w-40 h-40 object-cover rounded-lg shadow-md">
            <div class="flex-1">
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold text-secondary-800">Combo Gia Đình</h3>
                <div class="flex items-center">
                  <span class="text-gray-500 line-through mr-2">220.000đ</span>
                  <span class="text-primary-500 font-bold">180.000đ</span>
                </div>
              </div>
              <p class="text-gray-600 mb-4">Gồm 4 phần xôi tự chọn, 2 ly trà đá và 1 đĩa dưa chua.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Tiết kiệm 18%</span>
                <span class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">Cho 4-5 người</span>
              </div>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                Đặt ngay
              </button>
            </div>
          </div>

          <!-- Combo 2 -->
          <div class="bg-gradient-to-r from-secondary-50 to-white p-6 rounded-lg shadow-md border border-secondary-100 flex flex-col md:flex-row gap-6">
            <img src="@/images/xoi2.jpg" alt="Couple Combo" class="w-full md:w-40 h-40 object-cover rounded-lg shadow-md">
            <div class="flex-1">
              <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-bold text-secondary-800">Combo Đôi</h3>
                <div class="flex items-center">
                  <span class="text-gray-500 line-through mr-2">110.000đ</span>
                  <span class="text-primary-500 font-bold">90.000đ</span>
                </div>
              </div>
              <p class="text-gray-600 mb-4">Gồm 2 phần xôi tự chọn và 2 ly trà đá.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Tiết kiệm 18%</span>
                <span class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">Cho 2 người</span>
              </div>
              <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
                Đặt ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-50">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-secondary-800 mb-4">Bạn muốn đặt hàng cho sự kiện lớn?</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Chúng tôi cung cấp dịch vụ đặt hàng số lượng lớn cho các sự kiện, tiệc và hội nghị. Liên hệ ngay để được tư vấn.</p>
          <RouterLink to="/contact" class="inline-block px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors font-medium">
            Liên hệ ngay
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/store';

const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addItem(product);
};
</script>

<style scoped>
.text-shadow-md {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style> 