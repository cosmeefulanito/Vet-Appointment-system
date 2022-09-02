import  { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({patients, setPatients, patient,setPatient}) {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);
    
    
    useEffect(()=> {
        if(Object.keys(patient).length > 0){
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSymptoms(patient.symptoms);
        }
        
    }, [patient])
    const generarId = () => {
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substr(2);
        return fecha + random;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validamos formulario
        if([name, owner, email, date,symptoms].includes('')){
            setError(true);
            return;
        }
        setError(false);

        // Patient object
        const objectPatient = {
            name,
            owner, 
            email, 
            date,
            symptoms
            
        };
        
        if(patient.id){
            // edit patient
            objectPatient.id = patient.id;
            // console.log("Objeto paciente ", objectPatient);
            // console.log(" paciente ", patient);
            const patienstUpdate = patients.map( patientState => patientState.id === patient.id 
                            ? objectPatient : patientState);
            setPatients(patienstUpdate);
            setPatient({});
        }else{
            // new patient
            objectPatient.id = generarId();            
            setPatients([...patients,objectPatient]); // setPatient(objectPatient); //overwritte object !¡
        }

        setName('');
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')
        
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Patients tracking</h2>
            <p className="text-lg mt-5 text-center mb-10">Add patients and <span className="text-indigo-600 font-bold">manage them</span></p>
            {/* patron tradicional props */}
            {/* {error && <Error mensaje="Todos los campos son obligatorios"/> } */} 
            {error &&   <Error>
                            <div>
                                <p>* All fields are required *</p>
                            </div>
                        </Error> }
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
                <div className="mt-5">
                    <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Pet name</label>
                    <input type="text"
                            placeholder="Pet name"
                            id="name"
                            className="border-2 w-full p-2 mt-2 rounded-md"
                            value={name}
                            onChange={ (e) => setName(e.target.value)} />
                </div>                
                <div className="mt-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner name</label>
                    <input type="text"
                            placeholder="Owner name"
                            id="owner"
                            className="border-2 w-full p-2 mt-2 rounded-md"
                            value={owner}
                            onChange={ (e) => setOwner(e.target.value)} />
                </div>
                <div className="mt-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
                    <input type="text"
                            placeholder="Email Owner"
                            id="email"
                            className="border-2 w-full p-2 mt-2 rounded-md"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-5">
                    <label htmlFor="discharge_date" className="block text-gray-700 uppercase font-bold">Discharge date</label>
                    <input type="date"
                            id="discharge_date"
                            className="border-2 w-full p-2 mt-2 rounded-md"
                            value={date}
                            onChange={ (e) => setDate(e.target.value)} />
                </div> 
                <div className="mt-5">
                    <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
                    <textarea type="text"
                            placeholder="Describe the symptoms"
                            id="symptoms"
                            className="border-2 w-full p-2 mt-2 rounded-md"
                            value={symptoms}
                            onChange={ (e) => setSymptoms(e.target.value)} />
                </div>
                <input type="submit"
                        className="bg-indigo-600 w-full p-3 mt-5 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
                        value={patient.id ? 'Edit patient' : 'Add patient'} />
            </form>
        </div>
    );
}

export default Formulario;