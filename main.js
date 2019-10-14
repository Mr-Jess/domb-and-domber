//Needs further practice
function createList(childNode) {
    const list = document.querySelector('ul');
    list.appendChild(childNode);
}

function appendToDiv(element) {
    const loremDiv = document.querySelector('div#lorem');
    loremDiv.appendChild(element);
}

function newLi(text) {
    const newLi = document.querySelector('li');
    newLi.cl
    newLi.innerText = text;
    return newLi;
}


function imgSource(image, src){
    image.src = src;
}

function sameClass(element1,element2){
    element2.className = element1.className;
}

function tagId(tag,id){
const newElement = document.createElement(tag);
newElement.id= id;
return newElement.id;
}

function addColor(color, id){
    const element = document.querySelector('#' + id);
    element.style.color = color;
}

const newLi = newText('Hello darkness my old friend');
const newLi2 = newText('boy bye');
const newLi3 = newText('not today satan');
append(newLi);
append(newLi2);
append(newLi3);
const newSource = source('')

const thing1 = document.querySelector('#thing-1');
const thing2 = document.querySelector('#thing-2');
const thingC = document.querySelector('#thing-c');

sameClass(thing1, thing2);
sameClass(thing1, thingC);