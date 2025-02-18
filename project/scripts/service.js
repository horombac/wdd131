// Define your services
const services = [
    {
        serviceName: "Washing",
        price: "900",
        description: "Standard machine wash with eco-friendly detergent.",
        imageUrl: "../project/images/foam.webp",
    },
    {
        serviceName: "Dry Cleaning",
        price: "1500",
        description: "Professional dry cleaning for delicate garments.",
        imageUrl: "../project/images/foam.webp",
    },
    {
        serviceName: "Ironing",
        price: "500",
        description: "Hand ironing for crisp, professional finish.",
        imageUrl: "../project/images/foam.webp",
    },
    {
        serviceName: "Stain Removal",
        price: "300 per stain",
        description: "Specialized treatment for tough stains.",
        imageUrl: "../project/images/foam.webp",
    },
    {
        serviceName: "Express Service",
        price: "Extra 1000",
        description: "Get your laundry done in 2 hours.",
        imageUrl: "../project/images/foam.webp",
    },
    {
        serviceName: "Blanket Washing",
        price: "700",
        description: "Blanket washing and drying the same day",
        imageUrl: "../project/images/foam.webp"
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
      `;
        
        gallery.appendChild(serviceCard);
    });
}



// Optional: If you want to implement filtering for services
document.querySelectorAll("nav ul li a").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = button.textContent.toLowerCase();
        let filteredServices = services;

        if (filter === "budget") {
            filteredServices = services.filter((s) => parseInt(s.price.split(' ')[0]) <= 1000);
        } else if (filter === "premium") {
            filteredServices = services.filter((s) => parseInt(s.price.split(' ')[0]) > 1000);
        }
        displayServices(filteredServices);
    });
});

// Display services on page load
displayServices(services);