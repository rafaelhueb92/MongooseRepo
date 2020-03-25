  
class Repository {
    constructor(model) {
      this.model = model;
    }
  
    async list(filter = {}) {
      try {
        const result = await this.model.find(filter);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async findOne(args) {
      try {
        const result = await this.model.findOne(args);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async findById(_id) {
      try {
        const result = await this.model.findById(_id);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async insert(args) {
      try {
        const Model = this.model;
        const ModelSaved = await new Model(args).save();
        return ModelSaved;
      } catch (ex) {
        throw ex;
      }
    }
  
    async update(where,args) {
      try {
        const result = await this.model.findOneAndUpdate(
          where,
          JSON.parse(JSON.stringify(args))
        );
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  
    async delete(where) {
      try {
        const result = await this.model.findOneAndDelete(where);
        return result;
      } catch (ex) {
        throw ex;
      }
    }
  }
  
  module.exports = Repository;