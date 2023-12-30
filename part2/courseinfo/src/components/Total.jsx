const Total = ({parts}) => {
    const exersicesTotal = parts.reduce((total, part) => total + part.exercises, 0)

    return (
      <p>Total of {exersicesTotal} exercises</p>
    )
  }

export default Total