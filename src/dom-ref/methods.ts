// DOM tree manipulating methods.
// Methods are used to add or remove the CSS class from the error message elements and focus them if needed.

export function removeAllLoginErrorBorders() {
    // @ts-ignore
    document.getElementById("username").classList.remove("error-border");
    // @ts-ignore
    document.getElementById("password").classList.remove("error-border");
}

export function handleLoginUsernameError() {
    // @ts-ignore
    document.getElementById("username").classList.add("error-border");
    // @ts-ignore
    document.getElementById("username").focus();
}

export function handleLoginPasswordError() {
    // @ts-ignore
    document.getElementById("password").classList.add("error-border");
    // @ts-ignore
    document.getElementById("password").focus();
}

export function removeAllStudentErrorBorders() {
    // @ts-ignore
    document.getElementById("nic").classList.remove("error-border");
    // @ts-ignore
    document.getElementById("name").classList.remove("error-border");
    // @ts-ignore
    document.getElementById("address").classList.remove("error-border");
    // @ts-ignore
    document.getElementById("contact").classList.remove("error-border");
}

export function handleStudentContactError() {
    // @ts-ignore
    document.getElementById("contact").classList.add("error-border");
    // @ts-ignore
    document.getElementById("contact").focus();
}

export function handleStudentAddressError() {
    // @ts-ignore
    document.getElementById("address").classList.add("error-border");
    // @ts-ignore
    document.getElementById("address").focus();
}

export function handleStudentNameError() {
    // @ts-ignore
    document.getElementById("name").classList.add("error-border");
    // @ts-ignore
    document.getElementById("name").focus();
}

export function handleStudentNICError() {
    // @ts-ignore
    document.getElementById("nic").classList.add("error-border");
    // @ts-ignore
    document.getElementById("nic").focus();
}

export function removeNICErrorBorder() {
    // @ts-ignore
    document.getElementById("nic").classList.remove("error-border");
}