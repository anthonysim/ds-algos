function classPhotos(red, blue) {
  red.sort((a, b) => b - a);
  blue.sort((a, b) => b - a);

  const firstRow = red[0] < blue[0] ? 'RED' : 'BLUE';

  for (let i = 0; i < red.length; i++) {
    let redHeight = red[i];
    let blueHeight = blue[i];

    if (firstRow === 'RED') {
      if (redHeight >= blueHeight) return false;
    }

    if (firstRow === 'BLUE') {
      if (blueHeight >= redHeight) return false;
    }
  }
  return true;
}