function displayDate() {
  var currentDate = new Date();
  var dateString = currentDate.toLocaleDateString();
  $('#currentDay').text(dateString);
  setTimeout(displayDate, 1000); 
}

$(document).ready(function() {
  displayDate();
});
// button click tested-sat
$('.btn').click(function(){
  console.log("yes");
  $(".col-8 col-md-10 description").text("your text");
})
 

    // Apply past, present, or future class to each time-block based on the current hour
    $('.time-block').each(function() {
      var hour = parseInt($(this).attr('id').split('-')[1]); // get the hour from the id of the time-block
      var currentHour = parseInt(dayjs().format('H')); // get the current hour in 24-hour time using Day.js
      if (hour < currentHour) { // check if the time-block is in the past
        $(this).removeClass('present future').addClass('past');
      } else if (hour === currentHour) { // check if the time-block is in the present
        $(this).removeClass('past future').addClass('present');
      } else { // the time-block must be in the future
        $(this).removeClass('past present').addClass('future');
      }
    });
  
  
    // Retrieve saved user input from local storage and set the values of the corresponding textarea elements
    $('.time-block').each(function() {
      var hour = $(this).attr('id'); // get the id of the time-block
      var savedDescription = localStorage.getItem(hour); // get the saved user input from local storage
      if (savedDescription) { // check if there's saved user input
        $(this).find('.description').val(savedDescription); // set the value of the corresponding textarea element
      }
    });
  
    // Save user input to local storage when the save button is clicked
    $('.saveBtn').on('click', function() {
      var hour = $(this).parent().attr('id'); // get the id of the containing time-block
      var description = $(this).siblings('.description').val(); // get the user input from the description textarea
      localStorage.setItem(hour, description); // save the description in local storage with the hour as the key
    });

    
  
  



 