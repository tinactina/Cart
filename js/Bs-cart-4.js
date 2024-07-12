let shop = [
    {
        id: 'Glass_Animals',
        name: 'Glass Animals',
        describe: 'Dreamland is the third studio album by English indie rock band Glass Animals.',
        img: './img/Glass_Animals@2x.8ac0a4c3.webp',
        price: '1000'
    },
    {
        id: 'KID FRESINO',
        name: 'KID FRESINO',
        describe: 'Rondo',
        img: './img/album/截圖 2024-06-12 下午3.07.37 2.png',
        price: '1000'
    },
    {
        id: '宇多田ヒカル',
        name: '宇多田ヒカル',
        describe: '  BADモード',
        img: './img/album/截圖 2024-06-12 下午3.09.14.png',
        price: '1200'
    },
    {
        id: 'STUTS',
        name: 'STUTS',
        describe: ' SummerSituation',
        img: './img/album/截圖 2024-06-12 下午3.09.47.png',
        price: '800'
    },
    {
        id: '曾我部惠一',
        name: '曾我部惠一 ',
        describe: ' ChottoMattete',
        img: './img/album/截圖 2024-06-12 下午3.09.27.png',
        price: '1200'
    },
    {
        id: 'んoon',
        name: 'んoon',
        describe: 'TokyoFamilyRestaurant',
        img: './img/album/截圖 2024-06-12 下午3.45.36.png',
        price: '1000'
    },
    {
        id: 'Delegation',
        name: 'Delegation',
        describe: 'ohhoney',
        img: './img/album/截圖 2024-06-12 下午3.10.17.png',
        price: '1000'
    },
    {
        id: 'Frankocean',
        name: 'Frankocean',
        describe: 'Blonde',
        img: './img/Blonde_-_Frank_Ocean.jpeg',
        price: '1000'
    },
    {
        id: 'LaytonWu',
        name: 'LaytonWu',
        describe: 'Taipei',
        img: './img/album/截圖 2024-06-12 下午3.11.16.png',
        price: '780'
    },
];


console.log('商品清單', shop);// 商品清單
let shopquantity = JSON.parse(localStorage.getItem('shopquantity'));
let stepshopping = JSON.parse(localStorage.getItem('stepshopping'));
let showshop = shop.filter((item, index) => stepshopping.includes(index));
// 把過濾後的東西顯示在畫面上
let cartlist = document.querySelector('#cartlist');
cartlist.innerHTML = '';

showshop.forEach((item, index) => {
    cartlist.innerHTML += `
<div class="col-12 d-flex justify-content-between align-items-center py-3 border-bottom">
   <div class="col-md-8">
    <div class="card-body me-5">
      <img src="${item.img}" width="80" alt="...">
      <p class="card-title">${item.name}</p>
      <p class="card-text">${item.describe}</p>   
    </div>
  </div>
  <div>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group ms-auto" role="group" aria-label="First group">
      <div class="card-text me-5 ">
      <input type="number" min="1" value="${parseInt(shopquantity[index])}" class="quantity" disabled="readonly">
      <span class="showprice">$${parseInt(shopquantity[index]) * parseInt(item.price)}</span>        </div>
`;
});

// paymothod付款方式
let cartdeliver = document.querySelector('#cartdeliver');
console.log(localStorage);
let paymothod = localStorage.getItem('paymothod');
console.log(paymothod);
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
console.log(delivery);
let showstring02 = '';
if (paymothod == 1) {
    showstring02 = '黑貓物流';
} else if (paymothod == 2) {
    showstring02 = '711取貨';
} else if (paymothod == 3) {
    showstring02 = '全家取貨';
}

// 確保 delivery 不為空值並且檢查它的屬性
if (delivery && delivery.value) {
    // 使用 try-catch 塊來處理可能的錯誤
    try {
        // 嘗試訪問 dataset.price
        let price = delivery.value.dataset.price;
        console.log(price);
        let showfreight = document.querySelector('#showfreight');
        showfreight.innerHTML = `$${price}`;
    } catch (error) {
        console.error('無法訪問運費價格: ', error);
    }
} else {
    console.log('找不到運費或運費值無效。');
}





cartdeliver.innerHTML += `
<div class="col-12">付款方式: 🆅已付款- ${showstring01}</div>
<div class="col-12">寄送方式: ${showstring02}</div>
<hr>
`;


// 取得自己填寫的資訊
let people = JSON.parse(localStorage.getItem('people'));
console.log(people);
document.querySelector('#people01').innerHTML = `姓名: ${people.name}`;
document.querySelector('#people02').innerHTML = `聯絡電話: ${people.phone_number}`;
document.querySelector('#people03').innerHTML = `Email: ${people.email}`;
document.querySelector('#people04').innerHTML = `聯絡地址: ${people.address_country}${people.address_city}${people.address}`;

// 把前面的金額放進來
let quantity = 0;
console.log(shopquantity);
shopquantity.forEach((item) => {
    quantity += item;
    // quantity = quantity + item;
});
console.log(shopquantity);
console.log(quantity);
document.querySelector('#showquantity').innerHTML = quantity;

// 取得數量、索引值
let shopping = shop.filter((item, index) => stepshopping.includes(index));
console.log(shopping)
// 計算小計
let cash = 0;
shopping.forEach((item, index) => {
    cash = parseInt(cash) + parseInt(item.price) * shopquantity[index]
});
console.log(cash);
document.querySelector('#showcash').innerHTML = `$${cash}`;


function carttotal() {
    let showtotal = document.querySelector('#showtotal');
    let showcash = document.querySelector('#showcash');//小計
    let showfreight = document.querySelector('#showfreight');//運費
    console.log(showcash.textContent);
    // 要把錢字號取代成沒有東西
    let cash = showcash.textContent.replace('$', '');
    let freight = showfreight.textContent.replace('$', '');
    showtotal.innerHTML = `$${parseInt(cash) + parseInt(freight)}`;
}


// 計算總計
carttotal();

// 計算並顯示總計
let total = cash + freight;
showtotal.innerHTML = `$${total}`;


