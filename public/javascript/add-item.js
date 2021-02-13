//form contents for adding an item will go here

const addItemFormHandler = async function (event) {
  event.preventDefault();

  const item = document.querySelector('').value;
  const qty = document.querySelector('').value;
  const category = document.querySelector('').value;
  const expDate = document.querySelector('').value;

  await fetch(``, {
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