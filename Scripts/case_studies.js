$(document).ready(function(){

  var lastPosition = 0;

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
      }else if (position < artPositionY) {
        $('.art-grid').css('opacity', '0');
      }

      var sideNavPosition = $('#section-1').position(); //same exact code as caseStuy above lel
      var sideNavPositionY = sideNavPosition.top - 110;
      if (lastPosition > position) {
        $('nav').animate({height: '71px'},10);
        $('nav').css('top', '0px');
        $('nav > a').css('top', '0px');
        $('nav > a').animate({height: '44px'},10);
        $('nav > a').animate({opacity: '1'},10);
        $('nav > ul > li > a').animate({opacity: '1'},10);
      } else if (lastPosition < position && lastPosition > sideNavPositionY){
        $('nav').animate({height: '0px'},10);
        $('nav').css('top', '-100px');
        $('nav > a').css('top', '-100px');
        $('nav > a').animate({height: '0px'},10);
      }

      /*else if (position < sideNavPositionY){
        $('.sideNav').animate({height: '0px'},10);
        $('sideNav').css('top', '-100px');
        $('div.sideNav > a').css('top', '-100px');
        $('div.sideNav > a').animate({height: '0px'},10);
      }*/

      lastPosition = position;

      var sectionOne = $('#section-1').position();
      noNav = sectionOne.top;

      if (position > noNav){
          $('.nav').css('display', 'none');
        } /*else if (position < noNav){
          $('.nav').css('display', 'grid');
        }*/

  });

    $('.menu').click(function(){
        $('ul').toggleClass('active');
    });

    /* var positionBefore = 0;
    var newPosition = $(this).scrollTop();
    if(position > positionBefore){
      $('ul').css('display', 'none');
    }
    console.log(newPosition);
    console.log(positionBefore);
    positionBefore = newPosition;*/



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

  /////////////////////////////////////////
  // Turn of sideNav when resizing window//
  /////////////////////////////////////////

    if(windowInnerWidth < 811){
      $('.sideNav').css('display', 'none');
    } else if (windowInnerWidth > 811){
      $('.sideNav').css('display', 'block');
    }
    if(windowInnerWidth < 811){
      $('.nav').css('display', 'none');
    } else if (windowInnerWidth > 811){
      $('.nav').css('display', 'block');
    }


});
