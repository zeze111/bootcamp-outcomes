exports.default = {
  aritGeo:(args) => {
    const difference = args[2] - args[1];
    const divide = args[2] / args[1];

    for (const i = 0; i < args.length - 1; i++) {
      if (typeof args[i] !== 'number') {
        return 'please input an array of numbers';
      } else {
        if (args[0] === 0) {
          return '0 cannot start your array';
        }
        if (args[i + 1] / args[i] === divide) {
          return 'geometric';
        }
        if (args[i + 1] - args[i] === difference) {
          return 'arithmetic';
        }
        else
          return '-1';
      }
    }

  }
}
