export const validForm = (isCreateAccount, form) => {
    
    const { nombre, recordar ,...formulario } = form;
    // console.log(formulario)
    for (const property in formulario) {
        if(!form[property]){
            // console.log({[property]: form[property]})
            return false;
        }
    }

    if( isCreateAccount && nombre === '' ) { return false}

    return true
};