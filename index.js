function move_ball(movement, ballid) {
  bodyrect = document.body.getBoundingClientRect();
  ball = document.getElementById(ballid);
  ballrect = ball.getBoundingClientRect();
  if (ballrect.left < bodyrect.left || ballrect.right > bodyrect.right) {
    movement[0] = -movement[0];
  }
  if (ballrect.top < bodyrect.top || ballrect.bottom > bodyrect.bottom) {
    movement[1] = -movement[1];
  }
  ball.style.left = `${ballrect.left + movement[0]}px`;
  ball.style.top = `${ballrect.top + movement[1]}px`;
  setTimeout(move_ball, 2, movement, ballid);
}

function change_bg(colors) {
  colors.unshift(colors.pop());
  document.body.style.backgroundImage =
    "linear-gradient(to right, " +
    colors[0] +
    ", " +
    colors[1] +
    ", " +
    colors[2] +
    ", " +
    colors[3] +
    ", " +
    colors[4] +
    ", " +
    colors[5];
  +")";
  setTimeout(change_bg, 2000, colors);
}

window.addEventListener("load", () => {
  for (let i = 1; i < 51; i++) {
    const ball = document.createElement("div");
    ball.setAttribute("id", `ball${i}`);
    ball.setAttribute("class", "ball");
    document.body.appendChild(ball);
  }
  const balls = document.getElementsByClassName("ball");
  let count = 0;
  for (let i = 0; i < 7; i++) {
    for (let x = 0; x < 7; x++) {
      count++;
      move_ball([i - 3, x - 3], balls[count].id);
      console.log(count);
    }
  }
});
