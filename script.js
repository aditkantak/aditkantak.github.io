document.addEventListener("DOMContentLoaded", (event) => {
    //set theme for theme persistence
    const theme = window.localStorage.getItem("theme");
    if (theme == null){
        window.localStorage.setItem("theme", "cafe");
    }
    else if (theme == "olivia"){
        document.body.classList.add("olivia");
    }
});

document.getElementById("theme-switcher").addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("olivia");
    if (body.classList.contains("olivia")){
        window.localStorage.setItem("theme", "olivia");
    }
    else {
        window.localStorage.setItem("theme", "cafe");
    }
});