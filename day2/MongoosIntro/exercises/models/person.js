const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true})
// mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema

const personSchema = new Schema ({
    firstName: String,
    lastName: String,
    age: String
})
 
const Person = mongoose.model('person', personSchema)

module.exports = Person