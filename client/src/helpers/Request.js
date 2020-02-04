class Request {

    get(url) {
        return fetch(`http://localhost:8080${url}`)
            .then((res) => res.json());
    }

    delete(url) {
        return fetch(`http://localhost:8080${url}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
    }

    post(url, payload) {
        return fetch(`http://localhost:8080${url}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }

    patch(url, payload) {
        return fetch(`http://localhost:8080${url}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }

}

export default Request;