jQuery("body").niceScroll({cursorborder:!1}),function(n){var i=n(".mobile-navigation__links");n(".mobile-navigation__hamburger").on("click",function(){i.toggleClass("mobile-navigation__links--visible")})}(jQuery),jQuery,(new WOW).init(),function(n){var i=n(".top-line").outerHeight(!0),e=n(".navigation"),o=!1;window.addEventListener("scroll",function(n){window.pageYOffset>i&&!o&&(e.addClass("navigation--fixed"),o=!0),window.pageYOffset<i&&o&&(e.removeClass("navigation--fixed"),o=!1)})}(jQuery),function(n){var i=n(".navigation a"),e=n(".mobile-navigation a"),o=function(i){var e="."+i.target.dataset.goTo;n("html, body").animate({scrollTop:n(e).offset().top},500)};i.click(function(n){n.preventDefault(),o(n)}),e.click(function(i){i.preventDefault(),o(i),n(".mobile-navigation__links").removeClass("mobile-navigation__links--visible")})}(jQuery),jQuery,MicroModal.init(),jQuery(".owl-carousel").owlCarousel({loop:!1,margin:10,items:1,nav:!1}),function(n){ymaps.ready(function(){var n=new ymaps.Map("address-map",{center:[59.959012,30.313523],zoom:16}),i=new ymaps.Placemark([59.959012,30.313523],{hintContent:"Расположение"});n.geoObjects.add(i)})}(jQuery);