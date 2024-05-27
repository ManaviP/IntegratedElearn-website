document.querySelectorAll(".show-answer-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var answer = this.nextElementSibling;
    if (answer.style.display === "none") {
      answer.style.display = "block";
      this.textContent = "Hide Answer";
    } else {
      answer.style.display = "none";
      this.textContent = "Show Answer";
    }
  });
});

document.querySelectorAll(".like-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var likesCount = this.parentNode.querySelector(".likes-count");
    var currentLikes = parseInt(likesCount.textContent);
    likesCount.textContent = currentLikes + 1;
  });
});

document.querySelectorAll(".reply-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var replyInput = document.createElement("textarea");
    replyInput.placeholder = "Write your reply here...";
    this.parentNode.appendChild(replyInput);
  });
});
// JavaScript for Show Answer, Like, and Reply buttons remains the same as before.

// Event listener for new question form submission
document.getElementById("new-question-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get values from the form
  var newQuestion = document.getElementById("new-question").value;
  var newAnswer = document.getElementById("new-answer").value;

  // Create HTML elements for new question-answer pair
  var newQuestionDiv = document.createElement("div");
  newQuestionDiv.classList.add("question");

  var newQuestionHeading = document.createElement("h2");
  newQuestionHeading.textContent = newQuestion;

  var newAnswerDiv = document.createElement("div");
  newAnswerDiv.classList.add("answer");

  var answerParagraph = document.createElement("p");
  answerParagraph.textContent = newAnswer;

  // Append elements
  newAnswerDiv.appendChild(answerParagraph);
  newQuestionDiv.appendChild(newQuestionHeading);
  newQuestionDiv.appendChild(newAnswerDiv);
  main.appendChild(newQuestionDiv);

  // Clear the form fields
  document.getElementById("new-question").value = "";
  document.getElementById("new-answer").value = "";
});