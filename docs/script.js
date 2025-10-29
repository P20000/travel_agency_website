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
    },
    
    // Add more destinations as needed
];

document.addEventListener('DOMContentLoaded', () => {
  const moreOptionsWrapper = document.getElementById('moreOptionsWrapper');
  const scrollLeftMore = document.getElementById('scrollLeftMore');
  const scrollRightMore = document.getElementById('scrollRightMore');

  if (moreOptionsWrapper) {
    let allMoreCardsHTML = '';
    moreOptions.forEach(option => {
      allMoreCardsHTML += createTravelCard(option);
    });
    moreOptionsWrapper.innerHTML = allMoreCardsHTML;

    const scrollAmount = 310;
    scrollLeftMore.addEventListener('click', () => {
      moreOptionsWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    scrollRightMore.addEventListener('click', () => {
      moreOptionsWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});



const moreOptions=[
    {
        id: 'switzerland;',
        title: 'SCENIC SWITZERLAND WITH INTERLAKEN',
        duration: '9D/8N',
        image: 'https://t3.ftcdn.net/jpg/01/87/13/30/360_F_187133059_6wFe0lGVs9M6chzO4Af5jpx8fMRvw3us.jpg',
        location: 'INTERLAKEN',
        bestTime: 'BEST TIME : JUNE, JULY, AUGUST'
    },
    {
        id: 'prague',
        title: 'CHARMING PRAGUE WITH OLD TOWN MAGIC',
        duration: '6D/7N',
        image: 'https://thenextcrossing.com/wp-content/uploads/2020/06/Czech-Republic-0671-Pano.jpg',
        location: 'TOWN_MAGIC',
        bestTime: 'BEST TIME : APRIL,MAY,JUNE'
    },
    {
        id: 'milan',
        title: 'MODERN MILAN WITH ITALIAN ELEGANCE',
        duration: '6D/7N',
        image: 'https://3daysinmilan.com/wp-content/uploads/2020/10/Corso_Como_skyline.jpg',
        location: 'CORSO_COMO',
        bestTime: 'BEST TIME : SEPTEMBER, OCTOBER'
    },
    {
        id: 'mirituese',
        title: 'MARVELOUS MATURITIES WITH CORAL DREAMS',
        duration: '7D/6N',
        image: 'https://mauritiusattractions.com/content/images/gallery/193/glass-bottom-boat-blue-marine-park%20(3).jpg',
        location: 'BLUE_BAY',
        bestTime: 'BEST TIME : OCTOBER, NOVEMBER, DECEMBER'
    },
    {
        id: 'austria',
        title: 'ARTISTIC AUSTRIA WITH ALPINE WONDERS',
        duration: '2D/3N',
        image: 'https://thetourguy.com/wp-content/uploads/2023/01/TTTD-Vienna-feature-1440-675.jpg',
        location: 'VIENNA',
        bestTime: 'BEST TIME : NOVEMBER, DECEMBER'
    },
    {
        id: 'maldives',
        title: 'MAGICAL MALDIVES WITH SUN-KISSED PARADISE',
        duration: '3D/2N',
        image: 'https://cdn.mahlatini.com/_2400x1350_crop_center-center_none/Lux-South-Ari-Atoll-Hero-Image.png',
        location: 'ARI ATOLL',
        bestTime: 'BEST TIME : MAY, JUNE, JULY'
    },
    {
        id: 'finland',
        title: 'FROZEN FINLAND WITH NORTHEN LIGHT GLOW',
        duration: '6D/7N',
        image: 'https://apukkaresort.fi/wp-content/uploads/2024/04/sauna-carriage-on-skis-apukka-resort-rovaniemi-lapland-finland.jpg',
        location: 'LAPLAND',
        bestTime: 'BEST TIME : DECEMBER, JANUARY'
    }
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