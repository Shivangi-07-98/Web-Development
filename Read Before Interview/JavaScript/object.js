// node object.js

// object key colon value ka pair hota hai
Details = {
    Firstname: "Shivangi",
    Lastname: "Kumari",
    Profession: "Software Engineer"
}

// console.log(Details);
for(let key in Details){
    console.log(key, " ", Details[key]);
}