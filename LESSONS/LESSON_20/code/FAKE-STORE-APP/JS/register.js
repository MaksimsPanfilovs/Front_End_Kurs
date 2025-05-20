const form = document.getElementById("register-form");

function addUser(event) {
    event.preventDefault();
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const name = form.elements["name"].value;
    const avatar = form.elements["image"].value;

    const newUser = {};
}