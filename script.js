document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  const answers = {
    q1: "a", // jaweb es7i7 lel question 1
    q2: "b", // jaweb es7i7 lel question 2
    q3: "b", // jaweb es7i7 lel question 3
    q4: "c", // jaweb es7i7 lel question 4
    q5: "b", // jaweb es7i7 lel question 5
    q6: "b", // jaweb es7i7 lel question 6
    q7: "a", // jaweb es7i7 lel question 7
    q8: "c", // jaweb es7i7 lel question 8
    q9: "b", // jaweb es7i7 lel question 9
    q10: "b", // jaweb es7i7 lel question 10
  };

  for (let question in answers) {
    const selected = document.querySelector(`input[name=${question}]:checked`);
    if (selected && selected.value === answers[question]) {
      score++;
    }
  }

  document.getElementById("result").innerText = `Your score: ${score}/${Object.keys(answers).length}`;
});
