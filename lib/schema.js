const bcrypt = require("bcrypt"),
    { Schema } = require("mongoose"),
    SALT_WORK_FACTOR = 10;

const _checkIfSchemaHasPassword = schema => {
    const passwordField = Object.keys(schema)
        .find(k => schema[k].toString().toLowerCase() == "password");
    schema[passwordField] = String;
    return passwordField;
}

class SchemaCS {


    defineSchema(definitions, schemaOptions) {
        //const passwordField = _checkIfSchemaHasPassword(definitions);
        const schema = new Schema(definitions, schemaOptions);

        /*if (passwordField)
            schema.pre("save", function (next) {

                // only hash the password if it has been modified (or is new)
                if (!this.isModified(passwordField)) return next();

                // generate a salt
                bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
                    if (err) return next(err);

                    // hash the password using our new salt
                    bcrypt.hash(this[passwordField], salt, (err, hash) => {
                        if (err) return next(err);

                        // override the cleartext password with the hashed one
                        this[passwordField] = hash;
                        next();
                    });
                });
            }); */
        return schema;
    }

}

module.exports = new SchemaCS();