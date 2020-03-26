const schema = {
    name: String,
    senha: "password",
    age: Number
}

const MONGO_URL = "";
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
    name: "Gabriel",
    senha: "1234",
    age: 27
};
personRepo.insert(args).then(_ => model.findOne({ name: "Gabriel" }).then(res => {
    const { senha } = res;
    utils.comparePassword(senha, args.senha)
        .then(res => console.log(res))
}))

