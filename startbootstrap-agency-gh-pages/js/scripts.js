/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict





// Codigo para formulario



function validar(){
    //alert("entro en funcion validar");
    var nombre,apellidos,correo, clave,expresion;
    nombre=document.getElementById("nombres").value;
    apellidos=document.getElementById("apellidos").value;
    telefono=document.getElementById("telefonos").value;
    correo=document.getElementById("correo").value;
    clave=document.getElementById("password").value;
  
    
  
    if(nombre === "" || apellidos==="" || correo==="" || clave=== ""){
      alert("El formulario necesita estar rellenado");
      return false;
    }
    else if(nombre.length>40){
  alert("El nombre es muy largo");
  return false;
    }
  
  
    else if(apellidos.length>80){
      alert("Los apellidos son muy largos");
      return false;
        }
  
        else if(correo.length>20){
          alert("El correo es muy largo");
          return false; 
        }
         
       else if(clave.length>20){
        alert("El correo es muy largo");
            return false;  
       }
      
       else if(telefono.length>10){
        alert("El telefono es muy largo");
            return false;  
       }
  
  
       else if(isNaN(telefono)){
        alert("Los datos ingresados no son numeros");
            return false;  
       }
  
  
  }