function solution(numbers) {
  var answer = 0;

  const getPermutation = function permutation(arr, length) {
    const result = [];
    if(length === 1) return arr.map(a => [a])
    arr.forEach((e, idx, origin) => {
      const fixer = e;
      const restArr = origin.filter((e, i) => i !== idx);
      const permutationArr = permutation(restArr, length - 1);
      const combineFix = permutationArr.map(o => [fixer, ...o])
      result.push(...combineFix);
    });

    return result;
  };
    
  const elements = numbers.split('');
  const permutation = [];

  for (let i = elements.length; i >= 1; i--) {
    permutation.push(...getPermutation(elements, i));
  }

  const validNumbers = [...new Set(permutation.map(m => m.join("")).filter(f => f[0] !== "0"))]
  
  answer = validNumbers.filter(n => { // prime number 구하기
      const number = Number(n);
      if(number === 1) return false;
      for(let i=2; i*i<=n; i++) {
          if(number % i === 0) return false;
      }
      return true;
  }).length
  
    
  return answer;
}