import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import { useStateValue, getPatientById, setDiagnosisList } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient, Diagnosis, HealthCheckEntry } from "../types";
import PatientInfo from "../components/Patient";
import { Button } from "semantic-ui-react";
import AddEntryModal from "../AddEntryModal";



const PatientInfoPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [{ patients, diagnoses }, dispatch] = useStateValue();

    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | undefined>();
    const openModal = (): void => setModalOpen(true);

    let patient = { ...patients[id] };
    useEffect(() => {
        const fetchPatientList = async () => {
            try {
                const { data: patientFromApi } = await axios.get<Patient>(
                    `${apiBaseUrl}/patients/${id}`
                );
                dispatch(getPatientById(patientFromApi));
            } catch (e) {
                console.error(e);
            }
        };
        const fetchDiagnosesList = async () => {
            try {
                const { data: diagnosesFromApi } = await axios.get<Diagnosis[]>(
                    `${apiBaseUrl}/diagnoses`
                );
                dispatch(setDiagnosisList(diagnosesFromApi));
            } catch (e) {
                console.error(e);
            }
        };
        fetchPatientList();
        fetchDiagnosesList();
    }, [id, dispatch]);

    const closeModal = (): void => {
        setModalOpen(false);
        setError(undefined);
    };

    const submitNewEntry = async (values: HealthCheckEntry) => {
        try {
            const { data: patientFromApi } = await axios.post<Patient>(
                `${apiBaseUrl}/patients/${id}/entries`, values
            );
            dispatch(getPatientById(patientFromApi));
            closeModal();
        } catch (e) {
            console.error(e.response.data);
            setError(e.response.data.error);
        }
    }
    return (
        <div>
            <PatientInfo name={patient.name} ssn={patient.ssn} id={patient.id} occupation={patient.occupation} gender={patient.gender} entries={patient.entries} diagnoses={diagnoses} />
            <div>
                <AddEntryModal
                    modalOpen={modalOpen}
                    onSubmit={submitNewEntry}
                    error={error}
                    onClose={closeModal}
                />

                <Button onClick={() => openModal()}>Add New Entry </Button>
            </div>
        </div>
    )
}

export default PatientInfoPage;