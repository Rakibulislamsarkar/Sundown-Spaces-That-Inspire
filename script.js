const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function (e) {
        if (!elemC.contains(e.relatedTarget) && !fixed.contains(e.relatedTarget)) {
            fixed.style.display = "none";
        }
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        speed: 1000,
      });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()


document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('#down-left .option');
    const image = document.getElementById('displayed-image');
    const paragraphs = document.querySelectorAll('#tab-details p');


    options.forEach((option, index) => {
        option.addEventListener('click', () => {
            
            options.forEach(opt => opt.classList.remove('selected'));
            paragraphs.forEach(paragraph => paragraph.style.display = 'none');

            
            option.classList.add('selected');
            const imageName = option.getAttribute('data-image');
            image.src = `./New folder/${imageName}.webp`;

            
            paragraphs[index].style.display = 'block';
        });
    });

    
    const defaultOption = document.querySelector('#down-left .option[data-image="design"]');
    defaultOption.classList.add('selected');
    image.src = './New folder/design.webp';


    paragraphs.forEach((paragraph, index) => {
        paragraph.style.display = (index === 0) ? 'block' : 'none';
    });
});


