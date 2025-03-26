<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-secondary-900 to-secondary-700 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <img src="@/images/xoi-xeo.jpg" class="w-full h-full object-cover" alt="Xôi Xéo Background">
      </div>
      <div class="container relative z-10">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-shadow-md">Liên Hệ Với Chúng Tôi</h1>
          <p class="text-lg md:text-xl mb-8 text-shadow-sm">Hãy cho chúng tôi biết bạn cần gì, chúng tôi luôn sẵn sàng phục vụ bạn</p>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-16 bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-secondary-800 mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="name" class="block text-gray-700 mb-2">Họ tên</label>
                  <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="Nhập họ tên của bạn">
                </div>
                <div>
                  <label for="email" class="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="email@example.com">
                </div>
              </div>
              <div class="mb-4">
                <label for="subject" class="block text-gray-700 mb-2">Tiêu đề</label>
                <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="Tiêu đề tin nhắn">
              </div>
              <div class="mb-6">
                <label for="message" class="block text-gray-700 mb-2">Nội dung</label>
                <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent" placeholder="Nhập nội dung tin nhắn của bạn"></textarea>
              </div>
              <button type="submit" class="w-full bg-primary-500 text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors duration-300 font-medium">Gửi tin nhắn</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold text-secondary-800 mb-6">Thông tin liên hệ</h2>
            <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div class="flex items-start mb-6">
                <div class="flex-shrink-0 bg-primary-100 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-secondary-800 mb-1">Địa chỉ</h3>
                  <p class="text-gray-600">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div class="flex items-start mb-6">
                <div class="flex-shrink-0 bg-primary-100 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-secondary-800 mb-1">Điện thoại</h3>
                  <p class="text-gray-600">028 1234 5678</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-100 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium text-secondary-800 mb-1">Email</h3>
                  <p class="text-gray-600">info@xoixeo.vn</p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-lg font-medium text-secondary-800 mb-4">Giờ mở cửa</h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span class="text-gray-600">Thứ hai - Thứ sáu:</span>
                  <span class="font-medium">6:00 - 22:00</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600">Thứ bảy - Chủ nhật:</span>
                  <span class="font-medium">6:00 - 23:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-12 bg-white">
      <div class="container">
        <h2 class="text-2xl font-bold text-secondary-800 mb-6 text-center">Vị trí của chúng tôi</h2>
        <div class="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="@/images/Resize of Xôi Xéo.jpg" alt="Xôi Xéo Location" class="w-full h-full object-cover opacity-50" />
            <div class="absolute inset-0 bg-primary-800 opacity-60"></div>
            <div class="absolute text-center text-white p-8">
              <h3 class="text-2xl font-bold mb-4">Bản đồ đang tải...</h3>
              <p class="max-w-md mx-auto">Đến thăm cửa hàng của chúng tôi để thưởng thức những món xôi xéo ngon nhất!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.text-shadow-md {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style> 