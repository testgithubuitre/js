const accountId = "12278";
let accountEmail = "dak123@gmail.com";
var accountPassword = "1234";
accountCity = "Jaipur";
let accountState;


/*
prefer not to use var 
beacuse of issue in  block scope and fuctional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);