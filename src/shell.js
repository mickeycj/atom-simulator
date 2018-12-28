class Shell {

  constructor(atom, level, numElectrons) {
    this.x = atom.x;
    this.y = atom.y;
    this.diameter = atom.diameter + SHELL_OFFSET * level;
    this.level = level;
    this.electronDiameter = atom.diameter / ELECTRON.RATIO;
    
    this.electrons = [];
    for (let angle = -90; angle > -450; angle -= 360 / numElectrons) {
      this.electrons.push(new Electron(this, angle, this.electronDiameter));
    }
  }

  draw(sketch) {
    sketch.stroke(COLORS.GRAY);
    sketch.noFill();
    sketch.ellipse(this.x, this.y, this.diameter);

    this.electrons.forEach((electron) => electron.draw(sketch));
  }

}
