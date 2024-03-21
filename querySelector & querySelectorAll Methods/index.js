const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'end';
mainHeading.style.color = 'black';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color='brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelectorAll(".fruits");
for(let i=0 ; i < fruits.length;i++){
fruits[i].style.backgroundColor = 'gray';
fruits[i].style.padding = '30px';
fruits[i].style.margin = '30px';
fruits[i].style.width = '50%';
fruits[i].style.listStyleType = 'none';
fruits[i].style.borderRadius = '5px';
}
const fruit = document.querySelectorAll('.fruit');
for(let i=0 ; i < fruit.length;i++){
   fruit[i].style.borderRadius='5px';
   fruit[i].style.borderRadius='5px'
   fruit[i].style.padding ='10px';

}

const oddfruit = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0 ; i < oddfruit.length;i++){
   oddfruit[i].style.color = 'white';
   oddfruit[i].style.backgroundColor = 'brown';

}

const evenfruit = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0 ; i < evenfruit.length;i++){
    evenfruit[i].style.backgroundColor='lightgray';
}

