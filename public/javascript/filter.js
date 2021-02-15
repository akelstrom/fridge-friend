//form contents for adding an item will go here

async function filterFormHandler(event) {
  event.preventDefault();

  const category_id = document.querySelector('button[name="category_name"]').value;


  const response = await fetch(`/inventory/category/:id`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};



document.getElementById("fruit").addEventListener("click", filterFormHandler);
