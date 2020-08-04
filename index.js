//Date and Time Challenges

//Challenge 1 - Create a date

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

//Challenge 2 - Show a weekday
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date2 = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date2) ); // FR