//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let impar;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(var index = 0; index < numbers.length; index +=1) {
   if (numbers[index] % 2 !== 0) {
       console.log(numbers[index]);
   }
}
