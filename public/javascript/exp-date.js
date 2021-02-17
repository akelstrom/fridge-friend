function auditExpDate() {
    const expDates = document.querySelectorAll('.exp-date');
    const expDatesBorder = document.querySelectorAll('.exp-date-border');
    for (i = 0; i < expDates.length; i++) {
        const currentDate = new Date();
        const dateString = expDates[i].innerText;
        const expDate = new Date(dateString);
        const difference = (expDate - currentDate) / (1000*60*60*24);
        
        if (difference <= 3 && difference > 0) {
            expDates[i].classList.remove('text-green-500', 'text-red-500');
            expDatesBorder[i].classList.remove('border-transparent', 'border-green-500', 'border-red-500');
            expDates[i].classList.add('text-yellow-500');
            expDatesBorder[i].classList.add('border-yellow-500');
        } else if (difference <= 0) {
            expDates[i].classList.remove('text-green-500', 'text-yellow-500');
            expDatesBorder[i].classList.remove('border-transparent', 'border-green-500', 'border-yellow-500');
            expDates[i].classList.add('text-red-500');
            expDatesBorder[i].classList.add('border-red-500');
        } else {
            expDates[i].classList.remove('text-yellow-500', 'text-red-500');
            expDatesBorder[i].classList.remove('border-transparent', 'border-yellow-500', 'border-red-500');
            expDates[i].classList.add('text-green-500');
            expDatesBorder[i].classList.add('border-green-500');
        }
    }
}

auditExpDate();