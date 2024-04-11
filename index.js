$(document).ready(function () {
  function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    let session = 'AM';

    if (hours == 0) {
      hours = 12;
    }
    else if(hours>= 12){
        session = "PM"
    }
     else(hours > 12) {
        hours
    }
  }
});
