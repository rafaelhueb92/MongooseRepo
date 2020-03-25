const mongoose, { Schema, model } = require("mongoose");

class db {
    constructor(mongoURL) {
        this.mongoURL = mongoURL;
    }

    async connect() {
        try {
            await mongoose.connect(this.mongoURL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                });
            console.log("MongoDB connectado");
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("MongoDB desconnectado");
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }

    /**
     * 
     * @param {*} nameModel 
     * @param {*} definitions 
     * @param {*} schemaOptions
     */

    createModel(nameModel, definitions,schemaOptions) {
        try {
            const definitionSchema = new Schema(definitions,schemaOptions);
            return model(nameModel, definitionSchema);
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }

}

module.exports = (mongoURL) => this.prototype ? this.prototype : this.prototype = new db(mongoURL);