// program1
// Write a JavaScript function to check whether an `input` is a date object or not.   

// Test Data :
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false


var is_date = function(input) {
    if ( Object.prototype.toString.call(input) === "[object Date]" ) 
      return true;
    return false;   
      };
  
  console.log(is_date("October 13, 2014 11:13:00"));
  console.log(is_date(new Date(86400000)));
  console.log(is_date(new Date(99,5,24,11,33,30,0)));
  console.log(is_date([1, 2, 4, 0]));


  // program 2

//   Write a JavaScript function to get the current date.   

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

var curday = function(ap){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+ap+dd+ap+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));


    //  progrm 3

//     Write a JavaScript function to get the number of days in a month.   

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31

var getDaysInMonth = function(month,year) {

    return new Date(year, month, 0).getDate();
 
   };
   console.log(getDaysInMonth(1, 2012));
   console.log(getDaysInMonth(2, 2012));
   console.log(getDaysInMonth(9, 2012));
   console.log(getDaysInMonth(12, 2012));


   // program 4
//   Write a JavaScript function to get the month name from a particular date.   

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
  
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));

    
// program 5

//     Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"


var compare_dates = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");
  else if (date1<date2) return ("Date2 > Date1");
  else return ("Date1 = Date2"); 
 }

console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:01'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:01')));


// programk 6

// Write a JavaScript function to add specified minutes to a Date object.   

// Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2020,11,18), 30).toString());




// program 7 

// Write a JavaScript function to test whether a date is a weekend. Go to the editor

// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
// console.log(is_weekend('Nov 15, 2014'));
// console.log(is_weekend('Nov 16, 2014'));
// console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend"
// "weekend"
// undefined

var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));


// program 8
// Write a JavaScript function to get difference between two dates in days. Go to the editor

// Test Data :
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28

var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    console.log(date_diff_indays('12/02/2014', '11/04/2014'));



    //     program 9

//     Write a JavaScript function to get the last day of a month.   

// Test Data :
// console.log(lastday(2014,0));
// console.log(lastday(2014,1));
// console.log(lastday(2014,11));
// Output :
// 31
// 28
// 31

var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff_indays('04/02/2014', '11/04/2014'));
    console.log(date_diff_indays('12/02/2014', '11/04/2014'));


    //     progrm 10

//     Write a JavaScript function to calculate 'yesterday day'.   

// Test Data :
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));
// Output :
// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"
// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"

var yesterday =  function(date1){
    var dt = new Date(date1);
  return new Date((dt.setDate(dt.getDate()-1))).toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));

// program11

// Write a JavaScript function to get the maximum date from an array of dates. Go to the editor

// Test Data :
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"

function max_date(all_dates) {
    var max_dt = all_dates[0],
      max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
      {
      if ( new Date( dt ) > max_dtObj)
      {
      max_dt = dt;
      max_dtObj = new Date(dt);
      }
      });
     return max_dt;
      }
    console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));


    // program 12
// Write a JavaScript function to get the minimum date from an array of dates. Go to the editor

// Test Data :
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"

function min_date(all_dates) {
    var min_dt = all_dates[0],
     min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
     {
     if ( new Date( dt ) < min_dtObj)
     {
     min_dt = dt;
     min_dtObj = new Date(dt);
     }
     });
    return min_dt;
     }
   console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

   
// Write a JavaScript function to get the minimum date from an array of dates.   

// Test Data :
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"

function min_date(all_dates) {
    var min_dt = all_dates[0],
     min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
     {
     if ( new Date( dt ) < min_dtObj)
     {
     min_dt = dt;
     min_dtObj = new Date(dt);
     }
     });
    return min_dt;
     }
   console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));


     
   //Write a JavaScript function that will return the number of minutes in hours and minutes.   

// Test Data :
// console.log(timeConvert(200));
// Output :
// "200 minutes = 3 hour(s) and 20 minute(s)."


function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));


     //Write a JavaScript function to get the amount of days of a year.   

// Test Data :
// console.log(days_of_a_year(2015));
// 365
// console.log(days_of_a_year(2016));
// 366

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));

// Write a JavaScript function to get the quarter (1 to 4) of the year.   

