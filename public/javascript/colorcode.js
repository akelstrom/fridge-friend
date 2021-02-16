const currentDate = new Date();
const expirationDate = new Date(2021, 01, 16);
const difference = (expirationDate - currentDate) / (1000*60*60*24);
//const differenceFormatted = difference / ;
console.log(currentDate);
console.log(expirationDate);
console.log(difference);
//console.log(differenceFormatted);
function testEmail() {
    if (difference <= 3 && difference > 0) {
        console.log('Expiring soon!');
    } else if (difference <= 0) {
        console.log('Expired!');
    } else {
        console.log('Food is still fresh!');
    }
};

var auditInventory = function(itemEl) {
    // get date from task element
    var date = $(itemEl).find("span").text().trim();
  
    // convert to moment object at 12:00AM
    var time = moment(date, "L").set("hour", 0);
  
    // remove any old classes from element
    $(itemEl).removeClass("alert alert-warning alert-danger");
  
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(itemEl).addClass("alert alert-danger");
    }
  
      // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(itemEl).addClass("alert alert-danger");
    } 
    else if (Math.abs(moment().diff(time, "days")) <= 2) {
      $(itemEl).addClass("alert alert-warning");
    }
  
    
  };

setInterval(function() {
    // code to execute
  }, (1000 * 60) * 60 * 24);

loadData();