function myFunction() {
    var x = document.getElementById("linkList");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var myButton = document.getElementById("myBtn");
	if(myButton){
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        myButton.style.display = "block";
	    } else {
	        myButton.style.display = "none";
	    }
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
