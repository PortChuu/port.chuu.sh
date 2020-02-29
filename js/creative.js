(function($) {
    "use strict";
    var navbarOffset = 50;

    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip()
  
    // Enable clipboard.js
    var clipboard = new ClipboardJS('.clipboard-js');
  
    clipboard.on('success', function(e) {
        var btn = $(e.trigger), orig = btn.attr('data-original-title');
        btn.attr('data-original-title', 'Copied!')
            .tooltip('show')
            .attr('data-original-title', orig);
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        $(e.trigger).attr('data-original-title', 'Press [Ctrl]+[C] to copy.')
            .tooltip('show');
    });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - navbarOffset)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: navbarOffset+1
  });

  // Collapse Navbar
  var jqNavbar = $("#mainNav");
  if (jqNavbar.length ) {
    var navbarCollapse = function() {
        if (jqNavbar.offset().top >= $(window).height() / 2) {
            jqNavbar.addClass("navbar-scrolled");
        } else {
            jqNavbar.removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  // Magnific popup calls
  $('.magnific-portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
