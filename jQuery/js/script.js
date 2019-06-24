//script.js

  $(function() {
    
   // alert("hello?");
    
    //$('selector').action();
    //$('#box).hide();
    //$('.thing').fadeOut();
    //$('h1).css("color", "blue");
    
  /* $("button").click(function(){
        
        $('#box').fadeOut(5000);
        
        
    });
      
    // $( 'h2,h3,h4').css('border', ' solid 1px red');
     // $('div#container').css('border', ' solid 1px red'); // a div with identity container
     // $('p.lead').css('border', 'solid 1px red'); //a paragraph with class lead
      //$('li:first').css('border', 'solid 1px red'); //first row in a list
      //$('p:even').css('border', 'solid 1px red'); //even paragraphs
      //$ ('div em').css('border', 'solid 1px red'); //descendant
      //$('div > p').css('border', 'solid 1px red');// direct child selector
      //$(':header').css('border', 'solid 1px red'); //selects all headers
      //$('div:  contains("Faye")').css('border', 'solid 1px red'); // selects all elememts that contain text
      
      
      
      $('#box').click(function(){
          alert('you just clicked the box');
          
          
      });
                 
      $("input").blur(function(){
          
          if($(this).val()==""){
              $(this).css('border', 'solid 1px red');
              $('#box').text('forgot to add text?');
             // alert('forgot to add text?');
          }
      });
                      
     
    
    $("input").keydown(function(){
        
        if($(this).val() !== ""){
            $(this).css('border','solid 1px #777');
            $('#box').text('thanks for that');
            
        }
    });
     
      $('#box').hover(function(){
          $(this).text('you hovered in');
          
      }, function(){
          $(this).text('you hovered out');
      }); 
      
      /* CHAINING*/
      
      $('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();
      
      /* JQuery hide/show*/
      
      //$('h1').hide();
      //$('div.hidden').show();
      
    //$('P').fadeOut();
      //$('div.hidden').fadeIn(8000); 
   /*   $('#box1').click(function(){
          $(this).fadeTo(2000, 0.75, function(){
              //animation complete
              
             $(this).slideUp();
              
          });
          
          
          
      });
      
      $('div.hidden').slideDown();
      $('button').click(function(){
          $('#box1').slideToggle();
      });
      
      /* jQuery Animate*/
       
     /* $('#left').click(function(){
           $('.box').animate({
               left:'-=40px',
               fontSize:'+=2px'
          
          
          }, function(){

               // animation is complete
          });

          
      });
      
      $('#up').click(function(){
           $('.box').animate({
               top:'-=40px',
               opacity:'+=0.1'
          
          
          }, function(){

               // animation is complete
          });

          
      });
      
      $('#right').click(function(){
           $('.box').animate({
               left:'+=40px',
               fontSize:'-=2px'
          
          
          }, function(){

               // animation is complete
          });
          
          $('#down').click(function(){
           $('.box').animate({
               top:'+=40px',
               opacity:'-=0.1'
          
          
          }, function(){

               // animation is complete
          });

          
      });

          
      });
      
      /* jquery css*/
      
    /*  $('#circle2').css({'background':'#8a8d22',
                         'display': 'inline-block',
                         'color': 'white',
                         'text-align': 'center',
                         'line-height': '140px',
                         'height': '140px',
                         'width': '140px',
                         ' margin': '40px'
                        }).addClass('circleShape');
      
    
          
      }) */
  //click the go button
      $('#go').click(function(){
           
          //get the width of the cars
          var carWidth = $('#car1').width();
          
          //get the width of the racetrack
          
          var raceTrackWidth = $(window).width() - carWidth;
          
          //generate a random # between 1 and 5000
          
          var raceTime1 = Math.floor( (Math.random() * 5000) + 1); 
          var raceTime2 = Math.floor( (Math.random() * 5000) + 1); 
          
          
          //set a flag variable to false by default
          
          var isComplete =  false; 
          
          // set a flag variable to FIRST  by default
          
          var place ='first';
          
          //animate car 1
          
          $('#car1').animate({
              
              //movee the car the width of the racetrack
              
              left:  raceTrackWidth
              
          }, raceTime1, function(){
              
              //animation is complete
              
              //run a function
              
          });
      
      
      
      
      
      
      
      
     
}); 