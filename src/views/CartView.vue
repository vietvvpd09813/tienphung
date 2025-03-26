<template>
  <div class="py-12 bg-yellow-50">
    <div class="container">
      <h1 class="text-3xl font-bold text-center mb-8">Giỏ hàng của bạn</h1>
      
      <div v-if="isEmpty" class="bg-white rounded-lg shadow-md p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h2 class="text-xl font-bold mb-4">Giỏ hàng của bạn đang trống</h2>
        <p class="text-gray-600 mb-6">Hãy thêm một vài sản phẩm vào giỏ hàng để tiến hành đặt hàng</p>
        <RouterLink to="/menu" class="btn btn-primary">
          Xem thực đơn
        </RouterLink>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="md:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold">Sản phẩm ({{ items.length }})</h2>
            </div>
            
            <div class="divide-y divide-gray-200">
              <!-- Cart item -->
              <div v-for="item in items" :key="item.id" class="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <!-- Product image -->
                <div class="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </div>
                
                <!-- Product details -->
                <div class="flex-grow">
                  <h3 class="text-lg font-medium text-gray-900">{{ item.name }}</h3>
                  <p class="text-sm text-gray-600">{{ formatPrice(item.price) }}</p>
                </div>
                
                <!-- Quantity -->
                <div class="flex items-center">
                  <button 
                    @click="updateQuantity(item.id, Math.max(1, item.quantity - 1))" 
                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                    :disabled="item.quantity <= 1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="mx-3 w-8 text-center">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.id, item.quantity + 1)" 
                    class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                
                <!-- Price -->
                <div class="text-right">
                  <p class="text-lg font-medium text-gray-900">{{ formatPrice(item.price * item.quantity) }}</p>
                </div>
                
                <!-- Remove button -->
                <button 
                  @click="removeItem(item.id)" 
                  class="text-red-600 hover:text-red-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Cart actions -->
            <div class="p-6 border-t border-gray-200 bg-gray-50">
              <div class="flex flex-col sm:flex-row justify-between gap-4">
                <button @click="clearCart" class="btn btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Xóa giỏ hàng
                </button>
                <RouterLink to="/menu" class="btn btn-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Tiếp tục mua hàng
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Order Summary -->
        <div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold">Tóm tắt đơn hàng</h2>
            </div>
            
            <div class="p-6 space-y-4">
              <div class="flex justify-between">
                <span class="text-gray-600">Tạm tính</span>
                <span class="font-medium">{{ formatPrice(total) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Phí vận chuyển</span>
                <span class="font-medium">{{ formatPrice(shippingFee) }}</span>
              </div>
              <div v-if="discount > 0" class="flex justify-between">
                <span class="text-gray-600">Giảm giá</span>
                <span class="font-medium text-red-600">-{{ formatPrice(discount) }}</span>
              </div>
              <div class="pt-4 border-t border-gray-200 flex justify-between items-center">
                <span class="text-lg font-bold">Tổng cộng</span>
                <span class="text-lg font-bold text-primary-600">{{ formatPrice(grandTotal) }}</span>
              </div>
            </div>

            <div class="p-6 bg-gray-50">
              <h3 class="font-medium mb-4">Thông tin đặt hàng</h3>
              <!-- Checkout form -->
              <form @submit.prevent="checkout">
                <div class="space-y-4">
                  <!-- Name -->
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="orderInfo.name" 
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" 
                      required
                    />
                  </div>
                  
                  <!-- Phone -->
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="orderInfo.phone" 
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" 
                      required
                    />
                  </div>
                  
                  <!-- Address -->
                  <div>
                    <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Địa chỉ giao hàng</label>
                    <textarea 
                      id="address" 
                      v-model="orderInfo.address" 
                      rows="2" 
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50" 
                      required
                    ></textarea>
                  </div>
                  
                  <!-- Payment method -->
                  <div>
                    <span class="block text-sm font-medium text-gray-700 mb-2">Phương thức thanh toán</span>
                    <div class="space-y-2">
                      <label class="flex items-center">
                        <input type="radio" v-model="orderInfo.paymentMethod" value="cod" class="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span class="ml-2 text-sm text-gray-700">Thanh toán khi nhận hàng (COD)</span>
                      </label>
                      <label class="flex items-center">
                        <input type="radio" v-model="orderInfo.paymentMethod" value="transfer" class="h-4 w-4 text-primary-600 focus:ring-primary-500" />
                        <span class="ml-2 text-sm text-gray-700">Chuyển khoản ngân hàng</span>
                      </label>
                    </div>
                  </div>
                  
                  <!-- Note -->
                  <div>
                    <label for="note" class="block text-sm font-medium text-gray-700 mb-1">Ghi chú đơn hàng (không bắt buộc)</label>
                    <textarea 
                      id="note" 
                      v-model="orderInfo.note" 
                      rows="2" 
                      class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                </div>
                
                <!-- Checkout button -->
                <button 
                  type="submit" 
                  class="w-full btn btn-primary mt-6"
                  :disabled="isCheckingOut"
                >
                  {{ isCheckingOut ? 'Đang xử lý...' : 'Đặt hàng ngay' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Success Message -->
      <div v-if="orderSuccess" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 m-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mt-4">Đặt hàng thành công!</h3>
            <p class="text-gray-600 mt-2">
              Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được xác nhận và sẽ được giao trong thời gian sớm nhất.
            </p>
            <div class="mt-6">
              <button @click="closeOrderSuccess" class="btn btn-primary">
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store';
import { RouterLink } from 'vue-router';

const router = useRouter();
const cartStore = useCartStore();

const items = computed(() => cartStore.items);
const isEmpty = computed(() => cartStore.isEmpty);
const total = computed(() => cartStore.total);

// Shipping fee calculation
const shippingFee = computed(() => {
  return total.value > 100000 ? 0 : 15000;
});

// Discount calculation
const discount = ref(0);

// Grand total
const grandTotal = computed(() => {
  return total.value + shippingFee.value - discount.value;
});

// Order info
const orderInfo = reactive({
  name: '',
  phone: '',
  address: '',
  paymentMethod: 'cod',
  note: ''
});

// Format price
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(price)
    .replace('₫', 'đ');
};

// Cart functions
const updateQuantity = (itemId, quantity) => {
  cartStore.updateQuantity(itemId, quantity);
};

const removeItem = (itemId) => {
  cartStore.removeItem(itemId);
};

const clearCart = () => {
  cartStore.clearCart();
};

// Checkout
const isCheckingOut = ref(false);
const orderSuccess = ref(false);

const checkout = () => {
  isCheckingOut.value = true;
  
  // Simulate api call
  setTimeout(() => {
    isCheckingOut.value = false;
    orderSuccess.value = true;
    
    // Clear cart after successful order
    cartStore.clearCart();
  }, 1500);
};

const closeOrderSuccess = () => {
  orderSuccess.value = false;
  router.push('/');
};
</script> 