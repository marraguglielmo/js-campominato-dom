// elements
const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');
const startTxt = document.querySelector('.start-txt');
const result1 = document.querySelector('.result-1');
const result2 = document.querySelector('.result-2');
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

        if(!arrayBomb.includes(randomNumber)){
            arrayBomb.push(randomNumber);
        }
        
    }while(arrayBomb.length < numBombs);
    console.log(arrayBomb);


    
}

function getBox(indice){
    const sq = document.createElement('div');
    sq.className = 'box';
    sq.classList.add('box'+ numCell);
    sq._sqID = indice;

    sq.addEventListener('click', function(){

        //FINE GIOCO
        if(arrayBomb.includes(this._sqID)){
            sq.classList.add('red');
            const boxCollection = document.querySelectorAll('.box');
            //accendo tutte le bombe
            for(let i = 0; i < numCell; i++){
                if(arrayBomb.includes(boxCollection[i]._sqID)){
                    boxCollection[i].classList.add('red');
                    gridContainer.classList.add('disabled');
                    result1.classList.remove('hide');
                    result1.innerHTML = 'HAI PERSO';
                    result1.classList.add('txt-result1');
                    result2.innerHTML = `Punteggio: ${counter}`;
                    result2.classList.remove('hide');
                    result2.classList.add('txt-result2');
                    
                    boxCollection[i].classList.add('opacity');
                }
                
            }
            //congelo la griglia
            
        }else{
            sq.classList.add('clicked');
            counter++;
            sq.classList.add('disabled');
            if(counter === (numCell - numBombs)){
                result1.innerHTML = 'HAI VINTO!!!';
                result1.classList.add('txt-win');
                result1.classList.remoe('hide');
            }
        }
    })
    
    return sq;
}


function reset(){
    gridContainer.innerHTML = '';
    arrayBomb = [];
    counter = 0;
    gridContainer.classList.remove('disabled');
    result1.classList.add('hide');
    result2.classList.add('hide');


}