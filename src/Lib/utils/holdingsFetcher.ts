export const getHoldings = async() => {
    const response = await fetch('https://us-central1-auth-development-92670.cloudfunctions.net/getHoldings', { mode: 'cors'})
    .then(response => response.json())
    return response;
}

export const getHoldingById = async(id: number) => {
    const response = await fetch(`https://us-central1-auth-development-92670.cloudfunctions.net/getHoldingById/?id=${id}`, { mode: 'cors'})
    .then(response => response.json())
    return response;
}

export const updateHolding = async (id: number, data: any) => {
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

export const getFeaturedHoldings = async() => {
    const response = await fetch('https://us-central1-auth-development-92670.cloudfunctions.net/getFeaturedHoldings', { mode: 'cors'})
    .then(response => response.json())
    return response;
}
