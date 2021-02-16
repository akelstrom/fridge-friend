const subtractQtyBtn = document.querySelectorAll('.subtract-qty-btn');
const addQtyBtn = document.querySelectorAll('.add-qty-btn');
const updateQtyInput = document.querySelectorAll('.update-qty-input');

async function subtractQtyHandler(event) {
    event.preventDefault();

    // Toast Alert
    const updateQtyErrorToast = document.querySelector('#alert-toast');
    const updateQtyErrorToastContent = document.querySelector('#toast-content');

    const quantity = this.nextElementSibling.value;
    const id = this.dataset.id;

    const response = await fetch(`/api/inventory/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            quantity,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        updateQtyErrorToastContent.innerHTML = 'Unable to update inventory, please try again!'
        updateQtyErrorToast.classList.remove('hidden');
    }
}

async function addQtyHandler(event) {
    event.preventDefault();

    const quantity = this.previousElementSibling.value;
    const id = this.dataset.id;

    const response = await fetch(`/api/inventory/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            quantity,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert(response.statusText);
    }
}

function inputQtyHandler(event) {
    event.preventDefault();
    const that = this;
    setTimeout(async function() {
        const quantity = that.value;
        const id = that.dataset.id;

        const response = await fetch(`/api/inventory/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                quantity,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            alert(response.statusText);
        }
    }, 5000);
}

subtractQtyBtn.forEach(
    function(btn) {
        btn.addEventListener('click', subtractQtyHandler);
    }
);
addQtyBtn.forEach(
    function(btn) {
        btn.addEventListener('click', addQtyHandler)
    }
);
updateQtyInput.forEach(
    function(input) {
        input.addEventListener('input', inputQtyHandler);
    }
);