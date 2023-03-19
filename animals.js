const animals = {
  animals: ["dog", "cat"],
  showAnimals() {
    this.animals.map((el) => console.log(el));
  },
};

module.exports = animals;
