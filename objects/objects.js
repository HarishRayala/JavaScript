var user={
    Name: "Rayala Harish",
    age: 24,
    gender: "Male",
    city: "Visakhapatnam",
    Hobbies: ["art","Travelling"]
};
user["son"]="Hardik"; // to add the values
console.log(user);

console.log(user["Name"]); //to print the sinle value

user["Name"]="Rayala Kameswara rao"; // to change the values
user["age"]=55;
user["city"]="vizag";
user["son"]="Rayala Harish"
console.log(user);
