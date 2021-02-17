//filter by category

const filterButtons = document.querySelectorAll('button[name=category_name]');

async function filterFormHandler(event) {
  event.preventDefault();

  const category_id = event.currentTarget.value
  console.log(category_id)

  if(category_id === "0") {
    location.replace("/dashboard");
  } 
  else {
    location.replace("/dashboard?category=" + category_id);
  }

};

filterButtons.forEach(
  function(button) {
    button.addEventListener("click", filterFormHandler);
  }
)

