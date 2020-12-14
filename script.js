$( document ).ready(function() {
    console.log( "ready!" );


 let m =  moment();
 let output = m.format("dddd MMM Mo YYYY");

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

function createTimeRow(time) {
    let row = $("<div>");
    row.addClass('row myrow');
    let timeCol = $("<div>");
    timeCol.addClass("col-1 my-col col-a1 colorcode");
    let timeMeridian;
    if(time < 12){
        timeMeridian = 'am'
    }else{
        time = time === 12 ? time : time - 12;
        timeMeridian = 'pm'
    }
    timeCol.text(time + timeMeridian);
    
    let textareaCol = $("<div>");
    textareaCol.addClass('col-10 my-col col-a2 edit_cont textarea9');
    textareaCol.attr('id', time);
    
    
    let buttonCol = $("<div>");
    buttonCol.addClass("col-1 my-col col-a3 save_btn");
    buttonCol.attr('id', 'saveBtn' + time)

    row.append(timeCol, textareaCol, buttonCol);

    return row;
}
let container = $('.container');
   
for(let i = 9; i<18; i++){

    //let row = createTimeRow(i);
    //container.append(row);


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
    //.log($(this).parent().siblings().children());
    //console.log($(this).parent().parent().children()[0].textContent);
    let planText = $(this).parent().siblings().children().val();
    //console.log(planText);
    //console.log(event.target.id)
    //console.log($(this).closest(".save_btn").attr("id").slice(7));
  
    localStorage.setItem(i, planText);      
   
  });

$("#saveBtn" + i).append(saveBtn);
};


// localStorage.setItem() to save items
// It takes two arguments, a key, and a value
// localStorage.getItem() to get saved items back out - use one key


}); //document ready closing 