async function logoutBtnHandler(event) {
    event.preventDefault();
    console.log("Click")
    
    const response = await fetch('/api/users/logout', {
        method: "POST",
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok){
        alert('You are now logged out!');
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

const logoutBtns = document.querySelectorAll("#logout")
console.log(logoutBtns)
logoutBtns.forEach(i =>i.addEventListener("click", logoutBtnHandler));