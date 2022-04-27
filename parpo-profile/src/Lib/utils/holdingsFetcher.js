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

export const updateHolding = async (id, data) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/updateHolding/?id=${id}`, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
}

export const getHoldingsByPropType = async (propertyType) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/updateHolding/?propertyType=${propertyType}`, { mode: 'cors' })
    .then(response => response.json())
    return response
}