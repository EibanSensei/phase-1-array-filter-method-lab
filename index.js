// Code your solution here
function findMatching (array, string) {
    return array.filter(value => value.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch (array, string) {
    return array.filter(value => value[0].toLowerCase() === string[0].toLowerCase())
}

function matchName (array, string) {
    return array.filter(element => element.name.toLowerCase() === string.toLowerCase())
}