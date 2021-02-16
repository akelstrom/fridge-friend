const currentDate = new Date();
const expirationDate = new Date(2021, 01, 16);
const difference = (expirationDate - currentDate) / (1000*60*60*24);
//const differenceFormatted = difference / ;
console.log(currentDate);
console.log(expirationDate);
console.log(difference);
//console.log(differenceFormatted);
function testEmail() {
    if (difference <= 3 && difference > 0) {
        console.log('Expiring soon!');
    } else if (difference <= 0) {
        console.log('Expired!');
    } else {
        console.log('Food is still fresh!');
    }
};
testEmail();