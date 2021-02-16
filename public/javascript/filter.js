//filter by category

async function filterFormHandler(event) {
  event.preventDefault();

  const category_id = document.querySelector('button[name="category_name"]').value;
  
  console.log(category_id)
  
  const response = await fetch(`api/inventory/category/${category_id}`, {
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
document.getElementById("veggies").addEventListener("click", filterFormHandler);
