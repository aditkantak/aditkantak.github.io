img_data = [
    {
        "subject": "Antelope Canyon",
        "location": "Navajo Nation, AZ",
        "filepath": "./assets/gallery/antelope_canyon.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Aston Martin DB9",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/aston_martin.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Bay Bridge From Oracle Park",
        "location": "San Francisco, CA",
        "filepath": "./assets/gallery/bay_bridge.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Wispy Cloud In The Sunset",
        "location": "Cupertino, CA",
        "filepath": "./assets/gallery/cool_cloud.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Laguna Beach From Above",
        "location": "Crystal Cove State Park, CA",
        "filepath": "./assets/gallery/crystal_cove.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Waves at Hidden Beach",
        "location": "Point Lobos State Natural Reserve, CA",
        "filepath": "./assets/gallery/hidden_beach.JPG",
        "device": "Nikon Coolpix S5200"
    },
    {
        "subject": "Emerald Bay Through A Polarized Lens",
        "location": "Lake Tahoe, CA",
        "filepath": "./assets/gallery/emerald_bay.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Foggy Castle Rock",
        "location": "Castle Rock State Park, CA",
        "filepath": "./assets/gallery/foggy_castle_rock.jpeg",
        "device": "Samsung Galaxy S10e"
    },
    {
        "subject": "The Grand Canyon",
        "location": "Grand Canyon, AZ",
        "filepath": "./assets/gallery/grand_canyon.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Waikiki From Diamond Head",
        "location": "Honolulu, HI",
        "filepath": "./assets/gallery/hawaii.jpeg",
        "device": "Samsung Galaxy S10e"
    },
    {
        "subject": "Horseshoe Lake Through The Trees",
        "location": "Skyline Ridge OSP, CA",
        "filepath": "./assets/gallery/horseshoe_lake.jpeg",
        "device": "Samsung Galaxy S10e"
    },
    {
        "subject": "Newport Beach at Sunset",
        "location": "Newport Beach, CA",
        "filepath": "./assets/gallery/newport_sunset.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Overlooking CA SR 133",
        "location": "Aliso Viejo, CA",
        "filepath": "./assets/gallery/overlooking_133.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Point Bonitas at Sunset",
        "location": "Sausalito, CA",
        "filepath": "./assets/gallery/point_bonitas.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Portola Redwoods State Park",
        "location": "La Honda, CA",
        "filepath": "./assets/gallery/portola_redwoods.jpeg",
        "device": "Samsung Galaxy S10e"
    },
    {
        "subject": "The Sierra Nevada Mountains",
        "location": "Sequoia National Park, CA",
        "filepath": "./assets/gallery/sequoia_mountains.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Sahyadri Mountains From Sinhagad",
        "location": "Pune, MH, India",
        "filepath": "./assets/gallery/sinhagad.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Cars Gathered at Skidpad",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/skidpad_lineup.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Sunset at Skidpad",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/skidpad_sunset.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Downtown San Francisco From Twin Peaks",
        "location": "San Francisco, CA",
        "filepath": "./assets/gallery/twin_peaks.jpeg",
        "device": "Samsung Galaxy S10e"
    },
    {
        "subject": "CA SR 73 From UCI Ecological Preserve",
        "location": "Irvine, CA",
        "filepath": "./assets/gallery/uci_preserve_73.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Skyline Boulevard From Windy Hill",
        "location": "Woodside, CA",
        "filepath": "./assets/gallery/windy_hill.jpeg",
        "device": "Apple iPhone 15 Pro"
    },
    {
        "subject": "Sunset at Yosemite",
        "location": "Yosemite National Park, CA",
        "filepath": "./assets/gallery/yosemite_sunset.jpeg",
        "device": "Apple iPhone 15 Pro"
    }
]

num_images = 6;

function get_x_randoms(x, max, seed){
    //gets set of x seeded random numbers from 0 to max
    let rand_set = new Set();
    let rng = new Math.seedrandom(seed);
    while (rand_set.size < x){
        rand_set.add(Math.floor(rng() * max));
    }
    return rand_set;
}

function build_images(img_indices){
    //builds image from array of int indices
    console.log(typeof img_indices);

    const imgs = img_indices.map((i) => {return img_data[i]});

    for (let i = 0; i < num_images; i++){
        document.getElementById(`gallery-image${i}`).setAttribute("src", imgs[i]["filepath"]);
        document.getElementById(`gallery-caption${i}`).innerHTML = `${imgs[i]["subject"]}`;
        document.getElementById(`gallery-location${i}`).innerHTML = `${imgs[i]["location"]}`;
        document.getElementById(`gallery-device${i}`).innerHTML = `<i>${imgs[i]["device"]}</i>`;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const last_date = window.localStorage.getItem("lastDate");
    const last_photos = window.localStorage.getItem("imgIndices");

    const current_date = new Date().toLocaleDateString("sv-SE");

    if (current_date > last_date || last_date == null || last_photos == null){
        window.localStorage.setItem("lastDate", current_date);
        window.localStorage.setItem("imgIndices", [...get_x_randoms(num_images, img_data.length, current_date)]);
    }

    const indices = window.localStorage.getItem("imgIndices").split(",").map((item) => parseInt(item, 10));
    build_images(indices);
});