async function getPersonFilms(name) {
    const personData = await fetchSWAPI(`people/?search=${name}`);
    if (personData.count === 0) {
        throw new Error(`Person with name "${name}" not found.`);
    }

    const filmsUrls = personData.results[0].films;
    const filmsData = await Promise.all(filmsUrls.map(filmUrl => fetchSWAPI(filmUrl)));
    return {
        name: name,
        films: filmsData
    };
}

async function testGetPersonFilms() {
    console.log("Task 5");
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms ", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms ", kenobiFilms);
}

testGetPersonFilms();