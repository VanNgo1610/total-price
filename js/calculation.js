var product = 20;
var price = 500;
var total = price * product;

var elProduct = document.getElementById('product');
elProduct.textContent = product;

var elPrice = document.getElementById('price');
elPrice.textContent = price;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

var discount = '';

if (total < 10000) {
    discount = 0;
} else {
    discount = 5;
}

var elDiscount = document.getElementById('discount');
elDiscount.textContent = discount;

var percent = (100 - discount) / 100;

var gtotal = total * percent;
var elGTotal = document.getElementById('gtotal');
elGTotal.textContent = gtotal;

var product2 = 25;
var price2 = 300;
var total2 = price2 * product2;

var elProduct2 = document.getElementById('product2');
elProduct2.textContent = product2;

var elPrice2 = document.getElementById('price2');
elPrice2.textContent = price2;

var elTotal2 = document.getElementById('total2');
elTotal2.textContent = total2;

var discount2 = '';

if (total2 < 10000) {
    discount2 = 0;
} else {
    discount2 = 5;
}

var elDiscount2 = document.getElementById('discount2');
elDiscount2.textContent = discount2;

var percent2 = (100 - discount2) / 100;

var gtotal2 = total2 * percent2;
var elGTotal2 = document.getElementById('gtotal2');
elGTotal2.textContent = gtotal2;

//--------------------------------------------------------------------

function changeColor1() {
    const contentElement = document.getElementById('text');

    if (discount == '5') {
        contentElement.style.color = 'green';
    } else{
        contentElement.style.color = 'red';
    }
}

changeColor1();


function changeColor2() {
    const contentElement = document.getElementById('text2');

    if (discount2 == '5') {
        contentElement.style.color = 'green';
    } else{
        contentElement.style.color = 'red';
    }
}

changeColor2();

//-------------------------------------------------------------------------

function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();

    const timeString = `Time: ${currentTime}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000)

updateTime();

function changeTimeColor() {
    const textElement = document.getElementById('time');
    const currentColor = textElement.style.color;

    if (currentColor === 'white') {
        textElement.style.color = 'black';
    } else{
        textElement.style.color = 'gray';
    }
}

setInterval(changeTimeColor, 360000)
