const API_KEY = '';

export async function createUser(email, password) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data.idToken;
}

export async function loginUser(email, password) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data.idToken;
}
