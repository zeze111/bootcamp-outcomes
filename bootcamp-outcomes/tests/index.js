'use strict';

module.exports = {
  aritGeo: (args) => {
    if (args[0] === 0) {
      return 0;
    } else if (args.length <= 1) {
      return 0;
    }

    const difference = args[1] - args[0];
    const divide = args[1] / args[0];
    let arithmet = true;
    let geomet = true;

    for (let i = 0; i < args.length - 1; i++) {
      if (typeof args[i] !== 'number') {
        return 'please input an array of numbers';
      } else {
        if (args[i + 1] / args[i] !== divide) {
          geomet = false;
        }
        if (args[i + 1] - args[i] !== difference) {
          arithmet = false;
        }
      }
    }

    if (geomet) {
      return 'geometric';
    }
    else if (arithmet) {
      return 'arithmetic';
    }
    else {
      return -1;
    }
  }
}
