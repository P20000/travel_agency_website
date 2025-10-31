// --- 1. GLOBAL UI VARIABLES ---

const body = document.querySelector("body");
    modeToggle = document.querySelector(".dark-light")

// Modal variables for this specific page


// --- 2. SERVICE DATA ---

// Data for the modal content (Dummy details for list card generation)
const serviceData = {
    taxi: {
        title: "Available Licensed Taxi & Transfer Services",
        items: [
            { name: "CityRide Cabs", contact: "+91 98765 12345", details: "Sedan (AC). Available 24/7. Rated 4.8/5.", license: "MH12-A-5678" },
            { name: "Himalaya Hires", contact: "+91 80000 78901", details: "SUV (4x4) specialized for mountain routes.", license: "HP01-B-2345" },
            { name: "Luxury Limos", contact: "+91 70000 34567", details: "Premium Sedan (Mercedes/BMW). Hourly rental available.", license: "DL04-C-9012" },
            { name: "Local E-Rickshaws", contact: "+91 99999 11111", details: "Eco-friendly short-distance travel. Max 3 pax.", license: "UP16-D-4567" },
        ]
    },
    hotels: {
        title: "Recommended Premium Stays",
        items: [
            { name: "The Grand Heritage", amenities: "5-Star, Rooftop Pool, Spa Access", price: "₹12,000 / Night", rating: "9.1/10" },
            { name: "Boutique Vista", amenities: "4-Star, Free Breakfast, Local Art", price: "₹7,500 / Night", rating: "8.5/10" },
            { name: "Riverside Lodge", amenities: "Homestay, River View, Free Kayaking", price: "₹4,200 / Night", rating: "9.5/10" },
            { name: "City Center Inn", amenities: "3-Star, Business amenities, Gym Access", price: "₹5,800 / Night", rating: "8.0/10" },
        ]
    },
    spa: {
        title: "Top-Rated Wellness & Spa Centers",
        items: [
            { name: "Aarogyam Ayurvedic Spa", treatments: "Traditional Ayurvedic Massages, Panchakarma", duration: "60/90/120 min options", contact: "+91 99000 22222" },
            { name: "Zenith Bodyworks", treatments: "Deep Tissue, Hot Stone, Facials", duration: "30-120 min sessions", contact: "+91 88888 33333" },
        ]
    },
    gym: {
        title: "Partnered Gyms with Day Pass Access",
        items: [
            { name: "Fitness Hub Pro", equipment: "Cardio, Free Weights, Crossfit area", pass: "₹500 / Day", hours: "5:00 AM - 11:00 PM" },
            { name: "Iron Temple", equipment: "Heavy Weight Lifting, Personal Trainers", pass: "₹800 / Day", hours: "6:00 AM - 10:00 PM" },
        ]
    }
};

// --- 3. MODAL GENERATION FUNCTIONS ---

/**
 * Generates the HTML grid of detail cards based on the service type.
 */
function buildServiceContent(serviceType) {
    const data = serviceData[serviceType];
    if (!data) return `<p class="p-8 text-red-500">Service data not found.</p>`;

    let cardsHTML = '';

    // Dynamically adjust card generation based on service type
    data.items.forEach(item => {
        let content = '';
        let contact = '';

        if (serviceType === 'taxi') {
            content = `<p>Details: ${item.details}</p><p>License: ${item.license}</p>`;
            contact = `<p class="contact-info">Call: ${item.contact}</p>`;
        } else if (serviceType === 'hotels') {
            content = `<p>Amenities: ${item.amenities}</p><p>Rating: ${item.rating}</p>`;
            contact = `<p class="contact-info">Price: ${item.price}</p>`;
        } else if (serviceType === 'spa') {
            content = `<p>Treatments: ${item.treatments}</p><p>Duration: ${item.duration}</p>`;
            contact = `<p class="contact-info">Book: ${item.contact}</p>`;
        } else if (serviceType === 'gym') {
            content = `<p>Equipment: ${item.equipment}</p><p>Hours: ${item.hours}</p>`;
            contact = `<p class="contact-info">Pass: ${item.pass}</p>`;
        }

        cardsHTML += `
            <div class="detail-card">
                <h4>${item.name}</h4>
                ${content}
                ${contact}
            </div>
        `;
    });

    return `
        <h2>${data.title}</h2>
        <div class="service-list-grid">
            ${cardsHTML}
        </div>
    `;
}

/** Opens the service modal and populates it with content. */
function openServiceModal(serviceType) {
    const content = buildServiceContent(serviceType);
    modalServiceContent.innerHTML = content;
    serviceModal.style.display = "block";
    body.style.overflow = "hidden"; // Prevent background scrolling
}

/** Closes the modal and restores body scroll. */
function closeServiceModal() {
    serviceModal.style.display = "none";
    body.style.overflow = "auto";
}

// --- 4. EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    
    // Attach listener to all "View Details" buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const serviceType = event.target.getAttribute('data-service');
            if (serviceType) {
                openServiceModal(serviceType);
            }
        });
    });

    // Close modal listener
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }

    // Close modal when clicking outside the content box
    serviceModal.addEventListener('click', (event) => {
        if (event.target === serviceModal) {
            closeServiceModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && serviceModal.style.display === 'block') {
            closeServiceModal();
        }
    });

    // --- Placeholder for your existing Navbar/UI Toggles (to prevent errors) ---
    // (Your existing dark mode, sidebar, and search logic would be here)
});