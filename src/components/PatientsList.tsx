import { usePatientStore } from "../store"

export default function PatientsList() {
    const {patients} = usePatientStore()
    console.log(patients)
  return (
    <div>PatientsList</div>
  )
}
