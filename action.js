function imgSlider(picture){
    document.querySelector('.fg-img').src = picture;
}


function colorChanger(value){
    const col = document.querySelector('.circle');
    col.style.background = value;
}

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".navbar");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))