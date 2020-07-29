import React from "react";
import { Icon, IconProps } from "semantic-ui-react";
import { Gender, Entry, EntryProps, EntriesProps } from "../types";

const genderIconProps = {
  male: { name: "mars" },
  female: { name: "venus" },
  other: { name: "genderless" },
};

interface PatientProps {
  name: string | undefined;
  ssn: string | undefined;
  id: string | undefined;
  occupation: string | undefined;
  gender: Gender;
  entries: Entry[];
}



const EntryComponent: React.FC<EntryProps> = (props) => {
  return (
    <><p>{props.entry.date} {props.entry.description}</p>
    {props.entry.diagnosisCodes?.map((code: string) => <li key={code}>code:{code}</li>)}
    </>
  )
};

const EntriesComponent: React.FC<EntriesProps> = (props) => {
  if (!props.entries) {
    return null
  }
  return (
    <>
      {props.entries.map((entry: Entry) => (<EntryComponent key={entry.id}entry={entry}/>))}
    </>

  )
};

const PatientInfo = ({ name, ssn, occupation, gender, entries}: PatientProps) => {
  return (
    <div>
      <h2>{name} <Icon {...genderIconProps[gender] as Readonly<IconProps>} /></h2>
      <div><p>Snn: {ssn}</p></div>
      <div><p>Occupation: {occupation}</p></div>
      <div><p>Entries:</p></div>
      <EntriesComponent entries={entries}/>
    </div>
  )
}

export default PatientInfo;