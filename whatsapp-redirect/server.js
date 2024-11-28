const express = require("express");
const app = express();

// Redirect route for WhatsApp
app.get("/start-chat", (req, res) => {
    const whatsappNumber = "7785220966"; // Your WhatsApp Business number 
    const message = "Hello! I need assistance."; // Pre-filled message
    const redirectUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    res.redirect(redirectUrl); // Redirects the user to the WhatsApp chat
});


// Start the server
const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
