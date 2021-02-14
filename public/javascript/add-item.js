//form contents for adding an item will go here

async function newFormHandler(event) {
  event.preventDefault();

  const item_name = document.querySelector('input[name="item_name"]').value;
  const quantity = document.querySelector('input[name="quantity"]').value;
  const category_id = document.querySelector('select[name="category_name"]').value;
  const expiration_date = document.querySelector('input[name="expiration_date"]').value;

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



document.getElementById("addItem").addEventListener("click", newFormHandler);