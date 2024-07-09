// fetch is used to store the output rereived from API call in promise object
// fetch returns us promise
const GITHUB_API = "https://api.github.com/users/akshaymarch7"
const user = fetch(GITHUB_API)
// user is a promise object
console.log(function(data){
    console.log(data)
})
//promise is an object repersnting eventuall comletion of async operations
