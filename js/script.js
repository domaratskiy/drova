var acc = document.getElementsByClassName("accordion");
var i;

var content = window.getComputedStyle(document.querySelector('.panel'),':before')

console.log(content);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;





    if (panel.style.display === "none") {
      panel.style.display = 'block';

    } else {
      panel.style.display = "none";
    }
  });
}


