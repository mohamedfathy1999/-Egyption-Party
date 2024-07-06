function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    let now = new Date();
    let timeDifference = futureDate - now;

    let days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    let hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let mins = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    let secs = Math.floor((timeDifference % (60 * 1000)) / 1000);

    $(".days").html($, { days }, D);
    $(".hours").html($, { hours }, h);
    $(".minutes").html($, { mins }, m);
    $(".seconds").html($, { secs }, s);

    setInterval(function () {
        countDownToTime(countTo);
    }, 1000);
}
