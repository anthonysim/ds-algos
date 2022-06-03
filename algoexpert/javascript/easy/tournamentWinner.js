function tournamentWinner(competitions, res) {
  const hash = {};
  let i = 0;

  for (let comp in competitions) {
    let homeTeam = competitions[comp][0];
    let awayTeam = competitions[comp][1];

    if (!(homeTeam in hash)) {
      hash[homeTeam] = 0;
    }

    if (!(awayTeam in hash)) {
      hash[awayTeam] = 0;
    }

    if (res[i] !== 0) {
      hash[homeTeam] += 1;
    } else {
      hash[awayTeam] += 1;
    }
    i += 1;
  }
  return Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
}
