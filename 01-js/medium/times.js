/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let time1 = new Date().getTime()
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum+=i
    }
    let time2 = new Date().getTime()
    return (time2 - time1)/1000;
}

console.log(calculateTime(100))
console.log(calculateTime(10000))
console.log(calculateTime(1000000))
console.log(calculateTime(100000000))
console.log(calculateTime(10000000000))
