function move_balls(movements) {
  const bodyrect = document.body.getBoundingClientRect();
  const balls = document.getElementsByClassName("ball");
  for (let i = 0; i < balls.length; i++) {
    let ball = document.getElementById(balls[i].id);
    let ballrect = ball.getBoundingClientRect();
    if (ballrect.left < bodyrect.left || ballrect.right > bodyrect.right) {
      movements[i][0] = -movements[i][0];
    }
    if (ballrect.top < bodyrect.top || ballrect.bottom > bodyrect.bottom) {
      movements[i][1] = -movements[i][1];
    }
    ball.style.left = `${ballrect.left + movements[i][0]}px`;
    ball.style.top = `${ballrect.top + movements[i][1]}px`;
  }
  setTimeout(move_balls, 5, movements);
}

function change_bg(colors) {
  colorstring = "radial-gradient(";
  for (let i = 0; i < colors.length; i++) {
    colorstring += colors[i] + ", ";
  }
  document.body.style.backgroundImage =
    colorstring.substr(0, colorstring.length - 2) + ")";
  colors.unshift(colors.pop());
  setTimeout(change_bg, 30, colors);
}

window.addEventListener("load", () => {
  for (let i = 1; i < 50; i++) {
    const ball = document.createElement("div");
    ball.setAttribute("id", `ball${i}`);
    ball.setAttribute("class", "ball");
    document.body.appendChild(ball);
  }
  const movements = [];
  for (let i = 0; i < 7; i++) {
    for (let x = 0; x < 7; x++) {
      movements.push([i - 3, x - 3]);
    }
  }
  move_balls(movements);
  const colors = [];
  for (let i = 0; i < 61; i++) {
    colors.push(`hsl(${i * 6}, 100%, 50%)`);
  }
  change_bg(colors);
});
