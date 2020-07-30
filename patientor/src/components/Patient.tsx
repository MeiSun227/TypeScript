import React from "react";
import { Icon, IconProps, Grid, Segment } from "semantic-ui-react";
import { Entry, EntryProps, EntriesProps, PatientProps } from "../types";

const genderIconProps = {
  male: { name: "mars" },
  female: { name: "venus" },
  other: { name: "genderless" },
};

const DiagnosisComponent: React.FC<EntryProps> = (props) => {
  if ((props.entry.diagnosisCodes !== undefined) && (Object.keys(props.diagnoses).length)) {
    const diagnoseList: string[] | undefined = props.entry.diagnosisCodes?.map((code: string) => `${code} ${props.diagnoses[code].name}`)
    return (
      <>
        {diagnoseList?.map((diagnoseRow: string) => <li key={diagnoseRow}>{diagnoseRow}</li>)}
      </>
    )
  } else {
    return null
  }
}

const DiagnosesComponent: React.FC<EntriesProps> = (props) => {
  if (!props.entries) {
    return null
  }
  return (
    <>
      {props.entries.map((entry: Entry) => (<DiagnosisComponent key={entry.id} entry={entry} diagnoses={props.diagnoses} />))}
    </>
  )
}

const EntryComponent: React.FC<EntryProps> = (props) => {
  console.log(props.entry)
  if (props.entry.type === "HealthCheck") {
    return (
      <>
        <Grid columns='equal'>
          <Grid.Row stretched>
            <Grid.Column >
              <Segment><p>{props.entry.date} <Icon name="user doctor" /> {props.entry.description} </p></Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  } else if (props.entry.type === "OccupationalHealthcare") {
    return (
      <>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <p>{props.entry.date} <Icon name="treatment"/> {props.entry.employerName}</p>
                <p>{props.entry.description}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  } else if (props.entry.type === "Hospital") {
    return (
      <>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <p>{props.entry.date} <Icon name="user doctor" /> {props.entry.description} </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  } else {
    return (
      <>
        <p>Unknown Entry type! Please contact customer support</p>
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
      <br />
      <div><h3>Entries:</h3></div>
      <br />
      <EntriesComponent entries={entries} diagnoses={diagnoses} />
      <DiagnosesComponent entries={entries} diagnoses={diagnoses} />
    </div>
  )
}

export default PatientInfo;