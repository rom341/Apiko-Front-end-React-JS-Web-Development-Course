const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

const testArgs = ['sushi', 'hiking']

let logPersonNameAndInterests = (person, hobbies) => {
    console.log(person.getFullName() + 'loves: ' + hobbies.join(', '));
}; // your code here

logPersonNameAndInterests(Person, testArgs);