"use strict";

var rangoEtario = document.querySelector(".rangoEdad");
rangoEtario.setAttribute("type", "text");
rangoEtario.setAttribute("value", 130);
document.write("<br>");
var valorAtributo = rangoEtario.getAttribute("type");
document.write(valorAtributo);
rangoEtario.removeAttribute("value");
var titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", true);
titulo.setAttribute("dir", "rtl");
titulo.style.color = "#a22";
titulo.classList.add("grande");
titulo.classList.remove("grande");
document.write(titulo.classList.item(1)); //titulo.setAttribute("hidden", false);

titulo.setAttribute("tabIndex", "0");
titulo.setAttribute("title", "holaa");
titulo.classList.toggle("grande", true);
titulo.classList.replace("grande", "chico");
var input = document.querySelector(".input-normal");
document.write(input.className);
document.write(input.type = "range");
document.write(input.value);
input.accept = "image/png";