//const baseUrl = "https://jsonplaceholder.typicode.com";
const selectedUserId = 10;
resurceUrl = "/users/" + selectedUserId;
const thingToGetUrl = "/albums";

finalUrl = baseUrl + resurceUrl + thingToGetUrl;
fetch(finalUrl)
    .then((responce) => {
        if (!responce.ok) {
            throw new Error("Error code: " + responce.status);
        }
        else if (200 <= responce.status <= 299) {
            console.log("Responce in Task 2 is ok!");
        }
        return responce.json();
    })
    .then((data) => {
        console.log("Task 2");
        console.log(data);
    })
    .catch((err) => {
        console.log("Fetch error in Task 2: " + err);
    });