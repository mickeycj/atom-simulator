class Electron {

  constructor(shell, angle, electronDiameter) {
    this.shellX = shell.x;
    this.shellY = shell.y;
    this.shellRadius = shell.diameter / 2;
    this.shellSpeedOffset = shell.level - 0.25;

    this.angle = angle;

    this.electronDiameter = electronDiameter;
  }

  draw(sketch) {
    const x = this.shellX + this.shellRadius * sketch.cos(this.angle);
    const y = this.shellY + this.shellRadius * sketch.sin(this.angle);

    sketch.noStroke();
    sketch.fill(COLORS.GRAY);
    sketch.ellipse(x, y, this.electronDiameter);

    this.angle -= ELECTRON.SPEED / this.shellSpeedOffset;
  }

}
