const ul= document.querySelector('ul');
const input= document.querySelector('input');
const button= document.querySelector('button');
button.onclick= function() {
    let inputValue= input.value;
    input.value= '';

const li= document.createElement('li');
const span= document.createElement('span');
const listButton= document.createElement('button');
li.appendChild(span);
span.textContent= inputValue;
li.appendChild(listButton);
listButton.textContent= 'Delete';
ul.appendChild(li);

listButton.onclick = function(item) {
    ul.removeChild(li);
}

input.focus();
}