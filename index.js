//MAP-LIKE FUNCTIONS
function mapToNegativize(sourceArray){
  let retArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    const negNum = sourceArray[i] * -1
    retArr.push(negNum)
  }
  return retArr
}

function mapToNoChange(sourceArray){
  let retArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    const num = sourceArray[i]
    retArr.push(num)
  }
  return retArr
}

function mapToDouble(sourceArray){
  let retArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    const doubleNum = sourceArray[i] * 2
    retArr.push(doubleNum)
  }
  return retArr
}

function mapToSquare(sourceArray){
  let retArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    const squareNum = sourceArray[i] ** 2
    retArr.push(squareNum)
  }
  return retArr
}

//REDUCE-LIKE FUNCTIONS

function reduceToTotal(sourceArray, startingPoint = 0){
  let retVal = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    retVal += sourceArray[i]
  }
  return retVal
}

function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]){
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]){
      return true
    }
  }
  return false
}
