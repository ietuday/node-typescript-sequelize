import BaseBusiness = require("./base/BaseBusiness");
import IStudentModel = require("./../../model/interfaces/IStudentModel");

interface StudentBusiness extends BaseBusiness<IStudentModel> {
    
} 
export = StudentBusiness;