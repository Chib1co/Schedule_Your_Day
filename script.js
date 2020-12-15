$( document ).ready(function() {
    console.log( "ready!" );


 let m =  moment();
 let output = m.format("dddd MMM Do YYYY");

 console.log(output) 
 $("#currentDay").text(output)
        
   

let newTime = new Date();
 let currentHour = newTime.getHours();
 console.log(currentHour)
 $('.edit_cont').each(function(){
    let val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+9){
        $(this).css('background-color','lightgreen');
    }else if(val < currentHour && val > currentHour-9){
        $(this).css('background-color','lightgrey');
    }else if(val === currentHour){
        $(this).css('background-color','salmon');
    }else{
        $(this).css('background-color','white');
    }
});
//make a textarea with a special class hour${i}, put it in the right div
//add input under edit_cont class 
   
for(let i = 9; i<18; i++){
    let existingPlan = window.localStorage.getItem(i) || "";
    let newPlan = $(`<textarea>`);
    newPlan.val(existingPlan);
    newPlan.addClass(`hours${i}`);

    $(".textarea" + i).append(newPlan);

     //make a saveBtn, put it in the right div. Have it grab info from class hour${i}
    let saveBtn = $("<button>");
    saveBtn.addClass(`hours${i}`);
    saveBtn.html("Save");

saveBtn.click(function(event) {
  
    let planText = $(this).parent().siblings().children().val();
    localStorage.setItem(i, planText);      
   
  });

$("#saveBtn" + i).append(saveBtn);
};


}); //document ready closing 