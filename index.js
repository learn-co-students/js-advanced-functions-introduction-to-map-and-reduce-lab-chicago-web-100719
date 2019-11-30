function mapToNegativize(sourceArray) {
    let negArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        negArray.push(sourceArray[i] * -1)
    }
    return negArray
}

function mapToNoChange(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let doubleArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        doubleArr.push(sourceArray[i] *2)
    }
    return doubleArr
}

function mapToSquare(sourceArray) {
    let squareArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        squareArr.push(sourceArray[i] **2)
    }
    return squareArr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    for (let i = 0; i < sourceArray.length; i++) {
        startingPoint = startingPoint + sourceArray[i]
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
        return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
    }  
    return false 
}