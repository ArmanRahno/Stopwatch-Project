const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let [cs, s, m, h] = [0, 0, 0, 0];
let flow;

const intCheck = (num) => {
   if (num < 10) {
      return (num = `0${num}`);
   } else {
      return num;
   }
};

const displayTimer = () => {
   (cs = parseInt(cs)), (s = parseInt(s)), (m = parseInt(m)), (h = parseInt(h));

   if (cs === 100) {
      cs = 0;
      s++;
   }

   if (s === 60) {
      s = 0;
      m++;
   }

   if (m === 60) {
      m = 0;
      h++;
   }

   (cs = intCheck(cs)), (s = intCheck(s)), (m = intCheck(m)), (h = intCheck(h));

   timer.innerHTML = `${h}:${m}:${s}.${cs}`;
};

const remResHandler = () => {
   stopBtn.setAttribute("disabled", "");
   startBtn.removeAttribute("disabled");
   clearInterval(flow);
};

startBtn.addEventListener("click", () => {
   startBtn.setAttribute("disabled", "");
   stopBtn.removeAttribute("disabled");
   flow = setInterval(() => {
      cs++;
      displayTimer();
   }, 10);
});

stopBtn.addEventListener("click", () => {
   remResHandler();
});

resetBtn.addEventListener("click", () => {
   remResHandler();
   [cs, s, m, h] = [0, 0, 0, 0];
   timer.innerHTML = "00:00:00";
});
