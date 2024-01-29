function findUser(initialObject) {
    var result = [];
    for (const name in initialObject) {
        if (initialObject[name].city === 'London' && initialObject[name].age > 18) {
          result.push(name);
        }
      }
    return result;
}

var users = {
    Max: { age: 23, city: 'London' },
    Mike: { age: 20, city: 'NY' },
    Alice: { age: 25, city: 'London' },
};
console.log(findUser(users));