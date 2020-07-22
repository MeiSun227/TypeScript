import React from "react";
import ReactDOM from "react-dom";


interface CourseDetails {
  name: string;
  exerciseCount: number;
}

interface HeaderProps {
  courseName: string;
}

interface ContentProps {
  parts: CourseDetails[]
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const PartDetails: React.FC<CourseDetails> = (props) => {
  return (
    <p >
      {props.name} {props.exerciseCount}
    </p>
  )
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      {props.parts.map((part: CourseDetails) => (<PartDetails key={part.name} name={part.name} exerciseCount={part.exerciseCount} />))}
    </>
  )
}

const Total: React.FC<ContentProps> = (props) => {
  return (
    <>

      <p> Number of exercises{" "}
        {props.parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  )
}
const App: React.FC = () => {
  const courseName: string = "Half Stack application development";
  const courseParts: Array<CourseDetails> = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));