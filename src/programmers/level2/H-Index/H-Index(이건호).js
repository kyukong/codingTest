function solution(citations) {
  var answer = 0;
  
  const max = Math.max(...citations)
  
  for(let i=max; i>0; i--) {
      if(citations.filter(n => n >= i).length >= i) {
          answer = i;
          break;
      }
  }
  return answer;
}