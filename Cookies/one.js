console.log(document.cookie);
// *: add cookie here it will not remove all previous cookies it will only add
document.cookie = "name=Ram";
document.cookie = "id=1";
document.cookie = "name=tommy"; //? : here name value will be overwritten
let key = prompt("Enter key");
let value = prompt("Enter value");
// document.cookie = `${key}=${value}`;    //!: here cookie not added because special characters
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;    //* : Working fine

console.log(document.cookie);
