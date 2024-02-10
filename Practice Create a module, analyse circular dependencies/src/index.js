import User from "./services/user.js";

import { emailReg, phoneReg, someName as urlReg } from "./constants/regex.js";

const testUserList = [
  {
    name: "Max",
    email: "Max@gmail.com",
    phoneNumber: "0999",
    businessSite: "google.com"
  },
  {
    name: "John",
    email: "John@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "http/google.com"
  },
  {
    name: "Alex",
    email: "Alex@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Mike",
    email: "Mike.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com"
  },
  {
    name: "Ben",
    email: "Ben.com",
    phoneNumber: "qwejviep",
    businessSite: "https://google.com"
  }
];

const resultUserList = [];

for (const user of testUserList) {
  if (user.email.match(emailReg)
    && user.phoneNumber.match(phoneReg)
    && user.businessSite.match(urlReg)) {

    const userToPush = new User(user.name, { email: user.email, phoneNumber: user.phoneNumber, businessSite: user.businessSite });
    resultUserList.push(userToPush);
  }
}

console.log(resultUserList);
