export const validForm = (isCreateAccount, form) => {
    
    const { nombre, recordar ,...formulario } = form;
    
    for (const property in formulario) {
        if(!form[property]){
    
            return false;
        }
    }

    if( isCreateAccount && nombre === '' ) { return false}

    return true
};