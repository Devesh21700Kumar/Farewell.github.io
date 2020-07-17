$(document).ready(function () {
    $('.senior-link').click(function () {
        name = $(this).text().toLowerCase()
        $.getJSON('../img/seniors/' + name + '/senior.json', function (senior) {
            document.title = 'Farewell ' + senior.name
            $('.carlo_txt').html('<h2>' + senior.h2 + '</h2>')
            $('.carlo_txt').append('<p>' + senior.p1_desc + '<br><br>' + senior.p2_desc + '</p>')
            $('.carlo').attr('src', senior.imageOnRight)
            // $('.txt4').html(senior.txt4)
            $('.ravi_img3').attr('src', senior.profileimg)
            $('.record1').attr('src', senior.recordDivImages[0])
            $('.record2').attr('src', senior.recordDivImages[1])
            $('.record3').attr('src', senior.recordDivImages[2])
            $('.record4').attr('src', senior.recordDivImages[3])
            $('#section6bg').attr('src', senior.section6bg)
            $('#div_patch1').html(senior.shortText)
            $('#div_patch2').html(senior.shortText2)
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
            swiperWrapper.classList.add(".swiper-wrapper");

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
        })
    })
})