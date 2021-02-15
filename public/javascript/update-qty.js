const subtractQtyBtn = document.querySelectorAll('#subtract-qty-btn');
const addQtyBtn = document.querySelectorAll('#add-qty-btn');
const updateQtyInput = document.querySelectorAll('#update-qty-input');

async function subtractQtyHandler(event) {
    event.preventDefault();

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

    if (response.ok) {
        console.log('Updated!');
    } else {
        alert(response.statusText);
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

    if (response.ok) {
        console.log('Updated!');
    } else {
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

        if (response.ok) {
            console.log('Updated!');
        } else {
            alert(response.statusText);
        }
    }, 3000);  
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