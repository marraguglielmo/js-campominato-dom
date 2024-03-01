# Campo Minato

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Svolgimento

#### **PLAY**

1. salvo il bottone e il container in una costante
2. resetto il container e svuoto l'array delle bombe
3. genero le bombe

#### **CLICK**

1. al click del bottone genero la griglia aggiungendo i box con un ciclo for
2. quando clicco un box, controllo se contiene la bomba <br>
   VERO -->
   - Fine gioco <br>
     FALSO -->
   - aggiungo la classe con il colore
   - incremento il contatore
   - verifico se il punteggio corrisponde a `(numCell - numBombs)`
3.

### Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

accendere tutte le bombe quando si perde //con un querySelectorAll prendo tutte le celle e le confronto con l'array