// Test Data :
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));
// 2
// console.log(quarter_of_the_year(new Date(2015, 10, 18)));

function quarter_of_the_year(date) 
  {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
  }


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18)));


// Write a JavaScript function to count the number of days passed since beginning of the year.   

// Test Data :
// console.log(days_passed(new Date(2015, 0, 15)));
// 15
// console.log(days_passed(new Date(2015, 11, 14)));
// 348

function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  console.log(days_passed(new Date(2015, 0, 15)));
  console.log(days_passed(new Date(2015, 11, 14)));

  //   Write a JavaScript function to convert a Unix timestamp to time.   

//   Test Data :
//   console.log(days_passed(new Date(2015, 0, 15)));
//   15
//   console.log(days_passed(new Date(2015, 11, 14)));
//   348

 
function Unix_timestamp(t)
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}

console.log(Unix_timestamp(1412743274));

// Write a JavaScript function to get 12-hour format of an hour with leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));
// "12"

function hours_with_zeroes(dt) 
{ 
  return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date(); 
console.log(hours_with_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_with_zeroes(dt));

// Write a JavaScript function to get 24-hour format of an hour without leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_without_zeroes(dt));
// 0]


function hours_without_zeroes(dt) 
{ 
  return dt.getHours();
}

dt = new Date(); 
console.log(hours_without_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt));


// Write a JavaScript function to get minutes with leading zeros (00 to 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt));
// "00"


function minutes_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date(); 
console.log(minutes_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(minutes_with_leading_zeros(dt));

// Write a JavaScript function to get seconds with leading zeros (00 through 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(seconds_with_leading_zeros(dt));
// "00"

function seconds_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date(); 
console.log(seconds_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt));


// Write a JavaScript function to get Timezone.   
// Test Data :
// dt = new Date();
// console.log(seconds_with_leading_zeros(dt));
// "India Standard Time"

function seconds_with_leading_zeros(dt) 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date(); 
console.log(seconds_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt));

// Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.

function lower_am_pm(dt) 
{ 
   return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date(); 
console.log(lower_am_pm(dt)); 

dt = new Date(1989, 10, 1); 
console.log(lower_am_pm(dt));



  //   Write a JavaScript function to swatch Internet time (000 through 999).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt));
// 812

function internet_time(dt) 
{ 
  return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

dt = new Date(); 
console.log(internet_time(dt)); 

dt = new Date(1989, 10, 1); 
console.log(internet_time(dt));


// Write a JavaScript program to calculate age.   

// Test Data :
// console.log(calculate_age(new Date(1982, 11, 4)));
// 32
// console.log(calculate_age(new Date(1962, 1, 1)));
// 53

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));

console.log(calculate_age(new Date(1962, 1, 1)));

// Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
// Test Data :
// d= new Date(2015, 10, 1);
// console.log(day_of_the_month(d));
// "01"


function day_of_the_month(d)
{ 
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d= new Date();
console.log(day_of_the_month(d));

d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));


// Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
// Test Data :
// d= new Date(2015, 10, 1);
// console.log(day_of_the_month(d));
// "01"


function day_of_the_month(d)
{ 
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}

d= new Date();
console.log(day_of_the_month(d));

d= new Date(2015, 10, 1);
console.log(day_of_the_month(d));


// Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(long_Days(dt));
// "Sunday"

Date.longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function long_Days(dt)
    { 
      return Date.longDays[dt.getDay()]; 
    }

dt = new Date();
console.log(long_Days(dt));

dt = new Date(2015, 10, 1);
console.log(long_Days(dt));


// Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt));
// 7

function ISO_numeric_date(dt)
{
  return (dt.getDay() === 0 ? 7 : dt.getDay()); 
}

dt = new Date();
console.log(ISO_numeric_date(dt));

dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));



// Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.). Go to the editor
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(english_ordinal_suffix(dt));
// "1st"


function english_ordinal_suffix(dt)
  {
    return dt.getDate()+(dt.getDate() % 10 == 1 && dt.getDate() != 11 ? 'st' : (dt.getDate() % 10 == 2 && dt.getDate() != 12 ? 'nd' : (dt.getDate() % 10 == 3 && dt.getDate() != 13 ? 'rd' : 'th'))); 
  }

