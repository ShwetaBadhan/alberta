(function ($) {
  "use strict";

  // multi level dropdown menu
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");

    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
    return false;
  });

  //Header Search
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // data-background
  $(document).on("ready", function () {
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
  });

  // sidebar popup
  $(".sidebar-btn").on("click", function () {
    $(".sidebar-popup").addClass("open");
    $(".sidebar-wrapper").addClass("open");
  });
  $(".close-sidebar-popup, .sidebar-popup").on("click", function () {
    $(".sidebar-popup").removeClass("open");
    $(".sidebar-wrapper").removeClass("open");
  });

  // wow init
  new WOW().init();

  // hero slider
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    navText: ["<i class='far fa-long-arrow-left'></i>", "<i class='far fa-long-arrow-right'></i>"],
    onInitialized: animateSlide,
    onChanged: animateSlide,
  });

  // animate slide
  function animateSlide(event) {
    let elements = $(".owl-item").eq(event.item.index).find("[data-animation]");
    elements.each(function () {
      let el = $(this),
        delay = el.data("delay"),
        duration = el.data("duration"),
        anim = "animated " + el.data("animation");

      el.css({
        "animation-delay": delay,
        "animation-duration": duration,
      });

      el.addClass(anim).one("animationend", () => el.removeClass(anim));
    });
  }

  // portfolio-slider
  $(".portfolio-slider").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // service-slider
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 22,
    nav: true,
    dots: false,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // partner-slider
  var isCenter = $(".partner-slider").data("center") == true;
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
    dots: false,
    autoplay: true,
    center: isCenter,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  // testimonial-slider
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });

  // fun fact counter
  $(".counter").countTo();
  $(".counter-box").appear(
    function () {
      $(".counter").countTo();
    },
    {
      accY: -100,
    },
  );

  // magnific popup init
  $(".popup-gallery").magnificPopup({
    delegate: ".popup-img",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // progress bar
  $(document).ready(function () {
    var progressBar = $(".progress");
    if (progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data("value");
          Self.find(".progress-bar").animate(
            {
              width: progressValue + "%",
            },
            1000,
          );
        });
      });
    }
  });

  // case filter
  $(window).on("load", function () {
    if ($(".filter-box").children().length > 0) {
      $(".filter-box").isotope({
        itemSelector: ".filter-item",
        masonry: {
          columnWidth: 1,
        },
      });

      $(".filter-btn").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $(".filter-box").isotope({ filter: filterValue });
      });

      $(".filter-btn li").each(function () {
        $(this).on("click", function () {
          $(this).siblings("li.active").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  });

  // scroll to top
  $(window).scroll(function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $("#scroll-top").addClass("active");
    } else {
      $("#scroll-top").removeClass("active");
    }
  });

  $("#scroll-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });

  // navbar fixed top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });

  // countdown
  $("[data-countdown]").each(function () {
    let finalDate = $(this).data("countdown");
    $(this).countdown(finalDate, function (event) {
      $(this).html(
        event.strftime(
          '<div class="time-wrap">' +
            '<span class="time"><span>%-D</span><span class="unit">Day%!D</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%H</span><span class="unit">Hour%!H</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%M</span><span class="unit">Min%!M</span></span>' +
            ' <span class="divider">:</span> ' +
            '<span class="time"><span>%S</span><span class="unit">Sec%!S</span></span>' +
            "</div>",
        ),
      );
    });
  });

  // slimselect
  document.querySelectorAll(".select")?.forEach((select) => {
    const slimSearch = select.dataset.slimSearch === "true";
    new SlimSelect({
      select: select,
      settings: {
        showSearch: slimSearch,
        searchPlaceholder: "Search...",
      },
    });
  });

  // flatpickr date & time
  document.querySelectorAll(".date-picker")?.forEach((el) => {
    const dateTime = el.dataset.datetime === "true";
    flatpickr(el, {
      enableTime: dateTime,
      time_24hr: false,
      dateFormat: dateTime ? "d M Y, h:i K" : "d M Y",
      prevArrow: "<i class='far fa-chevron-left'></i>",
      nextArrow: "<i class='far fa-chevron-right'></i>",
      disableMobile: true,
    });
  });

  // copywrite date
  let date = new Date().getFullYear();
  $("#date").html(date);

  // price range slider
  if ($(".price-range").length) {
    $(".price-range").slider({
      range: true,
      min: 0,
      max: 999,
      values: [100, 500],
      slide: function (event, ui) {
        $("#price-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#price-amount").val("$" + $(".price-range").slider("values", 0) + " - $" + $(".price-range").slider("values", 1));
  }

  // flexslider
  if ($(".flexslider-thumbnails").length) {
    $(".flexslider-thumbnails").flexslider({
      animation: "slide",
      controlNav: "thumbnails",
    });
  }

  //cart quantity
  ($(".plus-btn").on("click", function () {
    var i = $(this).closest(".cart-qty").children(".quantity").get(0).value++,
      c = $(this).closest(".cart-qty").children(".minus-btn");
    i > 0 && c.removeAttr("disabled");
  }),
    $(".minus-btn").on("click", function () {
      2 == $(this).closest(".cart-qty").children(".quantity").get(0).value-- && $(this).attr("disabled", "disabled");
    }));

  // auth password view
  $(".password-view").on("click", function () {
    var pwd = document.getElementById("password");
    if (pwd.type === "password") {
      pwd.type = "text";
      $(this).addClass("show");
    } else {
      pwd.type = "password";
      $(this).removeClass("show");
    }
  });

  // profile image btn
  $(".profile-img-btn").on("click", function () {
    $(".profile-img-file").click();
  });

  // banner-img
  $(".banner-img-wrap .img-item").on("mouseenter", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // price slider
  if ($(".price-range").length) {
    $(".price-range").slider({
      step: 500,
      range: true,
      min: 0,
      max: 10000,
      values: [1500, 5000],
      slide: function (event, ui) {
        $(".priceRange").val("$" + ui.values[0].toLocaleString() + " - $" + ui.values[1].toLocaleString());
      },
    });
    $(".priceRange").val(
      "$" + $(".price-range").slider("values", 0).toLocaleString() + " - $" + $(".price-range").slider("values", 1).toLocaleString(),
    );
  }

  // bootstrap tooltip enable
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  // scrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // image reveal
  if ($(".reveal").length) {
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });
      tl.set(container, {
        autoAlpha: 1,
      });
      tl.from(container, 1, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1, {
        xPercent: 100,
        scale: 1,
        delay: -1,
        ease: Power2.out,
      });
    });
  }

  // parallax effect
  if ($(".parallax").length) {
    gsap.to(".parallax-bg", {
      y: "-15%",
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  }

  /* animation text */
  function aniText() {
    // ani-text-1
    if ($(".ani-text-1").length) {
      let aniTextEl = document.querySelectorAll(".ani-text-1");
      aniTextEl.forEach((element) => {
        if (element.animation) {
          element.animation.progress(1).kill();
          element.split.revert();
        }

        element.split = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });
        gsap.set(element, { perspective: 400 });
        gsap.set(element.split.chars, {
          opacity: 0,
          x: "50",
        });

        element.animation = gsap.to(element.split.chars, {
          scrollTrigger: { trigger: element, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        });
      });
    }

    // ani-text-2
    if ($(".ani-text-2").length) {
      let aniTextEl = document.querySelectorAll(".ani-text-2");
      aniTextEl.forEach((element) => {
        let aniSpText = new SplitText(element, { type: "chars, words" });
        gsap.from(aniSpText.chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    // ani-text-3
    if ($(".ani-text-3").length) {
      let aniTextEl = document.querySelectorAll(".ani-text-3");
      aniTextEl.forEach((element) => {
        let aniSpText = new SplitText(element, { type: "chars, words" });
        gsap.from(aniSpText.words, {
          duration: 1,
          delay: 0.5,
          x: 20,
          autoAlpha: 0,
          stagger: 0.05,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      aniText();
    });
  } else {
    window.addEventListener("load", aniText);
  }
})(jQuery);