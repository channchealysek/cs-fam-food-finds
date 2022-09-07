const listItemsEl = document.getElementById("list-items");

const searchHandler = async function (event) {
  event.preventDefault();

  const restaurant_name = document.querySelector("#restaurant_name").value;
  await fetch(`/api/restaurant/${restaurant_name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

const keyupHandler = async function (event) {
  event.preventDefault();
  listItemsEl.classList.toggle("flex");
  filter();
}

const focusoutHandler = async function (event) {
  event.preventDefault();
  listItemsEl.classList.add("hidden");
}

function filter() {
  var FilterValue, input, ul, li, i;
  input = document.getElementById("restaurant_name").value.toUpperCase();
  FilterValue = input;
  ul = document.getElementById("menuItemsSearch");
  li = ul.getElementsByTagName("li");

  for(i=0; i<li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
      listItemsEl.classList.remove("hidden");
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }

}

function clickHandler(event) {
  let restaurant;
  if (event.target.tagName==="A"){
    restaurant = event.target.getAttribute("href")
  }
  if (event.target.tagName ==="LI"){
    restaurant = event.target.getAttribute("data-href")
  }
  
  window.location.replace(restaurant);  
}

const searchEl = document.querySelector("#restaurant_name");
searchEl.addEventListener("keyup", keyupHandler);
searchEl.addEventListener("focusout", focusoutHandler);



document.querySelector("#menuItemsSearch").addEventListener("mousedown" ,clickHandler)
// document.querySelector("#restaurant_name").addEventListener("focus", inputHandler);
document.querySelector("#btn-search").addEventListener("click", searchHandler);
