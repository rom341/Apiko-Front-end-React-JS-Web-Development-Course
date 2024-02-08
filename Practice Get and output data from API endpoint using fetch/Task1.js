const baseUrl = "https://jsonplaceholder.typicode.com";
var resurceUrl = "/users";

var finalUrl = baseUrl + resurceUrl;
fetch(finalUrl)
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Error code: " + responce.status);
        }
        return responce.json();
    })
    .then((data) => {
        console.log("Task 1");
        console.log(data);
    })
    .catch((err) => {
        console.log("Fetch error int Task 1: " + err);
    });