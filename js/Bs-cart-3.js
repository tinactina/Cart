
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

//把前面的金額放進來
let quantity = 0;
let shopquantity = JSON.parse(localStorage.getItem('shopquantity'));
console.log(shopquantity);
shopquantity.forEach(item => {
    quantity += item;

});
console.log(shopquantity);
console.log(quantity);
document.querySelector('#showquantity').innerHTML = quantity;
//取得字樣（索引值）把小計顯示出來
let stepshopping = JSON.parse(localStorage.getItem('stepshopping'));
let shopping = shop.filter((item, index) =>
    stepshopping.includes(index));


//計算小計showcash
let cash = 0;
shopping.forEach((item, index) => {
    cash = cash + item.price * shopquantity[index]
});
console.log(cash);
document.querySelector('#showcash').innerHTML = `$${cash}`;


// 從 localStorage 中取出保存的運費值
let delivery = JSON.parse(localStorage.getItem('delivery'));

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

// 計算總計
function carttotal() {
    let showtotal = document.querySelector('#showtotal');
    let showcash = document.querySelector('#showcash'); // 小計
    let showfreight = document.querySelector('#showfreight'); // 運費

    // 取得數字部分，移除錢字號並轉換為數字
    let cash = parseFloat(showcash.textContent.replace('$', ''));
    let freight = parseFloat(showfreight.textContent.replace('$', ''));

    // 如果無法正確解析數字，給出錯誤提示
    if (isNaN(cash) || isNaN(freight)) {
        console.error('無法計算總計：小計或運費值不正確。');
        showtotal.innerHTML = '$0';
        return;
    }

    // 計算並顯示總計
    let total = cash + freight;
    showtotal.innerHTML = `$${total}`;
}

// 執行計算總計
carttotal();


//個人資料填寫
let people = {
    name: '',
    phone_number: '',
    email: '',
    address_country: '',
    address_city: '',
    address: '',

    //name
    //phone_number
    //email
    //address_number
    //address_01
    //address_02

}

let stepbtn = document.querySelector('#stepbtn');
stepbtn.addEventListener('click', function () {
    //console.log(people)
    people.name = document.querySelector('#name').value;
    people.phone_number = document.querySelector('#phone_number').value;
    people.email = document.querySelector('#email').value;
    people.address_city = document.querySelector('#address_number').value;
    people.address_country = document.querySelector('#address01').value;
    people.address = document.querySelector('#address02').value;

    localStorage.setItem('people', JSON.stringify(people));

    //加入跳轉方法
    window.location = './Bs-cart-4.html';
});


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


//./Bs-cart-4.html
