const answerarray = ["b", "c", "a", "b"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const submitans = document.querySelector(".submitans");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const user = document.querySelector("#username").value.split(" ")[0];
  const User = user[0].toUpperCase() + user.slice(1);
  const usersans = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  usersans.forEach((value, index) => {
    if (value === answerarray[index]) {
      score += 25;
    }
  });

  result.querySelector(".span1").textContent = `${User}, you are`;
  submitans.classList.add("d-none");
  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector(".span2").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  setTimeout(() => {
    scrollTo(0, 0);
  }, 4000);
});
