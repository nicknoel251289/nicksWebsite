$(document).ready(function(){

  $('#formgrid').submit(function(){
    $(".thankyou").fadeIn("1000");
    return false;
  });

  $(".okay").click(function(){
    $(".thankyou").fadeOut("1000");
  });


  var lastPosition = 0;

  $(document).scroll(function() {
      var position = $(this).scrollTop();
      var caseStudy = $('#section-5').position();
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

      var sideNavPosition = $('#section-5').position(); //same exact code as caseStuy above lel
      var sideNavPositionY = sideNavPosition.top - 704;
      console.log(sideNavPositionY);
      console.log(position);


      if (lastPosition > position || position <= sideNavPositionY) {
        $('.sideNav').css('height', '0px');
        $('.sideNav').animate({height: '0px'},10);
        $('sideNav').css('top', '-100px');
        $('div.sideNav > a').css('top', '-100px');
        $('div.sideNav > a').animate({height: '0px'},10);
      } else if (lastPosition < position){
        $('.sideNav').animate({height: '60px'},10);
        $('.sideNav').css('top', '0px');
        $('div.sideNav > a').css('top', '0px');
        $('div.sideNav > a').css('margin', '20px');
        $('div.sideNav > a').animate({height: '60px'},10);
        $('div.sideNav > a').animate({opacity: '1'},10);
      }

      lastPosition = position;
  });



  $(window).resize(function(){
    var windowWidth = $(this).innerWidth();
    console.log(windowWidth);
    if (windowWidth < 750) {
      $('.sideNav').css('display', 'none');
    } else if (windowWidth > 750) {
      $('.sideNav').css('display', 'grid');
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
  var windowInnerWidth = $(this).innerWidth();

    if(windowInnerWidth < 811){
      $('.sideNav').css('display', 'none');
    } else if (windowWidth > 811){
      $('.sideNav').css('display', 'block');
    }

});
