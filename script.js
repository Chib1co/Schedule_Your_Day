$( document ).ready(function() {
    console.log( "ready!" );


 let m =  moment();
 let output = m.format("dddd MMM Mo YYYY");

 console.log(output) 
 $("#currentDay").text(output)
        
   

let newTime = new Date();
 var currentHour = newTime.getHours();
 console.log(currentHour)
 $('.edit_cont').each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+8){
        $(this).css('background-color','lightgreen');
    }else if(val < currentHour && val > currentHour-8){
        $(this).css('background-color','lightgrey');
    }else if(val === currentHour){
        $(this).css('background-color','salmon');
    }else{
        $(this).css('background-color','white');
    }
});
//add input under edit_cont class 
let newPlan = $("<input>")
newPlan.addClass("inputPlan");
newPlan.text($(".edit_cont"));
$(".edit_cont").append(newPlan);

 

//addEventlister under edit_btn div



// localStorage.setItem() to save items
// It takes two arguments, a key, and a value
// localStorage.getItem() to get saved items back out - use one key


}); //document ready closing 