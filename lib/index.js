const mongoose = require("mongoose"),
    { model } = mongoose;

class db {

    constructor(mongoURL, bcrypt) {
        this.mongoURL = mongoURL;
        this.bcrypt = bcrypt;
    }

    async connect() {
        try {
            await mongoose.connect(this.mongoURL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
            return true;
        } catch (ex) {
            throw ex;
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
            return true;
        } catch (ex) {
            throw ex;
        }
    }

    /**
     * 
     * @param {*} nameModel 
     * @param {*} definitions 
     * @param {*} schemaOptions
     */

    createModel(nameModel, definitions, schemaOptions) {
        try {
            const definitionSchema = require("./schema")
                .defineSchema(definitions, schemaOptions);
            return model(nameModel, definitionSchema);
        } catch (ex) {
            throw ex;
        }
    }

}

module.exports = (mongoURL, bcrypt) => this.prototype ? this.prototype :
    this.prototype = new db(mongoURL, bcrypt);