const person = {
  name: "Lee",
  address: {
    zipCode: "03068",
    city: "Seoul",
  },
};

const {
  address: { city, zipCode },
} = person;
console.log(city); // 'Seoul'
console.log(zipCode); // 03068
