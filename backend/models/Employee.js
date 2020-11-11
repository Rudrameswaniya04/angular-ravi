const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {type:String},
   dob: {type:String},
   address: {type:String},
   role: {type:String},
   salary: {type:String},
   experience: {type:String},

}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)