const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', {useNewUrlParser: true})
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema

const personSchema = new Schema ({
    firstName: String,
    lastName: String,
    age: String
})
 const Person = mongoose.model('person', personSchema)
//  let p1 = new Person ({firstName:"David", lastName:"smith", age:25})
// p1.save()


// const computerSchema = new Schema ({
//     maker: String,
//     price: Number,
// })
//  const Computer = mongoose.model('computer', computerSchema)
//  let c1 = new Computer ({maker:"apple", price: 100})
//  let c2 = new Computer ({maker:"IBM", price: 230})
//  let c3 = new Computer ({maker:"HP", price: 400})

//  const comp = [c1, c2, c3]
//  comp.forEach(c => c.save())

// Person.find({}, function (err, people) {
    // console.log(people)
// })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())
// Person.findOneAndUpdate("5f5738fbee48fa07598dd93b", { age: 70 }, { new: true }, function (err, person) {
    // console.log(person)
// })
// Person.findByIdAndRemove("5f57608b6d96d60a57528b85", function (err, person){
//     console.log(err);
// })

//================== exercise ==================


