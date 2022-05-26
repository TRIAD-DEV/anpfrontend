import { handleErrors, handlerResult } from './Service';

export async function Situacoes () {
    const response = await fetch('http://localhost:8081/dinamica/api/situacao');
    let result = await handleErrors(response);
    let jsonResult = await result.json();
    const data = await handlerResult(jsonResult);
    
    return data;
}