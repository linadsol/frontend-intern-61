export default (goal, takeMoney = true) => {
  if (takeMoney === true) {
    switch (goal) {
      case 1:
        return 100;
      case 2:
        return 200;
      case 3:
        return 300;
      case 4:
        return 500;
      case 5:
        return 1000;
      case 6:
        return 2000;
      case 7:
        return 4000;
      case 8:
        return 8000;
      case 9:
        return 16000;
      case 10:
        return 32000;
      case 11:
        return 64000;
      case 12:
        return 125000;
      case 13:
        return 250000;
      case 14:
        return 500000;
      case 15:
        return 1000000;
      default:
        return 0;
    }
  }
  if (takeMoney === false) {
    if (goal < 5) {
      return 0;
    } if (goal < 10) {
      return 1000;
    } if (goal < 15) {
      return 32000;
    }
  }
  return 0;
};
