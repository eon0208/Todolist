const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const linkButton = loginForm.querySelector("a");

const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const value = loginInput.value;
    loginForm.classList.add("hidden");

    const localStorage = window.localStorage;
    localStorage.setItem(USERNAME_KEY, value);

    const username = localStorage.getItem(USERNAME_KEY);

    greetingMachine(username);

}
function linkClicked(event) {
    event.preventDefault();
    console.dir(event);

}

function greetingMachine(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");

}

linkButton.addEventListener("click", linkClicked);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    greetingMachine(savedUsername);
}