import toast from "react-hot-toast";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailProps) {
  const { deletePatient, getPatientById } = usePatientStore();
  const handleDelete = () => {
    deletePatient(patient.id);
    toast.error('Paciente eliminado')
  };
  return (
    <div className="px-5 py-10 mx-5 my-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label={"ID"} data={patient.id} />
      <PatientDetailsItem label={"Nombre"} data={patient.name} />
      <PatientDetailsItem label={"Propietario"} data={patient.caretaker} />
      <PatientDetailsItem label={"Email"} data={patient.email} />
      <PatientDetailsItem label={"Fecha Alta"} data={patient.date.toString()} />
      <PatientDetailsItem label={"Fecha Sintomas"} data={patient.symtoms} />
      <div className="flex flex-col justify-between gap-3 mt-10 md:flex-row">
        <button
          type="button"
          className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
