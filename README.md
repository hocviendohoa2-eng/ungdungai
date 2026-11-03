# 🚀 Website Đào Tạo Khóa Học Ứng Dụng AI & Đồ Họa

> Chuyên đào tạo 1 kèm 1 & dạy nhóm theo yêu cầu: **Khóa học tạo web với AI**, **Khóa học ứng dụng AI**, **Khóa học Trí tuệ nhân tạo**, **Photoshop**, **Illustrator** & **Edit Video**.

---

## 📁 Cấu Trúc Thư Mục
```text
├── assets/
│   └── images/          # Hình ảnh khóa học, logo, poster (ps, ai, ill, video, web...)
├── index.html           # Trang web chính giới thiệu khóa học, tra cứu học phí & form đăng ký
├── admin.html           # Trang phụ quản trị: sửa thông tin, học phí, hình ảnh, từ khóa SEO
├── styles.css           # Toàn bộ mã CSS giao diện hiện đại (Light / Dark mode, Responsive)
├── app.js               # Logic tương tác, mascot Mochi 3D, tính học phí & đồng bộ CMS
├── 404.html             # Trang báo lỗi 404 thân thiện cho GitHub Pages
├── .nojekyll            # Tối ưu tải nhanh, bỏ qua xử lý Jekyll trên GitHub Pages
├── .gitignore           # Bỏ qua các file rác hệ điều hành
├── robots.txt           # Cấu hình chuẩn SEO Google Bot
└── README.md            # Tài liệu hướng dẫn sử dụng & triển khai
```

---

## 🌐 Hướng Dẫn Đăng Lên GitHub & Bật Web Trực Tuyến (GitHub Pages)

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub.com](https://github.com).
2. Bấm vào nút **New** (Tạo Repository mới).
3. Đặt tên Repository (ví dụ: `khoa-hoc-ai` hoặc `web-khoa-hoc`).
4. Chọn chế độ **Public** và bấm **Create repository**.

### Bước 2: Tải code lên GitHub
* **Cách 1 (Kéo thả trên trình duyệt):**
  1. Trong repository vừa tạo, bấm **uploading an existing file**.
  2. Kéo thả toàn bộ các file và thư mục trong thư mục này vào trình duyệt (bao gồm `index.html`, `admin.html`, `app.js`, `styles.css`, thư mục `assets`, file `.nojekyll`...).
  3. Bấm **Commit changes**.
* **Cách 2 (Dùng Git Command Line):**
  ```bash
  git init
  git add .
  git commit -m "Khoi tao website khoa hoc AI"
  git branch -M main
  git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
  git push -u origin main
  ```

### Bước 3: Kích hoạt GitHub Pages để chạy Web miễn phí
1. Trên giao diện Repository của bạn trên GitHub, bấm vào tab **Settings** (ở thanh menu trên).
2. Ở menu bên trái, tìm và bấm vào mục **Pages**.
3. Tại phần **Build and deployment**:
   - **Source:** Chọn `Deploy from a branch`.
   - **Branch:** Chọn nhánh `main` (hoặc `master`), thư mục chọn `/ (root)`.
   - Bấm **Save**.
4. Chờ khoảng 1 - 2 phút, GitHub sẽ hiển thị đường link trang web của bạn:
   👉 **`https://<ten-tai-khoan>.github.io/<ten-repo>/`**

---

## 🔐 Hướng Dẫn Truy Cập & Bảo Mật Trang Quản Trị (Admin)
- Trang quản trị nằm độc lập tại file `admin.html` để đảm bảo bảo mật và không hiển thị nút ra trang người dùng:
  - Khi xem trên máy tính: Mở file `admin.html` bằng trình duyệt.
  - Khi xem trên GitHub Pages: Truy cập theo đường dẫn:  
    👉 **`https://<ten-tai-khoan>.github.io/<ten-repo>/admin.html`**
- **Bảo mật trang quản trị:**
  - Được bảo vệ bằng mã khóa một chiều, không lưu mật khẩu thô trong mã nguồn khi đưa lên GitHub.
  - Chỉ có quản trị viên nắm giữ mật khẩu mới có thể mở khóa.
  - Tích hợp tính năng chống dò mật khẩu (tự động khóa tạm nếu nhập sai nhiều lần) và nút khóa đăng xuất an toàn.
- **Các tính năng quản trị:**
  1. ⚙️ Cài đặt chung: Đổi SĐT Hotline, Zalo, Email, Địa chỉ.
  2. 🎯 Quản lý từ khóa SEO Google & thẻ Meta.
  3. 📝 Quản lý các mục trong Form Đăng Ký (thêm/sửa/xóa mục khóa học) & Quản lý danh sách học viên đăng ký (Leads).
  4. 📚 Quản lý 5 khóa học & học phí (Online / Offline).
  5. 🖼️ Quản lý hình ảnh & poster: Chỉ nhận link trực tuyến (tự động chuyển link Google Drive sang CDN tốc độ cao).
  6. 💾 Sao lưu & Khôi phục file cấu hình JSON.

---

## 📞 Hỗ Trợ & Bản Quyền
- **Đơn vị:** KHÓA HỌC ỨNG DỤNG AI
- **Hotline / Zalo:** 0916172524
- **Email:** hocviendohoa2@gmail.com
- **Địa chỉ:** Tân An, Long An
