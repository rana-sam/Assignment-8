


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

    // var d=new Date(x,y)
    // var year=d.getFullYear()
    // var month=d.getMonth()
    // var day=m.getDay()
    // console.log(day);
    return new Date(x, y, 0).getDate();
    
}
 var x=Days(2021,2)
 console.log(x);
 
//  program 4