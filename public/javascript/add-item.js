async function newFormHandler(event) {
  event.preventDefault();

  // Toast Alert
  const addItemErrorToast = document.querySelector('#alert-toast');
  const addItemErrorToastContent = document.querySelector('#toast-content');

  const item_name = document.querySelector('input[name="item_name"]').value;
  const quantity = document.querySelector('input[name="new_quantity"]').value;
  const category_id = document.querySelector('select[name="category_name"]').value;
  let expiration_date = document.querySelector('input[name="expiration_date"]').value;
  if (expiration_date === '') {
    expiration_date = null;
  }

  const response = await fetch(`/api/inventory`, {
    method: "POST",
    body: JSON.stringify({
      item_name,
      quantity,
      category_id,
      expiration_date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (response.ok) {
    document.location.reload();
  } else {
    addItemErrorToastContent.innerHTML = 'Please complete all fields!'
    addItemErrorToast.classList.remove('hidden');
  }
};

document.getElementById("addItem").addEventListener("click", newFormHandler);