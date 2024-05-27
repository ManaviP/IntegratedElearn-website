(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);
const firebaseConfig = {
    apiKey: "AIzaSyAu5pJgKw0ml3LNfa0CI1aiyecIO_oShF8",
    authDomain: "elearn-d392b.firebaseapp.com",
    databaseURL: "https://elearn-d392b-default-rtdb.firebaseio.com",
    projectId: "elearn-d392b",
    storageBucket: "elearn-d392b.appspot.com",
    messagingSenderId: "1052559099699",
    appId: "1:1052559099699:web:c88fb373fcf13590842046"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  var contactFormDB=firebase.database().ref("contactForm")
  document.getElementById('contactForm').addEventListener("submit",submitForm)
  function submitForm(e){
    e.preventdefault();
var name= getElementsVal("name");
var emailid= getElementsVal("emailid");
var msgContent= getElementsVal("msgContent");
console.log(name,emailid,msgContent);
}
const getElementsVal = (id) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name :name,
        emailid:emailid,
        msgContent:msgContent,
});
};






