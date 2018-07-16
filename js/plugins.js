$(document).ready(function () 
       {
    $('body').css('paddingTop', $('.morning').innerHeight());
      $('.morning li a').click(function(e){
      e.preventDefault();
          
       $('html, body').animate({
           scrollTop: $('#'+ $(this).data('scroll')).offset().top + 1
       }, 1000);
          
      });
        
    $('.morning li a').click(function(){
        
       $('.morning a').removeClass('active');
        
       $(this).addClass('active');
         
    });
    
    //$(window).scroll(function(){
        
     // $('.morning').each(function(){
         
          if ($(window).scrollTop() > $(this).offset().top){
             var blockId = $(this).attr('id');
             $('.morning a').removeClass('active'); 
             $('.morning li a[data-scroll="' + blockID +'"]').addClass('active');
          }
     });
        
  
    
    var scrollToTop= $('.scroll-to-top');
   if ($(window).scrollTop() >= 1000){
        
        screenToTop.fadeOut(400);
    }else{
        
        scrollToTop.fadeOut(400);
     }
  

  $('.show-popup').click(function(){
     
      $('.popup').fadeIn();
  });

  $('.popup').click(function(){
    
   $(this).hide(); 
});


   $('.popup .inner').click(function(e){
    
     e.stopPropagation(); 
 });

    $('.popup .any').click(function(e){
        
    e.preventDefault();
        
     $('.popup').fadeOut();
        
    });

    $('.from-left, .broder-left').hover(function(){
        
     $(this).find('span').eq(0).animate({
         
         width:'100%'
         
     },300);   
        
    },function(){
        
     $(this).find('span').eq(0).animate({
         
         width:'0%'
         
     },300);      
        
    });

    $('.from-top, .broder-top').hover(function(){
        
        $(this).find('span').eq(0).animate({
            
            height: '100%'
            
        },300);
        
    }, function() {
        
        $(this).find('span').eq(0).animate({
            
            height:0
            
        },300);
    
        
    });


     $('.porgress span').each(function(){
         
        $(this).animate({
            
        width: $(this).attr('data')
            
        },3000, function (){
            
            $(this).text($(this).attr('data'));
        });
         
         
     });

   $('.fixed-menu .fa-gear').on('click', function(){
       
     $(this).parent('.fixed-menu').toggleClass('is-visible');
       
       if($(this).parent('.fixed-menu').hasClass('is-visible')) {
           
       $(this).parent('.fixed-menu').animate({
           
       left:0 
           
       }, 500);  
           
      $('body').animate({
           
       paddingLeft: '220px' 
           
       }, 500); 
           
       } else {
           
        $(this).parent('.fixed-menu').animate({
           
       left: '-220px'
           
       }, 500);
           
         $('body').animate({
           
       paddingLeft: '0px' 
           
       }, 500);    
           
       }
       
   });

    $('.thumbnais img').on('click', function(){
        
      $(this).addClass('selected').siblings().removeClass('selected');
        
        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
        
        
    });
 

    
    
      
 

