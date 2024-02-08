//const baseUrl = "https://jsonplaceholder.typicode.com";
resurceUrl = "/users";

const newUserObject = {
    name: "Name LastName",
    username: "UserName",
    email: "usermail@gmail.com"
}

finalUrl = baseUrl + resurceUrl;
fetch(finalUrl, {
    method: "POST",
    body: JSON.stringify(newUserObject),
    headers: { "Content-type": "application/json" }
})
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Error code: " + responce.status);
        }
        return responce.json();
    })
    .then((data) => {
        console.log("Task 3");
        console.log(data);
    })
    .catch((err) => {
        console.log("Fetch error int Task 3: " + err);
    });