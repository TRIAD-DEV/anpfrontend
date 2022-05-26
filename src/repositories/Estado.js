
import { handleErrors, handlerResult } from './Service';

export async function Estados () {
    const response = await fetch('http://localhost:8081/dinamica/api/estado');
    let result = await handleErrors(response);
    let jsonResult = await result.json();
    const data = await handlerResult(jsonResult);
    
    return data;
}