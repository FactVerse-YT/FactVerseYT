// Page load message
console.log("Website Loaded Successfully 🚀");

// Sabhi links select karo
const links = document.querySelectorAll("a");

// Har link par event lagao
links.forEach(link => {
    link.addEventListener("click", function(e) {
        
        // Click tracking
        console.log("User clicked:", link.innerText);

        // Popup alert
        alert("Redirecting to product page... 🛒");

setInterval(() => {
    let num = Math.floor(Math.random() * 20) + 10;
    document.getElementById("liveText").innerText =
        "🔥 " + num + " people viewing this product";
}, 3000);
        
        setTimeout(() => {
            link.style.transform = "scale(1)";
        }, 150);
    });
});