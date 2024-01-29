function printSeasonByMonth(month) {
    console.log("Input: " + month);
    switch (month) {
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            console.log("Winter");
            break;

        case "MARCH":
        case "APRIL":
        case "MAY":
            console.log("Spring");
            break;

        case "JUNE":
        case "JULY":
        case "AUGUST":
            console.log("Summer");
            break;

        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            console.log("Autumn");
            break;
    }
}

console.log("Task3");
printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
console.log();