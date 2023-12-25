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

Tóm lại, Test1 kiểm thử xem hợp đồng thông minh DHAToken sau khi triển khai có phân bổ toàn bộ số lượng token cho tài khoản chủ sở hữu (owner) hay không. Đây là một phần quan trọng trong việc kiểm thử các hợp đồng thông minh để đảm bảo tính minh bạch và chính xác của giao dịch trên blockchain.

## Test 2

```sol
const { expect } = require("chai");

describe("Token contract", function () {
  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("DHAToken");

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});
```
- Sau khi chạy thử qua Test 2, contract đã pass và nhận được kết quả:
```
  Token contract
    ✔ Should transfer tokens between accounts (1841ms)


  1 passing (2s)
```
- Giải thích cụ thể về Test 2:

```sol
await hardhatToken.transfer(addr1.address, 50);
expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
```
* Chuyển 50 token từ tài khoản của chủ sở hữu (owner) sang tài khoản `addr1`.
* Kiểm tra xem số dư của `addr1` có đúng 50 token không.

```sol 
await hardhatToken.connect(addr1).transfer(addr2.address, 50);
expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
```
* Chuyển 50 token từ `addr1` sang `addr2`.
* Kiểm tra xem số dư của `addr2` có đúng 50 token không.

Tóm lại, Test 2 kiểm thử xem hợp đồng thông minh DHAToken có thể thực hiện việc chuyển token giữa các tài khoản khác nhau một cách chính xác hay không. Đây là một phần quan trọng trong việc đảm bảo tính chính xác và an toàn của các giao dịch token trên blockchain.

## Test 3 
```sol 
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Token contract", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("DHAToken");

    // Fixtures can return anything you consider useful for your tests
    return { hardhatToken, owner, addr1, addr2 };
  }

  it("Should assign the total supply of tokens to the owner", async function () {
    const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should transfer tokens between accounts", async function () {
    const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
      deployTokenFixture
    );

    // Transfer 50 tokens from owner to addr1
    await expect(
      hardhatToken.transfer(addr1.address, 50)
    ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

    // Transfer 50 tokens from addr1 to addr2
    // We use .connect(signer) to send a transaction from another account
    await expect(
      hardhatToken.connect(addr1).transfer(addr2.address, 50)
    ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
  });
});
```
- Contract tiếp tục pass Test 3 và thu được kết quả hiển thị trên Terminal:
```
  Token contract
    ✔ Should assign the total supply of tokens to the owner (1783ms)
    ✔ Should transfer tokens between accounts (117ms)


  2 passing (2s)
```
- Test 3 là sự kết hợp giữa Test 1 và Test 2 nhưng sử dụng thêm hàm `deployTokenFixture` để đóng vai trò là một “fixture”. 
  * **Định nghĩa**: `deployTokenFixture` là một hàm bất đồng bộ (async function) được thiết kế để triển khai hợp đồng thông minh Token và chuẩn bị môi trường kiểm thử cần thiết.
  * **Mục đích**: Mục đích của hàm này là để tạo ra một trạng thái ban đầu nhất quán cho các bài kiểm thử. Điều này giúp đảm bảo rằng mỗi bài kiểm thử đều được thực hiện trong một môi trường kiểm thử được kiểm soát và dự đoán được, không bị ảnh hưởng bởi các bài kiểm thử trước đó.

- Khi viết các bài kiểm thử, ta sẽ sử dụng hàm `loadFixture` để gọi `deployTokenFixture`. `loadFixture`đảm bảo rằng môi trường kiểm thử được thiết lập một cách đúng đắn trước khi thực hiện mỗi bài kiểm thử. Nó giúp tái sử dụng cấu hình môi trường đã được thiết lập bởi `deployTokenFixture`, giảm thiểu thời gian và tài nguyên cần thiết để thiết lập lại môi trường cho mỗi bài kiểm thử.

## Test 4
Test 4 là một bộ kiểm thử đầy đủ cho một token.
```sol

const { expect } = require("chai");

const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");


describe("Token contract", function () {

  async function deployTokenFixture() {
    // Get the Signers here.
    const [owner, addr1, addr2] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("DHAToken");

    await hardhatToken.waitForDeployment();

    return { hardhatToken, owner, addr1, addr2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
        deployTokenFixture
      );
      // Transfer 50 tokens from owner to addr1
      await expect(
        hardhatToken.transfer(addr1.address, 50)
      ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(
        hardhatToken.connect(addr1).transfer(addr2.address, 50)
      ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });

    it("Should emit Transfer events", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
        deployTokenFixture
      );

      // Transfer 50 tokens from owner to addr1
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(owner.address, addr1.address, 50);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(hardhatToken, "Transfer")
        .withArgs(addr1.address, addr2.address, 50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const { hardhatToken, owner, addr1 } = await loadFixture(
        deployTokenFixture
      );
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      // Try to send 1 token from addr1 (0 tokens) to owner.
      // `require` will evaluate false and revert the transaction.
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      // Owner balance shouldn't have changed.
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
}); 
```
- Contract của nhóm đã pass đầy đủ kiểm thử mà Test 4 đã đưa ra cho một token. Kết quả hiển thị trên Terminal:
```
  Token contract
    Deployment
      ✔ Should set the right owner (1832ms)
      ✔ Should assign the total supply of tokens to the owner
    Transactions
      ✔ Should transfer tokens between accounts (114ms)
      ✔ Should emit Transfer events (41ms)
      ✔ Should fail if sender doesn't have enough tokens (70ms)


  5 passing (2s)
```


