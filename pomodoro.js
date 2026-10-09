// ポモドーロタイマー：作業 25 分、休憩 5 分
const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

let workRemaining = WORK_SECONDS;
let breakRemaining = BREAK_SECONDS;
let timerId = null;

function format(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function render() {
  document.getElementById("work-display").textContent = format(workRemaining);
  document.getElementById("break-display").textContent = format(breakRemaining);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function startWork() {
  stopTimer();
  timerId = setInterval(() => {
    if (workRemaining > 0) {
      workRemaining -= 1;
      render();
    }
  }, 1000);
}

function startBreak() {
  stopTimer();
  breakRemaining = BREAK_SECONDS;
  render();
  timerId = setInterval(() => {
    if (breakRemaining > 0) {
      breakRemaining -= 1;
      render();
    }
  }, 1000);
}

document.getElementById("start-work").addEventListener("click", startWork);
document.getElementById("start-break").addEventListener("click", startBreak);
render();
