let user1 = 
{
    name : "Habib",
    age: 45,
    "my address": "something",
}
let user2 =
{
    name : "Habib",
    age: 45,
    "my address": "something",
    something: [20, 30, 40, 500],
    company: {
        name: "Programming Hero",
        address: {
            location: "Mirpur DOHS",
            street: "something"
        }
    },
};

const getUser = (user) => {
    return user?.company?.address?.location;
}
console.log(getUser(user1)); // undefined
console.log(getUser(user2)); // Mirpur DOHS