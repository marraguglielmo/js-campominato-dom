// elements
const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');
const startTxt = document.querySelector('.start-txt');
const arrayCell =[100, 81, 49];
let arrayBomb = [];
const numBombs = 16;
let numCell;
let randomNumber = null;
let counter = 0;

btn.addEventListener('click', start);


// FUNCTIONS ///////////

function start(){
    startTxt.classList.add('hide');
    gridContainer.classList.remove('hide');
    
    reset();
    
    const difficult = document.getElementById('difficult').value;
    numCell = arrayCell[difficult];

    for(let i = 1; i <= numCell; i++){
        const square = getBox(i);
        gridContainer.append(square);
    }


    do{
        randomNumber = Math.ceil(Math.random() * numCell);
        // console.log(randomNumber);

        if(!arrayBomb.includes(randomNumber)){
            arrayBomb.push(randomNumber);
        }
        console.log(arrayBomb);
        
    }while(arrayBomb.length < numBombs);


    
}

function getBox(indice){
    const sq = document.createElement('div');
    sq.className = 'box';
    sq.classList.add('box'+ numCell);
    sq._sqID = indice;

    sq.addEventListener('click', function(){
        console.log(this._sqID);

        if(arrayBomb.includes(this._sqID)){
            sq.classList.add('red');
            console.log("hai perso");
            //FINE GIOCO
            //accendo tutte le bombe
            //congelo la griglia
        }else{
            sq.classList.add('clicked');
            counter++;
            console.log(counter);
            console.log("continua");
        }
    })
    
    return sq;
}


function reset(){
    gridContainer.innerHTML = '';
    arrayBomb = [];
}