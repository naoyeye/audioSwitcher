!function u(i,l,d){function c(t,e){if(!l[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(f)return f(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=l[t]={exports:{}};i[t][0].call(r.exports,function(e){var n=i[t][1][e];return c(n||e)},r,r.exports,u,i,l,d)}return l[t].exports}for(var f="function"==typeof require&&require,e=0;e<d.length;e++)c(d[e]);return c}({1:[function(e,n,t){"use strict";$(function(){var n=null,t=0,o=0,r=window.innerWidth,e=Math.floor(r/2)+"",u=!1,i=document.getElementById("handler-wrap"),l=document.getElementById("left"),d=document.getElementById("right");document.getElementById("left").innerHTML=e,document.getElementById("right").innerHTML=e,document.getElementById("handler").onmousedown=function(){return u=!0,o=t-(n=this).offsetLeft,!1},document.onmousemove=function(e){((t=(document.all?window.event.clientX:e.pageX)-o)<12||12===t)&&(t=12),(t===r-10||r-10<t)&&(t=r-10),null!==n&&(i.style.width=t+"px",l.innerText=t,d.innerText=r-t)},document.onmouseup=function(e){((t=(document.all?window.event.clientX:e.pageX)-o)<0||10===t)&&(t=10),(t===r||r<t)&&(t=r-10),u&&console.log(t),u=!1,n=null,t=0}})},{}]},{},[1]);