resurceUrl = "/albums";

function getAlbumId(id) {
    finalUrl = baseUrl + resurceUrl + "/" + id;
    return fetch(finalUrl)
        .then((responce) => {
            if (!responce.ok) {
                throw new Error("Error code: " + responce.status);
            }
            return responce.json();
        })
        .catch((err) => {
            console.log("Fetch error in getAlbumId in Task 4: " + err);
        });
}

function getSpecifiedAlbums(ids = []) {
    const promises = ids.map((id) => getAlbumId(id));
    return Promise.all(promises)
        .then((albumsData) => {
            return albumsData;
        })
        .catch((err) => {
            console.log("Fetch error in getSpecifiedAlbums in Task 4: " + err);
        });
}

console.log("Task 4");
getSpecifiedAlbums([1, 2, 3, 4, 5])
    .then((data) => {
        console.log(data);
    })