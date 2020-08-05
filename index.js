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

//Challenge 3 - European weekday

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}

let date3 = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date3) );       // tuesday, should show 2
//Challenge 4 - Which day of month was many days ago?

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

//Solution
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date5 = new Date(2015, 0, 2);

alert( getDateAgo(date5, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date5, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date5, 365) ); // 2, (2 Jan 2014)

//Challenge 5 - Last day of month?
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

//Challenge 6 - How many seconds have passed today?

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then: 10AM - 12AM = 10 hours x 60 minutes x 60 = 36000

//Solution 1 - Current date and time with difference
function getSecondsToday() {
let now = new Date();

  // create an object using the current day/month/year
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() )

let diff = now - today; //ms difference
return Math.round(diff / 1000); //convert to seconds
}
alert (getSecondsToday())
// == 36000 // (3600 * 10)

//Solution 2 - Get hours/minutes/seconds and convert them to seconds

function getSecondsToday2() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert( getSecondsToday2() );

//Challenge 7 - How many seconds till tomorrow?

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then: getSecondsToTomorrow() == 3600

functiongetSecondsToTomorrow()