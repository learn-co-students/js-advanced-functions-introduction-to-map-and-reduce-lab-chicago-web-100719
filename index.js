// Your code here

function mapToNegativize(sourceArray) {
    let newArray = []
    for (i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}