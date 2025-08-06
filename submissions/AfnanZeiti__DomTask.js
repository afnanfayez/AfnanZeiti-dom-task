//Task 1: DOM Archaeologist
//Starting from document.body, write code that logs (in order):
// The tag name of the last element child of

// , using only navigation properties (no query selectors).
// The number of element children in

// (not text nodes).
// The difference in length between childNodes and children of

// . Explain why they differ.

//1) :
console.log(document.body.lastElementChild); //3
console.log(document.body.children[document.body.children.length-1]);//3
//2):
console.log(document.body.children.length);//listNode(collection) is similar to an array

//3):
console.log(document.body.childNodes.length - document.body.children.length);

//Explain :
// childNodes Returns all child nodes (including strings, spaces, and lines)
//so it will be larger in number ,
//children Returns only elements (Element nodes)

//4):What is the nodeType and nodeName of the first node in document.body.childNodes?

console.log(document.body.childNodes[0].nodeType); //3 
console.log(document.body.childNodes[0].nodeName); //#text

//Is the first paragraph a sibling of the second, or a descendant?
const section = document.body.children[1].children[0];
const p1 = section.children[0];
const p2 = section.children[1];
console.log(p1 === p2.previousElementSibling)//true ,Then they are siblings ,
//Also they have the same parent node (section)

//5):
//Twist:
//Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin

console.log(document.body.childNodes)//[text, header, text, main, text, script]
//Yes there is unexpected text nodes because spaces and new line between elements 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Task 2: Synthetic DOM Injection

// <div class="card" data-role="admin"> 
// <h2>Access Panel</h2> 
// <p>Authenticated</p>
// </div>

const div =document.createElement('div');
div.classList.add('card');

const h2 = document.createElement('h2');
h2.textContent = "Access Panel";

const p = document.createElement('p');
p.textContent = 'Authenticated';

div.insertAdjacentElement('afterbegin',h2);
div.insertAdjacentElement('beforeend',p);

document.body.append(div);

div.dataset.role = 'admin';
console.log(div.dataset.role)//admin

//div.style.backgroundColor='red'; 

p.textContent = 'Welcome back, Admin';

div.classList.add('authenticated', 'highlight');

console.log(div.classList); //['card', 'authenticated', 'highlight', value: 'card authenticated highlight']

if (div.classList.contains('card')) 
  div.classList.remove('card');

console.log(div.classList)//['authenticated', 'highlight', value: 'authenticated highlight']

console.log(div.innerHTML) //<h2>Access Panel</h2><p>Welcome back, Admin</p>

