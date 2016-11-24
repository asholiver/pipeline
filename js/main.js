
// Get the button, and when the user clicks on it, execute toggleDropdown
document.getElementById("js-open-login-dropdown").onclick = function() {toggleDropdown()};

/* toggleDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function toggleDropdown() {
    document.getElementById("login-dropdown").classList.toggle("is-active");
}
