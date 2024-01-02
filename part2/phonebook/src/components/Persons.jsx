import PersonLine from "./PersonLine"

const Persons = (props) => {
    return (
        <div>
            {props.personsToShow.map(person => <PersonLine person={person} key={person.name} deletePerson={props.deletePerson}/>)}
        </div>
    )
}

export default Persons