const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


const travelDestinations = [
    {
        id: 'uttarakhand',
        title: 'UNIQUE UTTARAKHAND WITH RISHIKESH',
        duration: '6D/5N',
        image: 'https://static.toiimg.com/thumb/msid-98653295,width-748,height-499,resizemode=4,imgsize-131900/.jpg',
        location: 'RISHIKESH',
        bestTime: 'BEST TIME : JAN, MAR, OCT, DEC'
    },
    {
        id: 'karnataka',
        title: 'OFFBEAT KARNATAKA',
        duration: '7D/6N',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585',
        location: 'KARNATAKKA',
        bestTime: 'BEST TIME : JAN, FEB, JUN, DEC'
    },
    {
        id: 'arunachal',
        title: 'OFFBEAT ARUNACHAL',
        duration: '10D/9N',
        image: 'https://media.istockphoto.com/id/910430170/photo/tawang-arunachal-pradesh.jpg?s=612x612&w=0&k=20&c=MKKYsHH_6JRMYROO2bHIsQAW9XoSnl-9nkRGOFgAg0M=',
        location: 'ARUNACHAL PRADESH',
        bestTime: 'BEST TIME : MAR, APR, SEP, DEC'
    },
    {
        id: 'himachal',
        title: 'OFFBEAT HIMACHAL',
        duration: '8D/7N',
        image: 'https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=',
        location: 'JOSH',
        bestTime: 'BEST TIME : MAR, JUN, SEP, OCT'
    },
    {
        id: 'nagaland',
        title: 'HORNBILL FESTIVAL IN NAGALAND',
        duration: '8D/7N',
        image: 'https://t4.ftcdn.net/jpg/10/84/29/49/360_F_1084294904_WEE7gdXZsA5BTMDs9UCFNEMEjgk4iWwP.jpg',
        location: 'NAGALAND',
        bestTime: 'BEST TIME : DEC'
    },
    {
        id: 'leh',
        title: 'LOVELY LEH',
        duration: '8D/7N',
        image: 'https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=',
        location: 'LEH',
        bestTime: 'BEST TIME : JUN, SEP'
    },
    {
        id: 'srinagar',
        title: 'HEAVENLY SRINAGAR',
        duration: '7D/6N',
        image: 'https://www.tripsavvy.com/thmb/-AzEW7DpVfnzFwXRy0LISt5RH8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1432005421-5c0bc8d84cedfd0001fa5acb.jpg',
        location: 'SRINAGAR',
        bestTime: 'BEST TIME : MAY, JUN, SEP'
    }
    // Add more destinations as needed
];



function createTravelCard(destination) {
    const card = `
        <div class="travel-card">
            <div class="card-image-container">
                <img src="${destination.image}" alt="${destination.title}">
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
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const cardsWrapper = document.getElementById('travelCardsWrapper');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    if (cardsWrapper) {
        // Generate and insert all cards
        let allCardsHTML = '';
        travelDestinations.forEach(destination => {
            allCardsHTML += createTravelCard(destination);
        });
        cardsWrapper.innerHTML = allCardsHTML;

        // Add event listeners for the "View Itinerary" buttons
        document.querySelectorAll('.view-itinerary-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const destinationId = event.target.dataset.id;
                alert(`Viewing itinerary for ${destinationId}!`);
                // In a real application, you'd navigate to a detail page
                // window.location.href = `/itinerary/${destinationId}`;
            });
        });

        // Horizontal Scroll Functionality
        const scrollAmount = 310; // Card width + margin (280px + 30px roughly)

        if (scrollLeftBtn && scrollRightBtn) {
            scrollLeftBtn.addEventListener('click', () => {
                cardsWrapper.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            scrollRightBtn.addEventListener('click', () => {
                cardsWrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    } else {
        console.error("Travel cards wrapper not found!");
    }
});