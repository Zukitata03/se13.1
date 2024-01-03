# Quy trình release token dựa trên Ethereum
Việc tạo ra mã tiền điện thử dựa trên nền tảng Ethereum cần thông qua một vài bước cơ bản sau:
1. **Xác định mục tiêu của đồng tiền và tính năng có thể có**
- Cụ thể, xác định vai trò của đồng tiền như: tài trợ dự án, sử dụng trong một hệ sinh thái nào đó của chủ sở hữu,..
- Chọn các tính năng và quy định cho token như loại token, cách thức phân phối,...
2. **Xác định môi trường, công cụ để tạo token và phát triển smart contract**
- Có thể sử dụng các công cụ trực tuyến hoặc trực tiếp trên máy cá nhân. Một số công cụ phổ biến như Remix, Tenderly, Hardhat, Truffle
- Đối với smart contract thì nó thường được viết bằng Solidity.
- Tạo smart contract chính để quản lý token, có thể sử dụng mô hình tiêu chuẩn như ERC-20 (đối với token fungible) hoặc ERC-721 (đối với token phi fungible).
3. **Thiết lập giao diện người dùng**
- Trong một số trường hợp cần phải tạo ra một phương thức giúp người dùng dễ dàng tương tác như một giao diện người dùng cụ thể được tích hợp trong một ứng dụng.
4. **Thử nghiệm**
- Trước khi deploy chính thức, cần phải chạy thử nghiệm để đảm bảo tính ổn định và an toàn, bên cạnh đó khắc phục các lỗi còn tồn tại.
5. **Triển khai**
- Sau khi viết code, cần phải triển khai smart contract lên mạng Ethereum chính thức hoặc một số mạng thử nghiệm. 
- Khi triển khai token trên Ethereum, phải sử dụng Ether để thanh toán giao dịch mạng và gas fees.
6. **Phát hành và phân phối**
- Đưa ra các quy tắc phân phối token như chào bán hay mining.
7. **Chú ý**
- Trong trường hợp đồng tiền được sử dụng để thực hiện các giao dịch có thật (tức là không nhằm mục đích nghiên cứu) thì ta cần phải tuyệt đối tuân thủ theo các quy định của pháp luật.
