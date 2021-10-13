let sum=(a=10,b=5)=>a+b;
console.log(sum());
console.log(sum());
console.log(sum(20));
console.log(sum(20, 30));






const game = {title: 'The last us 2',
            gender: ['action', 'zombie', 'survival'],
            year: 2020}

let {title,gender,year}=game;   
console.log(title,gender,year)

const fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' }
};
let {name,race}=animalFunction();
console.log(name,race);

const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] }
let{nombre,itv}=car;
console.log(nombre,itv);
let [año1,año2,año3]=itv;
console.log(año1,año2,año3);







const pointsList = [32, 54, 21, 64, 75, 43]
let copy=[...pointsList];

const toy = {name: 'Bus laiyiar',
date: '20-30-1995',
color: 'multicolor'};
let copyToy={...toy};

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let unir=[...pointsList,pointsLis2];


const toyOther = {name: 'Bus laiyiar',
 date: '20-30-1995',
  color: 'multicolor'};

const toyUpdate = {lights: 'rgb',
 power: ['Volar like a dragon','MoonWalk']}

 let fusion={...toyOther,...toyUpdate}
 
 const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
 let cpyColors=[...colors]
 cpyColors.splice(2,1);









 const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let nombres=users.map(user=>user.name)
console.log(nombres)

let cambiarNombre=users.map((user)=>{
    if (user.name.charAt(0)==='A') {
       user.name='Anacleto';
    }
    return user.name
})
console.log(cambiarNombre)

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let ciudades=cities.map((city)=>{
    if(city.isVisited){
       return `${city.name} Visited`
    }
    else{
        return city.name
    }
})
console.log(ciudades)