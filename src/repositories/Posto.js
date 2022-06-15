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