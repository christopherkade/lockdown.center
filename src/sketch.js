export default function sketch(p) {
  let x;
  let y;

  let xspeed;
  let yspeed;

  let icon;

  p.preload = () => {
    icon = p.loadImage('https://uci.edu/coronavirus/img/icon-washands.png');
    icon.resize(150, 0)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    x = p.random(p.width);
    y = p.random(p.height);
    xspeed = 5;
    yspeed = 5;
  }

  p.draw = () => {
    icon.resize(150, 0)
    p.clear()
    p.image(icon, x, y);

    x = x + xspeed;
    y = y + yspeed;

    if (x + icon.width >= p.width) {
      xspeed = -xspeed;
      x = p.width - icon.width;
    } else if (x <= 0) {
      xspeed = -xspeed;
      x = 0;
    }

    if (y + icon.height >= p.height) {
      yspeed = -yspeed;
      y = p.height - icon.height;
    } else if (y <= 0) {
      yspeed = -yspeed;
      y = 0;
    }
  }
}