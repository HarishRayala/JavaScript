var banner = [
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649683696/WebBanner/Banner323.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1649175874/WebBanner/Banner321.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648873882/WebBanner/Banner318.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1648819057/WebBanner/Banner317.jpg',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1644816631/WebBanner/Banner296.png',
    'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_420/v1646237005/WebBanner/Banner306.png',
]

var checkboxImages = [
    'https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg',
    "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.4f5188ab4391cb45d4a4ed9e849f1e32.1.jpg",
    "https://img-global.cpcdn.com/recipes/2da8cad7018f8486/1200x630cq70/photo.jpg",
    "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1646116928/Item/806D.png"
] 

var innerDIv = document.querySelector('.innerDIv');
var waitOrder = document.querySelector('.waitOrder');
var orderMessage = document.querySelector('#orderMessage');
var alertCard = document.querySelector('#alertCard');
var imgReady = document.querySelector('.imgReady');
var orderNoCounter = document.querySelector('#orderNoCounter');
var orderMessage = document.querySelector('#orderMessage');
var count = 0;
orderNoCounter.textContent = count;
banner.map((e)=> {
    var div = document.createElement('div');
    div.innerHTML = `<img src="${e}" alt="">`;
    innerDIv.append(div);
});


var itemOne = document.querySelector('#checkbox1');
var itemTwo = document.querySelector('#checkbox2');
var itemThree = document.querySelector('#checkbox3');
var itemFour = document.querySelector('#checkbox4');

function orderPromis(time){
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve(`Order is Ready...`);
            console.log(time);
        }, (time+1)*1000);
        countDown(time);
        console.log(time);
    });
};

function countDown(time){
    count++;
    orderMessage.textContent = 'preparing';
    orderNoCounter.textContent = count;
    var x = setInterval(function(){
        if(time===0){
            runStop(x);
            orderMessage.textContent = 'completed';
        }
        waitOrder.innerHTML = ` Wait for &nbsp; <i class="fas fa-stopwatch-20"></i> <span id='counter'>${time--} second</span>`
    },1000)
}
function runStop(x){
    clearInterval(x);
}
function clearOrderDetail(){
    itemOne.checked = false;
    itemTwo.checked = false;
    itemThree.checked = false;
    itemFour.checked = false;
    waitOrder.innerHTML = null;
    itemOne.checked = false;
    itemTwo.checked = false;
    itemThree.checked = false;
    itemFour.checked = false;
    imgReady.innerHTML = null;
}

async function run(time, tempArr){
    var response = await orderPromis(time);
    tempArr.map((el)=> {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = el;
        div.append(img)
        imgReady.append(div);
    })
    alertCard.classList.remove('displayClassNone');
    alertCard.classList.add('displayClassGrid');
}

function orderCloseBtn(){
    clearOrderDetail();
    alertCard.classList.add('displayClassNone');
    alertCard.classList.remove('displayClassGrid');
    document.querySelector('#submit').disabled = false;
}

function orderFood(){
    let time = Math.random()*8 +4;
    var arr = [itemOne.checked,
               itemTwo.checked,
               itemThree.checked,
               itemFour.checked
            ];
    var tempArr = [];
    var flag = false;
    for(var i=0; i<4; i++){
        if(arr[i]){
            tempArr.push(checkboxImages[i]);
            flag=true;
        }
    }
    if(flag){
        alert('order confirm');
        run(Math.floor(time), tempArr);
        document.querySelector('#submit').disabled = true;
        flag = false;
    }
    else{
        alert('choose an order please...');
    }
}


