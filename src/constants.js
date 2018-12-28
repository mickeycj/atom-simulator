const SKETCH_NAME = 'sketch';
const FRAMERATE = 60;
const CANVAS_DIMEN = {
  WIDTH: 690,
  HEIGHT: 690
};

const COLORS = {
  WHITE: '#FFFFFF',
  GRAY: '#888888'
};

const ORBITALS = [
  {
    name: '1s',
    size: 2
  },
  {
    name: '2s',
    size: 2
  },
  {
    name: '2p',
    size: 6
  },
  {
    name: '3s',
    size: 2
  },
  {
    name: '3p',
    size: 6
  },
  {
    name: '4s',
    size: 2
  },
  {
    name: '3d',
    size: 10
  },
  {
    name: '4p',
    size: 6
  },
  {
    name: '5s',
    size: 2
  },
  {
    name: '4d',
    size: 10
  },
  {
    name: '5p',
    size: 6
  },
  {
    name: '6s',
    size: 2
  },
  {
    name: '4f',
    size: 14
  },
  {
    name: '5d',
    size: 10
  },
  {
    name: '6p',
    size: 6
  },
  {
    name: '7s',
    size: 2
  },
  {
    name: '5f',
    size: 14
  },
  {
    name: '6d',
    size: 10
  },
  {
    name: '7p',
    size: 6
  }
];
const SHELL_OFFSET = CANVAS_DIMEN.WIDTH / 23;
const ELECTRON = {
  RATIO: 10,
  SPEED: 2.5
};
