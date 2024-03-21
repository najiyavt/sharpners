const form = document.querySelector('form');

const input = document.createElement('input');
const inputValue = document.createTextNode(input.value);
input.appendChild(inputValue);

const btn = document.querySelector('button');
form.insertBefore(input,btn);
input.id = 'description';

 
const fruits = document.querySelector('.fruit');
 form.addEventListener('submit', function(event){
    event.preventDefault();

    const descToAdd = document.getElementById('description');

    const newLi = document.createElement('li');

    const newLiText = document.createTextNode(descToAdd.value);

    newLi.appendChild(newLiText);
    fruits.appendChild(newLi);
    description.style.fontStyle = 'italics'
 })

const  filter = document.getElementById('filter');
filter.addEventListener('keyup' , function(event){
    const text = event.target.value.toLowerCase();
    const fruitItems= document.getElementsByClassName('fruit');

    for(let i =0 ; i < fruitItems.length;i++){
        const currentfruit = fruitItems[i].firstChild.textContent.toLowerCase();

        if( currentfruit.indexOf(text) === -1){
            fruitItems[i].style.display = 'none';
        }
    }
});