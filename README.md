# simple-mongooserepo

It's a repository to simplify the mongoose Lib.

# Content

- [Quick Start](#quick-start)
  - [How To Install](#How-To-Install)
  - [Repository](#Repository)
  - [Pre requisites](#Pre-requisites)
- [How To Use](#How-To-Use)
- [Utils](#Utils)
  - [Encryption](#Encryption)

# Quick Start

# How To Install

Use npm/yarn i/add simple-mongooserepo

# Repository

https://github.com/rafaelhueb92/MongooseRepo

## Pre requisites

Have NodeJs Installed

# How To Use

Include your Mongo URL on the constructor like this:

    const mongooose = require("simple-mongooserepo")(<your Mongo URL>);

This lib is singleton, so if you need to call the lib in other part of the projetct just do that:

const mongooose = require("simple-mongooserepo")();

To Create a Model just define an Schema:

const definitions = {
name:String,
age:Number
}

To use a password encrypt just set the type your field equals "password" like this:

{ 
    ...
        password:"password"
    ...
}

const schemaOptions = {
timeStamps:true
}

const personRepo = await mongoose.createModel("person", definitions,schemaOptions)

If you Want Create a Repository just call repository file and extends into a class passing the Model:

const Person = mongoose.createRepository("person", definition, options);
const Repository = require("simple-mongooserepo/lib/repository");

class PersonRepo extends Repository{
constructor(){
super(Person)
}
}

# Utils

 Theres is a utils file that has funtions to help to use the lib,

 to use then, just code like bellow:

 const utils = require("simple-mongooserepo/lib/utils")

# Encryption

To compare the encryption just use the function comparePassword().