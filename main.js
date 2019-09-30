let iGetTheJoke = true;
let havingFun = true;
let learning = true;
let killingIt = learning && havingFun;


function returnFalse() {
// learning && havingFun == killingIt;
return false;
 
}

function isOpposite(condition) {
  return !condition;
  // return !killingIt;
}

function both(condition1, condition2) {
  // return true || false;
  // return if !condition1;
  return condition1 && condition2;
  
}

function either(condition1, condition2) {
  return condition1 || condition2;

}

function neither(condition1, condition2) {
  return !condition1 && !condition2  

}

function itsComplicated(condition1, condition2, condition3) {
  return !condition1 || condition2 && condition3

}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  neither,
  itsComplicated,
}