const Filter = (props) => {
    return (
        <div>
            find countries <input value={props.filterValue} onChange={props.onFilterChange} />
        </div>
    )
}

export default Filter