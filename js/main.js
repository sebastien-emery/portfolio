// Faire en sorte de protéger son adresse mail des robots :
const mail = document.querySelector('#person-email');

const part1 = "sebemery.pro";
const part2 = Math.pow(2,6);
const part3 = String.fromCharCode(part2);
const part4 = "gmail.com"
const part5 = part1 + part3 + part4;

console.log(part5);

mail.href = "mailto:" + part5;