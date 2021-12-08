let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = 0;
let numeroMenor = 0;
for(var index = 0; index < numbers.length; index +=1) {
   if (numeroMaior < numbers[index]) {
       numeroMaior = numbers[index]
    }
}
   console.log(numeroMaior);
   
   for(var index = 0; index < numbers.length; index +=1) {
    if (numeroMenor > numbers[index]) {
        numeroMenor = numbers[index];
     }
 }
    console.log(numeroMenor);