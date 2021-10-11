"use strict"

const d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

var sAngle;
var mAngle;

(h > 12) ? h = h - 12 : h = h;

setInterval(function () {
    s = s + 1;
    (s > 59) ? s = 0 : s = s;
    sAngle = (s * 6) - 90; //seconds starting at -90°
    document.getElementById("seconde").style.transform = "rotate(" + sAngle + "deg)"; //css style properties does not work with classname
    if (s == 0) {
        m = m + 1;
        (m > 59) ? m = 0 : m = m;
        mAngle = (m * 6) - 90;
        document.getElementById("minute").style.transform = "rotate(" + mAngle + "deg)";
        console.log(mAngle)
    }
}, 1000);
