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
  });
});
