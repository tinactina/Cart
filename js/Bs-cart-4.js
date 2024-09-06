let shop = [
    { id: 'Glass_Animals', name: 'Glass Animals', describe: 'Dreamland is the third studio album by English indie rock band Glass Animals.', img: './img/Glass_Animals@2x.8ac0a4c3.webp', price: '1000' },
    { id: 'KID FRESINO', name: 'KID FRESINO', describe: 'Rondo', img: './img/album/截圖 2024-06-12 下午3.07.37 2.png', price: '1000' },
    { id: '宇多田ヒカル', name: '宇多田ヒカル', describe: '  BADモード', img: './img/album/截圖 2024-06-12 下午3.09.14.png', price: '1200' },
    { id: 'STUTS', name: 'STUTS', describe: ' SummerSituation', img: './img/album/截圖 2024-06-12 下午3.09.47.png', price: '800' },
    { id: '曾我部惠一', name: '曾我部惠一 ', describe: ' ChottoMattete', img: './img/album/截圖 2024-06-12 下午3.09.27.png', price: '1200' },
    { id: 'んoon', name: 'んoon', describe: 'TokyoFamilyRestaurant', img: './img/album/截圖 2024-06-12 下午3.45.36.png', price: '1000' },
    { id: 'Delegation', name: 'Delegation', describe: 'ohhoney', img: './img/album/截圖 2024-06-12 下午3.10.17.png', price: '1000' },
    { id: 'Frankocean', name: 'Frankocean', describe: 'Blonde', img: './img/Blonde_-_Frank_Ocean.jpeg', price: '1000' },
    { id: 'LaytonWu', name: 'LaytonWu', describe: 'Taipei', img: './img/album/截圖 2024-06-12 下午3.11.16.png', price: '780' }
];

// 從 localStorage 中讀取數據
let shopquantity = JSON.parse(localStorage.getItem('shopquantity')) || [];
let stepshopping = JSON.parse(localStorage.getItem('stepshopping')) || [];

// 確保 shopquantity 和 stepshopping 都是數字和數組
shopquantity = shopquantity.map(Number);
let showshop = shop.filter((item, index) => stepshopping.includes(index));

// 顯示商品清單
let cartlist = document.querySelector('#cartlist');
cartlist.innerHTML = '';
showshop.forEach((item, index) => {
    let quantityIndex = stepshopping.indexOf(index);
    let quantity = quantityIndex !== -1 ? shopquantity[quantityIndex] : 0;
    let totalPrice = quantity * parseInt(item.price);
    cartlist.innerHTML += `
    <div class="row py-3 border-bottom align-items-center">
      <!-- 商品資訊 -->
      <div class="col-12 col-md-8 d-flex align-items-center">
        <div class="d-flex align-items-center">
          <img src="${item.img}" width="100" alt="..." class="me-3">
          <div>
            <p class="card-title mb-1 text-nowrap">${item.name}</p>
            <p class="card-text mb-0 text-nowrap">${item.describe}</p>   
          </div>
        </div>
      </div>
      <!-- 價格和數量 -->
      <div class="col-12 col-md-4 d-flex justify-content-center align-items-center mt-3 mt-md-0">
        <div class="d-flex align-items-center">
          <!-- 數量輸入框 -->
          <div class="btn-toolbar me-2" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group" role="group" aria-label="Quantity controls">
              <input type="number" min="1" value="${parseInt(shopquantity[index])}" class="quantity form-control" disabled="readonly">
            </div>
          </div>
          <!-- 價格顯示 -->
          <span class="showprice font-monospace ">$${parseInt(shopquantity[index]) * parseInt(item.price)}</span>
        </div>
      </div>
    </div>
    `;
});

// paymothod付款方式
let cartdeliver = document.querySelector('#cartdeliver');

let paymothod = localStorage.getItem('paymothod');
let showstring01 = '';
if (paymothod == 1) {
    showstring01 = 'Line Pay';
} else if (paymothod == 2) {
    showstring01 = 'Apple Pay';
} else if (paymothod == 3) {
    showstring01 = '街口支付';
}

// delivery運送方式
let delivery = JSON.parse(localStorage.getItem('delivery'));
let showstring02 = '';
if (delivery && delivery.value) {
    let price = delivery.value.dataset.price;
    let showfreight = document.querySelector('#showfreight');
    showfreight.innerHTML = `$${price}`;
} else {
    console.log('找不到運費或運費值無效。');
}
if (delivery == 1) {
    showstring02 = '黑貓物流';
} else if (delivery == 2) {
    showstring02 = '711取貨';
} else if (delivery == 3) {
    showstring02 = '全家取貨';
}


cartdeliver.innerHTML += `
<div class="col-12 fs-6 text-muted">付款方式Payment method: 🆅 已付款 ⁝ ${showstring01}</div>
<div class="col-12 fs-6 p-3 text-muted">寄送方式Shipping method: ${showstring02} </div>
<hr>
`;




// 取得自己填寫的資訊


// 把前面的金額放進來
let quantity = shopquantity.reduce((total, num) => total + num, 0);
document.querySelector('#showquantity').innerHTML = quantity;

// 計算小計
let cash = 0;
showshop.forEach((item, index) => {
    cash += parseInt(item.price) * (shopquantity[index] || 0);
});
document.querySelector('#showcash').innerHTML = `$${cash}`;

// 計算並顯示總計
carttotal();

function carttotal() {
    let showtotal = document.querySelector('#showtotal');
    let showcash = document.querySelector('#showcash'); // 小計
    let showfreight = document.querySelector('#showfreight'); // 運費

    // 取得數字部分，移除錢字號並轉換為數字
    let cash = parseFloat(showcash.textContent.replace('$', '')) || 0;
    let freight = parseFloat(showfreight.textContent.replace('$', '')) || 0;

    // 計算並顯示總計
    let total = cash + freight;
    showtotal.innerHTML = `$${total}`;
}

