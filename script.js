


// program 2

function currentDate(x) {
    var d= new Date()
    var date=d.getDate()
    var month=d.getMonth()+1
    var year=d.getFullYear()
    var current=date + x + month + x  +year
    console.log(current);
    
}
 currentDate("/");


//  program 3

function Days(x,y) {

    return new Date(x, y, 0).getDate();
    
}
 var x=Days(2021,2)
 console.log(x);
 
//  program 4

function monthName(x) 
{
    
    var d=new Date(x)
    var month=d.getMonth()
   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[month]);
    
}

monthName('1/10/2009')

// program 5

function dates(d1,d2) {
    var date1=new Date(d1)
    var date2=new Date(d2)
    if (date1>date2) {
        console.log("Date1 > Date2");
    }
    else if (date1<date2) {
        console.log("Date1 < Date2");
    }
    else{
        console.log("Date1 = Date2");

    }
    
}
dates('11/14/2013 00:00','11/14/2013 00:00')
dates('11/14/2013 00:01','11/14/2013 00:00')