import {  useState } from 'react'

export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);
    
    
    const onChange = (e) => {
        
        const { value, name, checked } = e.target;


        setForm({
            ...form,
            [name]: (name === 'recordar') ? checked : value
        })
        
    };

    const resetForm = () => {
        setForm(initialState)
    };
    
    
    return {
        ...form,
        form,
        onChange,
        resetForm,
        setForm
    }
}
