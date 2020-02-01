function mapToNegativize(arr) {
  let newArr = []
  for (let x = 0; arr.length > x; x++) {
    newArr.push(arr[x] * -1)
  }
  return newArr
}

function mapToNoChange(arr) {
  let newArr = []
  for (let x = 0; arr.length > x; x++) {
    newArr.push(arr[x])
  }
  return newArr
}

function mapToDouble(arr) {
  let newArr = []
  for (let x = 0; arr.length > x; x++) {
    newArr.push(arr[x] * 2)
  }
  return newArr
}

function mapToSquare(arr) {
  let newArr = []
  for (let x = 0; arr.length > x; x++) {
    newArr.push(arr[x] ** 2)
  }
  return newArr
}

function reduceToTotal(arr, startingNum=0) {
  let total = startingNum
  for (let x = 0; arr.length > x; x++) {
    total += arr[x]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let x = 0; arr.length > x; x++) {
    if (!arr[x])
      return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let x = 0; arr.length > x; x++) {
    if (arr[x])
      return true
  }
  return false
}