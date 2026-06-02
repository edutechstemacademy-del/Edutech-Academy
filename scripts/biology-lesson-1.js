const answers = {
  q1: "B",
  q2: "C",
  q3: "C",
  q4: "B",
  q5: "A",
  q6: "D",
  q7: "B",
  q8: "C",
  q9: "C",
  q10: "C",
  q11: "C",
  q12: "D",
};

const explanations = {
  q1: "Blue and yellow macaws have feathers, which is an observable classification feature.",
  q2: "A dichotomous key gives two choices at each step.",
  q3: "Both the legume and bacteria benefit, so the relationship is mutualism.",
  q4: "Herbivores feed on producers, making them primary consumers.",
  q5: "This lesson focuses on plants, animals, and microorganisms.",
  q6: "Bacteria are living organisms, so they are a biotic factor.",
  q7: "The total is 50. Divide by 5 quadrats to get 10 per m2.",
  q8: "Pitfall traps collect ground-dwelling organisms, including nocturnal insects.",
  q9: "Light intensity affects plants directly, not animal population growth directly.",
  q10: "Invasive species often spread because natural predators are absent.",
  q11: "More than six legs and no large claw identifies the centipede in the key.",
  q12: "Use (36 x 45) / 6 = 270.",
};

function scrollToLessonHash() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  target?.scrollIntoView({ block: "start", behavior: "auto" });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scrollToLessonHash);
} else {
  scrollToLessonHash();
}

window.addEventListener("load", () => {
  window.setTimeout(scrollToLessonHash, 100);
});

document.querySelectorAll(".flashcard-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".flashcard");
    const isOpen = card.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const quiz = document.querySelector("#lessonQuiz");
const result = document.querySelector("#quizResult");
const reset = document.querySelector("#resetQuiz");

quiz?.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = quiz.querySelector(`[data-question="${questionId}"]`);
    const selected = quiz.querySelector(`input[name="${questionId}"]:checked`);
    const feedback = question.querySelector(".quiz-feedback");

    question.classList.remove("is-correct", "is-incorrect", "is-unanswered");

    if (!selected) {
      question.classList.add("is-unanswered");
      feedback.textContent = `No answer selected. Correct answer: ${answer}. ${explanations[questionId]}`;
      return;
    }

    if (selected.value === answer) {
      score += 1;
      question.classList.add("is-correct");
      feedback.textContent = `Correct. ${explanations[questionId]}`;
    } else {
      question.classList.add("is-incorrect");
      feedback.textContent = `Not quite. Correct answer: ${answer}. ${explanations[questionId]}`;
    }
  });

  result.textContent = `Your score: ${score} / 12`;
  result.focus();
});

reset?.addEventListener("click", () => {
  quiz.reset();
  document.querySelectorAll(".quiz-question").forEach((question) => {
    question.classList.remove("is-correct", "is-incorrect", "is-unanswered");
    question.querySelector(".quiz-feedback").textContent = "";
  });
  result.textContent = "";
});
