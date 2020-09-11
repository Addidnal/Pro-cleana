///======== pre loader script 
$(document).ready(function () {

    setTimeout(function () {
        $(".loader").delay(500).fadeOut("slow");
        $("#overlayer").delay(500).fadeOut("slow");
    }, 500);

});

const topBar = new Vue({
    el: ".header",
    data: {
        isActive: false
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive
        }
    }
})
const aboutUsNavs = new Vue({
    el: "#aboutUs",
    data: {
        activeTab: "1"
    }
});

// pricing nav
const pricesNav = new Vue({
    el: "#pricing",
    data: {
        activeTab: "1"
    }
})
// order form counters
const counters = new Vue({
    el:"#counting",
    data: {
        bedrooms : 2 ,
        bathrooms: 1
    },
    methods : {
        addBedroom() {
            this.bedrooms += 1
        },
        reduceBedroom() {
            this.bedrooms -= 1
        },
        addBathroom() {
            this.bathrooms += 1
        },
        reduceBathroom() {
            this.bathrooms -= 1
        }
    }
})
// ***** home slider ******//
$("#homeSlider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    rtl:true,
    autoplayTimeout: 4000,
    stagePadding: 0,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".slider-nav-right").click(function (e) {
    e.preventDefault();
    $("#homeSlider").trigger("next.owl.carousel");
});
$(".slider-nav-left").click(function (e) {
    e.preventDefault();
    $("#homeSlider").trigger("prev.owl.carousel");
});

// ***** services slider ******//
$("#servicesSlider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    rtl:true,
    stagePadding: 10,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$(".slider-nav-right").click(function (e) {
    e.preventDefault();
    $("#servicesSlider").trigger("next.owl.carousel");
});
$(".slider-nav-left").click(function (e) {
    e.preventDefault();
    $("#servicesSlider").trigger("prev.owl.carousel");
});

// ***** testimonials home slider ******//
$("#homeTestimonials").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: "fadeIn",
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: false,
    rtl:true,
    dots: true,
    smartSpeed: 1000,
    stagePadding: 0,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// cleaning news slider 
// ***** services slider ******//
$("#cleaningNews").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    rtl:true,
    stagePadding: 10,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// service price slider 
$("#servicePrice").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    autoplay: false,
    rtl:true,
    stagePadding: 10,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// navigation bar sticky 

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > 50) {
        $(".navigationbar").addClass("sticky");
    } else {
        $(".navigationbar").removeClass("sticky");
    }
})


// our numbers counter 
var counter = function () {
    $(".our-numbers-wrapper").waypoint(function (direction) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

        $(".number").each(function () {
            var $this = $(this),
                num = $this.data("number");

            $this.animateNumber({
                number: num,
                numberStep: comma_separator_number_step
            }, 4000)
        });
    }, { offset: '95%' })
}
counter();

const currentLocation = location.href,
    menuItem = document.querySelectorAll(".nav-link"),
    menuLenght = menuItem.length;
    console.log(menuLenght);
    for (let i = 0; i < menuLenght; i++) {
        if(menuItem[i].href === currentLocation) {
            menuItem[i].className = "active"
        }
    }
