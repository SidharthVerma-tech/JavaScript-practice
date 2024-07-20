// find longest word in a string
const findLongest = (str) => {
    // if trailing spaces remove them
    if(str.trim().length === 0){
        return false // means empty string
    }
    let words = str.split(' ')
    let ans = words.reduce((prev,acc)=>{
        return acc.length > prev.length ? acc : prev
    }, "")
    return ans
}
const str = "This is javascript 30 days challenge ranomelongestword"
console.log(findLongest(str))