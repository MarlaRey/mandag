
let myArray = ['element1', 'element2', 'element3'];
let myPartArray = ['partElement1', 'partElement2', 'PartElement3'];




//.........................................................
// opgave 1 tilføj element4 til enden myArray
let element4

myArray.push(element4)
console.log(myArray);

// opgave 1 fjern element4 igen

myArray.pop();
console.log(myArray);

//.........................................................

// opgave 2 tilføj element4 til starten myArray

myArray.unshift(element4);
console.log(myArray);

// opgave 2 fjern element4 igen

myArray.shift[element4]
console.log(myArray);

//.........................................................

let myFruits2 = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
let myVegetables3 = ['salat', 'blomkål', 'spidskål', 'agurk'];


/* opgave 3 splice()
 tilføj mandarin og fersken efter pære i myFruits
 */



myFruits2.splice(1, 0, "mandarin", "fersken");

console.log(myFruits2);

// opgave 3 fjern mandarin og fersken igen


myFruits2.splice(2, 2);

console.log(myFruits2);

//.........................................................

/* opgave 4 slice()
træk blomkål og spidskål ud af arrayen myVegetables
og ind i en ny array der hedder myCabbage*/

let myVegetables2 = ['salat', 'blomkål', 'spidskål', 'agurk'];
let myCabbage = myVegetables2.slice(1,2)



console.log(myCabbage);

//.........................................................
/* opgave 5 concat()
 sæt arrays myFruits og myVegetables sammen i en ny array der hedder myYummies
 */
 let myFruits = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
 let myVegetables = ['salat', 'blomkål', 'spidskål', 'agurk'];
 let myYummies = myFruits.concat(myVegetables);
// din kode her...



console.log(myYummies);

//.........................................................

/* opgave 6 sort()
 sorter array  myYummies fra opgave 5
 */


myYummies.sort();



console.log(myYummies);

/* opgave 6 reverse()
 vend rækkefølgen på  array  myYummies fra opgave 6
 */

myYummies.reverse();


console.log(myYummies);

//.........................................................

/* opgave 7 map()
 brug map funktionen på myNumbers, og skab en ny array, der hedder myNextNumbers hvor alle tal er 7 større end 
 tallene i myNumbers. brug igen map funktionen på din nye array, myNextNumbers. og skab en ny array
  der hedder myLastNumbers der indeholder tal der er 12 gange så store som tallene i myNextNumbers.
 */
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let MyNextNumbers = myNumbers.map((x) =>{
    return x * 7;
})

// din kode her...
console.log(myNumbers);
console.log(MyNextNumbers);

//.........................................................
/* opgave 8 filter()
skriv en kode der kan give os en ny array, udfra myNames, hvor navnet keld ikke findes i.
*/
const myNames = ['keld', 'søren', 'jens', 'tine', 'keld', 'ib', 'lene', 'keld', 'frederikke', 'line', 'kurt'];
const result = myNames.filter(IngenKeld);

function IngenKeld(name){
    if (name === 'keld'){
        return name;
}
}
console.log(result);

/* Det virker modsat?! Jeg ved ikke hvad jeg skal gøre, forsøgte at kopiere eksemplet med aldre
*/


//.........................................................


