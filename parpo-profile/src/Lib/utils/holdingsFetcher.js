export const getHoldings = async() => {
    const response = await fetch('https://us-central1-auth-development-92670.cloudfunctions.net/getHoldings', { mode: 'cors'})
    .then(response => response.json())
    return response;
}

export const getHoldingById = async(id) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/getHoldingById/?id=${id}`, { mode: 'cors'})
    .then(response => response.json())
    return response;
}

export const getDetailsByCategory = async(id) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/getHoldingById/?id=${id}`, { mode: 'cors'})
    .then(response => response.json())
    const data = {
        sqft: response.sqft, 
        propertyType: response.propertyType
    }

    return data
}

