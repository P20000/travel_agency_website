// --- 1. GLOBAL VARIABLES ---

const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen");
// NEW MODAL VARIABLES
const itineraryModal = document.getElementById('itineraryModal'),
      modalContent = document.getElementById('modal-body-content'),
      closeBtn = document.querySelector('.close-btn');

const createItineraryFab = document.getElementById('createItineraryFab'),
      creatorModal = document.getElementById('creatorModal'),
      closeCreatorBtn = document.getElementById('closeCreatorBtn');

const serviceModal = document.getElementById('serviceModal'),
      modalServiceContent = document.getElementById('modal-service-content'),
      scloseBtn = document.querySelector('.close-btn');
// --- 2. DATA DEFINITIONS ---

// Define detailed itinerary data for the modal (Used by both carousels)
const itineraryDetails = {
    'uttarakhand': {
        title: '6-Day Himalayan Adventure: Rishikesh & Uttarakhand',
        planner: [
            'Day 1: Arrival in Dehradun & Transfer to Rishikesh. Check-in and Ganga Aarti.',
            'Day 2: River Rafting and Bungee Jumping (Optional). Explore local markets.',
            'Day 3: Trek to Neer Garh Waterfall and spiritual retreat day.',
            'Day 4: Drive to Auli/Joshimath (or Mussoorie, depending on season).',
            'Day 5: Skiing/Cable Car ride in Auli or local sightseeing.',
            'Day 6: Departure from Dehradun/Haridwar.',
        ],
        services: ['Accommodation (4-star hotels)', 'Daily Breakfast & Dinner', 'Private Transfers', 'River Rafting Fee'],
        price: '₹25,999'
    },
    'karnataka': {
        title: '7-Day Offbeat Heritage Tour: Hampi & Coastal Karnataka',
        planner: [
            'Day 1: Arrival in Bengaluru and overnight train/bus to Hampi.',
            'Day 2: Hampi Ruins Exploration (Virupaksha Temple, Vittala Temple).',
            'Day 3: Coracle Ride on Tungabhadra river and Hippie Island.',
            'Day 4: Drive to Coastal Region (Gokarna or Udupi).',
            'Day 5: Beach exploration (Om Beach, Kudle Beach) & temple visit.',
            'Day 6: Trekking/Watersports in the coastal area.',
            'Day 7: Departure from Mangalore.',
        ],
        services: ['Accommodation (Heritage stays/Boutique hotels)', 'Inter-city AC transport', 'Local Guide in Hampi', 'Daily Breakfast'],
        price: '₹32,500'
    },
    'arunachal': {
        title: '10-Day Magical Northeast: Tawang & Arunachal Pradesh',
        planner: [
            'Day 1: Guwahati to Bomdila (The Foothills).',
            'Day 2: Bomdila Monastery & scenic drive to Dirang.',
            'Day 3: Drive to Tawang, stopping at Sela Pass (13,700 ft).',
            'Day 4: Tawang Monastery & local war memorial.',
            'Day 5: Day trip to Bum La Pass (requires permit) or Madhuri Lake.',
            'Day 6-10: Rest of the itinerary including Tezpur and local culture.',
        ],
        services: ['Accommodation (Guesthouses/Homestays)', 'Inner Line Permit Assistance', 'Exclusive 4x4 Vehicle', 'All Meals'],
        price: '₹58,750'
    },
    'himachal': {
        title: '8-Day Offbeat Himachal: Trekking and Culture',
        planner: ['Day 1: Arrival in Delhi, overnight to Manali.', 'Day 2: Local Manali Sightseeing.', 'Day 3: Trekking start to JOSH area.', 'Day 4-8: Detailed trekking plan and departure.'],
        services: ['Camping Gear', 'Trekking Guide', 'Permits', 'All Meals'],
        price: '₹35,500'
    },
    'nagaland': {
        title: '8-Day Hornbill Festival Experience in Nagaland',
        planner: ['Day 1: Arrival in Kohima, transfer to festival site.', 'Day 2-6: Full immersion in the Hornbill Festival.', 'Day 7: Local village tour.', 'Day 8: Departure.'],
        services: ['Festival Pass', 'Homestay Accommodation', 'Private Transfers', 'Daily Breakfast'],
        price: '₹42,800'
    },
    'leh': {
        title: '8-Day Lovely Leh & Ladakh: High Altitude Wonders',
        planner: ['Day 1: Arrival in Leh (Acclimatization day).', 'Day 2: Local Leh Sightseeing (Monasteries).', 'Day 3: Drive to Nubra Valley via Khardung La.', 'Day 4-8: Detailed itinerary including Pangong Lake.'],
        services: ['Oxygen Cylinder Backup', 'Permits', '4x4 Vehicle', 'Accommodation & Meals'],
        price: '₹48,999'
    },
    'srinagar': {
        title: '7-Day Heavenly Srinagar: Lakes and Gardens',
        planner: ['Day 1: Check-in to Houseboat on Dal Lake.', 'Day 2: Shikara Ride and Mughal Gardens.', 'Day 3: Day trip to Gulmarg.', 'Day 4-7: Detailed itinerary including Pahalgam and departure.'],
        services: ['Houseboat Stay', 'Shikara Rides', 'Private Transfers', 'Daily Breakfast'],
        price: '₹38,500'
    },
    'switzerland': {
        title: '9-Day Scenic Switzerland: Interlaken & Alps',
        planner: ['Day 1: Arrival in Zurich, Transfer to Lucerne.', 'Day 2: Chapel Bridge, Swiss Transport Museum.', 'Day 3: Glacier Express panoramic train.', 'Day 4: Interlaken and Jungfraujoch Peak.', 'Day 5-9: Rest of the itinerary...'],
        services: ['First Class Train Passes', 'Daily Breakfast', 'Mountain Excursion Passes', '4-Star Hotel Stays'],
        price: '₹1,55,000'
    },
    'prague': {
        title: '6-Day Charming Prague: History & Magic',
        planner: ['Day 1: Old Town Square and Astronomical Clock.', 'Day 2: Prague Castle and St. Vitus Cathedral.', 'Day 3: Charles Bridge and Vltava River Cruise.', 'Day 4-6: Rest of the itinerary...'],
        services: ['4-Star Hotel Stays', 'Guided Walking Tour', 'Prague Card (Public Transport)', 'Daily Breakfast'],
        price: '₹45,900'
    },
    'milan': {
        title: '6-Day Modern Milan: Fashion & Italian Elegance',
        planner: ['Day 1: Milan Duomo and Galleria Vittorio Emanuele II.', 'Day 2: The Last Supper viewing and Sforza Castle.', 'Day 3: Fashion District shopping tour.', 'Day 4-6: Rest of the itinerary...'],
        services: ['Boutique Hotel Stays', 'Skip-the-line Duomo Tickets', 'Daily Breakfast', 'Local Transport Pass'],
        price: '₹68,200'
    },
    'mirituese': {
        title: '7-Day Marvelous Mauritius: Beaches and Coral Dreams',
        planner: ['Day 1: Arrival and resort check-in.', 'Day 2: North Island Tour (Port Louis).', 'Day 3: South Island Tour (Seven Coloured Earth).', 'Day 4: Underwater activities.', 'Day 5-7: Leisure days and departure.'],
        services: ['5-Star Resort Stay', 'Airport Transfers', 'Daily Breakfast & Dinner', 'Underwater Scooter Activity'],
        price: '₹95,000'
    },
    'austria': {
        title: '3-Day Artistic Austria: Vienna & Alpine Wonders',
        planner: ['Day 1: Vienna Sightseeing (Schönbrunn Palace).', 'Day 2: Day trip to Salzburg (Sound of Music tour).', 'Day 3: Departure.'],
        services: ['4-Star Hotel in Vienna', 'Train Tickets', 'Daily Breakfast'],
        price: '₹72,000'
    },
    'maldives': {
        title: '3-Day Magical Maldives: Sun-Kissed Paradise',
        planner: ['Day 1: Water Villa Check-in and Snorkeling.', 'Day 2: Sunset Cruise and Candlelight Dinner.', 'Day 3: Departure.'],
        services: ['Luxury Water Villa Stay', 'Seaplane Transfer', 'All Inclusive Meals'],
        price: '₹1,20,000'
    },
    'finland': {
        title: '7-Day Frozen Finland: Lapland & Northern Lights',
        planner: ['Day 1: Arrival in Rovaniemi, check-in to Glass Igloo.', 'Day 2: Santa Claus Village.', 'Day 3: Husky Sledding and Reindeer Ride.', 'Day 4-7: Northern Lights Hunting and departure.'],
        services: ['Glass Igloo Stay', 'Thermal Clothing Rental', 'All Activities', 'Daily Breakfast'],
        price: '₹1,85,000'
    },
};


