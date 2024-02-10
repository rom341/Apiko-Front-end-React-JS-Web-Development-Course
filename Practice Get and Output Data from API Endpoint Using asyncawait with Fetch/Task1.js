async function fetchAlbums() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
        console.log("Task 1");
        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }
        const responseJson = await response.json();
        console.log("Result: ", responseJson);
    }
    catch (error){
        console.log("Request Error: ", error);
    }
}

fetchAlbums();