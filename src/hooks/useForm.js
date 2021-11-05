import { useState } from 'react'

export const useForm = (initialState) => {
    
    const [form, setForm] = useState(initialState);

    const onChange = ({target}) => {
        const { value, name, checked } = target

        setForm({
            ...form,
            [name]: (name=== 'recordar') ? checked : value
        })
    };


    return {
        ...form,
        onChange
    }
}
