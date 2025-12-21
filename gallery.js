img_data = [
    {
        "subject": "Antelope Canyon",
        "location": "Navajo Nation, AZ",
        "filepath": "./assets/gallery/antelope_canyon.jpeg"
    },
    {
        "subject": "Aston Martin DB9",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/aston_martin.jpeg"
    },
    {
        "subject": "Bay Bridge From Oracle Park",
        "location": "San Francisco, CA",
        "filepath": "./assets/gallery/bay_bridge.jpeg"
    },
    {
        "subject": "Wispy Cloud In The Sunset",
        "location": "Cupertino, CA",
        "filepath": "./assets/gallery/cool_cloud.jpeg"
    },
    {
        "subject": "Laguna Beach From Above",
        "location": "Crystal Cove State Park, CA",
        "filepath": "./assets/gallery/crystal_cove.jpeg"
    },
    {
        "subject": "Emerald Bay Through A Polarized Lens",
        "location": "Lake Tahoe, CA",
        "filepath": "./assets/gallery/emerald_bay.jpeg"
    },
    {
        "subject": "Foggy Castle Rock",
        "location": "Castle Rock State Park, CA",
        "filepath": "./assets/gallery/foggy_castle_rock.jpeg"
    },
    {
        "subject": "The Grand Canyon",
        "location": "Grand Canyon, AZ",
        "filepath": "./assets/gallery/grand_canyon.jpeg"
    },
    {
        "subject": "Waikiki From Diamond Head",
        "location": "Honolulu, HI",
        "filepath": "./assets/gallery/hawaii.jpeg"
    },
    {
        "subject": "Horseshoe Lake Through The Trees",
        "location": "Skyline Ridge OSP, CA",
        "filepath": "./assets/gallery/horseshoe_lake.jpeg"
    },
    {
        "subject": "Newport Beach at Sunset",
        "location": "Newport Beach, CA",
        "filepath": "./assets/gallery/newport_sunset.jpeg"
    },
    {
        "subject": "Overlooking CA SR 133",
        "location": "Aliso Viejo, CA",
        "filepath": "./assets/gallery/overlooking_133.jpeg"
    },
    {
        "subject": "Point Bonitas at Sunset",
        "location": "Sausalito, CA",
        "filepath": "./assets/gallery/point_bonitas.jpeg"
    },
    {
        "subject": "Portola Redwoods State Park",
        "location": "La Honda, CA",
        "filepath": "./assets/gallery/portola_redwoods.jpeg"
    },
    {
        "subject": "The Sierra Nevada Mountains",
        "location": "Sequoia National Park, CA",
        "filepath": "./assets/gallery/sequoia_mountains.jpeg"
    },
    {
        "subject": "Sahyadri Mountains From Sinhagad",
        "location": "Pune, MH, India",
        "filepath": "./assets/gallery/sinhagad.jpeg"
    },
    {
        "subject": "Cars Gathered at Skidpad",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/skidpad_lineup.jpeg"
    },
    {
        "subject": "Sunset at Skidpad",
        "location": "Saratoga, CA",
        "filepath": "./assets/gallery/skidpad_sunset.jpeg"
    },
    {
        "subject": "Downtown San Francisco From Twin Peaks",
        "location": "San Francisco, CA",
        "filepath": "./assets/gallery/twin_peaks.jpeg"
    },
    {
        "subject": "CA SR 73 From UCI Ecological Preserve",
        "location": "Irvine, CA",
        "filepath": "./assets/gallery/uci_preserve_73.jpeg"
    },
    {
        "subject": "Skyline Boulevard From Windy Hill",
        "location": "Woodside, CA",
        "filepath": "./assets/gallery/windy_hill.jpeg"
    },
    {
        "subject": "Sunset at Yosemite",
        "location": "Yosemite National Park, CA",
        "filepath": "./assets/gallery/yosemite_sunset.jpeg"
    }
]

num_images = 6;

function get_x_randoms(x, max){
    //gets set of x random numbers from 0 to max
    let rand_set = new Set();
    while (rand_set.size < x){
        rand_set.add(Math.floor(Math.random() * max));
    }
    return rand_set;
}

function build_images(img_indices){
    //builds image from array of int indices
    console.log(typeof img_indices);

    const imgs = img_indices.map((i) => {return img_data[i]});

    for (let i = 0; i < num_images; i++){
        document.getElementById(`gallery-image${i+1}`).setAttribute("src", imgs[i]["filepath"]);
        document.getElementById(`gallery-caption${i+1}`).innerHTML = `${imgs[i]["subject"]}`;
        document.getElementById(`gallery-location${i+1}`).innerHTML = `${imgs[i]["location"]}`;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const last_date = window.localStorage.getItem("lastDate");
    const last_photos = window.localStorage.getItem("imgIndices");

    const current_date = new Date().toLocaleDateString("sv-SE");

    if (current_date > last_date || last_date == null || last_photos == null){
        window.localStorage.setItem("lastDate", new Date().toLocaleDateString('sv-SE'));
        window.localStorage.setItem("imgIndices", [...get_x_randoms(num_images, img_data.length)]);
    }

    const indices = window.localStorage.getItem("imgIndices").split(",").map((item) => parseInt(item, 10));
    build_images(indices);
});