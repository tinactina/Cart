//＊商品清單
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
let stepshopping = []; // 新增一個陣列存放點擊過的產品

// 為每個添加按鈕加上點擊事件監聽器
let add_btn = document.querySelectorAll('.addbtn');
add_btn.forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log('點擊到了', index);
    stepshopping.push(index);
    
    let JSON_stepshopping = JSON.stringify(stepshopping); // 將陣列轉換為 JSON 字串
    localStorage.setItem("stepshopping", JSON_stepshopping); // 將 JSON 字串存入 localStorage
    console.log(localStorage.getItem('stepshopping'));
  });
});

