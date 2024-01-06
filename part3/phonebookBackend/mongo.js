const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.qaael48.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personeSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personeSchema)

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('Phonebook:')
        result.forEach(person => {
          console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
      })
} else if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
      })

    person.save()
    .then(result => {
        console.log(`added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
      })
}

/*const person = new Person({
  id: 7,
  name: 'Mary Mongo',
  number: '041-41-237428'
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})
*/
