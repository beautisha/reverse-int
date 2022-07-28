module.exports = function reverse (n) {
  let arr = Array.from(String(n));
  if (arr[0] == '-') {
    arr.splice(0,1);
  }
  if (arr[arr.length-1] == 0) {
    arr.splice(arr.length-1, 1);
  }
  arr = arr.reverse();
  return (Number(arr.toString().replaceAll(',','')));
}
