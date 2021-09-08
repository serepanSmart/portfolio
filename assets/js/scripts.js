function scroll_to(e, t) {
  var o = e.attr("href").replace("#", "."),
    a = 0;
  ".top-content" != o && ((o += "-container"), (a = $(o).offset().top - t)),
    $(window).scrollTop() != a &&
      $("html, body").stop().animate({ scrollTop: a }, 1e3);
}
jQuery(document).ready(function () {
  new WOW().init(),
    $(".page-title").backstretch("assets/img/backgrounds/1.jpg"),
    $(".counters-container").backstretch("assets/img/backgrounds/1.jpg"),
    $(".our-motto-container").backstretch("assets/img/backgrounds/1.jpg"),
    $(".call-to-action-container").backstretch("assets/img/backgrounds/1.jpg"),
    $(".counters-container").waypoint(
      function () {
        $(".counter-box h4").countTo();
      },
      { offset: "100%" }
    ),
    $(".testimonial-active").html(
      "<p>" + $(".testimonial-single:first p").html() + "</p>"
    ),
    $(".testimonial-single:first .testimonial-single-image img").css(
      "opacity",
      "1"
    ),
    $(".testimonial-single-image img").on("click", function () {
      $(".testimonial-single-image img").css("opacity", "0.3"),
        $(this).css("opacity", "1");
      var e = $(this).parent(".testimonial-single-image").siblings("p").html();
      $(".testimonial-active p").fadeOut(300, function () {
        $(this).html(e), $(this).fadeIn(400);
      });
    }),
    $(".contact-form").validate({
      rules: { name: { required: !0, minlength: 2 } },
      messages: {
        name: {
          required: "Please leave your name in the field 'Name'",
          minlength: "This field must contain at least two (2) characters",
        },
        tel: {
          required: "Please leave your phone number in the field 'Phone'",
          minlength: "This field must contain at least seven (7) characters",
        },
        email: {
          required: "Please leave your email-address in the field 'Email'",
          email:
            "The 'Email' field must contain the '@' character and the '.' after that, and to meet the standards for writing email-addresses",
        },
        message: {
          required: "Please leave your message in the field 'Message'",
        },
      },
      submitHandler: function () {
        let e = $(".contact-form").serialize();
        return (
          $.ajax({
            type: "POST",
            url: "mail.php",
            data: e,
            cache: !1,
            success: function () {
              $(".contact-form").html(
                "<h4>Thank you! I'll contact you as soon as possible &#9786;<h4>"
              );
            },
          }),
          !1
        );
      },
    });
}),
  jQuery(window).load(function () {
    $(".loader-img").fadeOut(),
      $(".loader").delay(1e3).fadeOut("slow"),
      $(".portfolio-masonry").masonry({
        columnWidth: ".portfolio-box",
        itemSelector: ".portfolio-box",
        transitionDuration: "0.5s",
      }),
      $(".portfolio-filters a").on("click", function (e) {
        if ((e.preventDefault(), !$(this).hasClass("active"))) {
          $(".portfolio-filters a").removeClass("active");
          var t = $(this).attr("class").replace("filter-", "");
          $(this).addClass("active"),
            "all" != t
              ? ($(".portfolio-box:not(." + t + ")").css("display", "none"),
                $(".portfolio-box:not(." + t + ")").removeClass(
                  "portfolio-box"
                ),
                $("." + t).addClass("portfolio-box"),
                $("." + t).css("display", "block"),
                $(".portfolio-masonry").masonry())
              : ($(".portfolio-masonry > div").addClass("portfolio-box"),
                $(".portfolio-masonry > div").css("display", "block"),
                $(".portfolio-masonry").masonry());
        }
      }),
      $(window).on("resize", function () {
        $(".portfolio-masonry").masonry();
      }),
      $(".portfolio-box-text p").magnificPopup({
        type: "image",
        gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
        image: {
          tError: "The image could not be loaded.",
          titleSrc: function (e) {
            return e.el.text();
          },
        },
        callbacks: {
          elementParse: function (e) {
            e.src = e.el
              .parents(".portfolio-box-text-container")
              .siblings("img")
              .attr("src");
          },
        },
      });
  });
 const firstDiv = document.querySelector('div')
 firstDiv.style.display = 'none'
