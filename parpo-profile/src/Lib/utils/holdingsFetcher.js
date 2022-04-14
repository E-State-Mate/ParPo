export const getHoldings = async() => {
    const response = await fetch('https://us-central1-auth-development-92670.cloudfunctions.net/getHoldings', { mode: 'cors'})
    .then(response => response.json())
    return response;
}