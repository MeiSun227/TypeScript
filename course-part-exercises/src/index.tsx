import React from "react";
import ReactDOM from "react-dom";
interface HeaderProps {
  courseName: string;
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CourseBaseWithDescription extends CoursePartBase {
  description?: string
}

interface CoursePartOne extends CourseBaseWithDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CourseBaseWithDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

interface DetailProps {
  part: CoursePart
}

interface ContentProps {
  parts: CoursePart[]
}


const Header: React.FC<HeaderProps> = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const PartDetails: React.FC<DetailProps> = (props) => {
  if (props.part.name === "Fundamentals") {
    return (
      <>
        <b><p>Name: {props.part.name}</p></b>
        <p>Exercises: {props.part.exerciseCount}</p>
        <p>Description: {props.part.description}</p>
      </>
    )
  } else if (props.part.name === "Using props to pass data") {
    return (
      <>
        <b><p>Name: {props.part.name}</p></b>
        <p>Exercises: {props.part.exerciseCount}</p>
        <p>Group projects: {props.part.groupProjectCount}</p>
      </>
    )

  } else if (props.part.name === "Deeper type usage") {
    return (
      <>
        <b><p>Name: {props.part.name}</p></b>
        <p>Exercises: {props.part.exerciseCount}</p>
        <p>Description: {props.part.description}</p>
        <p>Submit link: {props.part.exerciseSubmissionLink}</p>
      </>
    )

  }
  return (<p>Oops! There was a course whose name I don't know.</p>)
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      {props.parts.map((part: CoursePart) => (<PartDetails
        key={part.name}
        part={part}
      />))}
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
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Content parts={courseParts} />
      <p>---</p>
      <Total parts={courseParts} />
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById("root"));