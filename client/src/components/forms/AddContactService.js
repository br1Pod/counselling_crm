const baseURL = 'http://localhost:5000/api/contacts/'

export const getContacts = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postContact = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    
}

export const updateContact = (payload) => {
    return fetch(baseURL + payload._id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}


export const deleteContact = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
