const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls'); 
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // Changed to select the single main-content element
  
function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }
}

// Section click active class
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // Remove 'active' class from all buttons
        sectBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        e.target.classList.add('active');
        
        // Hide all sections
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        // Show the selected section
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// script.js
// set up text to print, each item in array is new line
var aText = new Array(
    "NISMA'S PORTFOLIO", 
    "welcome to my website, hope so you have a great time XD ^|^"
    
    );
    var iSpeed = 150; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("message");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
document.getElementById('tablet').addEventListener('click', function() {
    this.classList.toggle('zoomed');
    typewriter()
});




PageTransitions();



