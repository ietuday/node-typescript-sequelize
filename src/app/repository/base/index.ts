import IRead = require("./../interfaces/base/Read");
import IWrite = require("./../interfaces/base/Write");
import Hero = require("./../../dataAccess/schemas/HeroSchema");

class RepositoryBase<T> implements IRead<T>, IWrite<T> {
  public _model: any;

  constructor(schemaModel: any) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: any) => void) {
        this._model.create(item).then(result => {
          callback(null, result);
       
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  
//  getAll(callback: (error: any, result: any) => void) {    
//         this._model.findAll().then(jane => {
//           callback(null, jane);       
//       })
//       .catch(err => {
//         console.log("Error", err);
//       });
           
//     //  this._model.find({}, callback)
//   }

  
  retrieve(callback: (error: any, result: any) => void) {
    this._model.findAll().then(jane => { console.log("==================",jane)
            
  })
  .catch(err => {
    console.log("Error", err);
  });
    //  this._model.find({}, callback)
  }

  update(_id: string, item: T, callback: (error: any, result: any) => void) {
   
        this._model.update( item, {  where: { id: _id }}).then(result => {
          callback(null, result);       
      })
    
      .catch(err => {
        console.log("Error", err);
      });
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    
        this._model.destroy({where: { id: _id }}).then(result => {
          callback(null, result);       
      })
     
      .catch(err => {
        console.log("Error", err);
      });
  }

  findById(_id: string, callback: (error: any, result: T) => void) {       
        this._model.findOne( {where: {
          id: _id
       }
      }).then(result => {
        callback(null, result);       
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
