var buttons = document.getElementsByClassName("section");
var i;

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var nextEl = this.nextElementSibling; // The section-part after the button
    if (nextEl.style.maxHeight) {
      nextEl.style.maxHeight = null; // Collapse the section
    } else {
      nextEl.style.maxHeight = nextEl.scrollHeight + "px"; // Expand the section
    }
  });
}

const totalLessons = 20;

const checkboxes = document.querySelectorAll(".progress-checkbox");
const progressText = document.getElementById("progress-text");

function updateProgress() {
  const completedLessons = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  ).length;

  progressText.innerHTML = `<i class="fa-solid fa-crown"></i> &nbsp;Your progress: ${completedLessons} out of ${totalLessons} completed`;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

updateProgress();

document
  .getElementById("download-button")
  .addEventListener("click", function () {
    // Trigger a click on the hidden download link
    document.getElementById("download-link").click();
  });
