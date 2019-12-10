import IRead = require("./../interfaces/base/Read");
import IWrite = require("./../interfaces/base/Write");
import IHeroModel = require("./../../model/interfaces/HeroModel");

class RepositoryBase<T> implements IRead<T>, IWrite<T> {
  private _model: any;

  constructor(schemaModel: any) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: any) => void) {
    this._model
      .sync({ force: true })
      .then(res => {
        this._model.create(item).then(jane => {
          callback(null, jane);
        });
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  retrieve(callback: (error: any, result: any) => void) {
    this._model
      .sync({ force: true })
      .then(res => {
        this._model.find({}, callback);
      })
      .catch(err => {
        console.log("Error", err);
      });
    //  this._model.find({}, callback)
  }

  update(_id: string, item: T, callback: (error: any, result: any) => void) {
    this._model
      .sync({ force: true })
      .then(res => {
        this._model.update({ id: _id }, item, callback);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._model
      .sync({ force: true })
      .then(res => {
        this._model.remove({ id: _id }, err => callback(err, null));
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    this._model
      .sync({ force: true })
      .then(res => {
        this._model.findById(_id, callback);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  // private toObjectId (_id: string) : mongoose.Types.ObjectId {
  //     return mongoose.Types.ObjectId.createFromHexString(_id)
  // }
}

export = RepositoryBase;
