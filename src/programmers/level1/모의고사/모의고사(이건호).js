function solution(answers) {
  var answer = [];
  
  const supo1Answers = new Array(answers.length).fill(1).map((o, i) => (o + i) % 5 || 5);
  const supo2Answers = new Array(answers.length).fill(2).map((o, i) => {
      if((i + 1) % 2 === 1) return 2;
      if(i % 8 === 5) return 4;
      if(i % 8 === 7) return 5;
      return i % 8;
  })
  const supo3Answers = new Array(answers.length).fill(1).map((o, i) => {
      if(i % 10 <= 1) return 3;
      else if(i % 10 <= 3) return 1;
      else if(i % 10 <= 5) return 2;
      return Math.max(Math.floor(i%10 / 2) + 1, (i % 10 * 0.1) / 2  * 10)
  });
  
  const matches = [supo1Answers, supo2Answers, supo3Answers].map(sa => sa.filter( (o, i) => answers[i] === o).length);
  matches.forEach((m, i) => {
      if(m === Math.max(...matches)) {
          answer.push(i+1)
      }
  })
  answer = answer.sort();
  
  return answer;
}

/**
 * console.log(solution([1, 2, 3, 4, 5]))
 * @return [1]
 */
/**
 * console.log(solution([1, 3, 2, 4, 2]))
 * @return [1, 2, 3]
 */