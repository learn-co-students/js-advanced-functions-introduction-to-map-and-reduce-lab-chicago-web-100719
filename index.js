// Your code here
function mapToNegativize(array){
    let x = []
    for (let i = 0; i < array.length; i++){
        x.push(-1 * array[i])
    }
    return x
}

function mapToNoChange(array){
    let x = []
    for (let i=0; i<array.length; i++){
        x.push(array[i])
    }
    return x
}

function mapToDouble(array){
    let x = []
    for (let i = 0; i < array.length; i++){
        x.push(2 * array[i])
    }
    return x
}

function mapToSquare(array){
    let x = []
    for (let i = 0; i < array.length; i++){
        x.push(array[i] * array[i])
    }
    return x
}

function reduceToTotal(array, start = 0){
    let total = start
    for (let i=0; i<array.length; i++){
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array){
    for (let i=0; i<array.length; i++){
        if (!array[i])
        return false
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i=0; i<array.length; i++){
        if (array[i])
        return true
    }
    return false
}