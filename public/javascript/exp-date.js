function auditExpDate() {
    const expDatesEl = document.querySelectorAll('#exp-date');
    console.log(expDatesEl[0]);
    for (i = 0; i < expDatesEl.length; i++) {
        const currentDate = new Date();
        console.log(currentDate);
        const dateString = expDatesEl[i].innerText;
        console.log(dateString);
        const expDate = new Date(dateString);
        console.log(expDate);
        const difference = (expDate - currentDate) / (1000*60*60*24);
        console.log(difference);
        
        if (difference <= 3 && difference > 0) {
            console.log('Expiring soon!');
        } else if (difference <= 0) {
            console.log('Expired!');
        } else {
            expDatesEl[i].classList.remove('text-white');
            expDatesEl[i].classList.add('text-green-900');
            console.log('Food is still fresh!');
        }
    }
}

/* function auditExpDateBorder() {
    const expDatesEl = document.querySelectorAll('#exp-date');
    console.log(expDatesEl[0]);
    for (i = 0; i < expDatesEl.length; i++) {
        const currentDate = new Date();
        console.log(currentDate);
        const dateString = expDatesEl[i].innerText;
        console.log(dateString);
        const expDate = new Date(dateString);
        console.log(expDate);
        const difference = (expDate - currentDate) / (1000*60*60*24);
        console.log(difference);
        
        if (difference <= 3 && difference > 0) {
            console.log('Expiring soon!');
        } else if (difference <= 0) {
            console.log('Expired!');
        } else {
            expDatesEl[i].classList.remove('text-white');
            expDatesEl[i].classList.add('text-green-900');
            console.log('Food is still fresh!');
        }
    }
} */

auditExpDate();
//auditExpDateBorder();