//  async function deleteRestaurantHandler(event){
    //  //event.preventDefault();
    //  let checkDelete = event.target.textContent.trim();
    //  let restaurant_id;
    //  const btnClicked = event.target.id
    //  console.log(btnClicked)
    //  if (checkDelete === "Delete"){
    //     restaurant_id = event.target.getAttribute("data-id")
    //  }
    
    // const url = `/api/restaurant/${restaurant_id}`
    // const response = await fetch(url, {
    //     method: "DELETE"
    // })
    // if (response.ok){
    //     alert("Post Deleted");
    //     document.location.replace('/dashboard');

    // } else {
    //     alert(response.statusText)
    // }

//  }
// document.addEventListener('click', deleteRestaurantHandler)  

// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement; 
// }

// var ul = document.getElementById('btn-grud');
//   ul.onclick = function(event) {
// var target = getEventTarget(event);
//   console.log(target.innerText);
//   console.log(target.id)
// };
