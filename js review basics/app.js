const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categorias=[];
for (const iterator of movies) {
    for (let i = 0; i < iterator.categories.length; i++) {
        
        if (!categorias.includes(iterator.categories[i])) {
            categorias.push(iterator.categories[i]);
        }
    }
}
console.log(categorias);


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let total=0;
let cantvol=0;
for (const iterator of users) {
    for (const property in iterator.favoritesSounds) {
        console.log(`${property}: ${iterator.favoritesSounds[property].volume}`);
            total+=iterator.favoritesSounds[property].volume;
            cantvol++;
    }
}
let promedio=total/cantvol;
console.log(promedio);


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sonidos={};
for (const iterator of users) {
    for (const property in iterator.favoritesSounds) {
        console.log(`${property}: ${iterator.favoritesSounds[property]}`);
         if (iterator.favoritesSounds[property] in sonidos ) {
             sonidos[iterator.favoritesSounds[property]]++;
             console.log('entre');
         }  
         else{
            sonidos[iterator.favoritesSounds[property]]=1;
            console.log('no entre');
         }
    }
}
console.log(sonidos);


arreglo=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
texto='Ajolote';
function findArrayIndex(array,text){
    for (let i = 0; i < array.length; i++) {
        if (array[i]===text) {
            return i;
        }
        
    }
}
console.log(findArrayIndex(arreglo,texto));


function rollDice(numCaras) {
    return Math.floor(Math.random() * (numCaras - 1)) + 1;
}
console.log(rollDice(6));


['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

 function swap(array,i,j){
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    console.log(array);
 }
 swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],0,2);

