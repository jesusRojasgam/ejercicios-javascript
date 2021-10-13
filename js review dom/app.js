window.onload=function(){
    addUl();
    addObjectList();
}

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
function addUl(){
    let newUl=document.createElement('div');
    let body=document.querySelector('body');
    
    countries.map((pais)=>{
        let newLi=document.createElement('li');
        let text=document.createTextNode(pais);
        newLi.appendChild(text);
        newUl.appendChild(newLi);
    });
    
    body.appendChild(newUl);
}

//////////7
document.querySelector('.fn-remove-me').remove();
/////////////
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let pintar=document.querySelector('[data-function="printHere"]');

let carsHTML=cars.map((car)=>
    `<ul>
        <li>${car}</li>
    </ul>
    `
).join("");
pintar.innerHTML=carsHTML;

///////////

 const countriesTwo = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1', id:0}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2', id:1},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3', id:2},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4', id:3},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5', id:4}
];
///////
function addObjectList(){
    let newUl=document.createElement('ul')
    let body=document.querySelector('body');
    
    countriesTwo.map((countrie)=>{
        let newDiv=document.createElement('div');
        let newH4=document.createElement('h4');
        let newImg=document.createElement('img');
        newH4.appendChild(document.createTextNode(countrie.title));
        newImg.src=`${countrie.imgUrl}`;
        newDiv.appendChild(newH4);
        newDiv.appendChild(newImg);
        newUl.appendChild(newDiv);
    });
    body.appendChild(newUl);
}  

//TODO
/* function borrarUltimo(lista){
    
    lista.pop();
    console.log(lista);
    
} */
let primero=countriesTwo.find(id===0)

document.querySelector('.eliminar-ultimo').addEventListener('click',countriesTwo.pop());

document.querySelector('.eliminar-primero').addEventListener('click',countriesTwo.splice(primero,1));