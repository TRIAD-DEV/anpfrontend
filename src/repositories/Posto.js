import { handleErrors, handlerResult } from './Service';

export async function AdicionarPosto (posto) {
    console.log(posto);
    const response = await fetch('http://localhost:8081/dinamica/api/posto', {
        method: 'POST', 
        body: JSON.stringify(posto),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    let result = await handleErrors(response);
    let jsonResult = await result.json();
    const data = await handlerResult(jsonResult);
    
    return data;
}

export async function RetornaPostos(){
    const response = await fetch('http://localhost:8081/dinamica/api/posto', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });       

    let result = await handleErrors(response);
    let jsonResult = await result.json();
    const data = await handlerResult(jsonResult);
    
    return data;

}

export async function DeletaPosto(id){
    console.log("Código do posto:"+ id)
    const response = await fetch(`http://localhost:8081/dinamica/api/posto/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'mode': 'no-cors',

        },
    });       
    console.log(response)
    return await handleErrors(response);
    
}

export async function atualizarPosto(posto) {
    console.log(posto);
    const response = await fetch('http://localhost:8081/dinamica/api/posto', {
        method: 'PUT', 
        body: JSON.stringify(posto),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    let result = await handleErrors(response);
    let jsonResult = await result.json();
    const data = await handlerResult(jsonResult);
    
    return data;
}

