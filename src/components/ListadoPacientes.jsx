import { useEffect } from 'react'
import Patient from "./Patient";

function ListadoPacientes({patients,setPatient,removePatient}) {
    return (<div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
        {patients && patients.length ? (
            <>
                <h2 className="font-black text-center text-3xl">Patient list</h2>
                <p className="text-center text-xl mt-5 mb-10">
                    Manage your <span className="text-indigo-600 font-bold">patients and dates</span>
                </p>
                {patients.map( (patient, key) =>  ( 
                    <Patient 
                        key={patient.id} 
                        patient={patient}
                        setPatient={setPatient}
                        removePatient={removePatient}
                        /> 
                    ) ) }
            </>
        ): (
            <>
                <h2 className="font-black text-center text-3xl">No patients yet</h2>
                <p className="text-center text-xl mt-5 mb-10">
                    Start by adding patients <span className="text-indigo-600 font-bold">to be displayed</span>
                </p>
            </>
        )}
        
        
    </div>);
}

export default ListadoPacientes;