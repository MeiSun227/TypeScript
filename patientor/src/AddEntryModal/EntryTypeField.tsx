import React from "react";
import { NumberField,TextField } from '../AddPatientModal/FormField'
import { Entry} from "../types";
import { Field } from "formik";

interface Props {
    entryType: Entry
}

const entryTypeFields: React.FC<Props> = ({ entryType }) => {
    if (entryType.type === "HealthCheck") {
        return (
            <>
                <Field
                    label="healthCheckRating"
                    name="healthCheckRating"
                    component={NumberField}
                    min={0}
                    max={3}
                />
            </>
        )
    } else if (entryType.type === 'Hospital') {
        return (
            <>
                <Field
                    label="Employer Name"
                    placeholder="Employer Name"
                    name="employerName"
                    component={TextField}
                />
                <Field
                    label="Start Date"
                    placeholder="YYYY-MM-DD"
                    name="sickLeave.startDate"
                    component={TextField}
                />
                <Field
                    label="End Date"
                    placeholder="YYYY-MM-DD"
                    name="sickLeave.endDate"
                    component={TextField}
                />
            </>
        )
    }
    else return null;
}

export default entryTypeFields;