dt = new Date();
console.log(english_ordinal_suffix(dt));

dt = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt));


// Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.   
// Example : 42 (the 42nd week in the year)
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));
// 44

function ISO8601_week_no(dt) 
  {
     var tdt = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
        }

dt = new Date();
console.log(ISO8601_week_no(dt));

dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt));

// Write a JavaScript function to get a full textual representation of a month, such as January or June.   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(full_month(dt));
// "November"


Date.longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function full_month(dt)
  { 
   return Date.longMonths[dt.getMonth()]; 
  }

dt = new Date(); 
console.log(full_month(dt)); 

dt = new Date(2015, 10, 1); 
console.log(full_month(dt));


// Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(numeric_month(dt));
// "11"

function numeric_month(dt)
{
  return (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1); 
}
dt = new Date(); 
console.log(numeric_month(dt)); 

dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt));

// Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(short_months(dt));
// "Nov"

Date.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function short_months(dt)
   { 
     return Date.shortMonths[dt.getMonth()]; 
   }

dt = new Date(); 
console.log(short_months(dt)); 

dt = new Date(2015, 10, 1); 
console.log(short_months(dt));

// Write a JavaScript function to get a full numeric representation of a year (4 digits).   
// Test Data :
// dt = new Date(2015, 10, 1);
// console.log(full_year(dt));
// 2015


function full_year(dt) 
{ 
  return dt.getFullYear(); 
}
dt = new Date(); 
console.log(full_year(dt)); 

dt = new Date(2015, 10, 1); 
console.log(full_year(dt));

// Write a JavaScript function to get a two digit representation of a year.   
// Examples : 79 or 04
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(sort_year(dt));
// "89"


function sort_year(dt) 
{ 
  return ('' + dt.getFullYear()).substr(2);
}

dt = new Date(); 
console.log(sort_year(dt)); 

dt = new Date(1989, 10, 1); 
console.log(sort_year(dt));


// Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.

function lower_am_pm(dt) 
{ 
   return dt.getHours() < 12 ? 'AM' : 'PM';
}

dt = new Date(); 
console.log(lower_am_pm(dt)); 

dt = new Date(1989, 10, 1); 
console.log(lower_am_pm(dt));




  //   Write a JavaScript function to swatch Internet time (000 through 999).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(internet_time(dt));
// 812

function internet_time(dt) 
{ 
  return Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);
}

dt = new Date(); 
console.log(internet_time(dt)); 

dt = new Date(1989, 10, 1); 
console.log(internet_time(dt));


// Write a JavaScript function to get 12-hour format of an hour with leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_with_zeroes(dt));
// "12"

function hours_with_zeroes(dt) 
{ 
  return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

dt = new Date(); 
console.log(hours_with_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_with_zeroes(dt));

// Write a JavaScript function to get 24-hour format of an hour without leading zeros.   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(hours_without_zeroes(dt));
// 0]


function hours_without_zeroes(dt) 
{ 
  return dt.getHours();
}

dt = new Date(); 
console.log(hours_without_zeroes(dt)); 

dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt));


// Write a JavaScript function to get minutes with leading zeros (00 to 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(minutes_with_leading_zeros(dt));
// "00"


