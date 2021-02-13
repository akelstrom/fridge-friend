//form contents for adding an item will go here

const addItemFormHandler = async function (event) {
  event.preventDefault();

  const item = document.querySelector('input[name="TBD"]').value;
  const qty = document.querySelector('input[name="TBD"]').value;
  const category = document.querySelector('input[name="TBD"]').value;
  const expDate = document.querySelector('input[name="TBD"]').value;

  await fetch(`/inventory`, {
    method: "PUT",
    body: JSON.stringify({
      item,
      qty,
      category,
      expDate,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Success!");
  document.location.replace("");
};