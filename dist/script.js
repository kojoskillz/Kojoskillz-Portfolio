
const typed = new Typed('#element', {
    strings: ['Software Engineer', 'Technical Writer'],
    typeSpeed: 115,
    backSpeed:20,
    loop:true,  

});


// scroll_to_top
    function scrollToTop() {
        window.scrollTo(0,0);   
    }
 

// form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
   
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
   
    // Perform form validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }
   
    // Perform form submission
    alert("Form shot successfully");
   
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });


  
  // loader
let loader;
function loadNow(opacity){
  if(opacity <= 0) {
    displayContent();
    }
    else {
      loader.style.opacity = opacity;
      window.setTimeout(function(){
        loadNow(opacity - 0.5)
      },100);
    }
  }

  function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  document.addEventListener("DOMContentLoaded",function() {
    loader = document.getElementById('loader');
    loadNow(1);
  });



