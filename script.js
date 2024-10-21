function checkColor() {
    var color = document.getElementById("colorInput").value.trim();
    var messageElement = document.getElementById("message");

    if (color.toLowerCase() === "red") {
        messageElement.innerHTML = "Must Stop";
        messageElement.style.backgroundColor = "#e74c3c"; 
    } else if (color.toLowerCase() === "yellow") {
        messageElement.innerHTML = "Ready to Move";
        messageElement.style.backgroundColor = "#f1c40f"; 
    } else if (color.toLowerCase() === "green") {
        messageElement.innerHTML = "Move Now.";
        messageElement.style.backgroundColor = "#27ae60"; 
    } else {
        messageElement.innerHTML = "Please enter a valid color of road traffic signal.";
        messageElement.style.backgroundColor = "#95a5a6"; 
    }

    messageElement.style.opacity = 1; 
}
