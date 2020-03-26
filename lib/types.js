const { Schema } = require("mongoose"),
    bcrypt = require("bcrypt"),
    SALT_WORK_FACTOR = 10;

const PointSchema = new Schema({
    type: {
        type: String,
        enum: ["Point"],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const EncryptSchema = new Schema({
    value: {
        type: String,
        required: true
    }
}, { _id: false });

EncryptSchema.pre("save", function (next) {

    // only hash the password if it has been modified (or is new)
    if (!this.isModified(this.value)) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(this.value, salt, (err, hash) => {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            this.value = hash;
            next();
        });
    }); 
});

module.exports = { PointSchema, EncryptSchema };