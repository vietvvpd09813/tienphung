<template>
  <div class="bg-yellow-50 py-12">
    <div class="container">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold mb-4">Về Chúng Tôi</h1>
        <p class="max-w-3xl mx-auto text-gray-600">
          Chúng tôi tự hào mang đến cho bạn những món xôi xéo truyền thống ngon nhất, với công thức gia truyền và nguyên liệu tươi ngon.
        </p>
      </div>

      <!-- Our Story -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-bold mb-4">Câu chuyện của chúng tôi</h2>
            <p class="text-gray-600 mb-4">
              Từ một quán xôi nhỏ xuất hiện vào năm 1990 trên một con phố nhỏ ở Hà Nội, "Xôi Xéo Truyền Thống" đã trở thành một thương hiệu được nhiều thực khách yêu thích và tin tưởng.
            </p>
            <p class="text-gray-600 mb-4">
              Công thức gia truyền qua nhiều thế hệ, cùng với bí quyết chọn nguyên liệu và chế biến đặc biệt, đã tạo nên hương vị độc đáo cho món xôi xéo của chúng tôi. Mỗi hạt gạo, mỗi hạt đậu đều được chọn lọc cẩn thận để đảm bảo hương vị tuyệt hảo.
            </p>
            <p class="text-gray-600">
              Giờ đây, với mong muốn phục vụ nhiều khách hàng hơn, chúng tôi đã mở rộng kinh doanh online để mang hương vị xôi xéo truyền thống đến với mọi người, mọi nhà.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-md">
            <img src="@/images/xoi-xeo-bi-quyet-thanh-cong-nau-xoi-deo-thom-ngon-tai-nha_15.jpg" alt="Câu chuyện của chúng tôi" class="w-full h-full object-cover transition duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="mb-16 bg-white py-12 rounded-lg shadow-sm">
        <div class="container">
          <h2 class="text-2xl font-bold mb-8 text-center">Giá trị cốt lõi</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Value 1 -->
            <div class="text-center p-6 hover:bg-primary-50 rounded-lg transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Chất lượng</h3>
              <p class="text-gray-600">Chúng tôi cam kết sử dụng nguyên liệu chất lượng cao và quy trình chế biến nghiêm ngặt để tạo ra những sản phẩm ngon nhất.</p>
            </div>

            <!-- Value 2 -->
            <div class="text-center p-6 hover:bg-primary-50 rounded-lg transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Trung thực</h3>
              <p class="text-gray-600">Chúng tôi luôn minh bạch trong kinh doanh, từ nguồn gốc nguyên liệu đến quy trình chế biến và phục vụ khách hàng.</p>
            </div>

            <!-- Value 3 -->
            <div class="text-center p-6 hover:bg-primary-50 rounded-lg transition-colors duration-300">
              <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Sự hài lòng</h3>
              <p class="text-gray-600">Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi, từ chất lượng sản phẩm đến dịch vụ khách hàng.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Team -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-8 text-center">Đội ngũ của chúng tôi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden group">
            <div class="h-64 relative">
              <img src="@/images/ongchu.jpg" alt="Phùng Văn Tiến" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold mb-1">Nguyễn Văn An</h3>
              <p class="text-primary-600 mb-3">Người sáng lập</p>
              <p class="text-gray-600">
                Với hơn 30 năm kinh nghiệm, ông An là người giữ bí quyết gia truyền cho món xôi xéo nổi tiếng của chúng tôi.
              </p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden group">
            <div class="h-64 relative">
              <img src="@/images/eatwpeach-1622985777633.jpg" alt="Trần Thị Bình" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold mb-1">Trần Thị Bình</h3>
              <p class="text-primary-600 mb-3">Bếp trưởng</p>
              <p class="text-gray-600">
                Chị Bình có hơn 15 năm kinh nghiệm và đam mê với ẩm thực Việt Nam, đặc biệt là các món xôi truyền thống.
              </p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden group">
            <div class="h-64 relative">
              <img src="@/images/20230419_QrAjDfgVSw.png" alt="Lê Quang Cường" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold mb-1">Lê Quang Cường</h3>
              <p class="text-primary-600 mb-3">Quản lý</p>
              <p class="text-gray-600">
                Anh Cường phụ trách vận hành và đảm bảo mọi khách hàng đều có trải nghiệm tuyệt vời khi đến với chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Milestones -->
      <section class="mb-16 bg-white py-12 rounded-lg shadow-sm">
        <div class="container">
          <h2 class="text-2xl font-bold mb-8 text-center">Những cột mốc phát triển</h2>
          <div class="border-l-4 border-primary-500 pl-8 ml-4 md:ml-12 space-y-8">
            <!-- Milestone 1 -->
            <div class="relative">
              <div class="absolute -left-12 mt-1.5 w-5 h-5 rounded-full bg-primary-500"></div>
              <div>
                <h3 class="text-xl font-bold">1990</h3>
                <p class="text-gray-600">Thành lập quán xôi xéo đầu tiên tại một con phố nhỏ ở Hà Nội.</p>
              </div>
            </div>

            <!-- Milestone 2 -->
            <div class="relative">
              <div class="absolute -left-12 mt-1.5 w-5 h-5 rounded-full bg-primary-500"></div>
              <div>
                <h3 class="text-xl font-bold">2000</h3>
                <p class="text-gray-600">Mở rộng thêm 2 chi nhánh tại Hà Nội, phục vụ nhiều khách hàng hơn.</p>
              </div>
            </div>

            <!-- Milestone 3 -->
            <div class="relative">
              <div class="absolute -left-12 mt-1.5 w-5 h-5 rounded-full bg-primary-500"></div>
              <div>
                <h3 class="text-xl font-bold">2010</h3>
                <p class="text-gray-600">Phát triển thương hiệu "Xôi Xéo Truyền Thống" và mở thêm 5 chi nhánh tại các thành phố lớn.</p>
              </div>
            </div>

            <!-- Milestone 4 -->
            <div class="relative">
              <div class="absolute -left-12 mt-1.5 w-5 h-5 rounded-full bg-primary-500"></div>
              <div>
                <h3 class="text-xl font-bold">2020</h3>
                <p class="text-gray-600">Ra mắt dịch vụ giao hàng online và ứng dụng đặt hàng di động, mở rộng phạm vi phục vụ toàn quốc.</p>
              </div>
            </div>

            <!-- Milestone 5 -->
            <div class="relative">
              <div class="absolute -left-12 mt-1.5 w-5 h-5 rounded-full bg-primary-500"></div>
              <div>
                <h3 class="text-xl font-bold">2023</h3>
                <p class="text-gray-600">Ra mắt website mới với nhiều tính năng hiện đại, nâng cao trải nghiệm khách hàng.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section class="text-center bg-primary-600 text-white p-12 rounded-lg shadow-md">
        <h2 class="text-3xl font-bold mb-4">Hãy đến thưởng thức hương vị xôi xéo truyền thống</h2>
        <p class="max-w-3xl mx-auto mb-8">
          Chúng tôi luôn sẵn sàng phục vụ bạn với những món xôi thơm ngon, mang đậm hương vị truyền thống Việt Nam.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/menu" class="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
            Xem thực đơn
          </RouterLink>
          <RouterLink to="/contact" class="bg-primary-700 hover:bg-primary-800 px-6 py-3 rounded-md font-medium transition-colors">
            Liên hệ ngay
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script> 