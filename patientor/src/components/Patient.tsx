import React from "react";
import { Icon, IconProps } from "semantic-ui-react";
import { Gender } from "../types";

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
}

const PatientInfo = ({ name, ssn, occupation, gender }: PatientProps) => {
  return (
    <div>
      <h2>{name} <Icon {...genderIconProps[gender] as Readonly<IconProps>} /></h2>
      <div><p>Snn: {ssn}</p></div>
      <div><p>Occupation: {occupation}</p></div>
    </div>
  )
}

export default PatientInfo;