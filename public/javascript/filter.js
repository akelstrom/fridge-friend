//filter by category

async function filterFormHandler(event) {
  event.preventDefault();

  const category_id = document.querySelector('button[name="category_name"]').value;
  
  const response = await fetch(`api/categories/1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  if (response.ok) {
    console.log("you did it bitch")
    document.location.reload("/dashboard");
  } else {
    alert(response.statusText);
  }
};


document.getElementById("fruit").addEventListener("click", filterFormHandler);
document.getElementById("veggies").addEventListener("click", filterFormHandler);
