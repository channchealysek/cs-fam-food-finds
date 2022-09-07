const editFormHandler = async function (event) {
    event.preventDefault();
  
    const review_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
    const review_text = document.querySelector('textarea[name="review-text"]').value;
    const rating = document.querySelector('input[name="rating-value"]').value;
    console.log(review_text, rating)
    // grab id from the window
    if (review_id, review_text, rating){
      const response = await fetch(`/api/review/${review_id}`, {
        method: "PUT",
        body: JSON.stringify({
            review_text,
            rating,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok){
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
  
    const review_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/review/${review_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  };

document.querySelector("#btn-edit-review").addEventListener("click", editFormHandler)
document.querySelector("#btn-delete-review").addEventListener("click", deleteFormHandler)