const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById('hamburger').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-nav');
});

// Define your services
const services = [
    {
        serviceName: "Washing",
        price: "900",
        description: "Standard machine wash with eco-friendly detergent.",
        imageUrl: "images/washing.jpg",
        whatsappLink: "https://wa.me/yourwhatsappphonenumber"
    },
    {
        serviceName: "Dry Cleaning",
        price: "1500",
        description: "Professional dry cleaning for delicate garments.",
        imageUrl: "images/dry.jpg",
    },
    {
        serviceName: "Ironing",
        price: "500",
        description: "Hand ironing for crisp, professional finish.",
        imageUrl: "images/ironing.jpg",
    },
    {
        serviceName: "Stain Removal",
        price: "300 per stain",
        description: "Specialized treatment for tough stains.",
        imageUrl: "images/washing.jpg",
    },
    {
        serviceName: "Express Service",
        price: "Extra 1000",
        description: "Get your laundry done in 2 hours.",
        imageUrl: "images/express.jpg",
    },
    {
        serviceName: "Blanket Washing",
        price: "700",
        description: "Blanket washing and drying the same day",
        imageUrl: "images/blanket.jpg"
    }
];

// Function to display services
function displayServices(servicesList) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    
    servicesList.forEach((service) => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");
        
        serviceCard.innerHTML = `
        <img src="${service.imageUrl}" alt="${service.serviceName}" loading="lazy" onerror="this.src='fallback.jpg'">
        <h3>${service.serviceName}</h3>
        <p><strong>Price:</strong> ${service.price}</p>
        <p>${service.description}</p>
        <a title="WhatsApp Us For More Info" href="${service.whatsappLink}" class="whatsapp-button">WhatsApp Us</a>
      `;
        
        gallery.appendChild(serviceCard);
    });
}

// Display services on page load
displayServices(services);








