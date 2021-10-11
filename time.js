"use strict"

const d = new Date();

var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();

(h > 12) ? h = h - 12 : h = h;

console.log(h)
