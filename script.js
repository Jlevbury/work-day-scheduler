// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayDate() {
  var currentDate = new Date();
  var dateString = currentDate.toLocaleDateString();
  $('#currentDay').text(dateString);
  setTimeout(displayDate, 1000); // updates every second
}

$(document).ready(function() {
  displayDate();
});
// button click tested-sat
$('.btn').click(function(){
  console.log("yes");
  $(".col-8 col-md-10 description").text("your text");
})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
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
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
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

  //
  // TODO: Add code to display the current date in the header of the page.



  /* Save a value to local storage
  function saveToLocalStorage("key", value) {
    localStorage.setItem(key, value);
  }
   // Retrieve a value from local storage
   function getFromLocalStorage(key) {
    return localStorage.getItem(key);
  }*/