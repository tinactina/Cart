
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
// 1.上方選擇的按鈕把資料存到localStorage
// 付款方式
let paymothod = document.querySelectorAll('[name="paymothod"]');
console.log(paymothod);
paymothod.forEach((item) => {
    item.addEventListener('click', function () {
        localStorage.setItem('paymothod', item.value);
    });
});
// 宅配方式

let delivery = document.querySelectorAll('[name="delivery"]');
console.log(delivery);

delivery.forEach((item) => {
    item.addEventListener('click', function () {
        // 存到暫存裡面
        let selectedFreightValue = document.querySelector('input[name="delivery"]:checked').value;// 獲取用戶選擇的運費選項的值
        let selectedFreightPrice = document.querySelector(`input[name="delivery"][value="${selectedFreightValue}"]`).dataset.price;// 獲取運費選項對應的價格
        let delivery = { value: { dataset: { price: selectedFreightPrice } } };// 設置 delivery 對象
        localStorage.setItem('delivery', JSON.stringify(delivery));// 將 delivery 對象存入 localStorage
        // 更新運費
        document.querySelector('#showfreight').innerHTML = `$${item.dataset.price}`;
        // 更新總計
        carttotal();
    });
});


// 把前面的金額放進來
let quantity = 0;
let shopquantity = JSON.parse(localStorage.getItem('shopquantity'));
console.log(shopquantity);
shopquantity.forEach((item) => {
    quantity += item;
    // quantity = quantity + item;
});
console.log(shopquantity);
console.log(quantity);
document.querySelector('#showquantity').innerHTML = quantity;

// 取得數量、索引值
let stepshopping = JSON.parse(localStorage.getItem('stepshopping'));
let shopping = shop.filter((item, index) => stepshopping.includes(index));
console.log(shopping)
// 計算小計
let cash = 0;
shopping.forEach((item, index) => {
    cash = parseInt(cash) + parseInt(item.price) * shopquantity[index]
});
console.log(cash);
document.querySelector('#showcash').innerHTML = `$${cash}`;


// 總計
// 計算總計
carttotal();

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




