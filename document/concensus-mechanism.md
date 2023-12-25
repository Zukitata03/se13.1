# Cơ chế đồng thuận trong blockchain
Một cơ chế đồng thuận, hay một thuật toán đồng thuận là một bộ quy tắc trong chuỗi nhằm đạt được sự đồng thuận giữa các thành viên trong mạng về tính xác thực của khối, của giao dịch và của lệnh trước khi được thêm vào chuỗi. Các cơ chế đồng thuận đóng vai trò quan trọng trong việc đảm bảo tính bảo mật của blockchain. Có nhiều cơ chế đồng thuận khác nhau, nhưng chúng đều hướng tới ba đặc điểm chính của blockchain: Phi tập trung (Decentralization), phân tán (Distribution), và công khai (Public ledger).

## Proof-of-Work (PoW):
Cơ chế đồng thuận đầu tiên ra đời, đi cùng với sự ra đời của Bitcoin. Thuật ngữ "Đào coin" chính là xuất phát từ cơ chế đồng thuận này mà ra. Các thợ đào (miner) tham gia vào việc giải những bài toán phức tạp. Bằng cách đó, họ xác thực các giao dịch và thêm chúng vào chuỗi. Người đầu tiên thành công giải được khối sẽ được nhận một lượng token của tiền điện tử đó làm phần thưởng.
Mục đích của PoW là tạo ra một hệ thống phi tập trung và bảo mật chống lại sự kiểm soát và các xâm nhập. Khi thợ đào muốn thêm một khối vào chuỗi, họ phải bỏ ra một lượng lớn sức mạnh tính toán và điện năng để giải bài toán. Điều này đảm bảo được tính bảo mật của chuỗi, nhưng là gánh nặng vì lượng năng lượng tiêu thụ. 
Hai đồng tiền điện tử nổi tiếng với cơ chế đồng thuận này là Bitcoin (BTC) và Ethereum cũ (ETH), tuy cùng cơ chế nhưng cách triển khai lại khác nhau.
![image](https://github.com/Zukitata03/se13.1/assets/93626176/b26e5614-2923-4715-b7c9-97d7ee9421f3)

## Proof-of-Stake (PoS):
Thay vì yêu cầu giải các bài toán phức tạp, Proof-of-Stake chọn người xác thực dựa trên cổ phần sở hữu của họ trong mạng. Không có cạnh tranh để tạo ra hàm băm phù hợp, mà dựa trên quyền sở hữu của nguồn cung. Sức mạnh tính toán được thay bằng sức mạnh tiền tệ, nên xác thực các giao dịch phụ thuộc vào cổ phần của người đang muốn xác thực.
Thay vì nhận được phần thưởng khi giải khối, người xác thực có thể nhận được phí giao dịch hoặc phí mạng. Họ chịu trách nhiệm xác thực các giao dịch, ký và đề xuất các khối để xác thực. Quá trình này thực hiện thông qua các hợp đồng thông minh (smart contract).


Thuật ngữ "đặt cược (stake)" dùng để chỉ những người xác thực giao tiền của họ cho hệ thống. Người xác thực có thể tham gia vào việc tạo khối mới nếu họ khóa số token mình đang nắm giữ. Ví dự, người xác nhận nắm giữ 50% token trên hệ thống có thể xác thực 50% số khối. Số tiền bị khóa đóng vai trò là tài sản bị thế chấp, đảm bảo rằng nếu những người xác thực có gian lận trong quá trình xác thực, họ có khả năng mất số tiền và bị khai trừ khỏi hệ thống. Ngược lại, nếu mọi thứ trung thực, minh bạch thì sẽ nhận được phần thưởng. Vì vậy, trong Proof-of-Stake (PoS), sự đồng thuận đạt được bằng cách xem xét số cổ phần mà người xác thực đóng góp cho mạng.
Solana và gần đây là ETH 2.0 (sau sự kiện The Merge) là hai đồng tiền điện tử sử dụng cơ chế đồng thuận PoS. Solana không chỉ sử dụng mỗi PoS mà còn cả Proof-of-History (PoH).
![image](https://github.com/Zukitata03/se13.1/assets/93626176/b44b558a-bfd5-40d0-91ae-460ebe6f193b)


## Proof-of-History (PoH):
Proof-of-History (PoH) là một cơ chế đồng thuận độc đáo được sử dụng bởi blockchain Solana. Khác với các cơ chế truyền thống, PoH không phụ thuộc vào thời gian thực mà tạo ra một chuỗi thời gian ảo (virtual clock) riêng trong blockchain.
Cụ thể, PoH hoạt động như sau:
- Các nút PoH liên tục tạo ra các khối thời gian (time blocks) chứa mã băm của khối trước đó. Nhờ đó chúng tạo thành một chuỗi thời gian liên tục và không thể bị làm giả.
- Thông tin về thời gian được lưu trữ trong các khối thời gian và không thể bị thay đổi. Điều này cho phép xác minh thứ tự của các sự kiện một cách chắc chắn.
- Chuỗi PoH được truyền tới các nút xác thực khác như nút PoS để phục vụ việc xác thực giao dịch. Nhờ đó mà toàn bộ mạng lưới đồng đồng bộ về thời gian.
Như vậy, PoH giúp Solana vượt qua được vấn đề về tính đồng bộ thời gian của các blockchain truyền thống, từ đó cải thiện độ trễ và tăng tốc độ xử lý giao dịch. Đây là một trong những lý do khiến Solana có thể đạt tốc độ cao, lên tới 50.000 TPS (transaction per second).

Ngoài những cơ chế đồng thuận được giải thích đơn giản ở trên, còn nhiều cơ chế đồng thuận khác như **Proof of Contribution (PoC), Proof of Location (PoL), Proof of Burn (PoB), Proof of Randomness (PoR), Direct Acyclic Graph Tangle (DAG), Proof of Weight (PoWeight)...**
