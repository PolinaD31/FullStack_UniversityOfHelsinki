const Filter = (props) => {
    return (
        <div>
            filter shown with: <input value={props.filterValue} onChange={props.onFilterChange} />
        </div>
    )
}

export default Filter