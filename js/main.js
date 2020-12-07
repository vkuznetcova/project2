// 1 задание
var small = document.querySelectorAll('.small'),
    wrp = document.querySelector('.wrp'),
    img = document.createElement('img');

for (let i = 0; i < small.length; i++) {
    small[i].addEventListener('click', function () {
        wrp.append(img);
        img.setAttribute('src', 'img/big' + (i + 1) + '.jpg')
        img.onerror = function () {
            alert('Такого файла не существует');
            img.remove();
        }
    })
}

// 2 задание
var goods = document.querySelector('.goods'),
    basket = document.querySelector('.basket'),
    items = [
        {
            name: 'Товар 1',
            photo: '../img/small1.jpg',
            price: 100
        },
        {
            name: 'Товар 2',
            photo: '../img/small2.jpg',
            price: 150
        },
        {
            name: 'Товар 3',
            photo: '../img/small3.jpg',
            price: 200
        },
    ];
for (let i = 0; i < items.length; i++) {
    let item = document.createElement('div'),
        photo = document.createElement('img'),
        title = document.createElement('span'),
        price = document.createElement('span'),
        btn = document.createElement('button');
    item.setAttribute('class', 'item');
    photo.setAttribute('src', items[i].photo);
    title.innerText = items[i].name;
    price.innerText = 'Цена: ' + items[i].price;
    btn.innerText = 'Купить';
    goods.append(item);
    item.append(photo);
    item.append(title);
    item.append(price);
    item.append(btn);
}
var item = document.querySelectorAll('.item'),
    btn = document.querySelectorAll('button'),
    sum = 0,
    summa = document.createElement('span');
basket.append(summa);
for (let i = 0; i < items.length; i++) {
    btn[i].addEventListener('click', function () {
        let basketItem = document.createElement('div'),
            title = document.createElement('span'),
            price = document.createElement('span');
        title.innerText = items[i].name;
        price.innerText = ' -Цена: ' + items[i].price;
        basket.append(basketItem);
        basketItem.append(title);
        basketItem.append(price);
        sum += items[i].price;
        summa.innerHTML = 'Общая сумма =' + sum;
    })

}

// 3 задание
var carousel = document.querySelectorAll('.vis'),
    back = document.querySelector('.back'),
    next = document.querySelector('.next'),
    m = 1;
back.addEventListener('click', function () {
    carousel[m].classList.toggle('hidden');
    m -= 1;
    if (m < 0) {
        m = carousel.length - 1;
    }
    carousel[m].classList.toggle('hidden');
});
next.addEventListener('click', function () {
    carousel[m].classList.toggle('hidden');
    m += 1;
    if (m >= carousel.length) {
        m = 0;
    }
    carousel[m].classList.toggle('hidden');
});
