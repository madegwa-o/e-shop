document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const ctaButton = document.getElementById("ctaButton");

    // Simulate login functionality
    loginButton.addEventListener("click", () => {
        alert("Redirecting to login page...");
        window.location.href = "/login"; // Adjust URL as needed
    });

    ctaButton.addEventListener("click", () => {
        alert("Redirecting to sign-in page...");
        window.location.href = "/login"; // Adjust URL as needed
    });
});
