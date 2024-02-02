var convert = function (bytes) {
    const mb = bytes / 1024 / 1024;
    return mb.toFixed(2) + " Mb";
};


const bytes = 10000;
const result = convert.call(null, bytes);
console.log(result);