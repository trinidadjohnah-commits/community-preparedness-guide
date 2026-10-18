const checkboxes = Array.from(document.querySelectorAll(".task-check"));
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("checklist-message");

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  const total = checkboxes.length;
  const percent = total === 0 ? 0 : (completed / total) * 100;

  progressText.textContent = `${completed} of ${total} completed`;
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute("aria-valuemax", String(total));
  progressBar.setAttribute("aria-valuenow", String(completed));

  message.textContent = completed === total
    ? "Great work! You have checked every item in this demonstration checklist."
    : "";
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateProgress);
});

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  updateProgress();
  message.textContent = "Checklist reset.";
});

updateProgress();