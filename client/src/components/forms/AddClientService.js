const baseURL = 'http://localhost:5000/api/clients/'

export const getClients = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postClient = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const updateClient = (payload) => {
    return fetch(baseURL + payload._id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteClient = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
