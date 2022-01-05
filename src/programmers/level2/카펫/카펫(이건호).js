function solution(brown, yellow) {
  var answer = [];

  const yellowCombination = [];

  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      yellowCombination.push([i, yellow / i]);
    }
  }

  yellowCombination.forEach((p) => {
    if (p[0] * p[1] + 2 * (p[0] + p[1]) + 4 === yellow + brown) {
      answer.push(...p.map( o => o + 2).sort((a, b) => b - a));
    }
  });

  return answer;
}
