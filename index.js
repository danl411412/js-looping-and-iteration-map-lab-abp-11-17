// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(x) {
    return x.toLowerCase();
  })
}

function nameToAttributes(arr) {
  return arr.map(function(fullName) {
    let spaceIndex = fullName.indexOf(" ");
    console.log(spaceIndex);
    console.log( Object.assign({}, {firstName: fullName.slice(0, spaceIndex)}, {lastName: fullName.slice(spaceIndex+1)}) )
  })
}
