// elements
const gridContainer = document.querySelector('.container');
const btn = document.querySelector('button');
const startTxt = document.querySelector('.start-txt');
const arrayCell =[100, 81, 49];
const arrayBomb = [];
const numBombs = 16;
let numCell;
let counter;

btn.addEventListener('click', start);


// FUNCTIONS ///////////

function start(){
    startTxt.classList.add('hide');
    gridContainer.classList.remove('hide');
    
    reset();
    
    const difficult = document.getElementById('difficult').value;
    numCell = arrayCell[difficult];

    // do{

    // }

    getRandomNumber();
    console.log(getRandomNumber());
    
    for(let i = 1; i <= numCell; i++){
        const square = getBox(i);
        gridContainer.append(square);

        
    }
}

function getBox(indice){
    const sq = document.createElement('div');
    sq.className = 'box';
    sq.classList.add('box'+ numCell);
    sq.innerHTML = indice;

    sq.addEventListener('click', function(){
        sq.classList.add('clicked');
        console.log(this.innerHTML);
    })
    
    return sq;
}

function getRandomNumber(){
    const randomNumber = Math.ceil(Math.random() * numCell);
    return randomNumber;
}


function reset(){
    gridContainer.innerHTML = '';
}