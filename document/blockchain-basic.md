# Khái niệm cơ bản về Blockchain
## Blockchain là gì?
Blockchain được hiểu như là một sổ cái kỹ thuật số, phân tán (distributed) chống giả mạo. Nó an toàn, bảo mật, minh bạch và phi tập trung (decentralized), được hiểu đơn giản là không bị kiểm soát bởi một cơ quan nào. 
Ngân hàng cũng sử dụng sổ cái để theo dõi mọi giao dịch của khách hàng, và chỉ có ngân hàng xem được và kiểm soát các giao dịch đó. Còn ở blockchain, sổ cái này được công khai, không một cơ quan trung ương nào đứng ra kiểm soát, và cho phép mọi người theo dõi tình trạng của chuỗi.
## Cấu trúc của Blockchain
Trong kiến trúc phân tán của Blockchain, mỗi thành viên tham gia mạng đều duy trì, xác thực và cập nhật các mục mới. Cấu trúc của công nghệ blockchain là một tập hợp các khối chứa giao dịch theo một thứ tự cụ thể. Những danh sách này có thể được lưu dưới dạng tệp phẳng (định dạng txt) hoặc cơ sở dữ liệu đơn giản. Kiến trúc blockchain có thể là công khai (public), riêng tư (private) hoặc liên hợp (consortium) là sự kết hợp của 2 dạng trên. Cấu trúc của blockchain được thiết kế để chống lại sự giả mạo, thay đổi thông tin trái phấp, cung cấp bảo mật tuyệt đối. Các khối và giao dịch trên blockchain được lưu trữ ở nhiều nodes khác nhau trên thế giới, đảm bảo tính phân tán và độ bền của hệ thống.

![Blockchain bao gồm các tầng](https://github.com/Zukitata03/se13.1/assets/93626176/34bc8b41-cc0c-45b2-8c4c-aaf507846ac5)

1.Lớp hạ tầng: 
  - Là các phần cứng thực thi các smart contract và các ứng dụng khác.
  - Cây Merkle: là một cây nhị phân của hàm băm. 
2. Lớp dữ liệu:
  - Khối: Chứa các giao dịch được xác thực và sắp xếp theo thứ tự thời gian.
  - Mạng: Các nút mạng, truyền thông và xác minh. Giúp xác minh tính toàn vẹn của dữ liệu trong một khối.
  - Chữ ký số: Đảm bảo tính bảo mật và tính xác thực của giao dịch.
3. Lớp mạng:
  - Mạng ngang hàng (P2P): Mỗi thành viên có một bản sao blockchain, cho phép họ xác thực và cập nhật thông tin.
  - Cấu trúc liên kết: Blockchain được tạo thành từ các khối có liên kết với nhau, đảm bảo tính toàn vẹn và truy xuất nguồn gốc.
4. Lớp đồng thuận:
  -  Cơ chế đồng thuận: Đảm bảo tất cả các nút đồng ý về trạng thái của blockchain.
  -  Các thuật toán đồng thuận phổ biến: Proof of Work (PoW), Proof of Stake (PoS).
5. Lớp ứng dụng:
  - Smart contract: Các chương trình chạy trên blockchain và tự động thực thi các giao dịch.
  - Các ứng dụng phi tập trung (DApps): Các ứng dụng được xây dựng trên blockchain và không có chủ sở hữu duy nhất.
