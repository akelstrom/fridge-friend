const deleteBtn = document.querySelectorAll('.delete-btn');

async function deleteFormHandler(event) {
    event.preventDefault();

    // Toast Alert
    const deleteErrorToast = document.querySelector('#alert-toast');
    const deleteErrorToastContent = document.querySelector('#toast-content');

    const id = this.dataset.id;
    console.log(id);

    const response = await fetch(`/api/inventory/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        window.location.reload();
    } else {
        deleteErrorToastContent.innerHTML = 'Unable to delete inventory, please try again!'
        deleteErrorToast.classList.remove('hidden');
    }
}

deleteBtn.forEach(
    function(btn) {
        btn.addEventListener('click', deleteFormHandler);
    }
);