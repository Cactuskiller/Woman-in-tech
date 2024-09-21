var buttons = document.getElementsByClassName("section");
var i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var nextEl = this.nextElementSibling; // The section-part after the button
    if (nextEl.style.maxHeight) {
      nextEl.style.maxHeight = null; // Collapse the section
    } else {
      nextEl.style.maxHeight = nextEl.scrollHeight + "px"; // Expand the section
    }
  });
}

 // Total number of lessons (in this case, 20)
 const totalLessons = 20;

 // Get all checkboxes and the progress text element
 const checkboxes = document.querySelectorAll('.progress-checkbox');
 const progressText = document.getElementById('progress-text');

 // Function to update progress
 function updateProgress() {
   // Count the number of checked checkboxes
   const completedLessons = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
   
   // Update the text content of the h3 element
   progressText.innerHTML = `<i class="fa-solid fa-crown"></i> &nbsp;Your progress: ${completedLessons} out of ${totalLessons} completed`;
 }

 // Add event listener to all checkboxes
 checkboxes.forEach(checkbox => {
   checkbox.addEventListener('change', updateProgress);
 });

 // Initial call to set progress (in case any are pre-checked)
 updateProgress();