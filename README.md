# Website Bán Xôi Xéo

Website bán xôi xéo được phát triển bằng Vue.js và Tailwind CSS, với giao diện người dùng hiện đại và thân thiện.

## Tính năng chính

- 📱 Giao diện đáp ứng, tương thích với tất cả các thiết bị
- 🛒 Giỏ hàng và thanh toán đơn giản
- 🔍 Tìm kiếm và lọc sản phẩm
- 📝 Form liên hệ
- 📦 Quản lý trạng thái sử dụng Pinia
- 🚀 Hiệu suất cao với Vite

## Công nghệ sử dụng

- Vue.js 3 (Composition API)
- Tailwind CSS
- Vite
- Pinia (Quản lý trạng thái)
- Vue Router

## Cấu trúc thư mục

```
xoi-xeo-website/
├── public/              # Static assets
│   └── img/             # Images
├── src/                 # Source files
│   ├── assets/          # Assets processed by build tools
│   ├── components/      # Vue components
│   ├── composables/     # Composable functions
│   ├── layouts/         # Layout components
│   ├── router/          # Vue router configuration
│   ├── store/           # Pinia stores
│   ├── utils/           # Utility functions
│   └── views/           # Page components
├── index.html           # Entry HTML file
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Cài đặt và chạy

1. Clone repository

```bash
git clone https://github.com/your-username/xoi-xeo-website.git
cd xoi-xeo-website
```

2. Cài đặt dependencies

```bash
npm install
```

3. Chạy server phát triển

```bash
npm run dev
```

4. Build cho production

```bash
npm run build
```

## Các trang chính

- **Trang chủ**: Hiển thị banner, sản phẩm nổi bật, và thông tin giới thiệu
- **Thực đơn**: Danh sách sản phẩm với bộ lọc
- **Giới thiệu**: Thông tin về doanh nghiệp
- **Liên hệ**: Form liên hệ và thông tin liên lạc
- **Giỏ hàng**: Quản lý sản phẩm và thanh toán

## Tùy chỉnh

- Màu sắc và giao diện có thể được tùy chỉnh trong file `tailwind.config.js`
- Thêm sản phẩm mới trong file `src/views/MenuView.vue`
- Thay đổi thông tin liên hệ trong `src/views/ContactView.vue` và `src/components/TheFooter.vue`

## License

[MIT](https://choosealicense.com/licenses/mit/) 