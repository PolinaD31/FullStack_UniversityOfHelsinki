import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = (props) => {
  return (
    <div>
        {props.courses.map(course => 
            <div key={course.id}>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            </div>
        )}
    </div>
  )
}

export default Course