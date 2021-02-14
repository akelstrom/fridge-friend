//form contents for adding an item will go here

async function newFormHandler(event) {
  event.preventDefault();

  const item = document.querySelector('input[name="TBD"]').value;
  const qty = document.querySelector('input[name="TBD"]').value;
  const category = document.querySelector('input[name="TBD"]').value;
  const expDate = document.querySelector('input[name="TBD"]').value;

  const response = await fetch(`/inventory`, {
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
    document.location.replace('/dashboard'); //need to check if this is right
  } else {
    alert(response.statusText);
  }
};


document.querySelector('.addItem').addEventListener('submit', newFormHandler);