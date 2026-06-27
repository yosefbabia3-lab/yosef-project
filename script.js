const boxes = document.querySelectorAll("i");

const sections = [
  document.querySelector(".services-tools"),
  document.querySelector(".services-truck"),
  document.querySelector(".services-headset"),
  document.querySelector(".services-credit-card"),
  document.querySelector(".services-music"),
  document.querySelector(".services-gift"),
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    const isActive = box.classList.contains("active");

    boxes.forEach((b) => b.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    if (!isActive) {
      box.classList.add("active");
      sections[index].classList.add("active");
    }
  });
});

document.querySelector('input[type="color"]').value = "#ff0000";

const input = document.querySelector(".services-tools form input");
const btn = document.querySelector(".services-tools .div button");

btn.addEventListener("click", () => {
  switch (input.value) {
    case "#ffffff":
      input.value = "#000000";
      break;
    case "#0000ff":
      input.value = "#ff0000";
      break;
    default:
      input.value = "#0000ff";
  }
});

count = 0;
function update() {
  document.getElementById("counter").textContent = count;
}

function a() {
  count++;
  update();
}

function b() {
  count = 0;
  update();
}

function c() {
  count--;
  update();
}

const circle = document.getElementById("circle");

let mouseX = 0;
let mouseY = 0;

let x = 0;
let y = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const target = document.elementFromPoint(mouseX, mouseY);

  const isInteractive =
    target &&
    target.closest(
      "a,button,input,i,textarea,label,img,video,span,p,h1,h2,h3,h4",
    );

  circle.style.transform = isInteractive
    ? "translate(-50%, -50%) scale(0)"
    : "translate(-50%, -50%) scale(1)";
});

function animate() {
  x += (mouseX - x) * 0.1;
  y += (mouseY - y) * 0.1;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  requestAnimationFrame(animate);
}

animate();
