// loader
var loader = document.getElementById("pre-loader");

window.addEventListener ("load", function(){
    loader.style.display = "none";
})


// SCROLL BUTTON
  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  // OWL CAROUSEL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})


// form validation 

// Disable form submissions if there are invalid fields
function validation() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var sub = document.getElementById("sub").value;
  var mess = document.getElementById("mess").value;



  if (user == "") {
      document.getElementById("username").innerHTML = "username is required";
      return false;
  }

  if (email == "") {
      document.getElementById("emailaddress").innerHTML = "Email is required";
      return false;
  }

  if (sub == "") {
      document.getElementById("subject").innerHTML = "Subject is required";
      return false;
  }

  if (mess == "") {
      document.getElementById("message").innerHTML = "Message is required";
      return false;
  }

  else {
      document.write("<h1>Congratulation !</h1>");
  }

}


