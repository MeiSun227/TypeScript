import React, { useState, useCallback } from "react";
import { Grid, Button, DropdownProps, Dropdown } from "semantic-ui-react";
import { Field, Formik, Form, FormikProps } from "formik";
import { TextField, DiagnosisSelection, NumberField, EntryTypeOption } from "../AddPatientModal/FormField";
import { HealthCheckEntry, EntryType, NewEntry } from "../types";
import { useStateValue } from "../state";
import EntryTypeFields from "./EntryTypeField";

export type EntryFormValues = Omit<HealthCheckEntry, "id" | "diagnosisCodes">;

interface Props {
    onSubmit: (values: NewEntry) => void;
    onCancel: () => void;
}
const entryTypeOption: EntryTypeOption[] = [
    {
        value: EntryType.HealthCheck,
        text: "HealthCheck"
    },
    {
        value: EntryType.Hospital,
        text: "Hospital"
    },
    {
        value: EntryType.OccupationalHealthcare,
        text: "OccupationalHealthcare"
    }
]
const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
    const [{ diagnoses }] = useStateValue()

    const [entryType, setEntryType] = useState<EntryType>(EntryType.HealthCheck);

    const handleChange = (
        _e: React.SyntheticEvent,
        { value }: DropdownProps
    ): void => {
        if (value) setEntryType(value as EntryType);
    };

    const baseEntryInitials = {
        description: "",
        date: "",
        specialist: "",
    }

    let initials: NewEntry
    if (entryType === EntryType.HealthCheck) {
        initials = {
            ...baseEntryInitials,
            type: EntryType.HealthCheck,
            healthCheckRating: 0
        }
    } else if (entryType === EntryType.Hospital) {
        initials = {
            ...baseEntryInitials,
            type: EntryType.Hospital,
            discharge: {
                criteria: "",
                date: ""
            }
        }
    } else {
        initials = {
            ...baseEntryInitials,
            type: EntryType.OccupationalHealthcare,
            employerName: "",
            sickLeave: {
                startDate: "",
                endDate: ""
            }
        }
    }

    return (
        <Formik
            initialValues={initials}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validate={values => {
                const requiredError = "Field is required";
                const invalidError = "Field has invalid value";
                const errors: { [field: string]: string } = {};
                if (!values.description) {
                    errors.description = requiredError;
                }
                if (!values.date) {
                    errors.date = requiredError;
                } else {
                    const dateCheck = Date.parse(values.date)
                    if (isNaN(dateCheck)) {
                        errors.date = invalidError
                    }
                    console.log("hello world")
                    console.log(dateCheck)
                }
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                if (!values.specialist) {
                    errors.specialist = requiredError;
                }
                if (values.type === EntryType.HealthCheck) {
                    if ((values.healthCheckRating < 0) || values.healthCheckRating > 3) {
                        errors.healthCheckRating = invalidError;
                    }
                }
                if (values.type === EntryType.Hospital) {
                    if (!values.discharge) {
                        errors.discharge = requiredError
                    }
                }
                if (values.type === EntryType.OccupationalHealthcare) {
                    console.log("validating occupational healthcare")
                    if (!values.employerName) {
                        errors.employerName = requiredError
                    }
                }
                console.log(errors)
                return errors;

            }}
        >
            {({ isValid, dirty, setFieldValue, setFieldTouched, values }) => {
                return (
                    <Form className="form ui">
                        <Dropdown
                            fluid
                            selection
                            onChange={handleChange}
                            options={entryTypeOption}
                            value={entryType}
                        />
                        <Field
                            label="Desciption"
                            placeholder="Description"
                            name="description"
                            component={TextField}
                        />

                        <Field
                            label="Date"
                            placeholder="Date"
                            name="date"
                            component={TextField}
                        />
                        <Field
                            label="Specialist"
                            placeholder="Specialist"
                            name="specialist"
                            component={TextField}
                        />
                        <EntryTypeFields entryType={EntryType[values.type]} />
                        <DiagnosisSelection setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                            diagnoses={Object.values(diagnoses)}
                        />
                        <Grid>
                            <Grid.Column floated="left" width={5}>
                                <Button type="button" onClick={onCancel} color="red">
                                    Cancel </Button>
                            </Grid.Column>
                            <Grid.Column floated="right" width={5}>
                                <Button
                                    type="submit"
                                    floated="right"
                                    color="green"
                                    disabled={!dirty || !isValid}
                                >
                                    Add</Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AddEntryForm;