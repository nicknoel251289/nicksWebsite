$(document).ready(function(){
  $(document).scroll(function() {
      var position = $(this).scrollTop();
      var caseStudy = $('#section-1').position();
      var caseStudyY = caseStudy.top - 400;
      var artPosition = $('#section-2').position();
      var artPositionY = artPosition.top - 400;
      if (position > caseStudyY) {
        $('.CS-appear').css('opacity', '1');
      }
      if (position < caseStudyY) {
        $('.CS-appear').css('opacity', '0');
      }

      if (position > artPositionY) {
        $('.art-grid').css('opacity', '1');
      }
      if (position < artPositionY) {
        $('.art-grid').css('opacity', '0');
      }

      var sideNavPosition = $('#section-1').position(); //same exact code as caseStuy above lel
      var sideNavPositionY = sideNavPosition.top - 400;
      if (position > sideNavPositionY) {
        $('.sideNav').css({'display': 'block', 'opacity': '1'});
      } else if (position < sideNavPositionY) {
        $('.sideNav').css({'display': 'none', 'opacity': '0'});
      }

      //turn of the side nav when scrolling
      var windowWidth = $(this).innerWidth();
      if (windowWidth < 1190) {
        $('.sideNav').css('display', 'none');
      }

      if (position > caseStudyY){
        $('ul.sideNav > li').css('color', 'red');
      }

  });


  //see my work! button on main page
  $(".btn").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  //side nav bar buttons
  $(".btn2").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  /////////////////////////////////////////
  // Turn of sideNav when resizing window//
  /////////////////////////////////////////
  $(window).resize(function() {
    var windowWidth = $(this).innerWidth();

    if (windowWidth < 1190){
      $('.sideNav').css('display', 'none');
    } else if (windowWidth > 1190){
      $('.sideNav').css('display', 'block');
    }
  });



});
