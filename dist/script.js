// animate_on_scroll
const typed = new Typed('#element', {
    strings: ['Front-End Developer', 'Technical Writer'],
    typeSpeed: 90,
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