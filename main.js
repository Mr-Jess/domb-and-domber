//Needs further practice
function createList(childNode) {
    const list = document.querySelector('ul');
    childNode.appendChild(ul);
}

function appendToDiv(div) {
    const div = document.querySelector('div');
    div.id = 'lorem';
}

function text(str) {
    const list = document.querySelector('li');
    list.innerText = str;
    return list;
}

function source(image, str){
    const imageSource = document.querySelector(img)
    image.src(str);
}

function sameClass(element1,element2){
const newClass = element1.class
element2.class=newClass;
}

function tagId(tag,id){
const newElement = document.createElement(tag);
newElement.id= id;
return newElement.id;
}

function colorId(color, id){
    const newColor = document.querySelector(id)
    newColor.style.color = color;
}

const newLi = newText('Hello darkness my old friend');
const newLi2 = newText('boy bye');
const newLi3 = newText('not today satan');
append(newLi);
append(newLi2);
append(newLi3);
const newSource = source('')
