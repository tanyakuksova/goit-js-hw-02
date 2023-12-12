// function checkForName(fullName, firstName) {
//     const fl = fullName.toLowerCase();
//     const fn = firstName.toLowerCase();
// //   fullName.toLowerCase().includes(firstName.toLowerCase()) ? true : false;
// }

// checkForName("Caty Stars", "cAtY");


// task 2

// function calculateTotal(number) {
//     let count = 1;
//     let total = 0;
//   while (count <= number) {
//       total = total + count;
//       count++;
//   }
//   return total;
// }

// console.log(calculateTotal(3));

// task3

// Дано число n = 1000.
//  Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
//  Яке число вийде?
//  Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
// let n = 1000;
// let num = 0;

// 1.
// function calculate(number, pattern, divider) {
//     let n = number;
//     let num = 0;
//     while (n / divider > pattern) {
//         n /= divider;
//         num++;
//     }
//     return num;
// }
//  console.log(calculate(1000,10,4))


// 2.
// function calculate(number) {
//     let n = number;
//     let num = 0;
//     for (; n / 2 > 50; num++) {
//         n /= 2;
//         console.log(num);
//     }
//     return num;
// }
// console.log(calculate(1000))


// function calculateEvenTotal(number) {
//    let total = 0;
//   for(let count = 1; count <= number; count++) {
//     if(count%2===0){
//       total += count;
//     }
//   }
//   return total;
// }

// console.log(calculateEvenTotal(8))


function findNumber(start, end, divisor) {
    for (let i = start; start <= end; i++) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

console.log(findNumber(2,6,5))