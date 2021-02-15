//form contents for adding an item will go here

async function filterFormHandler(event) {
  event.preventDefault();

  const category_id = document.querySelector('button[name="category_name"]').value;


  const response = await fetch(`/category/`, {
    method: "GET",
    body: JSON.stringify({
      category_id,
    }),
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
document.getElementById("meatSeafood").addEventListener("click", filterFormHandler);
document.getElementById("dairyEggs").addEventListener("click", filterFormHandler);
document.getElementById("drinks").addEventListener("click", filterFormHandler);
document.getElementById("condiments").addEventListener("click", filterFormHandler);
document.getElementById("misc").addEventListener("click", filterFormHandler);