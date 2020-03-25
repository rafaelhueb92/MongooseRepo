# MongooseRepo

It's a repository to simplify the mongoose Lib.

# Content

- [Quick Start](#quick-start)
  - [How To Install](#How-To-Install)
  - [Repository](#Repository)
  - [Pre requisites](#Pre-requisites)
- [How To Use](#How-To-Use)


# Quick Start

# How To Install

Use npm/yarn i/add mongooseRepo

# Repository

https://github.com/rafaelhueb92/MongooseRepo

## Pre requisites

Have NodeJs Installed

# How To Use

Include your Mongo URL on the constructor like this:
 
    const mongooose = require("mongooseRepo")(<your Mongo URL>);

This lib is singleton, so if you need to call the lib in other part of the projetct just do that:

 const mongooose = require("mongooseRepo")();

To Create a Model just define an Schema:

const definitions = {
  name:String,
  age:Number
}

const schemaOptions = {
  timeStamps:true
}

const personRepo = await mongoose.createModel("person", definitions,schemaOptions)

If you Want Create a Repository just call repository file and extends into a class passing the Model:

const Person = mongoose.createRepository("person", definition, options);

class PersonRepo extends Repository{
    constructor(){
        super(Person)
    }
}
