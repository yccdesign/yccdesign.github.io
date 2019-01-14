/*Top navigation toggle menu*/
function navIconClick() {
    var x = document.getElementById("nav-tabs");
    if (x.className === "topnav") {
        x.className += " topnav-expand";
    } else {
        x.className = "topnav";
    }
}






$(document).ready(function(){

/*skip to content*/

    // bind a click event to the 'skip' link
  $(".skip").click(function(event){
        // strip the leading hash and declare
        // the content we're skipping to
      var skipTo="#"+this.href.split('#')[1];
        // Setting 'tabindex' to -1 takes an element out of normal
        // tab flow but allows it to be focused via javascript
      $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
            // when focus leaves this element,
            // remove the tabindex attribute
          $(this).removeAttr('tabindex');
      }).focus(); // focus on the content container
  });



/*project button switches*/
  $("#ux-btn").css({'color':'white', 'background': 'rgb(110,110,110)'
  });

  $("#ux-btn").click(function(){
    $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
    });
    $("#marketing-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $("#psycholinguistics-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $('#ux-row').show(1000);
    $('#marketing-row').hide(1000);
    $('#psycholinguistics-row').hide(1000);
  });

  $("#marketing-btn").click(function(){
    $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
    });
    $("#ux-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $("#psycholinguistics-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $('#marketing-row').show(1000);
    $('#ux-row').hide(1000);
    $('#psycholinguistics-row').hide(1000);
  });

  $("#psycholinguistics-btn").click(function(){
    $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
    });
    $("#ux-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $("#marketing-btn").css({'color':'rgb(110,110,110)', 'background': 'white'
    });
    $('#psycholinguistics-row').show(1000);
    $('#ux-row').hide(1000);
    $('#marketing-row').hide(1000);
  });

/*UX Research step switches*/
$("#ux-research-btn-1").css({'color':'white', 'background': 'rgb(110,110,110)'
});

$("#ux-research-btn-1").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#ux-research-btn-2, #ux-research-btn-3, #ux-research-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#ux-research-row-1').show(1000);
  $('#ux-research-row-2, #ux-research-row-3, #ux-research-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#ux-research-btn-2").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#ux-research-btn-1, #ux-research-btn-3, #ux-research-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#ux-research-row-2').show(1000);
  $('#ux-research-row-1, #ux-research-row-3, #ux-research-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#ux-research-btn-3").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#ux-research-btn-1, #ux-research-btn-2, #ux-research-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#ux-research-row-3').show(1000);
  $('#ux-research-row-1, #ux-research-row-2, #ux-research-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#ux-research-btn-4").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#ux-research-btn-2, #ux-research-btn-3, #ux-research-btn-1").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#ux-research-row-4').show(1000);
  $('#ux-research-row-2, #ux-research-row-3, #ux-research-row-1').each(function(){
    $(this).hide(1000);
      });
});


/*Design process step switches*/
$("#design-process-btn-1").css({'color':'white', 'background': 'rgb(110,110,110)'
});

$("#design-process-btn-1").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#design-process-btn-2, #design-process-btn-3, #design-process-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#design-process-row-1').show(1000);
  $('#design-process-row-2, #design-process-row-3, #design-process-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#design-process-btn-2").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#design-process-btn-1, #design-process-btn-3, #design-process-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#design-process-row-2').show(1000);
  $('#design-process-row-1, #design-process-row-3, #design-process-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#design-process-btn-3").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#design-process-btn-1, #design-process-btn-2, #design-process-btn-4").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#design-process-row-3').show(1000);
  $('#design-process-row-1, #design-process-row-2, #design-process-row-4').each(function(){
    $(this).hide(1000);
      });
});

$("#design-process-btn-4").click(function(){
  $(this).css({'color':'white', 'background': 'rgb(110,110,110)'
  });
  $("#design-process-btn-2, #design-process-btn-3, #design-process-btn-1").each(function(){
    $(this).css({'color':'rgb(110,110,110)', 'background': 'white'
      });
  });

  $('#design-process-row-4').show(1000);
  $('#design-process-row-2, #design-process-row-3, #design-process-row-1').each(function(){
    $(this).hide(1000);
      });
});






});


/*Slideshow in project page*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




/*Slideshow for persona*/
var slideIndexPersona = 1;
showSlidesPersona(slideIndexPersona);

// Next/previous controls
function plusSlidesPersona(n) {
  showSlidesPersona(slideIndexPersona += n);
}

// Thumbnail image controls
function currentSlidePersona(n) {
  showSlidesPersona(slideIndexPersona = n);
}

function showSlidesPersona(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPersona");
  var dots = document.getElementsByClassName("dotPersona");
  if (n > slides.length) {slideIndexPersona = 1}
  if (n < 1) {slideIndexPersona = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPersona-1].style.display = "block";
  dots[slideIndexPersona-1].className += " active";
}




/*Accoridan in project page*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
