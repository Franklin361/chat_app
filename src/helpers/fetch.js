
const baseURL = import.meta.env.VITE_API_URL

export const fetchWhitOutToken = async(path, data, method="GET") => {
    
    const url = `${baseURL}${path}`;

    let res = ""
    
    if(method === 'GET'){
        
        res = await fetch(url);

    }else{
        
        res = await fetch(url,{
            method,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    
    return await res.json()
};

export const fetchWhitToken = async(path, data, method="GET") => {
    
    const url = `${baseURL}${path}`;
    const token = localStorage.getItem('token') || '';

    let res = ""
    
    if(method === 'GET'){
        
        res = await fetch(url, {
            headers:{
                'x-token': token
            }
        });

    }else{
        
        res = await fetch(url,{
            method,
            headers:{
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })
    }
    
    return await res.json()
};