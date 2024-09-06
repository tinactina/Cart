

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
console.log('商品清單',shop);

//amount_total ();

//取出暫存資料
let stepshopping = JSON.parse(localStorage.getItem('stepshopping'));
console.log(stepshopping);

//過濾要顯示的資料
const result = shop.filter((item , index) =>{
  if(stepshopping.includes(index)) {
    return item;
  }
});
console.log(result);

let cartlist = document.querySelector('#cartlist');
result.forEach((item) =>{
  console.log(item.name);
  cartlist.innerHTML += `
  <div class="row py-3 border-bottom align-items-center">
  <!-- 商品資訊 -->
  <div class="col-12 col-md-8 d-flex align-items-center">
    <div class="d-flex align-items-center">
      <img src="${item.img}" width="100" alt="..." class="me-3">
      <div>
        <p class="card-title mb-1">${item.name}</p>
        <p class="card-text mb-0">${item.describe}</p>   
      </div>
    </div>
  </div>
  <!-- 操作按鈕和價格 -->
  <div class="col-12 col-md-4 d-flex justify-content-between align-items-center mt-3 mt-md-0">
    <div class="d-flex align-items-center">
      <div class="btn-group" role="group" aria-label="Quantity controls">
        <button type="button" class="buckle-btn btn btn-light-subtle ">-</button>
        <input type="number" class="quantity btn btn-light font-monospace mx-2" min="1" value="1">
        <button type="button" class="subjoin-btn btn btn-light-subtle">+</button>
      </div>
      <span class="showprice font-monospace ms-3 " data-price="${item.price}">$${item.price}</span>
    </div>
  </div>
</div>


  `;
});
// 先綁完單個按鈕的監聽事件，在換成多個
  // let bucklebtn = document.querySelector('.buckle-btn');
  // bucklebtn.addEventListener('click', function () {
  //     // *取得到數量-1
  //     let quantity = document.querySelector('.quantity');
  //     quantity.value = quantity.value - 1;
  //     let showprice = document.querySelector('.showprice');
  //     // *金額更新在畫面上
  //     // showprice.dataset.price (金額)
  //     // quantity.value (數量)
  //     showprice.innerHTML = `$ ${showprice.dataset.price * parseInt(quantity.value)}`;
  // });
  // let subjoinbtn = document.querySelector('.subjoin-btn');
  // subjoinbtn.addEventListener('click', function () {
  //     // *取得到數量-1
  //     let quantity = document.querySelector('.quantity');
  //     quantity.value = quantity.value + 1;
  //     let showprice = document.querySelector('.showprice');
  //     // *金額更新在畫面上
  //     // showprice.dataset.price (金額)
  //     // quantity.value (數量)
  //     showprice.innerHTML = `$ ${showprice.dataset.price * parseInt(quantity.value)}`;
  // });
  cartlistbtn();
  // 商品的數量和價格計算的按鈕綁定

  function cartlistbtn() {
   // 單個換成多個
   let quantitys = document.querySelectorAll('.quantity');
   let showprices = document.querySelectorAll('.showprice');

   let bucklebtns = document.querySelectorAll('.buckle-btn');
   bucklebtns.forEach((item, index) => {
    item.addEventListener('click', function () {
     // *取得到數量-1
     let quantity = quantitys[index];
     quantity.value = parseInt(quantity.value) - 1;
     let showprice = showprices[index];
     // *金額更新在畫面上
     // showprice.dataset.price (金額)
     // quantity.value (數量)
     showprice.innerHTML = `$ ${showprice.dataset.price * parseInt(quantity.value)}`;
     cartquantity(); //數量
     cartcash(); //小計
     carttotal();//總計
     carttemporary();//更新暫存
    });
   });
   let subjoinbtns = document.querySelectorAll('.subjoin-btn');
   subjoinbtns.forEach((item, index) => {
    item.addEventListener('click', function () {
     // *取得到數量+1
     let quantity = quantitys[index];
     quantity.value = parseInt(quantity.value) + 1;
     let showprice = showprices[index];
     // *金額更新在畫面上
     // showprice.dataset.price (金額)
     // quantity.value (數量)
     showprice.innerHTML = `$ ${showprice.dataset.price * parseInt(quantity.value)}`;
     cartquantity(); //數量
     cartcash(); //小計
     carttotal();//總計
     carttemporary();//更新暫存
    });
   });
  }

  cartquantity();
  cartcash();
  carttotal();
  carttemporary();
  // 計算所有數量
  function cartquantity() {
   let quantitys = document.querySelectorAll('.quantity');
   let quantity = 0;
   quantitys.forEach((item) => {
    quantity = quantity + parseInt(item.value);
   });
   let showquantity = document.querySelector('#showquantity');
   showquantity.innerHTML = quantity;
  }
  // 計算商品金額
  function cartcash() {
   let quantitys = document.querySelectorAll('.quantity');
   let showprices = document.querySelectorAll('.showprice');
   let cash = 0;
   quantitys.forEach((item, index) => {
    let showprice = showprices[index];
    cash = cash + showprice.dataset.price * parseInt(item.value);
    console.log(cash);
   });
   // 顯示在小計上面
   let showcash = document.querySelector('#showcash');
   showcash.innerHTML = `$${cash}`;
  }
  // 計算總計
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
  // 暫存數量
  function carttemporary() {
   let quantity = [];
   let quantitys = document.querySelectorAll('.quantity');
   quantitys.forEach((item) => {
    quantity.push(parseInt(item.value));
   });
   let JSON_shopquantity = JSON.stringify(quantity)

   localStorage.setItem("shopquantity", JSON_shopquantity);
  }

  // 下一步的時候，把資料暫存起來
  // let step02 = document.querySelector('#step02');
  // step02.addEventListener('click', function () {
  //     let quantity = [];
  //     let quantitys = document.querySelectorAll('.quantity');
  //     quantitys.forEach((item) => {
  //         quantity.push(parseInt(item.value));
  //     });
  //     let JSON_shopquantity = JSON.stringify(quantity)

  //     localStorage.setItem("shopquantity", JSON_shopquantity);
  //     window.location = './step02.html';
  //     console.log(localStorage.getItem('shopquantity'));
  // });
 