function minutes_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date(); 
console.log(minutes_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(minutes_with_leading_zeros(dt));


// Write a JavaScript function to get seconds with leading zeros (00 through 59).   
// Test Data :
// dt = new Date(1989, 10, 1);
// console.log(seconds_with_leading_zeros(dt));
// "00"

function seconds_with_leading_zeros(dt) 
{ 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

dt = new Date(); 
console.log(seconds_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt));


// Write a JavaScript function to get Timezone.   
// Test Data :
// dt = new Date();
// console.log(seconds_with_leading_zeros(dt));
// "India Standard Time"

function seconds_with_leading_zeros(dt) 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

dt = new Date(); 
console.log(seconds_with_leading_zeros(dt)); 

dt = new Date(1989, 10, 1); 
console.log(seconds_with_leading_zeros(dt));


// Write a JavaScript function to find whether or not the date is in daylights savings time.   
// Test Data :
// dt = new Date();
// console.log(daylights_savings(dt));
// 1

function daylights_savings(dt) 
{ 
  var dst = null;
  for (var i = 0; i < 12; ++i) 
    {
      var d = new Date(dt.getFullYear(), i, 1);
      var offset = dt.getTimezoneOffset();

      if (dst === null) 
        dst = offset;
      else if (offset < dst) 
         {
           dst = offset; 
           break;
         } 
      else if (offset > dst) 
        break;
         }
return (dt.getTimezoneOffset() == dst) | 0;
}

dt = new Date(); 
console.log(daylights_savings(dt)); 

dt = new Date(1989, 10, 1); 
console.log(daylights_savings(dt));

// Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   
// Test Data :
// dt = new Date();
// console.log(diff_to_GMT(dt));
// "+05.500"

function diff_to_GMT(dt) 
{ 
   return (-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';
}

dt = new Date(); 
console.log(diff_to_GMT(dt)); 

dt = new Date(1989, 10, 1); 
console.log(diff_to_GMT(dt));


// Write a JavaScript function to get timezone offset in seconds.   
// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.
// Test Data :
// dt = new Date();
// console.log(timezone_offset_in_seconds(dt));
// 19800

function timezone_offset_in_seconds(dt) 
{ 
   return -dt.getTimezoneOffset() * 60;
}

dt = new Date(); 
console.log(timezone_offset_in_seconds(dt)); 

dt = new Date(1989, 10, 1); 
console.log(timezone_offset_in_seconds(dt));



// Write a JavaScript function to add specified years to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_years(dt, 10).toString());
// Output :
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"


function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }

dt = new Date();
console.log(add_years(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());


// Write a JavaScript function to add specified weeks to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_weeks(dt, 10).toString());
// Output :
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(add_weeks(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_weeks(dt, 10).toString());


// Write a JavaScript function to add specified months to a date.   
// Test Data :
// dt = new Date(2014,10,2);
// console.log(add_months(dt, 10).toString());
// Output :
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

function add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }

dt = new Date();
console.log(add_months(dt, 10).toString());  

dt = new Date(2014,10,2);
console.log(add_months(dt, 10).toString());


// Write a JavaScript function to get time differences in minutes between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_minutes(dt1, dt2));
// 2

function diff_minutes(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_minutes(dt1, dt2));



// Write a JavaScript function to get time differences in hours between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));
// 3

function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,3);
console.log(diff_hours(dt1, dt2));


dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));



// Write a JavaScript function to get time differences in days between two dates.   
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2));
// 6

function diff_days(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,6);
console.log(diff_days(dt1, dt2));

dt1 = new Date("October 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));


// Write a JavaScript function to get time differences in weeks between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_weeks(dt1, dt2));
// 18


function diff_weeks(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_weeks(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));

// Write a JavaScript function to get time differences in months between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_months(dt1, dt2));
// 5

function diff_months(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_months(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2));


// Write a JavaScript function to get time differences in years between two dates.   
// Test Data :
// dt1 = new Date("June 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2017 11:13:00");
// console.log(diff_years(dt1, dt2));
// 3

function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
   
 }

dt1 = new Date(2014,10,2);
dt2 = new Date(2014,10,11);
console.log(diff_years(dt1, dt2));

dt1 = new Date("June 13, 2014 08:11:00");
dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2));


// Write a JavaScript function to get the week start date.  

function startOfWeek(date)
  {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  
    return new Date(date.setDate(diff));
 
  }

dt = new Date(); 

console.log(startOfWeek(dt).toString());


// Write a JavaScript function to get the week end date.  

function endOfWeek(date)
  {
     
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
 
  }

dt = new Date(); 

console.log(endOfWeek(dt).toString());

// Write a JavaScript function to get the month start date.

function startOfMonth(date)
  {
     
   return new Date(date.getFullYear(), date.getMonth(), 1);
 
  }

dt = new Date(); 

console.log(startOfMonth(dt).toString());



// Write a JavaScript function to get the month end date.  

function endOfMonth(date)
  {
     
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
 
  }

dt = new Date(); 

console.log(endOfMonth(dt).toString());