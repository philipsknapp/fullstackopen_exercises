const Part = ({part}) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
  )
}

const Total = ({parts}) => {
  let totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      <b>total of {totalExercises} exercises</b>
    </p>
  );
}

const Header = ({title}) => {
  return <h2>{title}</h2>
}

const Course = ({course}) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course;