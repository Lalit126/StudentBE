const Record = require('../models/record.model');

const createNewRecord = async (input) => {
//  const {companyName,universityName} =input
  const rec = await Record.create(input);
  return rec;
};

const deleteRecord = async (_id) => {
  const rec = await Record.findByIdAndDelete(_id)
  return rec;
};


const searchRecords = async (searchText) => {
  console.log(searchText,'searchText');

  const regex = new RegExp(searchText,'gmi')

  const rec = await Record.find(
    {$or:
  [
    {jobTitle :{$regex: regex}},
    {universityName :{$regex: regex}},
    {specialization :{$regex: regex}},
]
})
.populate('company',['companyName','careerUrl'])
.limit(25)


   return rec;
  
};


const getAllRecords = async () => {
  const com = await Record
  .find({})
  .populate('company',['companyName','careerUrl'])
  
  return com;
};

const getPaginatedRecords = async ({next_cursor,limit=25}) => {
console.log(next_cursor,limit,'nextcursor');
  let com
if(next_cursor === 'null') {
  console.log('I am in IF LOOP');
   com = await Record
  .find({})
  .populate('company',['companyName','careerUrl'])
  .limit(limit)
  return com 
}

else {
  console.log('I am in ELSE LOOP');
  com = await Record
  .find({ _id: { $gt: next_cursor } })
  .populate('company',['companyName','careerUrl'])
  .limit(limit)
}
  
  
  return com
};

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

const deleteManyByCompanyId = async (_id) => {
  const deleted = await Record.deleteMany({company:_id})
  return deleted;
};
const getRecordsByCompanyId = async (ids) => {

  const records = await Record
  .find({ 'company': { $in: ids } })
  .populate('company',['companyName','careerUrl'])
  console.log(records,'RECORDS FROM GET RECORDS BY COMPANY ID');
  return records;
};

module.exports = {
    createNewRecord,
    deleteRecord,
    getAllRecords,
    editRecord,
    deleteManyByCompanyId,
    searchRecords,
    getPaginatedRecords,
    getRecordsByCompanyId

   
  };