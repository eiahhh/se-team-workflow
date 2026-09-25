function login(username, password) {
    if (username === "student" && password === "1234") {
        return "Login successful";
    }

    return "Invalid username or password";
}

module.exports = { login };