async function newFormHandler(event) {
  event.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked').value;
  const review_text = document
    .querySelector('textarea[name="review-text"]')
    .value.trim();

  const restaurant_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log("restaurant_id: " + restaurant_id);
  console.log("rating: " + rating);
  console.log("review_text: " + review_text);

  if (rating && review_text) {
    const response = await fetch(`/api/review`, {
      method: "POST",
      body: JSON.stringify({
        review_text,
        rating,
        restaurant_id,
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
  } else {
    alert("Make sure to leave a review AND a rating!")
  }
}

document.querySelector(".form").addEventListener("submit", newFormHandler);
