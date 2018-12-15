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
