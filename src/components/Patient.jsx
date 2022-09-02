const Patient = ({patient,setPatient,removePatient}) => {
    const {name, owner, email, date, symptoms, id} = patient;
    const handleEliminar = () => {
        const respuesta = confirm('¿Do you want to remove the patient?');
        if(respuesta){
            removePatient(id);
        }
    }
    
  return (
    <div className="m-3 bg-white shadow-md px-5 py-5 rounded-md">
        <p className="font-bold mb-3 uppercase text-gray-300">Nombre: {''} 
            <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-300">Owner pet: {''} 
            <span className="font-normal normal-case">{owner}</span>
        </p>        
        <p className="font-bold mb-3 uppercase text-gray-300">E-mail: {''} 
            <span className="font-normal normal-case">{email}</span>
        </p>        
        <p className="font-bold mb-3 uppercase text-gray-300">Discharge date: {''} 
            <span className="font-normal normal-case">{date}</span>
        </p>        
        <p className="font-bold mb-3 uppercase text-gray-300">Syntomps: {''} 
            <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between">
        <button
            type="button"
            className="py-2 px-8 bg-indigo-600 hover:bg-indigo-900 text-white font-bold rounded-md"
            onClick={ () => setPatient(patient)}>Editar
        </button>            
        <button
            type="button"
            className="py-2 px-8 bg-red-700 hover:bg-red-900 text-white font-bold rounded-md"
            onClick={handleEliminar}>Eliminar
            {/* onClick={ () => removePatient(id) */}
        </button>
        </div>
    </div>
  )
}

export default Patient