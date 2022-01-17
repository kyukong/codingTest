function solution(n, lost, reserve) {
  var answer = 0;
  const allStudents = [ ...new Array(n).keys() ].map( o => o + 1)
  const pureLost = lost.filter( o => reserve.indexOf(o) < 0);
  const pureReserve = reserve.filter( o => lost.indexOf(o) < 0);
  /**
   * @description lost, reserve 중 겹치는 게 있을 수 있기 때문에 pureLost(순수하게 체육복이 없는 사람)과 pureReserve(여별의 체육복이 있는 사람)으로 나눔
   */
  
  const targetReserve = pureReserve.filter( o => pureLost.indexOf(o) < 0 && (pureLost.indexOf(o - 1) > -1 || pureLost.indexOf(o + 1) > -1))
  
  answer = n - pureLost.length + (pureLost.length - targetReserve.length > 0 ? targetReserve.length : pureLost.length )
  
  return answer;
}