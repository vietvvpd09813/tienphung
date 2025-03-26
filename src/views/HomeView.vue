<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative overflow-hidden bg-gray-900 h-[500px] lg:h-[650px]">
      <img 
        src="@/images/xoi-xeo-da-nang-3.jpeg" 
        alt="Xôi Xéo A Phùng" 
        class="absolute inset-0 object-cover w-full h-full opacity-80"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      <div class="relative flex items-center justify-center h-full">
        <div class="container mx-auto px-4 pt-10 text-center">
          <h1 class="text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Xôi Xéo A Phùng
          </h1>
          <p class="max-w-lg mx-auto mt-6 text-xl text-white drop-shadow-md">
            Hương vị truyền thống - Đậm đà quê hương
          </p>
          <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <RouterLink to="/menu" class="btn btn-primary">
              Khám phá thực đơn
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-secondary">
              Liên hệ đặt hàng
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-4">Sản phẩm nổi bật</h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">Những món xôi đặc biệt của chúng tôi được chế biến từ nguyên liệu tươi ngon, theo công thức độc đáo của A Phùng</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Xôi Xéo A Phùng -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="relative h-64">
              <img src="@/images/xoi.jpg" alt="Xôi Xéo A Phùng" class="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900">Xôi Xéo A Phùng</h3>
              <p class="mt-2 text-gray-600">Món xôi truyền thống với đậu xanh và hành phi thơm ngon, mang đậm hương vị quê hương.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-lg font-bold text-primary-600">35.000đ</span>
                <button 
                  @click="addToCart({
                    id: 1,
                    name: 'Xôi Xéo A Phùng',
                    price: 35000,
                    image: '/src/images/xoi.jpg'
                  })"
                  class="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>

          <!-- Xôi Gà -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="relative h-64">
              <img src="@/images/xoi2.jpg" alt="Xôi Gà" class="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900">Xôi Gà A Phùng</h3>
              <p class="mt-2 text-gray-600">Xôi kết hợp với thịt gà luộc thơm ngon, được ướp gia vị đặc biệt, rất bổ dưỡng.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-lg font-bold text-primary-600">45.000đ</span>
                <button 
                  @click="addToCart({
                    id: 2,
                    name: 'Xôi Gà A Phùng',
                    price: 45000,
                    image: '/src/images/xoi2.jpg'
                  })"
                  class="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>

          <!-- Xôi Đậu Đen -->
          <div class="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="relative h-64">
              <img src="@/images/Quan-xoi-xeo-ngon-Ha-Noi-14.jpg" alt="Xôi Đậu Đen" class="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900">Xôi Đậu Đen A Phùng</h3>
              <p class="mt-2 text-gray-600">Xôi đậu đen thơm ngon, dẻo, bùi, có lợi cho sức khỏe và giúp bạn tràn đầy năng lượng.</p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-lg font-bold text-primary-600">30.000đ</span>
                <button 
                  @click="addToCart({
                    id: 3,
                    name: 'Xôi Đậu Đen A Phùng',
                    price: 30000,
                    image: '/src/images/Quan-xoi-xeo-ngon-Ha-Noi-14.jpg'
                  })"
                  class="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <RouterLink to="/menu" class="btn btn-secondary">
            Xem tất cả thực đơn
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-yellow-50">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-4">Tại sao chọn Xôi Xéo A Phùng?</h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">Với niềm đam mê và tâm huyết của A Phùng, chúng tôi mang đến cho bạn những món xôi chất lượng nhất, đậm đà hương vị quê hương</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Reason 1 -->
          <div class="p-6 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">Nguyên liệu tươi sạch</h3>
            <p class="text-gray-600">A Phùng chỉ sử dụng những nguyên liệu tươi ngon và được chọn lọc kỹ càng.</p>
          </div>
          
          <!-- Reason 2 -->
          <div class="p-6 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">Giao hàng nhanh chóng</h3>
            <p class="text-gray-600">Dịch vụ giao hàng tận nơi nhanh chóng và thuận tiện cho khách hàng.</p>
          </div>
          
          <!-- Reason 3 -->
          <div class="p-6 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">Công thức độc đáo</h3>
            <p class="text-gray-600">Công thức làm xôi đặc biệt của A Phùng, tạo nên hương vị khác biệt.</p>
          </div>
          
          <!-- Reason 4 -->
          <div class="p-6 text-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold">Hương vị đặc biệt</h3>
            <p class="text-gray-600">Hương vị đặc trưng của Xôi Xéo A Phùng không thể tìm thấy ở bất kỳ nơi nào khác.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-white">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-4">Khách hàng nói gì về Xôi Xéo A Phùng</h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">Những phản hồi chân thành từ khách hàng là động lực để chúng tôi không ngừng cải thiện chất lượng sản phẩm</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
            </div>
            <p class="mb-4 text-gray-600 italic">"Xôi xéo ở quán A Phùng thực sự ngon, đậu xanh bùi và béo, thơm mùi hành phi. Tôi đã thử nhiều nơi nhưng vẫn thích nhất ở đây."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">Nguyễn Văn A</p>
                <p class="text-sm text-gray-500">Khách hàng thường xuyên</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
            </div>
            <p class="mb-4 text-gray-600 italic">"Dịch vụ giao hàng của A Phùng nhanh, xôi vẫn nóng khi đến tay. Đóng gói cẩn thận và giá cả rất hợp lý. Sẽ tiếp tục ủng hộ!"</p>
            <div class="flex items-center">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">Trần Thị B</p>
                <p class="text-sm text-gray-500">Đặt hàng online</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6z" />
              </svg>
            </div>
            <p class="mb-4 text-gray-600 italic">"Xôi xéo A Phùng đúng kiểu truyền thống, ăn vào là thấy cả hương vị quê hương. Không quá ngọt, không quá mặn, vừa miệng."</p>
            <div class="flex items-center">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">Lê Văn C</p>
                <p class="text-sm text-gray-500">Khách du lịch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="relative overflow-hidden bg-secondary-800 py-16">
      <div class="container text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Đặt hàng ngay hôm nay</h2>
        <p class="max-w-2xl mx-auto mb-8 text-lg text-gray-300">
          Hãy để Xôi Xéo A Phùng mang hương vị đặc biệt đến với gia đình bạn. Đặt hàng ngay để được giao hàng tận nơi!
        </p>
        <RouterLink to="/contact" class="btn btn-primary text-lg px-8 py-3">
          Đặt hàng ngay
        </RouterLink>
      </div>
    </section>

    <!-- Section hiển thị hình ảnh ông chủ -->
    <section class="py-16 bg-primary-50">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div class="md:order-2">
            <div class="rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 relative group">
              <img src="@/images/ongchu.jpg" alt="Anh Phùng Văn Tiến - Chủ quán Xôi Xéo A Phùng" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 class="text-white text-2xl font-bold">Anh Phùng Văn Tiến</h3>
                <p class="text-white/90">Người sáng lập Xôi Xéo A Phùng</p>
              </div>
            </div>
          </div>
          <div class="md:order-1">
            <h2 class="text-3xl font-bold text-secondary-800 mb-6">Về chúng tôi</h2>
            <p class="text-gray-700 mb-4 text-lg">
              Xin chào! Tôi là Phùng Văn Tiến, người sáng lập và là chủ quán Xôi Xéo A Phùng.
            </p>
            <p class="text-gray-700 mb-6">
              Với niềm đam mê ẩm thực truyền thống Việt Nam, tôi đã tạo nên thương hiệu Xôi Xéo A Phùng, nơi mang đến cho khách hàng những món xôi thơm ngon, đậm đà hương vị quê hương, được chế biến từ những nguyên liệu tươi ngon nhất.
            </p>
            <p class="text-gray-700 mb-6">
              Bí quyết làm nên thương hiệu Xôi Xéo A Phùng nằm ở công thức đặc biệt kết hợp giữa truyền thống và hiện đại, tạo nên hương vị độc đáo không thể tìm thấy ở nơi khác.
            </p>
            <RouterLink to="/about" class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
              Tìm hiểu thêm
            </RouterLink>
          </div>
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