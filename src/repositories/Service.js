export function handleErrors(response) {
    if(response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response; 
}

export function handlerResult(response) {
    if (!response.onSuccess) {
        throw new Error(response.data);
    }

    return response.data;
}