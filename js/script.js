$(document).ready(function () {
    $('.senior-link').click(function () {
        name = $(this).text().toLowerCase()
        $.getJSON('../img/seniors/' + name + '/senior.json', function (senior) {
            document.title = 'Farewell ' + senior.name;
            document.querySelectorAll(".name").forEach(name => {
                name.innerHTML = senior.name;
                if (senior.name === "Satyavrat" || senior.name === "Prashant" || senior.name === "Srivatsa") {
                    name.style.fontSize = "8.7vw";
                }
            });
            $('.carlo_txt p').text(senior.p1_desc + ' ' + senior.p2_desc)
            $('.carlo').attr('src', senior.imageOnRight)
            $('.ravi_img3').attr('src', senior.profileimg)
            $('#section6bg').attr('src', senior.section6bg)
            $('.div_patch1').html(senior.shortText)
            $('.div_patch2').html(senior.shortText2)
            $('.btn-play').attr('href', senior.TvVideoLink)
            $('.ravi_pic').attr('src', senior.section7bg)

            /**
             * Carousel images
             */
            const swiperContainer = document.querySelector(".swiper-container");
            
            // Clear previous containers and create new ones
            swiperContainer.innerHTML = "";
            let swiperImages = senior.swiperImages,
                swiperWrapper = document.createElement("div");
            swiperWrapper.classList.add("swiper-wrapper");

            swiperImages.forEach(swiperImage => {
                const swiperSlide = document.createElement("div"),
                    imageWrapper = document.createElement("div"),
                    carouselImage = document.createElement("img");
            
                // Add classes and other attributes for image
                const imageClasses = ["s_story5", "class_disable", "animated", "animate_story_txt"];
                carouselImage.classList.add(...imageClasses);
                carouselImage.setAttribute("src", swiperImage);
                carouselImage.setAttribute("alt", "poster");

                // Add classes and other attributes for other containers
                imageWrapper.classList.add("image-wrapper");
                swiperSlide.classList.add("swiper-slide");

                // Inject the elements in the respective order
                imageWrapper.appendChild(carouselImage);
                swiperSlide.appendChild(imageWrapper);
                swiperWrapper.appendChild(swiperSlide);
            });

            // Inject the swiper wrapper into the container
            swiperContainer.appendChild(swiperWrapper);
            setTimeout(changeSwiper, 300)
        })
    })
});

var changeSwiper = (function () {
    var swiperInstance = null;
    
    return function () {
        if (swiperInstance) {
            swiperInstance.destroy(true, false);
        }

        swiperInstance = new Swiper(".swiper-container", {
            pagination: ".swiper-pagination",
            slidesPerView: "auto",
            paginationClickable: !0,
            spaceBetween: 15,
            freeMode: !0,
            loop: !0,
        });
    }
})();
