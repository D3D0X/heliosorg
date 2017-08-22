(function($) {
  $("<div class='se-pre-con'> </div>").prependTo('body');
    $(window).load(function() {
   //Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
 });
   
  $(document).ready(function() {
    
    $('.logo').after("<div class='companyName'>Heliosorg</div>");


    $('li.expanded.dropdown ').hover(function() {
      $(this).find('ul.menu.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('ul.menu.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
     
  
    // Progress Bar Animation
    $('#block-ourqualifications .progress-bar').each(function() {
      $(this).addClass('setWidth');
    });

    $('#block-ourqualifications .progress-bar').each(function() {
      var This = this;
      $(This).waypoint(function() {
        $(This).removeClass('setWidth');
      }, {
        offset: '85%'
      });
    });

    // Our Values and other 2 blocks animation
    var ourvalues = $('#block-ourvalues');
    var clientservice = $('#block-clientservices');
    var pleasepost = $('#block-pleasepostyourresumehere');
    clientservice.waypoint(function() {
      ourvalues.addClass('animated fadeInLeft delay-500 display');
      clientservice.addClass('animated fadeInUp delay-500 display');
      pleasepost.addClass('animated fadeInRight delay-500 display');
    }, {
      offset: '75%'
    });
    var sparcnetsinformationtechnology = $('#block-sparcnetsinformationtechnology');
    sparcnetsinformationtechnology.waypoint(function() {
      sparcnetsinformationtechnology.addClass('zoomInTrans');
    }, {
      offset: '75%'
    });

    //Main banner text animation
    var creativesolutions = $('#block-creativesolutionstoimproveyourbusinesspresence-2 h2.block-title');
    setTimeout(function(){
      creativesolutions.addClass('animatedh2');
    }, 5000);

    //Banner 2 buttons
    var leftButton =  $('section#block-creativesolutionstoimproveyourbusinesspresence-2 a.button');
    setTimeout(function(){
      leftButton.addClass('animatedButton');
    }, 5000);


    var rightButton =  $('section#block-creativesolutionstoimproveyourbusinesspresence-2 a.button1');
    setTimeout(function(){
      rightButton.addClass('animatedButton1');
    }, 5000);



    

    var helpReg = $('.region-help');
    helpReg.waypoint(function() {
      helpReg.addClass('animated zoomInTrans delay-5000 display');
    }, {
      offset: '75%'
    });

    


    var footerL = $('#block-views-block-news-events-block-1-3');
    var footerM = $('#block-views-block-service-for-client-block-block-1');
    var footerR = $('#block-contact-3');
    footerL.waypoint(function() {
      footerL.addClass('animated fadeInLeft delay-500 display');
      footerM.addClass('animated fadeInUp delay-500 display');
      footerR.addClass('animated fadeInRight delay-500 display');
    }, {
      offset: '75%'
    });

	// var blockbtn1 = $('section#block-creativesolutionstoimproveyourbusinesspresence-2 a.button');
	// var blockbtn2 = $('section#block-creativesolutionstoimproveyourbusinesspresence-2 a.button1');
	// blockbtn1.waypoint(function() {
 //      blockbtn1.addClass('animated fadeInLeft delay-5000 display');
	//     blockbtn2.addClass('animated fadeInRight delay-5000 display');
	//    }, {
 //      offset: '75%'
 //    });


  var blockimg1 = $('section#block-images1');
  var blockimg2 = $('section#block-images2');
  blockimg1.waypoint(function() {
      blockimg1.addClass('animated fadeInLeft delay-500 display');
      blockimg2.addClass('animated fadeInRight delay-500 display');
     }, {
      offset: '75%'
    });
  });

})(jQuery);
// var pathImg = 'url('+$('#block-views-block-slideshow-block-1 .img-responsive').attr('src')+') no-repeat';
// // console.log(pathImg);
// // $('#block-views-block-slideshow-block-1 .field-content').data('parallax','scroll');
// $('#block-views-block-slideshow-block-1 .field-content').css("background", pathImg );
//
// //
// $('#block-views-block-slideshow-block-1 .field-content').parallax('50%',0.9);



// $('#views_slideshow_controls_text_services-block_1 span a').each(function(){
//   var This = $(this);
//     var content = $(This).innerHTML;
//
// });
