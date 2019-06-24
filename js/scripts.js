//scripts.js

$(function(){
    
    $('.box').draggable();
    
    $('#box1').draggable({scroll: true, revert:"invalid"});
    
    $('#box2').draggable({scroll: true});
    
    $('#box3').draggable({axis: 'y'}); 
    
    $('#box4').draggable({containment: ".container"});  
    
    // DROPPABLE
    $('#droppable').droppable({
        accept:'#box1',
        drop:function(){
        $(this).text("WELL DROPPED")
        }
    });
    
    //sortable
    //https://jqueryui.com/sortable/ 
    $('#sortable').sortable({connectWith:'#sortableToo', placeholder:'placeholderBox'});
    $('#sortableToo').sortable({connectWith:'#sortable',placeholder:'placeholderBox'});
    
    
    //Accordion
    $('#accordion').accordion({collapsible:true, heightStyle: "content"});
    
    //datepicker
    
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths:2,
        minDate: 0
        //maxDate: "+1w + 5D"
    });

    
    
    // TODO LIST
    
    $('#todoList ul').sortable({
        items:"li:not('.listTile, .addItem')",
        connectWith:"ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('')
        }
    });
    
    $('#trash').droppable({
        drop:function(event, ui){
            ui.draggable.remove();
        }
    })
    
    
    
});