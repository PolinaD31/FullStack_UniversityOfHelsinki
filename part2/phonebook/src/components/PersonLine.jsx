const PersonLine = ({person, deletePerson}) => {
    return (
        <p>
        {person.name} {person.number}&nbsp;
        <button onClick={() => deletePerson(person)}>Delete</button>
        </p>
    )
}

export default PersonLine