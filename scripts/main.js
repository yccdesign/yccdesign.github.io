/*Top navigation toggle menu*/
function navIconClick() {
    var x = document.getElementById("nav-tabs");
    if (x.className === "topnav") {
        x.className += " topnav-expand";
    } else {
        x.className = "topnav";
    }
}
/*Graphics page image modal actions*/
//var modal = document.getElementById('modal-self-portrait');

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('thumbnail-self-portrait');
//var modalImg = document.getElementById("img-self-portrait");
//img.onclick = function(){
//    modal.style.display = "block";
//    modalImg.src = this.src;
//}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
