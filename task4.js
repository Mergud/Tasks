var currentSum = "10";
function sum() {
  console.log(currentSum);
  if(currentSum=="10")
  {
        currentSum = "100";
        return "10";
  }
  else if(currentSum=="100")
  {
        currentSum = "1000";
        return "100";
  }
  else if(currentSum=="1000")
  {
        return currentSum;
  }
}
console.log(sum() === "10"  && sum()==="100" && sum()==="1000");