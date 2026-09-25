function login(username, password) {
    if (username === "student" && password === "1234") {
        return "Authentication successful";
    }

    return "Authentication failed";
}

module.exports = { login };