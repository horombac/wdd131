document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    localStorage.setItem("lastInquiry", JSON.stringify({ name, email, message }));

    alert("Your message has been sent!");
});


document.addEventListener('DOMContentLoaded', function(){
    const body = document.body;
    const img = new Image();

    img.onload = function() {
        body.stylebackgroundImage = 'url(${this.src})';
    };

    setTimeout(() => {
        img.src = '/wdd131/project/images/foam.webp';
    }, 1000);
})






