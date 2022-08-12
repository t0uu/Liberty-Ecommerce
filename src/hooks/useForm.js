import { useMemo, useState,useEffect } from "react"


export const useForm = (initialForm = {},formValidations = {}) => {
                                            // Acá le estamos diciendo que nuestro formState sera lo que nosotros le mandemos como argumento mediante el initialForm.   
    const [formState, setFormState] = useState(initialForm)
    const [formValidation, setformValidation] = useState({})
    useEffect(() => {
        // Cada vez que haya un cambio en el formState se ejecutara la función.-
        createValidators();
    },[formState])
    
    useEffect(() => {
        setFormState(initialForm)
    },[initialForm])
    

    
    const onInputChange = ({target}) => {
        const {name,value} = target
        // console.log({name,value});
        // Se manda a llamar setFormState, y lo desesctructuramos para no perder el valor anterior, y luego le decimos que es lo que queremos cambiar en este caso el name y lo ponemos entre llaves cuadradas y luego le decimos que sera igual al value que ingresara el usuario.
        setFormState({
            ...formState,
            [name]: value,
        })
    }


    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false;
        
        }
        return true;

    },[formValidation])

 

    // El createValidators lo que hara es tomar el formValidations y verificara si los inputs son validos o no.
    const createValidators = () => {
        // este es el objeto que sera igual a la función que mandamos como validación en el formValidations en el RegisterPage
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            // destructuramos la función y el mensaje que viene en el formValidations
        const [fn, errorMessage] = formValidations[formField]
            // Aquí le decimos que formCheckedValues le creamos una nueva propiedad que se llamara igual al formField(email,password,name,etc) y le agregaremos un Valid al final. 
                                                                            // si se cumple almacenamos un null sino se cumple enviamos el mensaje.
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage    
        }
        // Acá le decimos que el estado nuevo sera el del formCheckedValues
        setformValidation(formCheckedValues);
    }

    return {
        // si lo mandas de esta manera evitariamos realizar una destructuración del formState
        ...formState,
        formState,
        onInputChange,
        createValidators,
        isFormValid 
    }
}