const MONGO_URL = "http://localhost:3000";
const mongoose = require("./lib")(MONGO_URL); // Change "./lib" to "mongoseRepo"
const Repository = require("./lib/repository");

const definition = {
    name: String,
    age: Number
};

const options = {
    timeStamps: true
}

const Person = mongoose.createRepository("person", definition, options);

class PersonRepo extends Repository{
    constructor(){
        super(Person)
    }
}