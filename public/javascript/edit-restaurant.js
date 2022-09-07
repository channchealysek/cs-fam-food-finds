const editFormHandler = async function (event) {
  event.preventDefault();

  const restaurant_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
  const restaurant_name = document.querySelector('input[name="restaurant-name"]').value;
  const restaurant_url = document.querySelector('input[name="restaurant-url"]').value;
  const restaurant_description = document.querySelector('textarea[name="restaurant-description"]').value;
  console.log(restaurant_id, restaurant_name, restaurant_url, restaurant_description)
  // grab id from the window
  if (restaurant_name, restaurant_url, restaurant_description){
    const response = await fetch(`/api/restaurant/${restaurant_id}`, {
      method: "PUT",
      body: JSON.stringify({
        restaurant_name,
        restaurant_url,
        restaurant_description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
      alert("Your restaurant post has been edited!")
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText)
    }
  } else {
    alert("Please make sure all fields are filled in")
  }
};

// delete post
const deleteFormHandler = async (event) => {
  event.preventDefault();

  const restaurant_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/restaurant/${restaurant_id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};



document.querySelector("#btn-edit").addEventListener("click", editFormHandler)
document.querySelector("#btn-delete").addEventListener("click", deleteFormHandler)
// code for dropdown cagtegory select item when clicked
const spanElstart = "<span class='mr-1 dropdownwidth'>";
const spanElend = "</span>";
const svgEl =
  "<svg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/> </svg>";
const listEl = document.querySelector("#itemCategoris");
listEl.addEventListener("click", categoryHandler);

function categoryHandler(event) {
  event.preventDefault();
  //document.reload();
  let category = event.target.textContent;
  document.getElementById("btnCategories").innerHTML =
    spanElstart + category + spanElend + svgEl;
  listEl.style.display = "";
}
