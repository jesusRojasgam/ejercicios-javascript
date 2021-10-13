const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
function include(array){
for (let i = 0; i < array.length; i++) {
    array[i].include("camiseta"); {
         console.log(i)
    }
}
}
include(products)


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
function aprobado(array){
    let temp=0;
   for (let i = 0; i < array.length; i++) {
           if (array[i].T1==true && array[i].T2==true || array[i].T1==true && array[i].T3==true || array[i].T2==true && array[i].T3==true) {
            array[i].isApproved =true;

           }
           else{
            array[i].isApproved = false;
           }
           
       }
       
    for (let i = 0; i < array.length; i++) {
        for (const property in array[i]) {
            console.log(`${property}: ${array[i][property]}`);
        }
        
    } 
   
}
aprobado(alumns);



const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
for (const valus of placesToTravel) {
    console.log(valus)
    
}

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const data of alien) {
    console.log(`${data}: ${alien[data]}`)
    
}


const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let index = 0; index < placesToTravel.length; index++) {
    if (placesToTravel[index].id==11 || placesToTravel[index].id==14) {
        placesToTravel.splice(index,1);
    }
    
}
console.log(placesToTravel);

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    for (const iterator of toys) {
        if(iterator.name.includes("gato")){
            toys.splice(toys.indexOf(iterator));
        }
    }
    console.log(toys);



    const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const iterator of toys) {
    if (iterator.sellCount>15) {
        popularToys.push(iterator.sellCount);
    }
}
let mayor=0;
for (let i = 0; i < popularToys.length; i++) {
    if (popularToys[i]>mayor) {
        mayor=i;
    }
    
}
console.log(popularToys[mayor]);