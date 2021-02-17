function auditExpDate() {
    const expDates = document.querySelectorAll('.exp-date');
    const expDatesBorder = document.querySelectorAll('.exp-date-border');
    for (i = 0; i < expDates.length; i++) {
        const currentDate = new Date();
        const dateString = expDates[i].innerText;
        const expDate = new Date(dateString);
        const difference = (expDate - currentDate) / (1000*60*60*24);
        
        if (difference <= 3 && difference > 0) {
            expDates[i].classList.remove('text-blue', 'text-red');
            expDatesBorder[i].classList.remove('border-transparent', 'border-blue', 'border-red');
            expDates[i].classList.add('text-pink');
            expDatesBorder[i].classList.add('border-pink');
        } else if (difference <= 0) {
            expDates[i].classList.remove('text-blue', 'text-pink');
            expDatesBorder[i].classList.remove('border-transparent', 'border-blue', 'border-pink');
            expDatesBorder[i].classList.add('bg-red');
            expDatesBorder[i].classList.add('border-white');
            
        } else {
            expDates[i].classList.remove('text-pink', 'text-red-500');
            expDatesBorder[i].classList.remove('border-transparent', 'border-pink', 'border-red');
            expDates[i].classList.add('text-blue');
            expDatesBorder[i].classList.add('border-blue');
        }
    }
}

auditExpDate();