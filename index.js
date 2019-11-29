// Your code here
const mapToNegativize = array => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * -1)
    }
    return newArray
}

const mapToNoChange = array => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}

const mapToDouble = array => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2)
    }
    return newArray
}

const mapToSquare = array => {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * array[i])
    }
    return newArray
}


const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let total = startingPoint
    for (let i = 0; i< sourceArray.length; i++) {
        total += sourceArray[i]
    }
    return total

}

const reduceToAllTrue = sourceArray => {
    for (let i=0; i < sourceArray.length; i++) {
        if(!sourceArray[i]) return false
    }
    return true
}

const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i< sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}























