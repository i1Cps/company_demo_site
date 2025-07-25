const NUM_FRAMES = 33;
const humanoidImgs = [];
const quadrupedImgs = [];

function preloadAgentImages() {
  for (let i = 1; i < NUM_FRAMES + 1; i++) {
    const hImg = new Image();
    hImg.src = `./static/images/humanoid/humanoid_${i}.png`;
    hImg.style.display = "block";
    hImg.style.width = "100%";
    hImg.style.height = "auto";
    hImg.style.maxWidth = "400px";
    humanoidImgs.push(hImg);

    const qImg = new Image();
    qImg.src = `./static/images/quadruped/quadruped_${i}.png`;
    qImg.style.display = "block";
    qImg.style.width = "100%";
    qImg.style.height = "auto";
    qImg.style.maxWidth = "400px";
    quadrupedImgs.push(qImg);
  }
}

function initAgentSpinners() {
  const hViewer = document.getElementById("humanoid-viewer");
  const qViewer = document.getElementById("quadruped-viewer");

  if (!hViewer || !qViewer) return;

  hViewer.appendChild(humanoidImgs[0]);
  qViewer.appendChild(quadrupedImgs[0]);

  document.getElementById("slider-humanoid").addEventListener("input", (e) => {
    hViewer.innerHTML = "";
    hViewer.appendChild(humanoidImgs[e.target.value]);
  });

  document.getElementById("slider-quadruped").addEventListener("input", (e) => {
    qViewer.innerHTML = "";
    qViewer.appendChild(quadrupedImgs[e.target.value]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  preloadAgentImages();
  initAgentSpinners();
});
