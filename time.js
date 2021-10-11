"use strict"

const d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

var sAngle = (s * 6) - 90
//css style properties does not work with classname
document.getElementById("seconde").style.transform = "rotate(" + sAngle + "deg)";
//sHand.style.transform = "rotate(" + sAngle + "deg)";

(h > 12) ? h = h - 12 : h = h;

console.log(sAngle)
