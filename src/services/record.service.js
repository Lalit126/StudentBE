const Record = require('../models/record.model');

const createNewRecord = async (input) => {
  const rec = await Record.create(input);
  return rec;
};

const getAllRecords = async () =>{
  const com = await Record.find({}).populate('company', ['companyName', 'careerUrl'])
  return com;
}

const editRecord = async (input) => {
  console.log(input,'input');
  try {

    const record = await Record.findOneAndUpdate({
      _id:input._id
    },{$set:{...input}})
    ;
    console.log(record,'record');
    return record;
  }
  catch(e){
    console.log(e,'ERROR');
  }
};

const deleteRecord = async (_id) =>{
  const rec = await Record.findByIdAndDelete({_id})
  return rec;
}

const deleteManyByCompanyId = async (_id) => {
  const deleted = await Record.deleteMany({company:_id})
  return deleted;
};


module.exports = {
    createNewRecord,
    getAllRecords,
    editRecord,
    deleteRecord,
    deleteManyByCompanyId,
   
  };
  