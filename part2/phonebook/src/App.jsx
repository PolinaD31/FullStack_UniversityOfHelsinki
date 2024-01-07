import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsAddForm from './components/PeopleAddForm'
import Persons from './components/Persons'
import Message from './components/Message'
import numbersService from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [has, setHas] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('')

  useEffect(() => {
    numbersService.getAll()
    .then(allPersons => setPersons(allPersons))
    .catch(error => console.log(error))
  }, [])

  const messageTimeout = () => {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const personsToShow = has === '' ? persons :
    persons.filter(person => person.name.toLowerCase().includes(has.toLowerCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterPhonebook = (event) => {
    setHas(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(obj => obj.name === newName)) {
      const isConfirmed = window.confirm(`${newName} is already added to the phonebook, 
      replace the old number witha new one`)

      if (isConfirmed) {
        const person = persons.find(p => p.name === newName)
        const changedNumber = {...person, number: newNumber}

        numbersService.update(person.id, changedNumber)
        .then(returnedPerson => setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson)))
        .catch(error => {
          console.log(error.response.data.error)
          setMessageType('error')
          setMessage(error.response.data.error)
          messageTimeout()
        })

        setMessageType('notification')
        setMessage(
          `Number for ${person.name} changed to ${newNumber}`
        )
        messageTimeout()

        setNewName('')
        setNewNumber('')
      }

    } else {
      const personObj = { name: newName, number: newNumber }

      numbersService.create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))

        setMessageType('notification')
        setMessage(
          `Added ${returnedPerson.name}`
        )
        messageTimeout()

        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error.response.data.error)
        setMessageType('error')
        setMessage(error.response.data.error)
        messageTimeout()
      })
    }
  }

  const deletePerson = (person) => {
    const isConfirmed = window.confirm(`Delete ${person.name}`)

    if (isConfirmed) {
      numbersService.deletePerson(person.id)
      .then(() => {
        setPersons(persons.filter(onePerson => onePerson.id !== person.id))
        setMessageType('notification')
        setMessage(
          `Deleted ${person.name}`
        )
        messageTimeout()
      })
      .catch(error => {
        setMessageType('error')
        setMessage(
          `Information of '${person.name}' was already deleted from server`
        )
        messageTimeout()
      })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} messageType={messageType} />
      <Filter filterValue={has} onFilterChange={filterPhonebook} />
      <h2>Add a new</h2>

      <PersonsAddForm 
        addPerson={addPerson} name={newName} number={newNumber} 
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App