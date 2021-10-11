"use strict"

const d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

var sAngle;
//css style properties does not work with classname
(h > 12) ? h = h - 12 : h = h;

setInterval(function() {
    s = s + 1;
    (s > 59) ? s = 0 : s = s;
    sAngle = (s * 6) - 90
    document.getElementById("seconde").style.transform = "rotate(" + sAngle + "deg)";
    console.log(sAngle)
}, 1000);
