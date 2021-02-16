const deleteBtn = document.querySelectorAll('.delete-btn');

async function deleteFormHandler(event) {
    event.preventDefault();

    const id = this.dataset.id;
    console.log(id);

    const response = await fetch(`/api/inventory/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
}

deleteBtn.forEach(
    function(btn) {
        btn.addEventListener('click', deleteFormHandler);
    }
);