async function getSkywalkers() {
    try {
        const response = await fetch("https://swapi.py4e.com/api/people/?search=Skywalker");
        console.log("Task 3");
        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }
        const responseJson = await response.json();
        const result = responseJson.results;
        console.log(result);
    }
    catch (error) {
        console.log("Request Error: ", error);
    }
}

getSkywalkers();