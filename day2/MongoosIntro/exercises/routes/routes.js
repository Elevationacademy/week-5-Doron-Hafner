const express = require('express')
const router = express.Router()
const Person = require('../models/person')

router.post('/person', function (req, res){
    let p1 = new Person ({...req.body})
    p1.save()
        .then(p => res.send(p))
        .catch(err => res.send(err))
})

router.put('/person/:id', function(req, res) {
    let id = req.params.id
    Person.findByIdAndUpdate(id, {age: 80}, { new: true }, function(err, person) {
        res.end()
    })
})

router.delete('/apocalypse', function(req, res) {
    Person.deleteMany({},err => console.log(err))
    res.end()
})

// router.put('/person/:id', function (req, res){
//     const { id } = req.params
//     const { prop, value } = req.body
// })

module.exports = router



