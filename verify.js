const answerarray = ["b", "c", "a", "b"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const submitans = document.querySelector(".submitans");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const usersans = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  usersans.forEach((value, index) => {
    if (value === answerarray[index]) {
      score += 25;
    }
  });

  result.querySelector("span").textContent = `${score}%`;
  submitans.classList.add("d-none");
  result.classList.remove("d-none");
});
