


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


