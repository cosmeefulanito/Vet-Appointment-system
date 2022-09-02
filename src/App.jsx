import  { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});


  useEffect( () => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS);
      // console.log("paciente localstorage", patientsLS)
    }
    getLS();
  }, [] );

  useEffect( () => {
    // console.log("Componente paciente listo o Cambio pacientes");
    localStorage.setItem('patients', JSON.stringify(patients) )
  },[patients])

  const removePatient = (id) => {
    const filterPatients = patients.filter( (patient) => id !== patient.id )
    setPatients(filterPatients);
  }

  

  return (
    <div className="container mt-10 mx-auto">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                    
                    />
        <ListadoPacientes 
            patients={patients}
            setPatient={setPatient}
            removePatient={removePatient}
            />
      </div>      
    </div>
  )
}

export default App
