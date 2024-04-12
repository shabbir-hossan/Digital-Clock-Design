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
    if (hours >= 12) {
      session = 'PM';
    }
    if (hours > 12) {
      hours = hours - 12;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minute = minute < 10 ? '0' + minute : minute;
    sec = sec < 10 ? '0' + sec : sec;

    $('#hours').text(hours);
    $('#minute').text(minute);
    $('#sec').text(sec);
    $('#period').text(session);

    setTimeout(showTime, 1000);
  }
  showTime();
});
