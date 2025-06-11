container.innerHTML = `
  <div class="question-box">
    ${q.image ? `<img src="${q.image}" alt=" 1" style="max-width:100%; margin-bottom:10px;" />` : ""}
    <div class="timer" id="timer">10</div>
    <h3>${q.text}</h3>
    <div class="options">
      ${q.options.map((opt, i) => `<button onclick="selectOption(this, ${i})">${opt}</button>`).join("")}
    </div>
    <button onclick="checkAnswer()">2</button>
  </div>
`;
