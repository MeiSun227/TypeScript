import React from "react";
import { NumberField, TextField } from '../AddPatientModal/FormField'
import { Entry, EntryType } from "../types";
import { Field } from "formik";

interface Props {
    entryType: EntryType
}

const EntryTypeFields: React.FC<Props> = ({ entryType }) => {
    if (entryType === "HealthCheck") {
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
    } else if (entryType === 'OccupationalHealthcare') {
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
    } else if (entryType === 'Hospital') {
        return (
            <>
                <Field
                    label="Date"
                    placeholder="YYYY-MM-DD"
                    name="discharge.date"
                    component={TextField}
                />
                <Field
                    label="Criteria"
                    placeholder="Criteria"
                    name="discharge.criteria"
                    component={TextField}
                />
            </>
        );
    } else {
        return null;
    }
}

export default EntryTypeFields;