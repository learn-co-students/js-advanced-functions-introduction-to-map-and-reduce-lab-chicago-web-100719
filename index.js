// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(element => {
        return element * -1
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let arr = []
    for(let i = 0; i < sourceArray.length; i++) {
    arr.push(2 * sourceArray[i])
    }
    return arr
}

function mapToSquare(sourceArray) {
    return sourceArray.map(element => {
        return element * element
    })
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(src){
    for (let i = 0; i < src.length; i++ ) {
        if (!src[i]) return false
      }
      return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
}