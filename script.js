$( document ).ready(function() {
    console.log( "ready!" );


 let m =  moment();
 let output = m.format("dddd MMM Mo YYYY");

 $("#currentDay").text(output)
        
 console.log(output)    


 var currentHour = Date.now().getHours();
 console.log(currentHour)
 $('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','grey');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','green');
    }else if(val === currentHour){
        $(this).css('background-color','red');
    }else{
        $(this).css('background-color','white');
    }
 });


// localStorage.setItem() to save items
// It takes two arguments, a key, and a value
// localStorage.getItem() to get saved items back out - use one key


}); //document ready closing 