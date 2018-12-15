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



});
