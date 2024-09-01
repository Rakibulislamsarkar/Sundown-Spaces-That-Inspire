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
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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

    // Add click event listeners to option elements
    options.forEach((option, index) => {
        option.addEventListener('click', () => {
            // Remove 'selected' class from all options and hide all paragraphs
            options.forEach(opt => opt.classList.remove('selected'));
            paragraphs.forEach(paragraph => paragraph.style.display = 'none');

            // Add 'selected' class to the clicked option
            option.classList.add('selected');
            const imageName = option.getAttribute('data-image');
            image.src = `./New folder/${imageName}.webp`;

            // Show the corresponding paragraph
            paragraphs[index].style.display = 'block';
        });
    });

    // Set the default option
    const defaultOption = document.querySelector('#down-left .option[data-image="design"]');
    defaultOption.classList.add('selected');
    image.src = './New folder/design.webp';

    // Hide all paragraphs except the first one
    paragraphs.forEach((paragraph, index) => {
        paragraph.style.display = (index === 0) ? 'block' : 'none';
    });
});


