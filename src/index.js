function surveyQuestions() {
  let gaming = prompt("Have you ever played video games? Yes or No");
  gaming = gaming.toLowerCase();
  gaming = gaming.replace("yes", "Yes");
  if (gaming === "Yes") {
    alert("Awesome, glad you got tried it out");
  }
  let console = prompt("Have you ever owned a gaming console?");
  console = console.replace("yes", "Yes");
  if (console === "Yes") {
    alert("Thank you for being a gamer and hope you continue to enjoy gaming!");
  } else {
    alert("😥 ohh... It's ok you're still awesome. ");
  }
  let character = prompt(
    "Ok, last question. If you had to chose a favorite gaming character, who would it be?"
  );
  {
    alert(
      "Oh wow " +
        character +
        " is my favorite too! Thank you for taking this survey."
    );
  }
}
let surveyButton = document.querySelector("#surveyButton");
surveyButton.addEventListener("click", surveyQuestions);
