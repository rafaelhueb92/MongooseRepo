const bcrypt = require("bcrypt");

class Utils {

    comparePassword(actualPassword,encryptedPassword) {
        try {
            return bcrypt.compareSync(actualPassword, encryptedPassword);
        }
        catch (ex) {
            throw ex;
        }
    }
}

module.exports = new Utils();