// --- 3. DESTINATION ARRAYS ---

const travelDestinations = [
    { id: 'uttarakhand', title: 'UNIQUE UTTARAKHAND WITH RISHIKESH', duration: '6D/5N', image: 'https://static.toiimg.com/thumb/msid-98653295,width-748,height-499,resizemode=4,imgsize-131900/.jpg', location: 'RISHIKESH', bestTime: 'BEST TIME : JAN, MAR, OCT, DEC' },
    { id: 'karnataka', title: 'OFFBEAT KARNATAKA', duration: '7D/6N', image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585', location: 'KARNATAKKA', bestTime: 'BEST TIME : JAN, FEB, JUN, DEC' },
    { id: 'arunachal', title: 'OFFBEAT ARUNACHAL', duration: '10D/9N', image: 'https://media.istockphoto.com/id/910430170/photo/tawang-arunachal-pradesh.jpg?s=612x612&w=0&k=20&c=MKKYsHH_6JRMYROO2bHIsQAW9XoSnl-9nkRGOFgAg0M=', location: 'ARUNACHAL PRADESH', bestTime: 'BEST TIME : MAR, APR, SEP, DEC' },
    { id: 'himachal', title: 'OFFBEAT HIMACHAL', duration: '8D/7N', image: 'https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=', location: 'JOSH', bestTime: 'BEST TIME : MAR, JUN, SEP, OCT' },
    { id: 'nagaland', title: 'HORNBILL FESTIVAL IN NAGALAND', duration: '8D/7N', image: 'https://t4.ftcdn.net/jpg/10/84/29/49/360_F_1084294904_WEE7gdXZsA5BTMDs9UCFNEMEjgk4iWwP.jpg', location: 'NAGALAND', bestTime: 'BEST TIME : DEC' },
    { id: 'leh', title: 'LOVELY LEH', duration: '8D/7N', image: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=', location: 'LEH', bestTime: 'BEST TIME : JUN, SEP' },
    { id: 'srinagar', title: 'HEAVENLY SRINAGAR', duration: '7D/6N', image: 'https://www.tripsavvy.com/thmb/-AzEW7DpVfnzFwXRy0LISt5RH8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1432005421-5c0bc8d84cedfd0001fa5acb.jpg', location: 'SRINAGAR', bestTime: 'BEST TIME : MAY, JUN, SEP' },
];

const moreOptions = [
    { id: 'switzerland', title: 'SCENIC SWITZERLAND WITH INTERLAKEN', duration: '9D/8N', image: 'https://t3.ftcdn.net/jpg/01/87/13/30/360_F_187133059_6wFe0lGVs9M6chzO4Af5jpx8fMRvw3us.jpg', location: 'INTERLAKEN', bestTime: 'BEST TIME : JUNE, JULY, AUGUST' },
    { id: 'prague', title: 'CHARMING PRAGUE WITH OLD TOWN MAGIC', duration: '6D/7N', image: 'https://thenextcrossing.com/wp-content/uploads/2020/06/Czech-Republic-0671-Pano.jpg', location: 'TOWN_MAGIC', bestTime: 'BEST TIME : APRIL,MAY,JUNE' },
    { id: 'milan', title: 'MODERN MILAN WITH ITALIAN ELEGANCE', duration: '6D/7N', image: 'https://3daysinmilan.com/wp-content/uploads/2020/10/Corso_Como_skyline.jpg', location: 'CORSO_COMO', bestTime: 'BEST TIME : SEPTEMBER, OCTOBER' },
    { id: 'mirituese', title: 'MARVELOUS MATURITIES WITH CORAL DREAMS', duration: '7D/6N', image: 'https://mauritiusattractions.com/content/images/gallery/193/glass-bottom-boat-blue-marine-park%20(3).jpg', location: 'BLUE_BAY', bestTime: 'BEST TIME : OCTOBER, NOVEMBER, DECEMBER' },
    { id: 'austria', title: 'ARTISTIC AUSTRIA WITH ALPINE WONDERS', duration: '2D/3N', image: 'https://thetourguy.com/wp-content/uploads/2023/01/TTTD-Vienna-feature-1440-675.jpg', location: 'VIENNA', bestTime: 'BEST TIME : NOVEMBER, DECEMBER' },
    { id: 'maldives', title: 'MAGICAL MALDIVES WITH SUN-KISSED PARADISE', duration: '3D/2N', image: 'https://cdn.mahlatini.com/_2400x1350_crop_center-center_none/Lux-South-Ari-Atoll-Hero-Image.png', location: 'ARI ATOLL', bestTime: 'BEST TIME : MAY, JUNE, JULY' },
    { id: 'finland', title: 'FROZEN FINLAND WITH NORTHEN LIGHT GLOW', duration: '6D/7N', image: 'https://apukkaresort.fi/wp-content/uploads/2024/04/sauna-carriage-on-skis-apukka-resort-rovaniemi-lapland-finland.jpg', location: 'LAPLAND', bestTime: 'BEST TIME : DECEMBER, JANUARY' }
];

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

// --- 4. MODAL & CARD GENERATION FUNCTIONS ---

/**
 * Generates the HTML string for a single travel card.
 * Includes a placeholder image if the source image fails to load.
 */
function createTravelCard(destination) {
    return `
        <div class="travel-card">
            <div class="card-image-container">
                <img src="${destination.image}" alt="${destination.title}" onerror="this.onerror=null; this.src='https://placehold.co/280x400/9571ff/ffffff?text=${destination.location.substring(0, 10)}'">
            </div>
            <div class="card-overlay"></div>
            <div class="card-content">
                <div class="card-top-info">
                    <h3 class="card-title">${destination.title}</h3>
                    <span class="card-duration">${destination.duration}</span>
                </div>
                <div class="card-bottom-info">
                    <p class="card-location">${destination.location}</p>
                    <p class="card-best-time">${destination.bestTime}</p>
                    <button class="view-itinerary-btn" data-id="${destination.id}">View Itinerary</button>
                </div>
            </div>
        </div>
    `;
}
/**
 * Finds the full destination object (from either array) based on ID.
 */
const findDestinationObject = (id) => {
    return travelDestinations.find(d => d.id === id) || moreOptions.find(d => d.id === id);
};
/**
 * Builds the HTML content for the modal with a stylish two-column layout.
 */
function buildItineraryContent(destinationId) {
    const details = itineraryDetails[destinationId];
    const destination = findDestinationObject(destinationId);
    
    // Fallback checks
    if (!details || !destination) return `<div class="p-8 text-center"><p class="text-xl font-bold text-red-600">Itinerary details not found for this destination ID: <strong>${destinationId}</strong>.</p></div>`;

    // Service Roadmap HTML
    const servicesHTML = details.services.map(service => `<li>${service}</li>`).join('');

    // Daily Planner HTML
    const plannerHTML = details.planner.map(step => `
        <div class="roadmap-step">
            <p><strong>${step.split(':')[0]}:</strong> ${step.split(':').slice(1).join(':') || ' Details upon booking.'}</p>
        </div>
    `).join('');

    // Stylish two-column modal content
    return `
        <div class="modal-two-column-layout">
            
            <!-- Left Column: Image and Summary -->
            <div class="modal-left-column" style="background-image: url('${destination.image}');">
                <div class="modal-summary-overlay">
                    <h2 class="text-white text-3xl font-bold mb-2">${details.title}</h2>
                    <p class="text-white text-sm">${destination.duration} in ${destination.location}</p>
                </div>
            </div>

            <!-- Right Column: Details, Planner, and CTA -->
            <div class="modal-right-column">
                
                <h3 class="modal-subtitle">Service Roadmap & Inclusions</h3>
                <ul class="modal-service-list">${servicesHTML}</ul>

                <h3 class="modal-subtitle">The Complete Travel Planner</h3>
                <div class="planner-steps">${plannerHTML}</div>
                
                <div class="price-box-styled">
                    <p class="price-label">Total Price</p>
                    <p class="final-price-styled">${details.price}</p>
                    <button class="buy-btn-styled" onclick="alert('Congratulations! Initiating secure booking for ${details.title} at ${details.price}.'); closeItineraryModal();">Book Your Trip Now</button>
                </div>
            </div>
        </div>
    `;
}

/** Opens the modal and populates it with content. */
function openItineraryModal(destinationId) {
    const content = buildItineraryContent(destinationId);
    modalContent.innerHTML = content;
    itineraryModal.style.display = "block";
    body.style.overflow = "hidden"; // Prevent background scrolling
}

/** Closes the modal and restores body scroll. */
function closeItineraryModal() {
    itineraryModal.style.display = "none";
    body.style.overflow = "auto";
}

/** Opens the CUSTOM creator modal. */
function openCreatorModal() {
    creatorModal.style.display = "block";
    body.style.overflow = "hidden"; // Prevent background scrolling
}

/** Closes the CUSTOM creator modal. */
function closeCreatorModal() {
    creatorModal.style.display = "none";
    body.style.overflow = "auto";
}

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


// --- 5. INITIALIZATION LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 5.1 EXISTING INITIAL DARK MODE CHECK ---
    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
    }
    const scrollAmount = 310; 
    /**
     * Reusable function to initialize a single carousel (Card generation + scrolling + modal buttons)
     */
    function initializeCarousel(wrapperId, dataArray, scrollLeftBtnId, scrollRightBtnId) {
        const wrapper = document.getElementById(wrapperId);
        const scrollLeftBtn = document.getElementById(scrollLeftBtnId);
        const scrollRightBtn = document.getElementById(scrollRightBtnId);

        if (wrapper) {
            // 1. Generate Cards
            let allCardsHTML = '';
            dataArray.forEach(destination => {
                allCardsHTML += createTravelCard(destination);
            });
            wrapper.innerHTML = allCardsHTML;

            // 2. Add Modal Opener Listeners (using event delegation for efficiency)
            wrapper.addEventListener('click', (event) => {
                const button = event.target.closest('.view-itinerary-btn');
                if (button) {
                    const destinationId = button.dataset.id;
                    openItineraryModal(destinationId); 
                    event.preventDefault(); // Stop any default button action
                }
            });

            // 3. Add Scroll Listeners
            if (scrollLeftBtn && scrollRightBtn) {
                scrollLeftBtn.addEventListener('click', () => {
                    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                });
                scrollRightBtn.addEventListener('click', () => {
                    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                });
            }
        }
    }

    // Initialize the two carousels
    initializeCarousel('travelCardsWrapper', travelDestinations, 'scrollLeft', 'scrollRight');
    initializeCarousel('moreOptionsWrapper', moreOptions, 'scrollLeftMore', 'scrollRightMore');


    // --- 5.2 MODAL CLOSING LISTENERS (ESC Key and click outside) ---
    
    if (itineraryModal) {
        closeBtn.addEventListener('click', closeItineraryModal);

        window.addEventListener('click', (event) => {
            if (event.target === itineraryModal) {
                closeItineraryModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && itineraryModal.style.display === 'block') {
                closeItineraryModal();
            }
        });
    }

    if (creatorModal) {
        // 1. FAB click to open
        if (createItineraryFab) {
            createItineraryFab.addEventListener('click', openCreatorModal);
        }
        
        // 2. Close button click
        closeCreatorBtn.addEventListener('click', closeCreatorModal);

        // 3. Click outside modal to close
        window.addEventListener('click', (event) => {
            if (event.target === creatorModal) {
                closeCreatorModal();
            }
        });

        // 4. ESC key to close
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && creatorModal.style.display === 'block') {
                closeCreatorModal();
            }
        });

        // 5. Basic Form Submission Handler (replace with real logic later)
        document.getElementById('customItineraryForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const tripName = document.getElementById('tripName').value;
            alert(`Drafting itinerary for: ${tripName}. Check console for details.`);
            console.log("Form Data:", {
                name: tripName,
                destination: document.getElementById('destination').value,
                startDate: document.getElementById('startDate').value,
                duration: document.getElementById('durationDays').value,
                notes: document.getElementById('notes').value
            });
            closeCreatorModal();
        });
    }
    // --- 5.3 EXISTING UI TOGGLE LOGIC ---

    // js code to toggle dark and light mode
    if (modeToggle) {
        modeToggle.addEventListener("click" , () =>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode");
            }else{
                localStorage.setItem("mode" , "dark-mode");
            }
        });
    }
    // js code to toggle search box
    if (searchToggle) {
        searchToggle.addEventListener("click" , () =>{
            searchToggle.classList.toggle("active");
        });
    }
    // js code to toggle sidebar
    if (sidebarOpen && nav) {
        sidebarOpen.addEventListener("click" , () =>{
            nav.classList.add("active");
        });
        body.addEventListener("click" , e =>{
            let clickedElm = e.target;
            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
                nav.classList.remove("active");
            }
        });
    }
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
    if (scloseBtn) {
        scloseBtn.addEventListener('click', closeServiceModal);
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


});