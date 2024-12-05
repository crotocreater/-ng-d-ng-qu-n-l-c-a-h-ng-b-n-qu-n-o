# Ứng dụng quản lý shop bán quần áo *(Dự án cá nhân)*

---

## Công nghệ sử dụng

1. **Frontend:** React.js  
2. **Backend:** Node.js + Express.js  
3. **Cơ sở dữ liệu:** MongoDB  
4. **Triển khai:** Docker, CI/CD  

---

## Các chức năng chính

### 1. Quản lý nhân viên

- **Chức năng:**  
  - Thêm, sửa, xóa thông tin nhân viên.  
  - Tìm kiếm nhân viên theo tên, ID, hoặc vai trò.  
  - Thống kê năng suất làm việc (số giờ làm, doanh thu mang lại).  
  - Phân ca làm việc.  
  - Quản lý lương và đánh giá nhân viên.  

---

### 2. Quản lý sản phẩm

- **Chức năng:**  
  - Thêm, sửa, xóa sản phẩm.  
  - Tìm kiếm sản phẩm theo danh mục, trạng thái (mới, sale), hoặc từ khóa.  
  - Thống kê doanh số bán hàng từng sản phẩm.  
  - Quản lý tồn kho:  
    - Theo dõi số lượng nhập - xuất.  
    - Cảnh báo khi sắp hết hàng hoặc tồn kho quá lâu.  
  - Phân loại sản phẩm: danh mục, mùa, đối tượng khách hàng.  
  - Quản lý thư viện ảnh sản phẩm (nhiều góc độ).  

---

### 3. Quản lý khách hàng

- **Chức năng:**  
  - Thêm, sửa, xóa thông tin khách hàng.  
  - Tìm kiếm khách hàng theo tên, ID, hoặc số điện thoại.  
  - Lịch sử mua hàng:  
    - Theo dõi chi tiết các đơn hàng trước đây.  
  - Hệ thống tích điểm, chương trình khách hàng thân thiết.  
  - Gửi thông báo tự động (email/sms):  A
    - Khuyến mãi, sinh nhật, trạng thái đơn hàng.  

---

### 4. Quản lý hóa đơn

- **Chức năng:**  
  - Thêm, sửa, xóa hóa đơn.  
  - Tìm kiếm hóa đơn theo mã, khách hàng, hoặc trạng thái.  
  - Hiển thị hóa đơn chi tiết.  
  - Xuất hóa đơn PDF và gửi email cho khách hàng.  
  - Tích hợp thanh toán trực tuyến (Momo, ZaloPay, thẻ tín dụng).  

---

### 5. Quản lý cửa hàng

- **Chức năng:**  
  - Thống kê doanh số theo ngày, tuần, tháng, năm.  
  - Theo dõi lợi nhuận theo từng sản phẩm hoặc toàn cửa hàng.  
  - Quản lý chi phí vận hành (nhân viên, mặt bằng, điện nước).  
  - Thống kê mặt hàng tồn kho chi tiết.  
  - Hỗ trợ quản lý nhiều chi nhánh (nếu cần).  

---

### 6. Giao diện quản lý

- **Chức năng:**  
  - Dashboard tùy chỉnh, hiển thị biểu đồ doanh thu, sản phẩm bán chạy, năng suất nhân viên.  
  - Responsive cho cả máy tính và điện thoại.  
  - Giao diện trực quan, dễ sử dụng.  

---

### 7. Phân quyền người dùng

- **Admin:**  
  - Quản lý tất cả các chức năng.  
  - Phân quyền nhân viên (quản lý, sale, kho).  
- **Nhân viên bán hàng:**  
  - Quản lý sản phẩm và hóa đơn.  
  - Hỗ trợ khách hàng trực tiếp.  
- **Nhân viên kho:**  
  - Theo dõi hàng nhập - xuất, kiểm tra tồn kho.  
- **Khách hàng:**  
  - Đặt hàng online.  
  - Theo dõi đơn hàng và lịch sử mua sắm.  
  - Hủy đơn hàng trước khi xử lý.  

---

### 8. Hỗ trợ bán hàng online

- **Chức năng:**  
  - Giỏ hàng và thanh toán trực tuyến.  
  - Theo dõi trạng thái vận chuyển đơn hàng.  
  - Giao diện thân thiện với thiết bị di động.  

---

## Kế hoạch triển khai

### Backend

- Xây dựng API RESTful với Node.js và Express.js.  
- Sử dụng JWT để bảo mật API và phân quyền.  
- Tích hợp `Mongoose` để quản lý cơ sở dữ liệu MongoDB.  

---

### Frontend

- Sử dụng React.js với Redux hoặc Context API để quản lý state.  
- Tích hợp `Chart.js` hoặc `D3.js` để hiển thị biểu đồ thống kê.  
- Responsive design đảm bảo tương thích với nhiều thiết bị.  

---

### Cơ sở dữ liệu (MongoDB)

- Thiết kế các collection:  
  - `users` (nhân viên, khách hàng)  
  - `products` (sản phẩm)  
  - `orders` (hóa đơn)  
  - `inventory` (kho hàng)  
- Tối ưu hóa index để tăng tốc độ tìm kiếm.  

---

### Triển khai

- Sử dụng Docker để đồng bộ hóa môi trường phát triển.  
- Thiết lập CI/CD để tự động hóa build và deploy.  
