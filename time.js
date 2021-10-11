"use strict"

const d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

var sAngle;
var mAngle;
var hAngle;

sAngle = (s * 6) - 90; // seconds starting at -90°
mAngle = (m * 6) - 90;
document.getElementById("seconde").style.transform = "rotate(" + sAngle + "deg)";
document.getElementById("minute").style.transform = "rotate(" + mAngle + "deg)";

(h > 12) ? h = h - 12 : h = h; // 12 hours format
var hms = h * 3600000 // convert hours in milliseconds
var mms = m * 60000 // convert minutes in ms
var sms = s * 1000 //convert seconds in ms
var timeInMilliseconds = hms + mms + sms;
hAngle = (timeInMilliseconds * (360 / 43200000)) - 90; // 360 / 43200000 is the angle the hand goes each milliseconds
document.getElementById("heure").style.transform = "rotate(" + hAngle + "deg)";

setInterval(function () {
    s = s + 1;
    (s > 59) ? s = 0 : s = s;
    sAngle = (s * 6) - 90; // seconds starting at -90°
    document.getElementById("seconde").style.transform = "rotate(" + sAngle + "deg)"; // css style properties does not work with classname
    if (s == 0) {
        m = m + 1;
        (m > 59) ? m = 0 : m = m;
        mAngle = (m * 6) - 90;
        document.getElementById("minute").style.transform = "rotate(" + mAngle + "deg)";
    }
    hAngle = hAngle + (360 / 43200) // converting ms in s, so 43200000ms = 43200s
    document.getElementById("heure").style.transform = "rotate(" + hAngle + "deg)";
}, 1000);
