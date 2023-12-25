# TESTING CONTRACT 

## Test 1 
```sol
const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("Token");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
```

- Sau khi chạy test bằng lệnh `npx hardhat test` ta thu được kết quả:
```
  Token contract
    ✔ Deployment should assign the total supply of tokens to the owner (2145ms)


  1 passing (2s)
```
- Điều này có nghĩa là test đã pass. Giải thích cụ thể cho test:

```sol
describe("Token contract", function () {
  // các kiểm thử bên trong
});
```
`describe` là một hàm của Mocha, một framework kiểm thử JavaScript, được sử dụng để nhóm các kiểm thử liên quan đến nhau. Trong trường hợp này, nó nhóm các kiểm thử cho "Token contract".

```sol
it("Deployment should assign the total supply of tokens to the owner", async function () {
  // nội dung kiểm thử
});
```
`it` là một hàm của Mocha dùng để định nghĩa một kiểm thử cụ thể. Trong trường hợp này, kiểm thử kiểm tra xem việc triển khai hợp đồng thông minh có gán tổng số lượng token cho chủ sở hữu hay không.

```sol
const [owner] = await ethers.getSigners();
const hardhatToken = await ethers.deployContract("DHAToken");
```
* `getSigners` lấy danh sách các tài khoản có sẵn từ môi trường phát triển Hardhat, với `owner` là tài khoản đầu tiên.
* `deployContract` triển khai hợp đồng "DHAToken".

```sol
const ownerBalance = await hardhatToken.balanceOf(owner.address);
expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
```
* `balanceOf` lấy số dư token của chủ sở hữu.
* `totalSupply` lấy tổng số lượng token được tạo ra.
* `expect(...).to.equal(ownerBalance)` là một assertion kiểm tra xem tổng cung có bằng số dư của chủ sở hữu hay không, nếu không kiểm thử sẽ thất bại.


