function findMatches(data, match) {
  if (Object.keys(match).length === 0) return data;

  return data.filter((item) =>
    Object.entries(match).every(([key, value]) => item[key] === value)
  );
}
