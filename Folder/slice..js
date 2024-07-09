let marks = [92,45,23,19,28]
console.log(marks.length)
let sum =0;
for(let mark of marks){
    sum += mark
}
console.log(sum/marks.length)
console.log(marks.slice(1,4))
// 1 included 4 not included
