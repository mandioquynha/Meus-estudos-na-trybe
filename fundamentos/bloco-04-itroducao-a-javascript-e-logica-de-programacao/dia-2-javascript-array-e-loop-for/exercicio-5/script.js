<<<<<<< HEAD
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

=======
>>>>>>> 22e64fd677b0cd25584a29e217d4d7e17bdbba26
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = 0;
for(var index = 0; index < numbers.length; index +=1) {
   if (numeroMaior < numbers[index]) {
       numeroMaior = numbers[index]
    }
}
   console.log(numeroMaior);