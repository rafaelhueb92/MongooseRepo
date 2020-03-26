const { EncryptSchema } = require("./lib/types");
const schema = {
    name: String,
    senha: EncryptSchema,
    age: Number
}

const MONGO_URL = "mongodb+srv://adm:mongo123@cluster0-hbvci.mongodb.net/test?retryWrites=true&w=majority";
const db = require("./")(MONGO_URL);
const Repository = require("./lib/repository");
const utils = require("./lib/utils");
const model = db.createModel("person", schema);

db.connect();

class PersonRepo extends Repository {
    constructor() {
        super(model);
    }
}

const personRepo = new PersonRepo();
const args = {
    name: "FINAL5",
    senha: { value: "12345555" },
    age: 27
};
personRepo.insert(args).then(_ =>
    model.findOne({ name: "FINAL5" }).then(res => {
        console.log(res);
        db.disconnect();
        /* const { senha } = res;
        utils.comparePassword(senha, args.senha)
            .then(res => console.log(res))*/
    }));

