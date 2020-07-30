import React from "react";
import { Icon, IconProps } from "semantic-ui-react";
import { Entry, EntryProps, EntriesProps, PatientProps } from "../types";

const genderIconProps = {
  male: { name: "mars" },
  female: { name: "venus" },
  other: { name: "genderless" },
};

const EntryComponent: React.FC<EntryProps> = (props) => {
  if (props.entry.diagnosisCodes !== undefined) {
    const diagnoseList: string[] | undefined = props.entry.diagnosisCodes?.map((code: string) => `${code} ${props.diagnoses[code].name}`)
    return (
      <>
        <p>{props.entry.date} {props.entry.description}</p>
        {diagnoseList?.map((diagnoseRow: string) => <li>{diagnoseRow}</li>)}
      </>
    )
  } else {
    return (
      <>
        <p>{props.entry.date} {props.entry.description}</p>
      </>
    )
  }

};

const EntriesComponent: React.FC<EntriesProps> = (props) => {
  if (!props.entries) {
    return null
  }
  return (
    <>
      {props.entries.map((entry: Entry) => (<EntryComponent key={entry.id} entry={entry} diagnoses={props.diagnoses} />))}
    </>
  )
};

const PatientInfo = ({ name, ssn, occupation, gender, entries, diagnoses }: PatientProps) => {
  return (
    <div>
      <h2>{name} <Icon {...genderIconProps[gender] as Readonly<IconProps>} /></h2>
      <div><p>Snn: {ssn}</p></div>
      <div><p>Occupation: {occupation}</p></div>
      <br/>
      <div><h3>Entries:</h3></div>
      <br/>
      <EntriesComponent entries={entries} diagnoses={diagnoses} />
    </div>
  )
}

export default PatientInfo;