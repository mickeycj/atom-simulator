class Atom {

  constructor(x, y, diameter, numElectrons) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    
    this.shells = [];
    this.getElectronConfiguration(numElectrons).forEach((numElectrons, index) => {
      this.shells.push(new Shell(this, index + 1, numElectrons));
    });
  }
  
  getElectronConfiguration(numElectrons) {
    let orbitals = '';
    for (let i = 0; numElectrons > 0 && i < ORBITALS.length; i++) {
      const { name, size } = ORBITALS[i];
      numElectrons -= size;
      const numInOrbital = (numElectrons < 0) ? (size - Math.abs(numElectrons)) : size;
      orbitals = orbitals.concat(name + numInOrbital + ' ');
    }
    orbitals = orbitals.substring(0, orbitals.length - 1);

    const configuration = [];
    orbitals.split(' ').forEach((orbital) => {
      orbital = orbital.split(/[a-z]/g);
      const level = orbital[0] - 1;
      const numElectrons = parseInt(orbital[1]);
      if (configuration[level]) {
        configuration[level] += numElectrons;
      } else {
        configuration[level] = numElectrons;
      }
    });

    return configuration;
  }

  draw(sketch) {
    sketch.noStroke();
    sketch.fill(COLORS.GRAY);
    sketch.ellipse(this.x, this.y, this.diameter);

    this.shells.forEach((shell) => shell.draw(sketch));
  }

}
