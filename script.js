// Show the profile page (homepage) after login
function displayProfile(username) {
    // Hide the login form
    document.getElementById("auth-container").style.display = "none";
    
    // Show the profile (homepage) after login
    document.getElementById("profile-container").style.display = "block";
    
    // Set the user's name on the profile page
    document.getElementById("user-name").textContent = username;
    
    // Optionally, redirect the user to the homepage URL
    // window.location.href = "/homepage.html"; // If you want to redirect to a different page
}
